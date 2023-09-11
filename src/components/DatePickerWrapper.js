import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const DatePickerWrapper = ({colors, setOpen, date}) => {
 
  return (
    <View
      style={[styles.datePickerWrapper, {backgroundColor: colors.secondary00}]}>
      <TouchableOpacity
        onPress={() => setOpen(true)}
        style={[styles.pickerButton, {backgroundColor: colors.primary}]}>
        <Text style={{color: colors.secondary22, fontWeight: 'bold'}}>
          Pick Date
        </Text>
      </TouchableOpacity>
      <Text style={{color: colors.primary, fontWeight: 'bold'}}>{date}</Text>
    </View>
  );
};

export default DatePickerWrapper;

const styles = StyleSheet.create({
  datePickerWrapper: {
    height: 50,
    width: '85%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 30,
  },
  pickerButton: {
    padding: 5,
    borderRadius: 3,
  },
});
