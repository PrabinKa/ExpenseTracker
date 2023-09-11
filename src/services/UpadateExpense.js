import {Alert, ToastAndroid} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

let db = openDatabase({name: 'ExpensesDatabase.db'});

export const UpdateExpenses = (updateExpense, navigation, stringifyDate) => {
  const {id, title, note, amount, category} = updateExpense;
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
        'UPDATE table_expense set title=?, note=? , amount=? , date=? ,  category=? where id=?',
        [title, note, amount, date, category, id],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'Expense updated successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('Home'),
                },
              ],
              {cancelable: false},
            );
          } else
            ToastAndroid.show('Failed ! Please try again.', ToastAndroid.SHORT);
        },
      );
    });
  }
};
