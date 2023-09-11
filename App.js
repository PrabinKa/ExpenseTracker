import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import React, {useEffect, useContext} from 'react';

import RootNavigator from './src/navigation/RootNavigator';

import {ThemeProvider, ThemeContext} from './src/theme/ThemeProvider';
import {ExpenseContextProvider, ExpenseContext} from './src/context/ExpenseContextProvider';


import {openDatabase} from 'react-native-sqlite-storage';

let db = openDatabase({name: 'ExpensesDatabase.db'});

const App = () => {
  const {dark, colors} = useContext(ThemeContext);


  useEffect(() => {
    db.transaction(txn => {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_expense'",
        [],
        (tx, res) => {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_expense', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_expense(id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(50), note VARCHAR(50), amount INT(10), date VARCHAR(50), category VARCHAR(15))',
              [],
            );
          }
        },
      );
    });
  }, []);

  return (
    <ExpenseContextProvider>
        <StatusBar backgroundColor={colors.secondary22} />
          <RootNavigator />
    </ExpenseContextProvider>
  );
};

export default App;
