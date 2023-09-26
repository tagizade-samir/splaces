# Expo project template

This is a template for Expo projects. It includes the following:

- [React Navigation](https://reactnavigation.org/)
- [React Native NetInfo](https://docs.expo.dev/versions/latest/sdk/netinfo/)
- [React Native Safe Area Context](https://docs.expo.dev/versions/latest/sdk/safe-area-context/)
- [Lodash](https://lodash.com/)
- [Axios](https://axios-http.com/docs/intro)
- [Expo Font](https://docs.expo.dev/versions/latest/sdk/font/)
- [Expo Splash Screen](https://docs.expo.dev/versions/latest/sdk/splash-screen/)
- [Expo Status Bar](https://docs.expo.dev/versions/latest/sdk/status-bar/)
- [Lottie](https://docs.expo.dev/versions/latest/sdk/lottie/)
- [React Native Gesture Handler](https://docs.expo.dev/versions/latest/sdk/gesture-handler/)
- [React Native SVG](https://docs.expo.dev/versions/latest/sdk/svg/)

## Project structure

- `assets`: Expo assets
- `src`: Main folder
    - `components`: Reusable global components
    - `global`: Global styles, enums and interfaces
    - `hooks`: Custom hooks
    - `modules`: Our custom modules that we develop for our project (e.g. `api`)
    - `navigation`: App navigation
    - `screens`: Folder containing all the screens
    - `utils`: Utils functions
- `App.tsx`: Root component
- `app.json`: Expo configuration
- `babel.config.js`: Babel configuration
- `tsconfig.json`: TypeScript configuration
- `.eslintrc.js`: ESLint configuration
- `.prettierrc.js`: Prettier configuration
- `.gitignore`: Git ignore file
- `README.md`: This file
- `package.json`: NPM package file
- `yarn.lock`: Yarn lock file

## Usage

```bash
npx create-expo-app APP_NAME --template expo-mvp-template-ts
```

As the last step, modify `package.json` file and change `author` and `homepage` values to your own.
