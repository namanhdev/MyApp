import {StyleSheet, Text, View, TextInput, Animated} from 'react-native';
import React, {useState} from 'react';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

interface Props {
  value?: any;
  onChangeText: (str: string) => void;
  iconName?: String;
  placeholder: any;
  secureTextEntry: any;
  style?: any;
}

const Input: React.FC<Props> = ({
  value,
  onChangeText,
  iconName,
  placeholder,
  secureTextEntry,
  style,
}) => {
  const [onFocus, setOnFocus] = useState<Boolean>(false);
  return (
    <View
      style={{
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#F5F5F5',
        borderColor: onFocus ? '#FFA925' : '',
        borderWidth: onFocus ? 1 : 0,
        marginVertical: 10,
        width: '70%',
        color: '#000',
        ...style,
      }}>
      {/* <Icon name={iconName} /> */}
      <AnimatedTextInput
        style={styles.input}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        value={value}
        onFocus={() => {
          setOnFocus(true);
        }}
        onBlur={() => {
          setOnFocus(false);
        }}
        onSubmitEditing={() => {
          setOnFocus(false);
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 58,
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 18,
    color: '#262626',
  },
});

export default Input;
