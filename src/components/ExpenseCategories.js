import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import React,{ useContext } from 'react';

import { ExpenseContext } from '../context/ExpenseContextProvider';

const ExpenseCategories = ({item, color, navigation, textColor}) => {
  const { getExpenseTitle } = useContext(ExpenseContext)


  const onPress = () => {
    getExpenseTitle(item.category)
    navigation.navigate('ExpenseByCategory', {category: item.category});
  }
  return (
    <Pressable
      style={[styles.container, {backgroundColor: color.secondary00}]}
      onPress={() => {
        onPress()
      }}
      android_ripple={{color: color.primary}}>
      <Image source={item.image} style={{height: 40, width: 40}} />
      <Text style={[styles.category, {color: textColor}]}>
        {item.category}
      </Text>
    </Pressable>
  );
};

export default ExpenseCategories;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  category: {
    fontSize: 18,
    fontWeight: '400',
    marginHorizontal: 20,
  },
});
