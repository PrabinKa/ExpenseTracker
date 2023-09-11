import {Alert} from 'react-native';
import React, {useRef} from 'react';

import {Swipeable} from 'react-native-gesture-handler';
import {openDatabase} from 'react-native-sqlite-storage';
import ExpenseItemActions from './ExpenseItemActions';
import ExpenseDetails from './ExpenseDetails';

let db = openDatabase({name: 'ExpensesDatabase.db'});

const ExpenseContainer = ({
  item,
  color,
  textColor,
  navigation,
  deleteExpense,
  index
}) => {
  const [response, setResponse] = React.useState('');
  const swipeableRef = useRef(null);

  const closeSwipeable = () => {
    swipeableRef.current.close();
  };

  const findExpense = async id => {
    await db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM table_expense where id = ?',
        [id],
        (tx, results) => {
          let len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            navigation.navigate('Add Expense', {
              edit: true,
              id: res.id,
              title: res.title,
              note: res.note,
              newDate: res.date,
              amount: res.amount,
              category: res.category,
            });
            setResponse(res);
            closeSwipeable();
          } else {
            Alert.alert('No Expense found');
            closeSwipeable();
          }
        },
      );
    });
  };

  return (
    <Swipeable
      ref={swipeableRef}
      friction={2}
      renderRightActions={() => (
        <ExpenseItemActions
          onEdit={() => findExpense(item.id)}
          onDelete={() => deleteExpense(item.id, closeSwipeable)}
          color={color}
        />
      )}>
      <ExpenseDetails item={item} color={color} textColor={textColor} index={index} />
    </Swipeable>
  );
};

export default ExpenseContainer;
