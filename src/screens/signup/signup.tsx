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
import React, {FC} from 'react'
import {StyleSheet} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import {globalLayoutStyles, lightColors} from '../../global'
import {useSignUp} from '../../hooks'

export const SignUp: FC = () => {
  const {
    loading,
    errors,
    signUp,
    email,
    password,
    passwordConfirmation,
    setEmail,
    setPassword,
    setPasswordConfirmation,
  } = useSignUp()
  const [show, setShow] = React.useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <FormControl
        width="$80"
        isInvalid={!!(errors?.email || errors?.password || errors?.passwordConfirmation)}
        height="$full"
        pt="$32"
        justifyContent="center">
        <VStack space="2xl" flex={1}>
          <VStack>
            <Text mb="$4" lineHeight="$xs">
              Email
            </Text>
            <Input>
              <InputField autoCapitalize="none" onChangeText={setEmail} value={email} type="text" />
            </Input>
            <FormControlError>
              <FormControlErrorText>{errors.email}</FormControlErrorText>
            </FormControlError>
          </VStack>
          <VStack>
            <Text mb="$4" lineHeight="$xs">
              Password
            </Text>
            <Input>
              <InputField
                onChangeText={setPassword}
                value={password}
                autoCapitalize="none"
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
          <VStack>
            <Text mb="$4" lineHeight="$xs">
              Confirm password
            </Text>
            <Input>
              <InputField
                onChangeText={setPasswordConfirmation}
                value={passwordConfirmation}
                autoCapitalize="none"
                type={show ? 'text' : 'password'}
              />
            </Input>
            <FormControlError>
              <FormControlErrorText>{errors.passwordConfirmation}</FormControlErrorText>
            </FormControlError>
          </VStack>
          <Button onPress={signUp} width="$full">
            <ButtonText color="$white">
              {loading ? <Spinner color={lightColors.lightGray} /> : 'Register'}
            </ButtonText>
          </Button>
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
