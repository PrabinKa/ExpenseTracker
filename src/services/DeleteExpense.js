import {ToastAndroid} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

let db = openDatabase({name: 'ExpensesDatabase.db'});

export const DeleteExpense = (id, closeSwipeable) => {
  db.transaction(tx => {
    tx.executeSql(
      'DELETE FROM  table_expense where id=?',
      [id],
      (tx, results) => {
        if (results.rowsAffected > 0) {
          closeSwipeable();
          ToastAndroid.show(
            'Expense Deleted Successfully!',
            ToastAndroid.SHORT,
          );
        } else {
          closeSwipeable();
          ToastAndroid.show('Failed ! Please Try Again.', ToastAndroid.SHORT);
        }
      },
    );
  });
};
