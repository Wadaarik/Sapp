import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    Image,
    FlatList,
    TouchableOpacity, Pressable, Button
} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import SegmentedControlTab from 'react-native-segmented-control-tab';

const DataImages = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Nike shoes',
        uri: 'https://media.intersport.fr/is/image/intersportfr/CT6022_YIM_PR?$produit_l$'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Levis jacket',
        uri: 'https://cdn.laredoute.com/products/b/2/f/b2f39bc4b7332aa35e6fb41f490a701d.jpg?imgopt=twic&twic=v1/resize=640'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Brown pants',
        uri: 'https://assets.laboutiqueofficielle.com/w_1100,q_auto,f_auto/media/products/2020/09/30/celio_236447_SOCRATE3_KAKI-FONCE_20201008T145441_01.jpg'
    },
    {
        id: 'jjbndjbn-3da1-471f-bd96-145571e29d72',
        title: 'Orange t-shirt',
        uri: 'https://static.pullandbear.net/2/photos/2021/I/0/2/p/8240/514/615/8240514615_1_1_3.jpg?t=1620654574266'
    },
    {
        id: 'okndojnb-3da1-471f-bd96-145571e29d72',
        title: 'Pull&Bear t-shirt',
        uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ff2%2F21%2Fbb%2Ff221bbccb568061ecd8b82066c986ffe.jpg&f=1&nofb=1'
    },
];

const DataTenues = [
    {
        id: 'kjdnbjbn-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Tenue 01',
        uri: 'https://www.next.co.uk/nxtcms/resource/image/4440468/portrait_ratio4x5/320/400/64c43ecfceff694f91b2e93046ce708e/Ux/mens-night.jpg'
    },
    {
        id: 'kjdnc1s6-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Tenue 02',
        uri: 'https://media.kohlsimg.com/is/image/kohls/Mens-dp-20211018-vn-holiday-dressing?scl=1&fmt=pjpeg'
    }
];

const numColumns = 2;

const ItemAll = ({ onPress, backgroundColor, title, uri }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={styles.subtitleItem} numberOfLines={1}>{title}</Text>
        <Image style={styles.imageGrid} source={{uri}} />
    </TouchableOpacity>
);

const TenuesAll = ({ onPress, backgroundColor, title, uri}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={styles.subtitleItem} numberOfLines={1}>{title}</Text>
        <Image style={styles.imageGrid} source={{uri}} />
    </TouchableOpacity>
);



export default function DressingScreen(){

    //TABS INDEXES
    const [customSelectedIndex, setCustomSelectedIndex] = useState(0);
    const updateCustomSegment = (index) => {
        setCustomSelectedIndex(index);
    };


    //LIST ITEMS
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        return (
        <ItemAll
            item={item}
            onPress={() => setSelectedId(item.id)}
            title={item.title} uri={item.uri}
        />
        );
    };
    const renderTenues = ({ item }) => {
        return (
        <TenuesAll
            item={item}
            onPress={() => setSelectedId(item.id)}
            title={item.title} uri={item.uri}
        />
        );
    };

    function SnapView() {
        return null;
    }


    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.head}>
                <View style={styles.header}>
                    <Text style={styles.title}>Mon dressing</Text>
                    <MaterialCommunityIcons style={styles.title} name="magnify" color='#0E0E26'/>
                </View>
            </View>
            <View style={styles.tab}>
                <SegmentedControlTab
                    borderRadius={0}
                    values={['Tout', 'Mes tenues']}
                    selectedIndex={customSelectedIndex}
                    onTabPress={updateCustomSegment}
                    tabsContainerStyle={{
                        height: 45,
                        backgroundColor: '#ffffff',
                    }}
                    tabStyle={{
                        color: '#0E0E26',
                        borderColor: 'transparent',
                    }}
                    activeTabStyle={{ backgroundColor: '#ffffff', borderBottomColor: '#ED2D90', borderWidth: 1, marginTop: 2 }}
                    tabTextStyle={{ color: '#0E0E26', fontWeight: 'bold', fontSize: 16 }}
                    activeTabTextStyle={{ color: '#0E0E26', fontSize: 16 }}
                />
                {customSelectedIndex === 0 && (
                    <View style={styles.viewAll}>
                        <FlatList
                            data={DataImages}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            numColumns={numColumns}
                        />
                    </View>
                )}
                {customSelectedIndex === 1 && (
                    <View style={styles.viewAll}>
                        <FlatList
                            data={DataTenues}
                            renderItem={renderTenues}
                            keyExtractor={item => item.id}
                        />
                    </View>
                )}
            </View>
            <View style={styles.addItem}>
                <Button title="My btn" onPress={SnapView} style={styles.button}  />
            </View>
        </SafeAreaView>
    );

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    head: {
        height: 50,
        flexDirection: "column",
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        width: '100%',
    },
    header: {
        height: 50,
        flexDirection: "row",
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        width: '100%',
    },
    title: {
        color: '#0E0E26',
        fontSize: 25,
    },
    tab: {
        flexDirection: "column",
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        width: '100%',
    },
    viewAll: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "baseline",
        maxHeight: 570
    },
    imageGrid: {
        width: "100%",
        height: 150,
        margin: 10
    },
    subtitleItem: {
        color: '#0E0E26',
        fontSize: 16,
        width: 150
    },
    item: {
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        margin: 10,
    },
    addItem:{
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    button:{
        backgroundColor: '#ED2D90',
        borderRadius: 50,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
    }
});
