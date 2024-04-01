import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useCall, useCallStateHooks } from '@stream-io/video-react-native-sdk';

const ToggleCameraButton = () => {
  const call = useCall();
  const { useCameraState } = useCallStateHooks();
  const { status } = useCameraState();

  const onTogglePress = async () => {
    await call?.camera.toggle();
  };

  return (
    <TouchableOpacity onPress={onTogglePress} style={styles.button}>
      <MaterialIcons
        name={status === 'disabled' ? 'videocam-off' : 'videocam'}
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

export default ToggleCameraButton;
