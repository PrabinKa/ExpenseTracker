import {View, Text, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';

import {useTheme} from '../theme/ThemeProvider';
import {useExpense} from '../context/ExpenseContextProvider';
import {TabHeader} from '../components';

import {PieChart} from 'react-native-chart-kit';

const DashboardScreen = () => {
  const {dark, colors} = useTheme();
  const {expenseData} = useExpense();
  const textColor = dark ? '#f4f4fb' : '#1a2744';


  let [data, setData] = useState([
    {
      name: 'Hospital',
      amount: 0,
      color: '#33ACE3',
      legendFontColor: textColor,
      legendFontSize: 15,
    },
    {
      name: 'Foods',
      amount: 0,
      color: '#EA6964',
      legendFontColor: textColor,
      legendFontSize: 15,
    },
    {
      name: 'School Fees',
      amount: 0,
      color: '#98DAF1',
      legendFontColor: textColor,
      legendFontSize: 15,
    },
    {
      name: 'Entertainment',
      amount: 0,
      color: '#7848AA',
      legendFontColor: textColor,
      legendFontSize: 15,
    },
    {
      name: 'Others',
      amount: 0,
      color: '#4AB62C',
      legendFontColor: textColor,
      legendFontSize: 15,
    },
  ]);

  useEffect(() => {
    let currentDate = new Date();
    let currentMonth = JSON.stringify(currentDate).slice(6, 8);

    let result = expenseData.filter(function (data) {
      return currentMonth == JSON.stringify(data.date).slice(6, 8);
    });

    let updatedData = [...data];
    for (let i = 0; i <= updatedData.length - 1; i++) {
      let sum = 0;
      for (let j = 0; j <= result.length - 1; j++) {
        if (data[i].name == result[j].category) {
          sum += result[j].amount;
        }
      }
      updatedData[i].amount = sum;
    }
    setData(updatedData);
  }, []);

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.primary}}>
      <TabHeader title={'Dashboard'} color={colors} />
      <View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: textColor,
            marginBottom: 50,
            marginHorizontal: 15,
          }}>
          PieChart representing expenses of this month:
        </Text>
      </View>
      <View>
        <PieChart
          data={data}
          width={Dimensions.get('window').width}
          height={200}
          chartConfig={chartConfig}
          accessor={'amount'}
          backgroundColor={'transparent'}
          center={[0, 0]}
        />
      </View>
    </View>
  );
};

export default DashboardScreen;
