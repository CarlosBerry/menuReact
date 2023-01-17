import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategorieScreen from './screen/categorieScreen';

export default function App() {
  return (
    <>
    <StatusBar style='light' />
    <CategorieScreen /> 
    </>
    
  );
}

const styles = StyleSheet.create({
 
});
