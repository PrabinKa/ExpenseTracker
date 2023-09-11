import {ToastAndroid, Alert} from 'react-native';
import React from 'react';

import {openDatabase} from 'react-native-sqlite-storage';

let db = openDatabase({name: 'ExpensesDatabase.db'});

const SaveExpenseData = (inputs, navigation, stringifyDate) => {
  const {title, note, amount, category} = inputs;
  let date = stringifyDate;
  if (title == '' || note == '' || amount == '' || category == '') {
    Alert.alert('Failed', 'All fields must be filled.', [
      {
        text: 'Ok',
        onPress: () => ToastAndroid.show('Fill It.', ToastAndroid.SHORT),
      },
    ]);
  } else {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO table_expense (title, note, amount, date, category) VALUES (?,?,?,?, ?)',
        [title, note, amount, date, category],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'Expense added successfully !',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.goBack(),
                },
              ],
              {cancelable: false},
            );
          } else
            Alert.alert('Failed', 'Expense adding process failed!', [
              {
                text: 'Ok',
                onPress: () =>
                  ToastAndroid.show('Try Again', ToastAndroid.SHORT),
              },
            ]);
        },
      );
    });
  }
  return null;
};

export default SaveExpenseData;
