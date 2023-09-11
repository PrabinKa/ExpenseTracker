import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const DisplayContainer = ({color, totalExpense}) => {
  return (
    <View
      style={[styles.displayContainer, {backgroundColor: color.secondary22}]}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../assets/caret-down.png')}
          style={{height: 25, width: 25, tintColor: color.primary}}
        />
        <Text style={[styles.month, {color: color.primary}]}>This Month</Text>
      </View>
      <Text style={[styles.amount, {color: color.primary}]}>Rs.{totalExpense}</Text>
    </View>
  );
};

export default DisplayContainer;

const styles = StyleSheet.create({
  displayContainer: {
    height: 60,
    width: '90%',
    alignSelf: 'center',

    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 30,
  },
  month: {
    color: '#f4f4fb',
    marginHorizontal: 15,
    fontSize: 18,
    fontWeight: '500',
  },
  amount: {
    fontWeight: '500',
  },
});
