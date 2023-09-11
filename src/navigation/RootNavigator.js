import React, { useContext } from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabNavigators from './TabNavigators';
import DisplayExpenseByCategory from '../screens/DisplayExpenseByCategory';
import AddExpenseScreen from '../screens/AddExpenseScreen';

import {useTheme} from '../theme/ThemeProvider';
import { ExpenseContext } from '../context/ExpenseContextProvider';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const {colors} = useTheme();
  const { expenseTitle } = useContext(ExpenseContext)
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        animation:"slide_from_bottom",
        headerTintColor: colors.primary
      }} >
        <Stack.Screen
          name="Tab"
          component={TabNavigators}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ExpenseByCategory"
          component={DisplayExpenseByCategory}
          options={{
            headerStyle: {
              backgroundColor: colors.secondary22,
            },
            headerTitle: expenseTitle ? expenseTitle : "ExpenseByCategory",
            headerTitleStyle: {
              fontSize: 16,
              color: colors.primary,
            },
          }}
        />
        <Stack.Screen
          name="Add Expense"
          component={AddExpenseScreen}
          options={{
            headerStyle: {
              backgroundColor: colors.secondary22,
            },
            headerTitleStyle: {
              fontSize: 16,
              color: colors.primary,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
