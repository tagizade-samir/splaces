import React, {FC} from 'react'
import {View} from 'react-native'
import MapView from 'react-native-maps'

import {globalLayoutStyles} from '../../global'

export const MapViewScreen: FC = () => {
  return (
    <View style={globalLayoutStyles.f1}>
      <MapView style={globalLayoutStyles.f1} />
    </View>
  )
}
