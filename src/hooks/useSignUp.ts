import {useReducer, useState} from 'react'

import {passwordRegex} from '../global'
import {Firebase} from '../modules/firebase'
import {useUserStore} from '../modules/store'

enum ActionType {
  email = 'email',
  password = 'password',
  passwordConfirmation = 'passwordConfirmation',
  setErrors = 'setErrors',
}

interface State {
  email: string
  password: string
  passwordConfirmation: string
  errors: {
    email: string
    password: string
    passwordConfirmation: string
  }
}

interface Action {
  type: ActionType
  payload: any
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'email':
      return {...state, email: action.payload}
    case 'password':
      return {...state, password: action.payload}
    case 'passwordConfirmation':
      return {...state, passwordConfirmation: action.payload}
    case 'setErrors':
      return {...state, ...action.payload}
    default:
      return state
  }
}

const initialState = {
  email: '',
  password: '',
  passwordConfirmation: '',
  errors: {
    email: '',
    password: '',
    passwordConfirmation: '',
  },
}

export const useSignUp = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [loading, setLoading] = useState(false)
  const {setUser} = useUserStore()

  const setEmail = (email: string) => {
    if (state.errors.email) {
      dispatch({
        type: ActionType.setErrors,
        payload: {...state, errors: {...state.errors, email: ''}},
      })
    }
    dispatch({type: ActionType.email, payload: email})
  }

  const setPassword = (password: string) => {
    if (state.errors.password) {
      dispatch({
        type: ActionType.setErrors,
        payload: {...state, errors: {...state.errors, password: ''}},
      })
    }
    dispatch({type: ActionType.password, payload: password})
  }

  const setPasswordConfirmation = (passwordConfirmation: string) => {
    if (state.errors.passwordConfirmation) {
      dispatch({
        type: ActionType.setErrors,
        payload: {...state, errors: {...state.errors, passwordConfirmation: ''}},
      })
    }
    dispatch({type: ActionType.passwordConfirmation, payload: passwordConfirmation})
  }

  const validate = (): State['errors'] => {
    const errors: State['errors'] = {email: '', password: '', passwordConfirmation: ''}

    if (!state.email) {
      errors.email = 'Email is required'
    }

    if (!state.password) {
      errors.password = 'Password is required'
    }

    if (!state.passwordConfirmation) {
      errors.passwordConfirmation = 'Password confirmation is required'
    }

    if (state.password !== state.passwordConfirmation) {
      errors.passwordConfirmation = 'Passwords do not match'
    }

    if (state.password.length < 8) {
      errors.password = 'Password must be at least 8 characters'
    }

    if (passwordRegex.test(state.password) === false) {
      errors.password =
        'Password must contain at least one uppercase letter, one lowercase letter and one number'
    }

    return errors
  }

  const signUp = async () => {
    setLoading(true)
    const errors = validate()

    if (Object.values(errors).some((error) => error !== '')) {
      return dispatch({type: ActionType.setErrors, payload: {...state, errors}})
    }

    try {
      const result = await Firebase.signUp(state.email, state.password)
      if (result.user) {
        dispatch({type: ActionType.setErrors, payload: initialState.errors})
      }

      const user = Firebase.getUser()
      if (user) setUser(user)
    } catch (error: any) {
      return dispatch({
        type: ActionType.setErrors,
        payload: {...state, errors: {...state.errors, email: error.message}},
      })
    } finally {
      setLoading(false)
    }
  }

  return {setEmail, setPassword, setPasswordConfirmation, signUp, loading, ...state}
}
