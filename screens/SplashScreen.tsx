import React from 'react';
import {Text, View, StyleSheet, Animated, Easing} from 'react-native';
import {useEffect, useRef} from 'react';
import {RootStackParamsList, SplashScreenProps} from '../type/type';

const SplashScreen: React.FC<SplashScreenProps> = props => {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.navigation.navigate('Home');
    }, 1000);
  });

  // current location top motion
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 300, // move to value
      duration: 1000, // delay
      useNativeDriver: false,
      // easing: Easing.linear, // move deu`
      // easing: Easing.ease, // tang dan` ve phia sau
      // easing: Easing.quad,
      // easing: Easing.cubic,
      // easing: Easing.poly(5),
      // easing: Easing.sin,
      // easing: Easing.back(5), // back then move
      // easing: Easing.bezier(0.08, 0.79, 0.85, 0.52), // di chuyen van toc theo tham so
      easing: Easing.bounce,
    }).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(spinValue, {
          toValue: -1,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(spinValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ['-45deg', '0deg', '45deg'], // xoay voi goc n
  });
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          maxWidth: 140,
          backgroundColor: '#000',
          maxHeight: 140,
          marginTop: fadeAnim,
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <Animated.View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'yellow',
            transform: [{rotate: spin}],
          }}></Animated.View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SplashScreen;
