import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import CategorieGridTile from "../components/CategorieGridTile";

function renderCategoryItem(itemData){
    return (<CategorieGridTile 
        title={itemData.item.title} 
        color={itemData.item.color}/>); 
}

function CategorieScreen(){
    return <FlatList 
    data={CATEGORIES}
    keyExtractor={(item)=>item.id}
    renderItem={renderCategoryItem}/>
}

export default CategorieScreen;

