import {useReducer, useState} from 'react'

import {Firebase} from '../modules/firebase'
import {useUserStore} from '../modules/store'

enum ActionType {
  email = 'email',
  password = 'password',
  setErrors = 'setErrors',
}

interface State {
  email: string
  password: string
  errors: {
    email: string
    password: string
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
    case 'setErrors':
      return {...state, ...action.payload}
    default:
      return state
  }
}

const initialState = {
  email: '',
  password: '',
  errors: {
    email: '',
    password: '',
  },
}

export const useSignIn = () => {
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

  const signIn = async () => {
    setLoading(true)

    try {
      const result = await Firebase.signIn(state.email, state.password)
      if (result.user) {
        dispatch({type: ActionType.setErrors, payload: initialState.errors})
      }

      const user = Firebase.getUser()
      if (user) setUser(user)
    } catch (error: any) {
      dispatch({
        type: ActionType.setErrors,
        payload: {...state, errors: {...state.errors, email: error.message}},
      })
    } finally {
      setLoading(false)
    }
  }
  return {
    ...state,
    loading,
    setEmail,
    setPassword,
    signIn,
  }
}
