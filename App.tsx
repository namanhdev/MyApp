import RootStack from './navigation/RootStack';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const OPTIONS = {
  noHeader: {
    headerShown: false,
  },
};

const App = () => {
  return <RootStack />;
};

export default App;
