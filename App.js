import { SafeAreaView } from 'react-native-safe-area-context';
import MainStack from './navigation/MainStack';
import {StyleSheet} from 'react-native';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { InitialApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config';

export default function App() {
  return (
    <SafeAreaView style = {styles.body}>
      <MainStack />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  }
});

