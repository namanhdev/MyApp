import type {NativeStackScreenProps} from '@react-navigation/native-stack';


export type RootStackParamsList = {
    Home: undefined,
    Splash: undefined
}

export type SplashScreenProps = NativeStackScreenProps<
  RootStackParamsList,
  'Splash'
>;

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamsList,
  'Home'
>;
