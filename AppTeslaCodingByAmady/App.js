import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Accueil from './Composants/Accueil';
import PageConnexion from'./Composants/PageConnexion'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer styles={styles.container}>
      <Stack.Navigator    screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="PageDeConnexion"
          component={PageConnexion}
        
        />
        <Stack.Screen name="Accueils" component={Accueil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
