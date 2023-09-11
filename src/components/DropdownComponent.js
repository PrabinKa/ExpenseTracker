import {View, StyleSheet} from 'react-native';
import React from 'react';

import DropdownButton from './DropdownButton';
import DropdownDataContainer from './DropdownDataContainer';

const DropdownComponent = ({
  colors,
  selectedCategory,
  toggleDropdown,
  dropdownToggler,
  categoryList,
  chooseCategory,
}) => {
  return (
    <View style={{width: '85%', alignSelf: 'center', marginTop: 10}}>
      <DropdownButton
        color={colors}
        selectedCategory={selectedCategory}
        onPress={dropdownToggler}>
        Select Category
      </DropdownButton>
      {toggleDropdown ? (
        <View style={[styles.dropDown, {backgroundColor: colors.secondary00}]}>
          {categoryList.map((data, index) => (
            <DropdownDataContainer
              key={index}
              onPress={() => chooseCategory(data.category)}
              data={data}
              color={colors}
            />
          ))}
        </View>
      ) : null}
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropDown: {
    height: 150,
    width: 200,
    borderRadius: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 5,
  },
});
