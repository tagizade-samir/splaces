import 'react-native-gesture-handler'

import {GluestackUIProvider, config} from '@gluestack-ui/themed'
import {StatusBar} from 'expo-status-bar'
import {useEffect} from 'react'

import {Firebase} from './src/modules/firebase'
import {RootNavigation} from './src/navigation'

export default function App() {
  useEffect(() => {
    Firebase.initialize()
  }, [])

  return (
    <>
      <StatusBar style="auto" />
      <GluestackUIProvider config={config.theme}>
        <RootNavigation />
      </GluestackUIProvider>
    </>
  )
}
