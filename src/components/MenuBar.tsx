import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MenuItem from './MenuItem';

type MenuBarProps = {
  isVisible: boolean;
  toggleMenu: () => void;
};

const MenuBar: React.FC<MenuBarProps> = ({ isVisible, toggleMenu }) => {
  return (
    <View>
      <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
        <Icon name="menu" size={44} color="#0077B9" />
      </TouchableOpacity>
      <Text style={styles.meetingTitle}>Meeting Topic</Text>
      {isVisible && (
        <View style={styles.menu}>
          <TouchableOpacity onPress={toggleMenu} style={styles.closeButton}>
            <Icon name="close" size={32} color="#0077B9" />
          </TouchableOpacity>
          <MenuItem icon="grid-outline" text="Gallery View" onPress={() => {}} />
          <MenuItem icon="chatbubble-ellipses-outline" text="Chat" onPress={() => {}} />
          <MenuItem icon="share-social-outline" text="Screenshare" onPress={() => {}} />
          <MenuItem icon="people-outline" text="Participants" onPress={() => {}} />
          <MenuItem icon="person-add-outline" text="Add Participants" onPress={() => {}} />
        </View>
      )}
    </View>
  );
};

// Styles would be similar to the ones you have in your MenuBarStyles file
const styles = StyleSheet.create({
    menuButton: {
        // Adjust these values as needed for positioning
        top: -635, // This should place the button at the top of the screen
        left: 15,
    },
    menu: {
        top: -433, // Adjust if needed, consider the height of the menuButton
        left: 18,
        backgroundColor: '#EDF6FF',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    closeButton: {
        padding: 2,
        marginLeft: 2,
    },
    meetingTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0077B9',
        top: -673,
        left: 80,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 3,
        marginVertical: 2,
        marginHorizontal: 5,
    },
});

export default MenuBar;
