import React from 'react';
import { TouchableOpacity, Pressable, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Importing FontAwesome
import { useCall } from '@stream-io/video-react-native-sdk';

const CustomHangupButton = () => {
  const call = useCall();

  const onHangupPress = async () => {
    await call?.leave();
  };

  return (
    <TouchableOpacity onPress={onHangupPress} style={styles.button}>
      <FontAwesome name="phone" size={30} color="#0077B9" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 45,
    borderRadius: 15,
    backgroundColor: '#E60F0F',
  },
});

export default CustomHangupButton;
