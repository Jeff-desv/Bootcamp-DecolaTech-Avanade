import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image ,View, SafeAreaView, Pressable, Linking } from 'react-native';

//Variáveis
const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkGit = '#4F565E';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/74883711?v=4';
const urlGithub = 'https://github.com/Jeff-desv';

//Nosso App
export default function App() {

  //Função para o Link do GitHub
  const handlePressGoToGithub = async ()=>{
    console.log('Verificando o Link...');
    const res = await Linking.canOpenURL(urlGithub);
    if(res){
      console.log('Link aprovado');
      console.log('Abrindo o Link...')
      await Linking.openURL(urlGithub);
    }
  };

  //Página do App
  return (
    //Primeiro Container com a Imagem e os Textos
    //Segundo Container com a área do Button
    <SafeAreaView style={styles.container}>

      <StatusBar backgroundColor={colorGithub} barStyle="dark-content" />
      
      <View style={styles.content}>

        <Image accessibilityLabel='Jeffson em um quarto com fundo amarelo'
        style={styles.avatar} source={{uri: imageProfileGithub}}/>

        <Text accessibilityLabel='Nome do Usuário'
        style={[styles.defaultText, styles.name]}>Jeffson Bruno</Text>

        <Text accessibilityLabel='Nome Descritivo'
        style={[styles.defaultText, styles.nickname]}>Jeff-desv</Text>

        <Text accessibilityLabel='Profissão'
        style={styles.defaultText}>Front-End Developer - HTML | CSS | SASS | BOOTSTRAP | JS | REACT</Text>
      </View>

      <View style={styles.content}>
         <Image style={styles.imgCommit} source={require('./img/commit.png')} />
      </View>

      <View style={styles.btn}>
        <Pressable onPress={handlePressGoToGithub}>
          <Text style={[styles.defaultText, styles.description]}>Go!</Text>
        </Pressable>
      </View>
      
    </SafeAreaView>
  );
}

//Nossos Estilos
const styles = StyleSheet.create({
  container: {//Toda a área do app
    flex: 1,
    backgroundColor: colorGithub,
    padding: 20,
    justifyContent: 'center',
  },
  content: {//Alinhamento dos itens
    alignItems: 'center'
  },

  //Textos
  defaultText: {//cor dos textos
    color: colorFontGithub,
  },
  name: {
    marginTop: 20,
    fontSize: 26,
    fontWeight: 'bold',
  },
  nickname: {
    fontSize: 18,
    color: colorDarkGit,
  },
  description: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  //Image
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  imgCommit: {
    marginTop: 20,
    width: 290,
  },

  //btn
  btn: {
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: colorDarkGit,
    borderRadius: 10,
    padding: 20,
  },
});
