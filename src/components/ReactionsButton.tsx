import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import EmojiPicker from './EmojiPicker'; // Adjust the path as necessary
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type ReactionsButtonProps = {
  onReactionSent: (emoji: string) => void;
};

const ReactionsButton: React.FC<ReactionsButtonProps> = ({ onReactionSent }) => {
  const [isEmojiPickerVisible, setEmojiPickerVisible] = useState(false);

  const handleEmojiSelected = (emoji: string) => {
    setEmojiPickerVisible(false);
    onReactionSent(emoji);
  };

  const handleEmojiPickerClose = () => {
    setEmojiPickerVisible(false);
  };

  return (
    <>
      <TouchableOpacity onPress={() => setEmojiPickerVisible(true)} style={styles.button}>
        <MaterialIcons name="emoji-emotions" size={24} color="#0077B9" />
      </TouchableOpacity>
      <EmojiPicker
        isVisible={isEmojiPickerVisible}
        onSelectEmoji={handleEmojiSelected}
        onClose={handleEmojiPickerClose}
      />
    </>
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

export default ReactionsButton;
