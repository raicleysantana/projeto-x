import {StatusBar} from 'expo-status-bar';
import {
    StyleSheet,
    View,
    SafeAreaView,
    FlatList
} from 'react-native';
import Detalhes from './source/telas/Carrinho/Detalhes';
import Topo from './source/telas/Carrinho/Topo';
import Mocks from "./source/mocks/carrinho";
import Item from "./source/telas/Carrinho/Item";
import {useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import Texto from "./source/components/Texto";

export default function App() {

    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_700Bold
    });

    if (!fontsLoaded) {
        return <View/>
    }

    return (
        <SafeAreaView style={styles.container}>


            <FlatList
                data={Mocks.itens.lista}
                renderItem={Item}
                keyExtractor={({nome}) => nome}
                ListHeaderComponent={() => {
                    return <>
                        <Topo {...Mocks.topo}/>
                        <Detalhes {...Mocks.detalhes} />

                        <Texto>
                            {Mocks.itens.titulo}
                        </Texto>
                    </>
                }}

                ListFooterComponent={() => {
                    return <>
                        <Texto>{Mocks.itens2.titulo}</Texto>
                        <FlatList
                            data={Mocks.itens2.lista}
                            renderItem={Item}
                            keyExtractor={({nome}) => nome}
                        />
                    </>
                }}
            />
            <StatusBar/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    titulo: {
        color: "#ffa500",
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 30,
        fontSize: 25
    },


});
