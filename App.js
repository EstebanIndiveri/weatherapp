import React, { Fragment } from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,TouchableWithoutFeedback, Keyboard} from 'react-native';
import Formulario from './components/Formulario';

const App = () => {
  const ocultarTeclado=()=>{
    Keyboard.dismiss();
  };
  return (
    <Fragment>
      <StatusBar translucent backgroundColor="transparent"/>
      <TouchableWithoutFeedback
      onPress={()=>ocultarTeclado()}
      >
      <View style={styles.app}>
        <View style={styles.contenido}>
        <Formulario/>
        </View>
      </View>
      </TouchableWithoutFeedback>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  app:{
    flex: 1,
    backgroundColor: 'rgb(71,149,212)',
    justifyContent: 'center',
  },
  contenido:{
    marginHorizontal: '2.5%',
  },
});

export default App;
