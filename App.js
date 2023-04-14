import { SafeAreaView } from 'react-native-safe-area-context';
import MainStack from './navigation/MainStack';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { InitialApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config';

export default function App() {
  return (
    <SafeAreaView style = {{flex: 1}}>
      <MainStack />
    </SafeAreaView>
  );
}


