import topo from '../../assets/topo.png';
import logoVendedor from '../../assets/logo.png';

import antena2g from '../../assets/Itens/antena2g3g.png';
import antenawifi from '../../assets/Itens/antenaWifi.png';
import modem from '../../assets/Itens/modem.png';
import node from '../../assets/Itens/nodeMcu.png';

import devkit from '../../assets/Itens2/iot-devkit.png';
import spiderRobot from '../../assets/Itens2/spider_robot.png';
import roboBipede from '../../assets/Itens2/1434_1_H.png';
import placaNano from '../../assets/Itens2/placa_nano.png';
import raspberry from '../../assets/Itens2/raspberry.png';

const carrinho = {
    topo: {
        titulo: "Carrinho",
        imagem: topo
    },
    detalhes: {
        titulo: "Detalhes do Carrinho",
        tituloProduto: "Kit IoT",
        descricao: "Um kit IoT que revoluciona a vida dos estudantes",
        logoVendedor: logoVendedor,
        nomeVendedor: "Nuven's Shopping",
        preco: "R$ 99,00"
    },
    itens: {
        titulo: "ITENS DO CARRINHO",
        lista: [
            {
                nome: "Antena 2g/3g",
                imagem: antena2g,
            },
            {
                nome: "Antena Wifi",
                imagem: antenawifi,
            },
            {
                nome: "Modem",
                imagem: modem,
            },
            {
                nome: "Node MCU",
                imagem: node,
            }
        ]
    },

    itens2: {
        titulo: "SUGESTÕES",
        lista: [
            {
                nome: "IoT DevKit - LoRaWAN",
                imagem: devkit,
            },
            {
                nome: "Spider Robot",
                imagem: spiderRobot,
            },
            {
                nome: "Robô Bipede",
                imagem: roboBipede,
            },
            {
                nome: "Placa Nano V3 + Cabo USB",
                imagem: placaNano,
            },
            {
                nome: "Raspberry Pi Pico",
                imagem: placaNano,
            }
        ]
    }
}

export default carrinho;