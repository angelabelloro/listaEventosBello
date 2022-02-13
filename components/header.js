import React from "react";
import { StyleSheet, Text, View } from "react-native";


function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Planeador de Eventos</Text>
        </View>


    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 80,
        paddingTop: 36,
        backgroundColor:'rgba( 38, 70, 83, 1)',
        justifyContent:'center',
},
    headerTitle: {
        textAlign: 'center',
        color: '#fff',
        fontFamily:'Roboto',
        fontSize: 25,
        fontWeight: 'bold',
    }
});
export default Header