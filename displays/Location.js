import React from 'react';

import {
    StyleSheet,
    Image,
    View,
    SafeAreaView,
    Text,
    TouchableOpacity,
    Animated,
    Button,
} from 'react-native';

import {icons, images, SIZES, COLORS, FONTS} from '../constants';

const Location = ({navigation}) => {

    function renderHeader(){
        return(
            <View>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: 30,
                        justifyContent: 'center',
                    }}
                    onPress={() => navigation.goBack()}>
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderMap(){
        return(
            <View style={{flex:1,width: '100%', height:'100%',}}>

                <Image style={{flex:1, width: '100%', height:'100%', resizeMode:'contain'}} source={images.googlemap}></Image>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMap()}
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
});

export default Location;
