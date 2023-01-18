import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CategorieScreen from './screen/categorieScreen';
import MealsScreen from './screen/mealsScreen';

const Stack= createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='light' />
    <NavigationContainer>
      <Stack.Navigator
      screenOptions= {{
        title: 'All Categories',
        headerStyle: {backgroundColor: '#5B4837'},
        contentStyle: {backgroundColor: '#ac8d4e'},
        headerTintColor:'white'
        

      }
  
    }
      >
        <Stack.Screen name="Meals_Categories"   
        component= {CategorieScreen}
        
        />
        <Stack.Screen name="Meals_Screen"   component= {MealsScreen}/>
      </Stack.Navigator>
       
    </NavigationContainer>
    
    </>
    
  );
}

const styles = StyleSheet.create({
 
});
