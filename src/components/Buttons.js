import {View, Text, Pressable} from 'react-native';
import React from 'react';

const Buttons = ({title, color, onPress, buttonStyles}) => {
  return (
    <Pressable style={{
        height: 40,
        width: 100,
        backgroundColor: color.secondary11,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        ...buttonStyles
      }} android_ripple={{color: color.primary}} onPress={onPress}>
        <Text style={{color: color.primary, fontWeight: 'bold'}}>{title}</Text>
    </Pressable>
  );
};

export default Buttons;
