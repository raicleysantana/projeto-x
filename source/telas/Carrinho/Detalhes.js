import React from 'react';
import { Image, Text, StyleSheet, View, Dimensions } from 'react-native';
const imagem = require('../../../assets/topo.png');
const width = Dimensions.get('screen').width;
import Texto from '../../components/Texto';

export default function Detalhes() {



    return (<>

        <Texto style={styles.tituloCarrinho}>Carrinho</Texto>

        <Texto style={styles.detalhes}>Detalhes do Carrinho</Texto>
        <Texto style={styles.titulo}>Kit IOT</Texto>
        <View style={styles.vendedorContainer}>
            <Image style={styles.logoVendedor} source={require('../../../assets/logo.png')} />
            <Texto style={styles.nomeVendedor}>Nuvem Cloud Shop</Texto>
        </View>
        <Texto style={styles.descricao}>Um lit iot que revoluciona a vida dos estudantes</Texto>
        <Texto style={styles.preco}>R$ 99,00 </Texto>
    </>
    );

}
const styles = StyleSheet.create({
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