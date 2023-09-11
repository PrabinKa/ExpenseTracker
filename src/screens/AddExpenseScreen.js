import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import {useTheme} from '../theme/ThemeProvider';

import DatePicker from 'react-native-date-picker';

import {
  Buttons,
  TextInputWrapper,
  DatePickerWrapper,
  DropdownComponent,
} from '../components';

import {categoryList} from '../constants/Data';

import SaveExpenseData from '../services/SaveExpenseData';
import {UpdateExpenses} from '../services/UpadateExpense';

const AddExpenseScreen = ({navigation, route}) => {
  const {dark, colors} = useTheme();
  const {edit, id, title, note, amount, newDate, category} = route.params;

  // console.log("newDtae", newDate)

  const borderColor = dark ? '#f4f4fb' : '#1a2744';

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const stringifyDate = edit ? newDate : JSON.stringify(date).slice(1, 11);
  // console.log("date", stringifyDate)

  const [inputs, setInputs] = useState({
    title: edit ? title : '',
    note: edit ? note : '',
    amount: edit ? JSON.stringify(amount) : '',
    date: stringifyDate,
    category: edit ? category : '',
  });

  // console.log("inputs", inputs.date)

  let updateExpense = {...inputs, id: edit ? id : 1};

  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputs(input => {
      return {
        ...input,
        [inputIdentifier]: enteredValue,
      };
    });
  };

  const dropdownToggler = () => {
    setToggleDropdown(!toggleDropdown);
  };

  const chooseCategory = cat => {
    setInputs({...inputs, category: cat});
    setSelectedCategory(cat);
    setToggleDropdown(!toggleDropdown);
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      <TextInputWrapper
        placeholder="Title"
        placeholderTextColor="#8888"
        selectionColor={borderColor}
        onChangeText={inputChangeHandler.bind(this, 'title')}
        borderColor={borderColor}
        value={inputs.title}
        inputStyle={{color: borderColor}}
      />

      <TextInputWrapper
        placeholder="Note"
        placeholderTextColor="#8888"
        selectionColor={borderColor}
        onChangeText={inputChangeHandler.bind(this, 'note')}
        borderColor={borderColor}
        value={inputs.note}
        inputStyle={{color: borderColor}}
      />

      <TextInputWrapper
        placeholder="Price"
        placeholderTextColor="#8888"
        selectionColor={borderColor}
        onChangeText={inputChangeHandler.bind(this, 'amount')}
        borderColor={borderColor}
        value={inputs.amount}
        inputStyle={{keyboardType: 'numeric', color: borderColor}}
      />

      <DatePickerWrapper
        colors={colors}
        setOpen={setOpen}
        date={stringifyDate}
      />

      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />

      <DropdownComponent
        colors={colors}
        selectedCategory={inputs.category}
        dropdownToggler={dropdownToggler}
        toggleDropdown={toggleDropdown}
        categoryList={categoryList}
        chooseCategory={chooseCategory}
      />

      <View style={[styles.buttonsWrapper, {marginTop: toggleDropdown ? 25 : 180}]}>
        <Buttons
          title={'Cancel'}
          color={colors}
          onPress={() => {
            navigation.goBack();
          }}
          buttonStyles={{backgroundColor: colors.secondary22}}
        />
        {edit ? (
          <Buttons
            title={'Update'}
            color={colors}
            onPress={() => {
              UpdateExpenses(updateExpense, navigation, stringifyDate);
            }}
          />
        ) : (
          <Buttons
            title={'Save'}
            color={colors}
            onPress={() => {
              SaveExpenseData(inputs, navigation, stringifyDate);
            }}
          />
        )}
      </View>
    </View>
  );
};

export default AddExpenseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  buttonsWrapper: {
    width: '85%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
