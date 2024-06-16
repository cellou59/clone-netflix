import * as React from 'react'
import './mocks'
import {useAuth} from 'context/AuthContext'
import {AppProviders} from 'context/index'
import {AuthApp} from 'AuthApp'
import {UnauthApp} from 'UnauthApp'

function App() {
  return (
    <AppProviders>
      <AppConsumer />
    </AppProviders>
  )
}

const AppConsumer = () => {
  const {authUser} = useAuth()
  return authUser ? <AuthApp /> : <UnauthApp />
}

export {App}
