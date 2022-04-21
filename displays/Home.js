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

const Home = ({navigation}) => {
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
      name: 'Lawn-Mowing',
      short: 'Lawn',
      icon: icons.lawnmowing,
    },
    {
      id: 2,
      name: 'Gardening',
      short: 'Garden',
      icon: icons.gardening,
    },
    {
      id: 3,
      name: 'Snow Shovelling',
      short: 'Snow',
      icon: icons.snowshovel,
    },
    {
      id: 4,
      name: 'Car Washing',
      short: 'Car',
      icon: icons.carwash,
    },
    {
      id: 5,
      name: 'Miscellaneous',
      short: 'Misc.',
      icon: icons.misc,
    },
  ];

  const studentData = [
    {
      id: 1,
      name: 'Zahaak Khan',
      reliability: 4.8,
      categories: [1, 4],
      photo: images.zahaak,
      availability: '2:00 PM - 8:00 PM',
      location: {
        latitude: 43.394876,
        longitude: -79.894195,
      },
      avatar: {
        avatar: images.avatar1,
        name: 'Zahaak Khan',
      },
      task: [
        {
          taskId: 1,
          name: 'Lawn Mowing',
          photo: images.lawnmow,
          description:
            'Description: Excellent technique and care. Evenly cut lawn, years of experience.',
          desc2:
            'Education: Studying Computer Science Mobile Computing at Sheridan College. Currently Enrolled in 2nd year',
          desc3: 'Availibility: Tuesday to Sunday from 3pm-8pm',
          desc4: 'Contact (Text or Call): (905)123-4567',
          price: 25,
        },
        {
          taskId: 2,
          name: 'Car Wash',
          photo: images.carwash,
          description:
            'Description: Amazing at washing cars, tons of experience.',
          desc2:
            'Education: Studying Computer Science Mobile Computing at Sheridan College. Currently Enrolled in 2nd year',
          desc3: 'Availibility: Tuesday to Sunday from 3pm-8pm',
          desc4: 'Contact (Text or Call): (905)123-4567',
          price: 100,
        },
      ],
    },

    {
      id: 2,
      name: 'Aashir Hussain',
      reliability: 4.9,
      categories: [2, 3],
      photo: images.aashir,
      availability: '11:00 AM - 4:00 PM',
      location: {
        latitude: 43.5782592723825,
        longitude: -79.73216994212102,
      },
      avatar: {
        avatar: images.avatar7,
        name: 'Aashir Hussain',
      },
      task: [
        {
          taskId: 1,
          name: 'Gardening',
          photo: images.gardening,
          description:
            'Description: Highly Knowledgeable in plant care, 4 years of experience in home gardening.',
          desc2:
            'Education: Studying Computer Science Mobile Computing at Sheridan College. Currently Enrolled in 2nd year',
          desc3: 'Availibility: Tuesday to Sunday from 3pm-8pm',
          desc4: 'Contact (Text or Call): (905)123-4567',
          price: 30,
        },
        {
          taskId: 2,
          name: 'Snow Shovelling',
          photo: images.snowshovel,
          description:
            'Description: Experience with snow blower and various types of shovels, fast and clean work.',
          desc2:
            'Education: Studying Computer Science Mobile Computing at Sheridan College. Currently Enrolled in 2nd year',
          desc3: 'Availibility: Tuesday to Sunday from 3pm-8pm',
          desc4: 'Contact (Text or Call): (905)123-4567',
          price: 40,
        },
      ],
    },

    {
      id: 3,
      name: 'Olivia Miller',
      reliability: 4.4,
      categories: [2],
      photo: images.lisa,
      availability: '8:00 AM - 1:00 PM',
      location: {
        latitude: 43.55884361600115,
        longitude: -79.76512129220602,
      },
      avatar: {
        avatar: images.avatar4,
        name: 'Olivia Miller',
      },
      task: [
        {
          taskId: 1,
          name: 'Gardening',
          photo: images.gardening,
          description:
            'Description: Parents own a plant nursery, experienced gardner feffssdfdsfdfdssffsdfds',
          desc2:
            'Education: Studying Computer Science Mobile Computing at Sheridan College. Currently Enrolled in 2nd year',
          desc3: 'Availibility: Tuesday to Sunday from 3pm-8pm',
          desc4: 'Contact (Text or Call): (905)123-4567',
          price: 35,
        },
      ],
    },

    {
      id: 4,
      name: 'Adam Miller',
      reliability: 4.1,
      categories: [4, 5],
      photo: images.timmy,
      availability: '11:00 AM - 4:00 PM',
      location: {
        latitude: 43.5782592723825,
        longitude: -79.73216994212102,
      },
      avatar: {
        avatar: images.avatar2,
        name: 'Adam Miller',
      },
      task: [
        {
          taskId: 1,
          name: 'Car Wash',
          photo: images.carwash,
          description:
            'Description: Owns a Sports car that is maintained on a weekly basis. flawless technique.',
          desc2:
            'Education: Studying Computer Science Mobile Computing at Sheridan College. Currently Enrolled in 2nd year',
          desc3: 'Availibility: Tuesday to Sunday from 3pm-8pm',
          desc4: 'Contact (Text or Call): (905)123-4567',
          price: 120,
        },
        {
          taskId: 2,
          name: 'Miscellaneous',
          photo: images.misc,
          description:
            'Description: Willing to do other predefined tasks, proficient with tools.',
          desc2:
            'Education: Studying Computer Science Mobile Computing at Sheridan College. Currently Enrolled in 2nd year',
          desc3: 'Availibility: Tuesday to Sunday from 3pm-8pm',
          desc4: 'Contact (Text or Call): (905)123-4567',
          price: 80,
        },
      ],
    },
  ];

  const [categories, setCategories] = React.useState(taskData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [students, setStudents] = React.useState(studentData);
  const [currentLocation, setCurrentLocation] = React.useState(CurrentLocation);

  function getTaskNameById(id) {
    let task = categories.filter(a => a.id == id);

    if (task.length > 0) {
      return task[0].name;
    }

    return '';
  }

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
          }}
          onPress={() =>
              navigation.navigate('Location')
          }>
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
              ...FONTS.body5, fontWeight: 'bold'
            }}>
            {item.short}
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
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }

  function renderStudentList() {
    const renderItem = ({item}) => (
      <TouchableOpacity
        style={{marginBottom: 20}}
        onPress={() =>
          navigation.navigate('StudentInfo', {
            item,
            currentLocation,
          })
        }>
        <View style={{marginBottom: 10}}>
          <Image
            source={item.photo}
            resizeMode="cover"
            style={{
              width: '100%',
              height: 180,
              borderRadius: 10,
            }}
          />
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              height: 50,
              left: '45%',
              width: SIZES.width * 0.5,
              backgroundColor: COLORS.lightGray,
              borderTopLeftRadius: 10,
              borderBottomRightRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>
              {item.availability}
            </Text>
          </View>
        </View>

        <Text style={{fontSize: 20, fontWeight: '500'}}>{item.name}</Text>

        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
          }}>
          <Image
            source={icons.thumbsup}
            style={{height: 18, width: 18, marginRight: 10}}
          />
          <Text style={{fontWeight: 'bold'}}>{item.reliability}</Text>

          <View style={{flexDirection: 'row', marginLeft: 10}}>
            {item.categories.map(taskID => {
              return (
                <View style={{flexDirection: 'row'}} key={taskID}>
                  <Text style={{fontWeight: 'bold'}}>
                    {getTaskNameById(taskID)}
                  </Text>
                  <Text> . </Text>
                </View>
              );
            })}
          </View>
        </View>
      </TouchableOpacity>
    );

    return (
      <FlatList
        data={students}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderMainCategories()}
      {renderStudentList()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
export default Home;
