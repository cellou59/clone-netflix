import * as React from 'react'
// 🐶 'mocks' permet de simuler le backend netflix avec MSW,
// ne t'en preocupe pas pour le moment
import './mocks'
import * as authNetflix from './utils/authNetflixProvider'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import {AuthApp} from 'AuthApp'

import {UnauthApp} from 'UnauthApp'
import {clientAuth} from './utils/clientApi'
import {useFetchData} from './utils/hooks'
const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#E50914',
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
  const [authError, setAuthError] = React.useState(null)

  React.useEffect(() => {
    execute(getUserByToken())
  }, [execute])

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
    setData(null)
  }

  return (
    <ThemeProvider theme={theme}>
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
  )
}

export {App}
