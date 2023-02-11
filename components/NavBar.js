import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const NavBar = ({title, leftButton, rightButton}) => {
  return (
    <View
      style={{
        height: 100,
        width: '100%',
        backgroundColor: '#FFA925',
        justifyContent: 'center',
        // alignItems: 'center',
        paddingTop: 20,
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            alignItems: 'flex-start',
          }}>
          {leftButton}
        </View>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            {title}
          </Text>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
          }}>
          {rightButton}
        </View>
      </View>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({});
