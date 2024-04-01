import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Call, StreamCall, useStreamVideoClient, CallContent } from '@stream-io/video-react-native-sdk';
import ToggleCameraFaceButton from './components/ToggleCameraFaceButton';
import ToggleCameraButton from './components/ToggleCameraButton';
import CustomHangupButton from './components/CustomHangupButton';
import ToggleAudioButton from './components/ToggleAudioButton';
import ReactionsButton from './components/ReactionsButton';
import MenuBar from './components/MenuBar'; // Adjust the import path as necessary

type Props = { goToHomeScreen: () => void; callId: string };

export const CallScreen: React.FC<Props> = ({ goToHomeScreen, callId }) => {
  const [call, setCall] = useState<Call | null>(null);
  const client = useStreamVideoClient();
  const [emoji, setEmoji] = useState(''); // To store the selected emoji
  const [isMenuBarVisible, setIsMenuBarVisible] = useState(false);

  const toggleMenuBar = () => {
    setIsMenuBarVisible(!isMenuBarVisible);
  };


  useEffect(() => {
    if (client) {
      const newCall = client.call('default', callId);
      newCall.join({ create: true })
        .then(() => setCall(newCall));
    }
  }, [client, callId]);

  const handleReactionSent = (selectedEmoji: string) => {
    setEmoji(selectedEmoji); // Display the emoji
    // Send the reaction through the Stream SDK
    call?.sendReaction({ type: 'reaction', emoji_code: selectedEmoji, custom: {} }).catch(console.error);

    // Set a timeout to clear the emoji after 5 seconds
    const timeout = setTimeout(() => {
      setEmoji('');
    }, 5000);
    return () => clearTimeout(timeout); // Clean up the timeout
  };

  const CustomCallControls = () => {
    return (
      <View style={styles.customCallControlsContainer}>
        <ToggleCameraFaceButton />
        <ToggleCameraButton />
        <CustomHangupButton/>
        <ToggleAudioButton />
        <ReactionsButton onReactionSent={handleReactionSent} />
      </View>
    );
  };  

  const CustomCallTopView = () => {
    return (
      <View style={{ flex: 1 }}>
        <MenuBar isVisible={isMenuBarVisible} toggleMenu={toggleMenuBar} />
      </View>
    )
  };

  if (!call) {
    return (
      <View style={joinStyles.container}>
        <Text style={styles.text}>Joining call...</Text>
      </View>
    );
  }

  return (
    <StreamCall call={call}>
      <View style={styles.container}>
        <CallContent
          CallTopView={CustomCallTopView}
          onHangupCallHandler={goToHomeScreen}
          CallControls={CustomCallControls}
        />

        {emoji ? <Text style={styles.emoji}>{emoji}</Text> : null}
      </View>
    </StreamCall>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  customCallControlsContainer:{
    flexDirection: 'row',
    borderColor: 'transparent',
    backgroundColor: '#EDF6FF',
    paddingVertical: 10,
    width: '100%',
    marginHorizontal: 0,
    marginBottom: 3,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 25,
    borderTopWidth: 1,
    overflow: 'hidden',
  },
  emoji: {
    // Style for the emoji display, position it as needed
    fontSize: 50,
    position: 'absolute',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#005fff',
  },
});

const joinStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      padding: 20,
      // Additional styles for the text if needed
    },
});
