import {Text, View, StyleSheet} from 'react-native';
import {} from '../data/dummy-data';

function MealsScreen(){
    return(<View style={styles.container}>
        <Text>Welcome to meals screen</Text>
    </View>);
};

export default MealsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});