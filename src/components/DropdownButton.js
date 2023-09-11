import {View, Text, Image, StyleSheet, Pressable} from 'react-native';

function DropdownButton({children, onPress, selectedCategory, color}) {
 
  return (
    <View
      style={[styles.buttonContainer, {backgroundColor: color.secondary00}]}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => pressed && styles.pressed}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={[styles.category, {color: color.primary}]}>
            {selectedCategory ? selectedCategory : children}
          </Text>
          <Image
            source={require('../assets/caret-down.png')}
            style={[styles.image, {tintColor: color.primary}]}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default DropdownButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    paddingHorizontal: 8,
    height: 40,
    width: 200,
    borderRadius: 5,
    justifyContent: "center"
  },
  image: {
    height: 25,
    width: 25,
  },
  category: {
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.3,
  },
});
