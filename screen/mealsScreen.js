import {FlatList, View, StyleSheet} from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';


function MealsScreen({route}){
    const catTi = route.params.categoryTitle;
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catTi) >=0;
    });

    function renderMealItem(itemData){
        return <MealItem title={itemData.item.title}/>
                };

    return(<View style={styles.container}>
       
        <FlatList data={displayedMeals} 
        keyExtractor={(item)=>item.id}
        renderItem= {renderMealItem}
        />
    </View>);
};

export default MealsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});