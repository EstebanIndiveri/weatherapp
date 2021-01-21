import React, {useState,Fragment,useEffect } from 'react';
import { Text, TextInput, View,StyleSheet,TouchableWithoutFeedback,Animated, Alert } from 'react-native';
import {Picker}from '@react-native-community/picker';

const Formulario = ({busqueda,setBusqueda,setConsultar}) => {
    const{pais,ciudad}=busqueda;
    const [animationbtn] = useState(new Animated.Value(1));
    const animationStart=()=>{
        Animated.spring(animationbtn,{
            toValue: .75,
            useNativeDriver: true,
        }).start();
    };
    const animatedOut=()=>{
        Animated.spring(animationbtn,{
            toValue: 1,
            useNativeDriver: true,
            friction:4,
            tension:30,
        }).start();
    };
    const estiloAnimation={
        transform:[{
            scale:animationbtn,
        }],
    };
    const consultarClima=()=>{
        if(pais.trim()===''||ciudad.trim()===''){
            mostarAlerta();
            return;
        }
        setConsultar(true);
    }
    const mostarAlerta=()=>{
        Alert.alert(
            'Error',
            'Agrega una ciudad y un país a la busqueda',
            [{text:'Entendido'}]
        )
    }
    return (
        <Fragment>
            <View style={styles.formulario}>
                <View>
                    <TextInput
                    style={styles.input}
                    placeholder="Ciudad"
                    placeholderTextColor= '#668'
                    value={ciudad}
                    onChangeText={ciudad=>setBusqueda({...busqueda,ciudad})}
                    />
                </View>
                <View>
                    <Picker
                    onValueChange={(pais)=>setBusqueda({...busqueda,pais})}
                    selectedValue={pais}
                    itemStyle={{ height: 120, backgroundColor: 'red' }}
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
                <TouchableWithoutFeedback
                    onPressIn={()=>animationStart()}
                    onPressOut={()=>animatedOut()}
                    onPress={()=>consultarClima()}
                >
                    <Animated.View
                    style={[styles.btnBuscar,estiloAnimation]}
                    >
                        <Text style={styles.textoBuscar}>Buscar Clima</Text>
                    </Animated.View>
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
         fontSize: 18,
     },
 })
export default Formulario;