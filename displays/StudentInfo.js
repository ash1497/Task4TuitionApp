import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
//import {isIphoneX} from 'react-native-iphone-x-helper';
import {icons, COLORS, SIZES, FONTS} from '../constants';

const StudentInfo = ({route, navigation}) => {
  const [students, setStudents] = React.useState(null);
  const [currentLocation, setCurrentLocation] = React.useState(null);
  React.useEffect(() => {
    let {item, currentLocation} = route.params;
    setStudents(item);
    setCurrentLocation(currentLocation);
  }, [route.params]);

  function renderHeader() {
    return (
      <View style={{flexDirection: 'row'}}>
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

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
              paddingTop: 10
          }}>
          <View
            style={{
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: SIZES.padding * 3,
              borderRadius: SIZES.radius,


            }}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>{students?.name}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: 30,
            justifyContent: 'center',
          }}>
          <Image
            source={icons.list}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return <SafeAreaView style={styles.container}>{renderHeader()}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default StudentInfo;
