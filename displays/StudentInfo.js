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
import {icons, COLORS, SIZES, FONTS} from '../constants';

const StudentInfo = ({route, navigation}) => {
  const [students, setStudents] = React.useState(null);
  const [currentLocation, setCurrentLocation] = React.useState(null);
  const [student, setStudent] = React.useState(null);
  React.useEffect(() => {
    let {item, currentLocation} = route.params;
    setStudent(item);
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
            paddingTop: 5,
            paddingRight: 40,
          }}>
          <View
            style={{
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 30,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              {students?.name}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  function renderStudentInfo() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}>
        {student?.task.map((item, index) => (
          <View key={`task-${index}`} style={{alignItems: 'center'}}>
            <View style={{height: SIZES.height * 0.3}}>
              <Image
                source={item.photo}
                resizeMode="cover"
                style={{
                  width: SIZES.width,
                  height: '100%',
                  borderRadius: 30,
                  marginTop: 10,
                }}
              />
            </View>
            <View
              style={{
                width: SIZES.width,
                alignItems: 'center',
                marginTop: 20,
                paddingHorizontal: SIZES.padding * 2,
              }}>
              <Text
                style={{
                  marginVertical: 20,
                  textAlign: 'center',
                  fontSize: 22,
                  fontWeight: 'bold',
                }}>
                {item.name} - ${item.price.toFixed(2)}/hr
              </Text>
              <View>
                <Text style={{fontSize: 18, padding: 10, lineHeight: 25}}>
                  {item.description}
                </Text>
                <Text style={{fontSize: 18, padding: 10, lineHeight: 25}}>
                  {item.desc2}
                </Text>
                <Text style={{fontSize: 18, padding: 10, lineHeight: 25}}>
                  {item.desc3}
                </Text>
                <Text style={{fontStyle:'italic', fontSize: 18, padding: 10, lineHeight: 25}}>
                  {item.desc4}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  function renderButton() {
    return (
      <View
        style={{
          paddingBottom: 20,
          width: '50%',
          justifyContent: 'center',
          marginLeft: '25%',
        }}>
        <Button
            onPress={() => navigation.navigate('Payment')}
          title="Book an appointment"
          color={COLORS.primary}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderStudentInfo()}
      {renderButton()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default StudentInfo;
