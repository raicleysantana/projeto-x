import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions
} from 'react-native';
const imagem = require('./assets/topo.png');

const width = Dimensions.get('screen').width;


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.topo} source={imagem} />
      <Text style={styles.tituloCarrinho}>Carrinho</Text>


      <Text style={styles.detalhes}>Detalhes do Carrinho</Text>
      <Text style={styles.titulo}>Kit IOT</Text>
      <View style={styles.vendedorContainer}>
        <Image style={styles.logoVendedor} source={require('./assets/logo.png')} />
        <Text style={styles.nomeVendedor}>Nuvem Cloud Shop</Text>
      </View>
      <Text style={styles.descricao}>Um lit iot que revoluciona a vida dos estudantes</Text>
      <Text style={styles.preco}>R$ 99,00 </Text>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  topo: {
    backgroundColor: 'red',
    width: '100%',
    height: (582 / 772) * width,
  },

  tituloCarrinho: {
    position: 'absolute',
    paddingVertical: 60,
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 40,
  },

  detalhes: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 35,
    textAlign: 'center',
  },

  titulo: {
    color: '#ffa500',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 35,
    textAlign: 'center'
  },

  nomeVendedor: {
    color: "#a3a3a3",
    fontSize: 18,
    lineHeight: 26,
    marginLeft: 10
  },

  descricao: {
    color: "#a1a1a1",
    fontSize: 20,
  },

  preco: {
    color: 'black',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'right',
    paddingVertical: 10,
    paddingHorizontal: 10
  },

  logoVendedor: {
    width: 32,
    height: 32,
    marginLeft: 30,
  },

  vendedorContainer: {
    flexDirection: 'row',
    padding: 10,
  }
});
