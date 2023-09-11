import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const ExpenseItemActions = ({onEdit, onDelete, color}) => {
  return (
    <View style={{height: 70, flexDirection: 'row', marginRight: 25}}>
      <TouchableOpacity
        style={{
          height: 70,
          width: 70,
          backgroundColor: color.secondary00,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomLeftRadius: 5,
          borderTopLeftRadius: 5,
        }}
        onPress={onEdit}>
        <Image
          source={require('../assets/edit.png')}
          style={{height: 25, width: 25, tintColor: '#fff'}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 70,
          width: 70,
          backgroundColor: color.secondary22,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomRightRadius: 5,
          borderTopRightRadius: 5,
        }}
        onPress={onDelete}>
        <Image
          source={require('../assets/trash.png')}
          style={{height: 25, width: 25, tintColor: '#fff'}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ExpenseItemActions;
