
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, Modal } from 'react-native';
import AddItem from './components/AddItem/AddItem'
import Header from './components/header'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  const [textInput, setTextInput] = useState('')
  const [itemList, setItemList] = useState([])

  const [itemSelected, setItemSelected] = useState({})
  const [modalVisible, setModalVisible] = useState (false)

  const handleChangeText = (text) => {
    setTextInput(text)
  }

  const handleOnPress = () => {
    setTextInput('')
    setItemList([
      ...itemList,
      {
        value: textInput,
        id: Math.random().toString(),
      },
    ])
  }

  const handleOnDelete = (item) => () => {
    setModalVisible(true)
    setItemSelected(item)
  }

  const handleConfirmDelete = () => {
    const { id } = itemSelected
    setItemList(itemList.filter(item => item.id !== id))
    setModalVisible(false)
    setItemSelected({})
  }
  
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <Text style={styles.subtitle}>Por favor ingresa el nombre de tu ocasión o evento</Text>
      </View>
      <AddItem
        textInput={textInput}
        handleOnPress={handleOnPress}
        handleChangeText={handleChangeText}
        />
        <FlatList
          data={itemList}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.value}</Text>
              <Button 
                color='rgba(231, 111, 81, 1)' 
                onPress={handleOnDelete(item)} title="x"
               />
            </View>
          )
          }
          numColumns={2}
          keyExtractor={item => item.id}
        />

        <Modal animationType='slide' visible={modalVisible}>
          <View>
            <View>
              <Text>¿Está seguro que desea eliminar?</Text>
              <Text>{itemSelected.value}</Text>
            </View>
            <View>
              <Button 
              onPress={handleConfirmDelete}
              title="CONFIRMAR"
              color="#66cdaa"
              />
            </View>
          </View>
        </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#66cdaa',
    paddingBottom:20
  },
  item:{
    padding: 20,
    flex:1,
    marginHorizontal:5,
    marginVertical:5,
    fontSize: 40,
    backgroundColor:'rgba(233, 196, 106, 1)',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  subtitle:{
    padding: 20,
    fontSize: 18,
    fontWeight:'bold',
    textAlign: 'justify',
    color: '#fff',
    backgroundColor:'rgba(231, 111, 81, 1)'
  }
});
