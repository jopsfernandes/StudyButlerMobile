import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Questions from '../src/screens/Questions';
import Splash from '../src/screens/Splash';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    
      <Stack.Navigator>
          
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Questions" component={Questions} />
        
      </Stack.Navigator>
  
  );
}

export default AppNavigation;