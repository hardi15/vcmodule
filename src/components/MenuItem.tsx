import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Switched to Ionicons for wider icon availability

type MenuItemProps = {
  icon: string;
  text: string;
  onPress: () => void;
};

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Icon name="bar" size={28} color="#0077B9" />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7,
    paddingVertical: 7,
  },
  text: {
    fontSize: 18,
    marginLeft: 15,
    color: '#0077B9',
  },
});

export default MenuItem;
