import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import * as Animatable from 'react-native-animatable';

const ExpenseDetails = ({item, color, textColor, index}) => {
  return (
    <Animatable.View animation="fadeInUp" duration={1000} delay={index * 300} >
      <View style={[styles.container, {backgroundColor: color.secondary00}]}>
        <View style={styles.expenseWrapper}>
          <Text numberOfLines={1} style={[styles.boldText, {color: textColor}]}>
            {item.title}
          </Text>
          <Text numberOfLines={1} style={[styles.text, {color: textColor}]}>
            {item.note}
          </Text>
        </View>
        <View style={styles.expenseWrapper}>
          <Text style={[styles.text, {color: textColor, fontWeight: '600'}]}>
            {item.date}
          </Text>
          <Text style={[styles.boldText, {color: textColor}]}>
            Rs.{item.amount}
          </Text>
        </View>
      </View>
    </Animatable.View>
  );
};

export default ExpenseDetails;

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 15,
    borderRadius: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expenseWrapper: {
    maxWidth: '75%',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  boldText: {
    fontSize: 16,
    fontWeight: '600',
  },
  text: {
    fontSize: 14,
  },
});
