import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import {icons, images, SIZES, COLORS, FONTS} from '../constants';

const Home = () => {
  const CurrentLocation = {
    streetName: '7042 Guildhall Court',
    gps: {
      latitude: 43.576879694930376,
      longitude: -79.78592687986493,
    },
  };

  const taskData = [
    {
      id: 1,
      name: 'lawn',
      icon: icons.lawnmowing,
    },
    {
      id: 2,
      name: 'garden',
      icon: icons.gardening,
    },
    {
      id: 3,
      name: 'snow',
      icon: icons.snowshovel,
    },
    {
      id: 4,
      name: 'car',
      icon: icons.carwash,
    },
    {
      id: 5,
      name: 'misc.',
      icon: icons.misc,
    },
  ];

  const studentData = [
    {
      id: 1,
      name: 'Zahaak Khan',
      rating: 4.8,
      categories: [1, 4],
      //priceRating: affordable,
      price: 25,
      photo: images.timmy,
      //duration: '30 - 45 min',
      availability: '2:00 PM - 8:00 PM',
      location: {
        // latitude: 1.5347282806345879,
        //longitude: 110.35632207358996,
        latitude: 43.394876,
        longitude: -79.894195,
      },
      courier: {
        avatar: images.avatar_1,
        name: 'Zahaak Khan',
      },
      menu: [
        {
          taskId: 1,
          name: 'Lawn Mowing',
          photo: images.lawnmow,
          description:
            'Excellent technique and care. Evenly cur lawn, the best in the business.',
          price: 25,
        },
        {
          taskId: 2,
          name: 'Car Wash',
          photo: images.carwash,
          description: 'Amazing at washing cars, tons of experience.',
          price: 100,
        },
      ],
    },
  ];

  const [categories, setCategories] = React.useState(taskData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [students, setStudents] = React.useState(studentData);
  //const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)

  function onSelectCategory(category) {
    //filter the students to the job
    let studentList = studentData.filter(a =>
      a.categories.includes(category.id),
    );
    setStudents(studentList);

    setSelectedCategory(category);
  }
  function renderHeader() {
    return (
      <View style={{flexDirection: 'row', height: 50}}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: 'center',
          }}>
          <Image
            source={icons.creditcard}
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
            paddingTop: SIZES.padding,
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '70%',
              height: '100%',
              backgroundColor: COLORS.lightGray,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: SIZES.radius,
            }}>
            <Text style={{...FONTS.h2}}>{CurrentLocation.streetName}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding * 2,
            justifyContent: 'center',
          }}>
          <Image
            source={icons.nearby}
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
  function renderMainCategories() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.primary,
            padding: 12,
            borderRadius: 5,
            borderStyle: 'solid',
            borderColor: 'yellow',
            margin: 20,
          }}
          onPress={() => onSelectCategory(item)}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 60,
              height: 60,
              borderRadius: 5,
              backgroundColor: 'lightyellow',
            }}>
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{
                width: 60,
                height: 60,
              }}
            />
          </View>
          <Text
            style={{
              marginTop: SIZES.padding,
              color:
                selectedCategory?.id == item.id ? COLORS.white : COLORS.black,
              ...FONTS.body5,
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };
    return (
      <View style={{padding: SIZES.padding3}}>
        <Text
          style={{
            textAlign: 'center',
            ...FONTS.h1,
            fontWeight: 'bold',
            color: COLORS.primary,
            padding: SIZES.padding,
          }}>
          CHOOSE BY TASK
        </Text>
        <FlatList
          data={categories}
          horizontal
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{padding: 15}}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderMainCategories()}
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
export default Home;
