import { Pressable, View, Text, StyleSheet } from "react-native";

function CategorieGridTile({title,color}){
    return (
        <View style={[styles.gridStyle, {backgroundColor: color}]} >
            <Pressable style={styles.button} android_ripple={{color: "#131928"}}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}
export default CategorieGridTile;

const styles= StyleSheet.create({

    gridStyle:{
        flex: 1,
        margin: 16,
        height: 150,
        
        elevation: 4,
        overflow: "hidden",
      


    }, 
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5
    }
    
}

);