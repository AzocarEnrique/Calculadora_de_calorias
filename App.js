import { SafeAreaView } from 'react-native-safe-area-context';
import MainStack from './navigation/MainStack';

export default function App() {
  return (
    <SafeAreaView style = {{flex: 1}}>
      <MainStack/>
    </SafeAreaView>
  );
}

