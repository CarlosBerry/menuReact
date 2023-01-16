import { Pressable, View, Text } from "react-native";

function CategorieGridTile({title,color}){
    return (
        <View>
            <Pressable>
                <View>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}
export default CategorieGridTile;