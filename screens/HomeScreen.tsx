import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TextInput,
  Image,
  Animated,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeScreenProps, RootStackParamsList} from '../type/type';
import Input from '../components/Input';
import {useState, useEffect, useRef} from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen: React.FC<HomeScreenProps> = props => {
  const [search, setSearch] = useState<any>('');

  const animatedValue = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef<ScrollView>(null);

  let textInputAnimation = {
    transform: [
      {
        scaleX: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      },
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 25],
          outputRange: [0, -100],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 25],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.upperHeaderPlaceholder}></View>
      </SafeAreaView>
      <SafeAreaView
        style={{
          backgroundColor: 'gray',
          width: '100%',
          position: 'absolute',
        }}>
        <View style={styles.upperHeader}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
                marginLeft: 20,
              }}>
              <Input
                value={search}
                onChangeText={value => {
                  setSearch(value);
                }}
                secureTextEntry={false}
                placeholder="Nhập nội dung tìm"
                style={{position: 'absolute', ...textInputAnimation}}
              />
              <Image
                source={{
                  uri: 'https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-vector-search-icon-png-image_320926.jpg',
                }}
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 15,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&usqp=CAU',
                }}
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 15,
                }}
              />
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&usqp=CAU',
                }}
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 15,
                  marginHorizontal: 10,
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.lowerHeader}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              flex: 1,
              justifyContent: 'space-between',
              marginTop: 30,
              paddingHorizontal: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&usqp=CAU',
                  }}
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 15,
                    borderWidth: 2,
                    borderColor: '#fff',
                  }}
                />
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 17,
                  }}>
                  Thêm mới
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&usqp=CAU',
                  }}
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 15,
                    borderWidth: 2,
                    borderColor: '#fff',
                  }}
                />
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 17,
                  }}>
                  Thêm mới
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&usqp=CAU',
                  }}
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 15,
                    borderWidth: 2,
                    borderColor: '#fff',
                  }}
                />
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 17,
                  }}>
                  Thêm mới
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&usqp=CAU',
                  }}
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 15,
                    borderWidth: 2,
                    borderColor: '#fff',
                  }}
                />
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 17,
                  }}>
                  Thêm mới
                </Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <ScrollView
        ref={scrollViewRef}
        scrollEventThrottle={20}
        onScroll={e => {
          const offsetY = e.nativeEvent.contentOffset.y;
          console.log('off set', offsetY);
          animatedValue.setValue(offsetY);
        }}>
        <View style={styles.paddingForHeader}></View>
        <View style={styles.scrollViewContent}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperHeaderPlaceholder: {
    height: 40,
  },
  scrollViewContent: {
    height: windowHeight * 2,
    backgroundColor: '#fff',
  },
  paddingForHeader: {
    height: 140,
  },
  upperHeader: {
    height: 40,
  },
  lowerHeader: {
    height: 140,
  },
});

export default HomeScreen;
