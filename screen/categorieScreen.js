import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import CategorieGridTile from "../components/CategorieGridTile";


function CategorieScreen({navigation}){
    function renderCategoryItem(itemData){
         function pressHandler(){
        navigation.navigate("Meals_Screen",{
            categoryTitle: itemData.item.id});
    };

    
    return (<CategorieGridTile 
        title={itemData.item.title} 
        color={itemData.item.color}
        onPress={pressHandler}/>); 
}


    return <FlatList 
    data={CATEGORIES}
    keyExtractor={(item)=>item.id}
    renderItem={renderCategoryItem}
    numColumns={2}/>
}

export default CategorieScreen;

