import React from 'react';
import { Image } from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import DashboardScreen from '../screens/DashboardScreen';
import AllExpensesScreen from '../screens/AllExpensesScreen';

import {useTheme} from '../theme/ThemeProvider';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigators = () => {
  const {dark, colors} = useTheme();
  const textColor = dark ? '#f4f4fb' : '#1a2744';

  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: textColor,
          tabBarInactiveTintColor: colors.primary,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },
          tabBarStyle: {
            backgroundColor: colors.secondary22,
            borderTopWidth: 0,
          },
        }}>
        <Tab.Screen
          name="Expense"
          component={AllExpensesScreen}
          options={{
            tabBarLabel: 'All Expenses',
            tabBarIcon: ({color, size}) => {
              return <Image source={require('../assets/expenses.png')} style={{height: 20, width: 20, tintColor: color}} />;
            },
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => {
              return <Ionicons name="home-outline" color={color} size={20} />;
            },
          }}
        />
        <Tab.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            tabBarIcon: ({color, size}) => {
              return <Image source={require('../assets/monitor.png')} style={{height: 20, width: 20, tintColor: color}} /> ;
            },
          }}
        />
      </Tab.Navigator>
  );
};

export default TabNavigators;
