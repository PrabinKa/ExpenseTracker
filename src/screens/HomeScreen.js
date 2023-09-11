import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import {DisplayContainer, ExpenseCategories, Buttons} from '../components';

import {useTheme} from '../theme/ThemeProvider';
import {useExpense} from '../context/ExpenseContextProvider';
import {expenseCategory} from '../constants/Data';

import {openDatabase} from 'react-native-sqlite-storage';

let db = openDatabase({name: 'ExpensesDatabase.db'});

const HomeScreen = ({navigation}) => {
  const {dark, colors, setScheme} = useTheme();
  const {fetchExpense, expenseData} = useExpense();
  const [isEnabled, setIsEnabled] = useState(false);
  const [totalExpense, setTotalExpense] = useState(0);

  const textColor = dark ? '#f4f4fb' : '#1a2744';

  const toggleTheme = () => {
    dark ? setScheme('light') : setScheme('dark');
    setIsEnabled(previousState => !previousState);
  };

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM table_expense', [], (tx, results) => {
        let temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        fetchExpense(temp);
      });
    });
  });

  useEffect(() => {
    let currentDate = new Date();
    let currentMonth = JSON.stringify(currentDate).slice(6, 8);

    if (expenseData != null) {
      let result = expenseData.filter(function (expenseData) {
        return currentMonth == JSON.stringify(expenseData.date).slice(6, 8);
      });

      let sum = 0;
      for (let i = 0; i <= result.length - 1; i++) {
        sum += result[i].amount;
      }
      setTotalExpense(sum);
    }
  }, [expenseData]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.primary}}>
      <View style={styles.textWrapper}>
        <View>
          <Text style={{color: textColor, fontSize: 15, fontWeight: '400'}}>
            Hello,
          </Text>
          <Text style={[styles.text, {color: textColor}]}>Mr.Anonymous</Text>
        </View>
        <TouchableOpacity onPress={() => toggleTheme()}>
          <Image
            source={require('../assets/mode.png')}
            style={{height: 30, width: 30, tintColor: textColor}}
          />
        </TouchableOpacity>
      </View>
      <DisplayContainer totalExpense={totalExpense} color={colors} />
      <View style={styles.expenseWrapper}>
        <Text style={[styles.text, {color: textColor}]}>Expenses</Text>
        <Buttons
          title={'Add Expense'}
          color={colors}
          onPress={() => navigation.navigate('Add Expense', {edit: false})}
        />
      </View>
      <View>
        <FlatList
          data={expenseCategory}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ExpenseCategories
              item={item}
              color={colors}
              navigation={navigation}
              textColor={textColor}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textWrapper: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expenseWrapper: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
});
