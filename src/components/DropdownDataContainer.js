import {View, Text, Pressable, StyleSheet} from 'react-native';

export default function DropdownDataContainer({onPress, data, color}) {

  return (
    <Pressable
      style={({pressed}) => pressed && styles.pressed}
      onPress={onPress}>
      <View style={styles.dropdownListContainer}>
        <Text style={[styles.dropdownText, {color: color.primary}]}>{data.category}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  dropdownListContainer: {
    height: 30,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownText: {
    fontWeight: '700',
    fontSize: 12,
  },
  pressed: {
    opacity: 0.5,
  },
});
