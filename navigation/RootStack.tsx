import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamsList} from '../type/type';
const OPTIONS = {
  noHeader: {
    headerShown: false,
  },
};

export type RootStackProps = {};

const RootStackNavigator = createStackNavigator<RootStackParamsList>();

const RootStack: React.FC<RootStackProps> = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator.Navigator
        initialRouteName="Splash"
        screenOptions={{...OPTIONS.noHeader}}>
        <RootStackNavigator.Screen name="Home" component={HomeScreen} />
        <RootStackNavigator.Screen name="Splash" component={SplashScreen} />
      </RootStackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
