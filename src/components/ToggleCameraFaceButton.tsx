import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useCall, useCallStateHooks } from '@stream-io/video-react-native-sdk';

const ToggleCameraFaceButton = () => {
  const call = useCall();
  const { useCameraState } = useCallStateHooks();
  const { direction } = useCameraState();

  const onFlipPress = async () => {
    await call?.camera.flip();
  };

  return (
    <TouchableOpacity onPress={onFlipPress} style={styles.button}>
      <MaterialIcons
        name={direction === 'front' ? 'camera-front' : 'camera-rear'}
        size={30}
        color="#0077B9"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: 'transparent',
  },
});

export default ToggleCameraFaceButton;
