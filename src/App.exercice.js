import React, {Suspense} from 'react'
import './mocks'
import {useAuth} from './context/AuthContext'
import {AppProviders} from './context'

import LoadingFullScreen from './components/LoadingFullScreen'
const AuthApp = React.lazy(() => import(
  /* webpackPrefetch: true */
  './AuthApp'
))
const UnauthApp = React.lazy(() => import('./UnauthApp'))
// 📝 https://reactjs.org/docs/code-splitting.html#reactlazy

function App() {
  return (
    <AppProviders>
      <AppConsumer />
    </AppProviders>
  )
}

const AppConsumer = () => {
  const {authUser} = useAuth()
  return (
    <Suspense fallback={<LoadingFullScreen />}>
      {authUser ? <AuthApp /> : <UnauthApp />}
    </Suspense>
  )
}

export {App}
