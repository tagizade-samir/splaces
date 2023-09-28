import {HStack, VStack, useToast} from '@gluestack-ui/themed'
import {useNavigation} from '@react-navigation/core'
import {StackNavigationProp} from '@react-navigation/stack'
import * as Location from 'expo-location'
import React, {FC} from 'react'
import {View} from 'react-native'

import {getMenuItemText} from './data'
import {HomeItemsModal} from './homeItemsModal'
import {MenuButton} from '../../components/menuButton'
import {Warning} from '../../components/toast'
import {Routes, globalLayoutStyles, menuItemColors} from '../../global'
import {MainStackParamList} from '../../navigation'

type Nav = StackNavigationProp<MainStackParamList, Routes.home>

export const Home: FC = () => {
  const navigation = useNavigation<Nav>()
  const [modalOpen, setModalOpen] = React.useState(false)
  const toast = useToast()
  const [{title, text}, setModalContent] = React.useState({
    title: '',
    text: '',
  })

  const handlePress = async (route: Routes, isCreate?: boolean) => {
    if (route === Routes.mapView) {
      const {status} = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        toast.show({
          placement: 'top',
          duration: 3000,
          render: (props) => (
            <Warning
              {...props}
              id="location-permission-warning"
              title="Location permission required"
              text="Please enable location permission to use this feature"
            />
          ),
        })
        return
      }

      navigation.navigate(route, {isCreate})
    } else {
      navigation.navigate(route)
    }
  }

  const handleLongPress = (route: Routes, isCreate?: boolean) => {
    setModalContent({
      title: 'Info',
      text: getMenuItemText(route, isCreate),
    })
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <View style={globalLayoutStyles.f1}>
      <VStack flex={1}>
        <MenuButton
          handlePress={() => handlePress(Routes.profile)}
          handleLongPress={() => handleLongPress(Routes.profile)}
          color={menuItemColors.profile}
          title="Profile"
        />
        <MenuButton
          handlePress={() => handlePress(Routes.explore)}
          handleLongPress={() => handleLongPress(Routes.explore)}
          color={menuItemColors.explore}
          title="Explore"
        />
        <HStack flex={1}>
          <MenuButton
            handlePress={() => handlePress(Routes.mapView)}
            handleLongPress={() => handleLongPress(Routes.mapView)}
            color={menuItemColors.record}
            title="Record"
          />
          <MenuButton
            handlePress={() => handlePress(Routes.mapView, true)}
            handleLongPress={() => handleLongPress(Routes.mapView, true)}
            color={menuItemColors.create}
            title="Create"
          />
        </HStack>
      </VStack>
      <HomeItemsModal title={title} text={text} open={modalOpen} onClose={closeModal} />
    </View>
  )
}
