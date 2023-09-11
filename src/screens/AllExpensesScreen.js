import {View, FlatList} from 'react-native';
import React from 'react';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {useTheme} from '../theme/ThemeProvider';
import { useExpense } from '../context/ExpenseContextProvider';

import {ExpenseContainer, TabHeader, EmptyExpense} from '../components';
import {DeleteExpense} from '../services/DeleteExpense';

const AllExpensesScreen = ({navigation}) => {
  const {dark, colors} = useTheme();
  const {expenseData} = useExpense();
  const expense = expenseData.reverse();

  const textColor = dark ? '#f4f4fb' : '#1a2744';

  return (
    <View style={{flex: 1}}>
      {expenseData.length == 0 ? (
        <EmptyExpense />
      ) : (
        <GestureHandlerRootView
          style={{flex: 1, backgroundColor: colors.primary}}>
          <TabHeader title={'All Expenses'} color={colors} />
          <FlatList
            data={expense}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <ExpenseContainer
                  item={item}
                  color={colors}
                  textColor={textColor}
                  index={index}
                  navigation={navigation}
                  deleteExpense={itemId => {
                    DeleteExpense(itemId);
                  }}
                />
              );
            }}
          />
        </GestureHandlerRootView>
      )}
    </View>
  );
};

export default AllExpensesScreen;
