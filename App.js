import { SafeAreaView } from 'react-native-safe-area-context';
import MainStack from './navigation/MainStack';
import {StyleSheet} from 'react-native';

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

