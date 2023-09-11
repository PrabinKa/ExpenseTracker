import {View, Text, Image} from 'react-native';
import React from 'react';

import { useTheme } from '../theme/ThemeProvider';

const EmptyExpense = () => {
  const {dark, colors} = useTheme();

  const textColor = dark ? '#f4f4fb' : '#1a2744';

  return (
    <View style={{flex: 1, backgroundColor: colors.primary , justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../assets/sad-face.png')}
        style={{height: 50, width: 50, tintColor: textColor}}
      />
      <Text style={{fontSize: 20, fontWeight: "700", color: textColor}}>
        No Expense Added !
      </Text>
    </View>
  );
};

export default EmptyExpense;
