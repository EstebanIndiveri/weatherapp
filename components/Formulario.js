import React, { Fragment } from 'react';
import { Text, TextInput, View,StyleSheet,TouchableWithoutFeedback } from 'react-native';
import {Picker}from '@react-native-community/picker';

const Formulario = () => {
    return (
        <Fragment>
            <View style={styles.formulario}>
                <View>
                    <TextInput
                    style={styles.input}
                    placeholder="Ciudad"
                    placeholderTextColor= '#668'
                    />
                </View>
                <View>
                    <Picker
                    itemStyle={{height:120,backgroundColor:'#FFF'}}
                    >
                        <Picker.Item label="--Seleccione un país --" value=""/>
                        <Picker.Item label="Estados Unidos" value="US"/>
                        <Picker.Item label="Argentina" value="AR"/>
                        <Picker.Item label="Colombia" value="CO"/>
                        <Picker.Item label="Costa Rica" value="CR"/>
                        <Picker.Item label="España" value="ES"/>
                        <Picker.Item label="Perú" value="PE"/>
                    </Picker>
                </View>
                <TouchableWithoutFeedback>
                    <View
                    style={styles.btnBuscar}
                    >
                        <Text style={styles.textoBuscar}>Buscar Clima</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </Fragment>
     );
}
 const styles=StyleSheet.create({
     input:{
         padding:10,
         height:50,
         backgroundColor: '#FFF',
         fontSize: 20,
         marginBottom: 20,
         textAlign: 'center',
     },
     btnBuscar:{
         marginTop:50,
         backgroundColor: '#000',
         padding: 10,
         justifyContent: 'center',
     },
     textoBuscar:{
         color: '#fff',
         fontWeight: 'bold',
         textTransform: 'uppercase',
         textAlign: 'center',
         fontSize: 18
     },
 })
export default Formulario;