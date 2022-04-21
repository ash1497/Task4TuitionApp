import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
const Location = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>

                <MapView
                    style={styles.mapStyle}
                    initialRegion={{
                        latitude: 43.5782592723825,
                        longitude: -79.73216994212102,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        draggable
                        coordinate={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                        }}
                        onDragEnd={
                            (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
                        }
                        title={'Test Marker'}
                        description={'This is a description of the marker'}
                    />
                </MapView>
            </View>
        </SafeAreaView>
    )
};
export default Location;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    mapStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});
