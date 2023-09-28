import AsyncStorage from '@react-native-async-storage/async-storage'
import {initializeApp, FirebaseApp} from 'firebase/app'
import {
  initializeAuth,
  Auth,
  // @ts-ignore
  getReactNativePersistence,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'

let firebaseApp: FirebaseApp | null = null
let auth: Auth | null = null

const firebaseConfig = {
  apiKey: 'AIzaSyB8BHPT4qQh0XhuaUnVonaL4l9KPpChs1s',
  authDomain: 'splaces-9f29a.firebaseapp.com',
  projectId: 'splaces-9f29a',
  storageBucket: 'splaces-9f29a.appspot.com',
  messagingSenderId: '870794273286',
  appId: '1:870794273286:web:274a894b0e12600656d987',
  measurementId: 'G-D9R04LQPFL',
}

export class Firebase {
  static initialize() {
    if (!firebaseApp) {
      firebaseApp = initializeApp(firebaseConfig)
      auth = initializeAuth(firebaseApp, {
        persistence: getReactNativePersistence(AsyncStorage),
      })
    }
  }

  static getAuth() {
    if (!auth) {
      this.initialize()
    }

    return getAuth()
  }

  static getApp() {
    if (!firebaseApp) {
      this.initialize()
    }

    return firebaseApp
  }

  static async signUp(email: string, password: string) {
    if (!firebaseApp || !auth) {
      this.initialize()
    }

    return await createUserWithEmailAndPassword(auth!, email, password)
  }

  static getUser() {
    if (!firebaseApp || !auth) {
      this.initialize()
    }

    return auth!.currentUser
  }

  static signIn(email: string, password: string) {
    if (!firebaseApp || !auth) {
      this.initialize()
    }

    return signInWithEmailAndPassword(auth!, email, password)
  }

  static signOut() {
    if (!firebaseApp || !auth) {
      this.initialize()
    }

    return auth!.signOut()
  }
}
