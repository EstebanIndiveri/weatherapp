import React, { Fragment,useState,useEffect } from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,TouchableWithoutFeedback, Keyboard,Alert} from 'react-native';
import Clima from './components/Clima';
import Formulario from './components/Formulario';

const App = () => {
  const [busqueda, setBusqueda] = useState({
    ciudad:'',
    pais:'',
  });
  const [consultar, setConsultar] = useState(false);
  const [resultado,setResultado]=useState([]);
  const [bgColor, setBgColor] = useState('rgb(71,149,212)');
  const{ciudad,pais}=busqueda;
  useEffect(() => {
    const consultarClima=async()=>{
      if(consultar){
        const appId='c3ae7264cb6a2c5d1df1cc1ea6c24571';
        const url=`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        try{
          const resp= await fetch(url);
          const resultado = await resp.json();
          setResultado(resultado);
          setConsultar(false);
          const kelvin=273.15;
          const {main} = resultado;
          const actual = main.temp - kelvin;
          if (parseInt(actual)<10){
            setBgColor('rgb(105,108,149)');
          } else if (parseInt(actual) >= 10 && parseInt(actual) < 25){
            setBgColor('rgb(71,149,212)');
          } else{
            setBgColor('rgb(178,28,61)');
          }
        } catch (error){
          mostarAlerta();
        }
      }
    };
    consultarClima();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [consultar]);

  const bgColorApp={
    backgroundColor:bgColor,
  }

  const mostarAlerta=()=>{
    Alert.alert(
        'Error',
        'No hay resultados, intenta con otra ciudad o país',
        [{text:'Entendido'}]
    );
};

  const ocultarTeclado=()=>{
    Keyboard.dismiss();
  };

  return (
    <Fragment>
      <StatusBar translucent backgroundColor="transparent"/>
      <TouchableWithoutFeedback
      onPress={()=>ocultarTeclado()}
      >
      <View style={[styles.app,bgColorApp]}>
        <View style={styles.contenido}>
          <Clima resultado={resultado}/>
        <Formulario busqueda={busqueda} setBusqueda={setBusqueda} setConsultar={setConsultar}/>
        </View>
      </View>
      </TouchableWithoutFeedback>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  app:{
    flex: 1,
    // backgroundColor: 'rgb(71,149,212)',
    justifyContent: 'center',
  },
  contenido:{
    marginHorizontal: '2.5%',
  },
});

export default App;
