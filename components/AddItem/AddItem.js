import React from "react";
import { View, TextInput, Button,TouchableOpacity, Text } from "react-native";
import styles from './styles'


function AddItem({ textInput, handleChangeText, handleOnPress}){
    return(
        <View styles={styles.inputContainer}>
            <TextInput
                style={styles.input}
                value={textInput}
                onChangeText={handleChangeText}
                placeholder='Nombre'
            />
            <Button
            title="AGREGAR EVENTO"
            onPress={handleOnPress}
            color='rgba(244,162,97,1)'
            />
           {/* <TouchableOpacity
                style={styles.button}
                onPress={handleOnPress}
                >
                <Text>AGREGAR EVENTO</Text>
                
           </TouchableOpacity>*/}
        </View>

    )
}

export default AddItem