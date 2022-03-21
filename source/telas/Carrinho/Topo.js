import React from 'react';
import { Image, Text, StyleSheet, Dimensions } from 'react-native';
import topo from '../../../assets/topo.png'
const width = Dimensions.get('screen').width;
import Texto from '../../components/Texto';
export default function Topo() {
    return (<>
        <Image style={styles.topo} source={topo} />
        <Texto style={styles.tituloCarrinho}>Carrinho</Texto>
    </>
    );

}
const styles = StyleSheet.create({
    topo: {
        width: "100%",
        height: 582 / 772 * width
    },
    tituloCarrinho: {
        position: "absolute",
        paddingVertical: 60,
        textAlign: "center",
        width: "100%",
        fontSize: 20,
        lineHeight: 40,
        fontWeight: 'bold',
    }
});