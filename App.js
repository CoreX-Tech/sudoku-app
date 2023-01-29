// import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import TabBar from './src/components/TabBar';
import Home from './src/screens/Home';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={{height:'100%'}}>
      <TabBar />
    </View>
  );
}


