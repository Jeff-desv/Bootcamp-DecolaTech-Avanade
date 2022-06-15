import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Image,
  View, 
  TouchableOpacity,
} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

export default function App() {
  //Nosso Aplicativo

  //logica do app
  const [toggle, setToggle] = useState(false); 
  //true = White
  //false = Black

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(() => {
    //Liga Flash do Celular
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(()=>{
    const subscription = RNShake.addListener(()=>{
      setToggle(oldToggle => !oldToggle);
    });

    //Essa função vai ser chamada quando o componente
    //for desmontado
    return ()=> subscription.remove();
  }, []);
  //if toggle return light
  return (
    //Luz
    <View style={toggle ? styles.containerLight : styles.container}>
      <TouchableOpacity onPress={handleChangeToggle}>

        <Image style={toggle ? styles.lightingOn : styles.lightingOff} source={toggle 
        ? require('./icons/acesa.png')
        : require('./icons/apagada.png')} />
        <StatusBar style="auto" />

        <Image style={styles.dioLogo} source={toggle 
        ? require('./icons/Dio1.png')
        : require('./icons/Dio2.png')} />
        <StatusBar style="auto" />

      </TouchableOpacity>
    </View>
    
  );
}


//Estilos do App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },

  //Estilo da Luz
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    with: 150,
    height: 150,
  }, 
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    with: 150,
    height: 150,
  },

  //Logo DIO
  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  }
});
