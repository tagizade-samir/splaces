import {Entypo} from '@expo/vector-icons'
import {
  FormControl,
  VStack,
  Text,
  InputField,
  InputSlot,
  Button,
  ButtonText,
  Input,
  FormControlError,
  FormControlErrorText,
  Spinner,
} from '@gluestack-ui/themed'
import {useNavigation} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import React, {FC} from 'react'
import {StyleSheet} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import {LogoIcon} from '../../components/icons'
import {AuthRoutes, globalLayoutStyles, lightColors} from '../../global'
import {useSignIn} from '../../hooks'
import {AuthStackParamList} from '../../navigation/authStack'

type Nav = StackNavigationProp<AuthStackParamList, AuthRoutes.login>

export const Login: FC = () => {
  const navigation = useNavigation<Nav>()
  const {setEmail, setPassword, signIn, errors, loading, email, password} = useSignIn()
  const [show, setShow] = React.useState(false)

  const goToSignUp = () => {
    navigation.navigate(AuthRoutes.signup)
  }

  return (
    <SafeAreaView style={styles.container}>
      <FormControl
        alignItems="stretch"
        gap="$10"
        width="$80"
        height="$full"
        justifyContent="center">
        <LogoIcon />
        <VStack space="2xl" flex={1}>
          <VStack space="md">
            <Text lineHeight="$xs">Email</Text>
            <Input>
              <InputField autoCapitalize="none" onChangeText={setEmail} value={email} type="text" />
            </Input>
            <FormControlError>
              <FormControlErrorText>{errors.email}</FormControlErrorText>
            </FormControlError>
          </VStack>
          <VStack space="md">
            <Text lineHeight="$xs">Password</Text>
            <Input>
              <InputField
                autoCapitalize="none"
                value={password}
                onChangeText={setPassword}
                type={show ? 'text' : 'password'}
              />
              <InputSlot pr="$3" onPress={() => setShow(!show)}>
                <Entypo name={show ? 'eye-with-line' : 'eye'} size={24} color="black" />
              </InputSlot>
            </Input>
            <FormControlError>
              <FormControlErrorText>{errors.password}</FormControlErrorText>
            </FormControlError>
          </VStack>
          <VStack space="md">
            <Button onPress={signIn} width="$full">
              <ButtonText color="$white">
                {loading ? <Spinner color={lightColors.lightGray} /> : 'Login'}
              </ButtonText>
            </Button>
            <Button onPress={goToSignUp} width="$full" variant="outline">
              <ButtonText color="$black">Sign up</ButtonText>
            </Button>
          </VStack>
        </VStack>
      </FormControl>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    ...globalLayoutStyles.f1,
    alignItems: 'center',
  },
})
