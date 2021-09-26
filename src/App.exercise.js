import * as React from 'react'
import './mocks'
import * as authNetflix from './utils/authNetflixProvider'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {AuthApp} from 'AuthApp'
import {UnauthApp} from 'UnauthApp'
import {clientAuth} from './utils/clientApi'
import {useFetchData} from './utils/hooks'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import { QueryCache } from 'react-query'
// 🐶 importe 'AuthContext' pour wrapper 'AuthApp' et 'UnauthApp'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      refetchOnWindowFocus: false,
      retryDelay: 500,
      retry: (failureCount, error) => {
        if (error.status === 404) return false
        else if (error.status === 401) return false
        else if (failureCount > 3) return false
        else return true
      },
    },
    mutations: {
      useErrorBoundary: false,
      refetchOnWindowFocus: false,
      retryDelay: 500,
      retry: 1,
      // mutation options
    },
  },
})

const queryCache = new QueryCache({
  onError: error => {
    console.log(error)
  },
  onSuccess: data => {
    console.log(data)
  }
})

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#767676',
    },
    secondary: {
      main: '#E50914',
    },
  },
})

async function getUserByToken() {
  let user = null
  const token = await authNetflix.getToken()
  if (token) {
    const data = await clientAuth('me', {token})
    user = data.data.user
  }
  return user
}

function App() {
  const {data: authUser, execute, status, setData} = useFetchData()
  React.useEffect(() => {
    execute(getUserByToken())
  }, [execute])

  const [authError, setAuthError] = React.useState()
  const login = data =>
    authNetflix
      .login(data)
      .then(user => setData(user))
      .catch(err => setAuthError(err))
  const register = data =>
    authNetflix
      .register(data)
      .then(user => setData(user))
      .catch(err => setAuthError(err))
  const logout = () => {
    authNetflix.logout()
    queryCache.clear()
    setData(null)
  }
  // 🐶 créé objet contennant : authUser, authError, login, register, logout
  // il sera passé en 'props' 'value' de <AuthContext.Provider />
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
       {/* 🐶 wrappe 'Backdrop', 'AuthApp' 'UnauthApp' avec <AuthContext.Provider /> */}
        {status === 'fetching' ? (
          <Backdrop open={true}>
            <CircularProgress color="primary" />
          </Backdrop>
        ) : authUser ? (
          <AuthApp logout={logout} />
        ) : (
          <UnauthApp login={login} register={register} error={authError} />
        )}
      </ThemeProvider>
      {process.env.NODE_ENV === 'development' && (  <ReactQueryDevtools initialIsOpen={false} />)}
    </QueryClientProvider>
  )
}

export {App}