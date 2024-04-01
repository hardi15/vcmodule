import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native';
import EmojiSelector, { Categories } from 'react-native-emoji-selector';

// You can extend this list or modify it according to your needs
const frequentlyUsedEmojis = ['😂', '👍', '😭', '🔥', '😍', '🎉']; 

type EmojiPickerProps = {
  isVisible: boolean;
  onSelectEmoji: (emoji: string) => void;
  onClose: () => void;
};

const EmojiPicker: React.FC<EmojiPickerProps> = ({ isVisible, onSelectEmoji, onClose }) => {
  const [showFullKeyboard, setShowFullKeyboard] = useState(false);

  const handleEmojiSelect = (emoji: string) => {
    if (emoji === '➕') {
      setShowFullKeyboard(true);
    } else {
      onSelectEmoji(emoji);
    }
  };

  return (
    <Modal visible={isVisible} transparent animationType="slide" onRequestClose={onClose}>
      {!showFullKeyboard ? (
        <View style={styles.container}>
          {frequentlyUsedEmojis.map((emoji, index) => (
            <TouchableOpacity key={index} onPress={() => handleEmojiSelect(emoji)} style={styles.emojiButton}>
              <Text style={styles.emoji}>{emoji}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={() => handleEmojiSelect('➕')} style={styles.emojiButton}>
            <Text style={styles.emoji}>➕</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <EmojiSelector
          onEmojiSelected={onSelectEmoji}
          showSearchBar={true}
          showHistory={false}
          showTabs={true}
          columns={8}
          category={Categories.all}
        />
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#D9D9D9',
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderRadius: 20,
    marginHorizontal: 30, // Add horizontal margin if needed
    marginBottom: 27, // Ensure there's space at the bottom if your bar is at the screen's edge
    marginLeft: 'auto', // Automatically adjusts left margin to push the container right
    marginRight: 50, // Controls distance from the right edge
    overflow: 'hidden',
    bottom:-670
  },
  emojiButton: {
    padding: 8
  },
  emoji: {
    fontSize: 24
  },
});

export default EmojiPicker;
