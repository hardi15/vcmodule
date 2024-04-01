import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {HomeScreen} from './src/HomeScreen';
import {CallScreen} from './src/CallScreen'
import {StreamVideo, StreamVideoClient} from '@stream-io/video-react-native-sdk';

const apiKey = 'mmhfdzb5evj2'; // the API key can be found in the "Credentials" section
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiUGFkbV9fQW1pZGFsYSIsImlzcyI6Imh0dHBzOi8vcHJvbnRvLmdldHN0cmVhbS5pbyIsInN1YiI6InVzZXIvUGFkbV9fQW1pZGFsYSIsImlhdCI6MTcxMTQ3NTM3MiwiZXhwIjoxNzEyMDgwMTc3fQ.KgpeQ9nucyg6RTT0MHlw4q9GYp9WDzuw_IneT61T-eE'; // the token can be found in the "Credentials" section
const userId = 'Padm__Amidala'; // the user id can be found in the "Credentials" section
const callId = 'bhXYm6gSIEav'; // the call id can be found in the "Credentials" section

const user = {
  id: userId,
  name: 'John Malkovich',
  image: `https://getstream.io/random_png/?id=${userId}&name=John+Malkovich`,
};
const client = new StreamVideoClient({ apiKey, user, token });

export default function App() {
  const [activeScreen, setActiveScreen] = useState('home');
  const goToCallScreen = () => setActiveScreen('call-screen');
  const goToHomeScreen = () => setActiveScreen('home');

  return (
    <StreamVideo client={client}>
      <SafeAreaView style={styles.container}>
        {activeScreen === 'call-screen' ? (
          <CallScreen goToHomeScreen={goToHomeScreen} callId={callId} />
        ) : (
          <HomeScreen goToCallScreen={goToCallScreen} />
        )}
      </SafeAreaView>
    </StreamVideo>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
});
