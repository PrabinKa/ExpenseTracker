import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const TextInputWrapper = ({placeholder, placeholderTextColor, selectionColor, onChangeText, borderColor, value, inputStyle}) => {
  return (
    <View style={[styles.textinputWrapper, { borderColor: borderColor }]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        selectionColor={selectionColor}
        onChangeText={onChangeText}
        value={value}
        {...inputStyle}
      />
    </View>
  )
}

export default TextInputWrapper;

const styles = StyleSheet.create({
    textinputWrapper: {
        height: 50,
        width: '85%',
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 30,
      },
})