import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const TabHeader = ({title, color}) => {
  return (
    <View style={[styles.outerWraper, {backgroundColor: color.secondary22}]}>
      <View style={[styles.innerWrapper, {backgroundColor: color.secondary22}]}>
        <Text style={[styles.text, {color: color.primary}]}>{title}</Text>
      </View>
    </View>
  );
};

export default TabHeader;

const styles = StyleSheet.create({
  outerWraper: {
    height: 60,
    width: '100%',
    marginBottom: 20,
    elevation: 5,
  },
  innerWrapper: {
    height: '100%',
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
  },
});
