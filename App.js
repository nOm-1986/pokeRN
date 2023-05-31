import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigation  from './src/navigation/Navigation';

export default function App() {
  return (
    <NavigationContainer >
      <Navigation style={{ padding: 20, margin:20 }}/>
    </NavigationContainer>
  );
}

