import { StatusBar } from 'expo-status-bar';
import 'react-native-get-random-values';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <>
      <StatusBar style='light' translucent={true} backgroundColor='transparent' />
      <Home />
    </>
  );
}