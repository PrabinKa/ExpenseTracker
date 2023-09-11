import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {useTheme} from '../theme/ThemeProvider';
import { useExpense } from '../context/ExpenseContextProvider';

import {ExpenseContainer, EmptyExpense} from '../components';

const DisplayExpenseByCategory = ({route}) => {
  const {colors, dark} = useTheme();
  const {expenseData} = useExpense();

  const {category} = route.params;
  const textColor = dark ? '#f4f4fb' : '#1a2744';

  const [expense, setExpense] = useState([]);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    const result = expenseData.filter(checkAdult);
    function checkAdult(expense) {
      return expense.category == category;
    }
    setExpense(result);
  }, [category]);

  useEffect(() => {
    if (expense.length > 0) {
      let sum = 0;
      for (let i = 0; i <= expense.length - 1; i++) {
        sum += expense[i].amount;
      }
      setTotal(sum);
    }
  }, [expense]);

  return (
    <View style={{flex: 1}}>
      {expense.length == 0 ? (
        <EmptyExpense />
      ) : (
        <GestureHandlerRootView
          style={{flex: 1, backgroundColor: colors.primary}}>
          <View style={styles.titleWrapper}>
            <Text style={[styles.text, {color: textColor}]}>Grand Total:</Text>
            <Text style={[styles.text, {color: textColor}]}>Rs.{total}</Text>
          </View>
          <FlatList
            data={expense}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              return (
                <ExpenseContainer
                  item={item}
                  color={colors}
                  textColor={textColor}
                  index={index}
                />
              );
            }}
          />
        </GestureHandlerRootView>
      )}
    </View>
  );
};

export default DisplayExpenseByCategory;

const styles = StyleSheet.create({
  titleWrapper: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
