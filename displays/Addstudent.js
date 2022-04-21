import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Camera from './Camera';

import {icons, COLORS} from '../constants';

const AddStudent = ({navigation}) => {
  const [task, setTask] = useState('Lawn-Mowing');

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        paddingTop: 15,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 10,
      }}>
      <Text
        style={{
          paddingLeft: '30%',
          fontSize: 25,
          fontWeight: 'bold',
          color: COLORS.primary,
        }}>
        {' '}
        Add Student{' '}
      </Text>
      <View
        style={{
          height: '95%',
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 5,
          paddingRight: 5,
          borderRadius: 20,
          backgroundColor: COLORS.primary,
        }}>
        <TextInput
          style={{
            margin: 5,
            borderRadius: 10,
            backgroundColor: COLORS.lightGray,
            fontWeight: 'bold',
            fontSize: 14,
          }}
          placeholder="Full Name"
        />
        <TextInput
          style={{
            margin: 5,
            borderRadius: 10,
            backgroundColor: COLORS.lightGray,
            fontWeight: 'bold',
            fontSize: 14,
          }}
          placeholder="Age"
        />
        <TextInput
          style={{
            margin: 5,
            borderRadius: 10,
            backgroundColor: COLORS.lightGray,
            fontWeight: 'bold',
            fontSize: 14,
          }}
          placeholder="College/University"
        />
        <TextInput
          style={{
            margin: 5,
            borderRadius: 10,
            backgroundColor: COLORS.lightGray,
            fontWeight: 'bold',
            fontSize: 14,
          }}
          placeholder="Student ID"
        />
        <TextInput
          style={{
            margin: 5,
            borderRadius: 10,
            backgroundColor: COLORS.lightGray,
            fontWeight: 'bold',
            fontSize: 14,
          }}
          placeholder="Availability"
        />
        <Text
          style={{
            marginBottom: 10,
            marginTop: 20,
            marginLeft: 81,
            width: 200,
            borderRadius: 10,
            backgroundColor: COLORS.lightGray,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
          }}>
          Please Select Task
        </Text>
        <Picker
          selectedValue={task}
          onValueChange={currentTask => setTask(currentTask)}
          style={{backgroundColor: COLORS.lightGray}}>
          <Picker.Item label="Lawn-Mowing" value="Lawn-Mowing" />
          <Picker.Item label="Gardening" value="Gardening" />
          <Picker.Item label="Snow-Shovelling" value="Snow-Shovelling" />
          <Picker.Item label="Car-Washing" value="Car-Washing" />
          <Picker.Item label="Miscellaneous" value="Miscellaneous" />
        </Picker>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 81,
            width: 200,
            borderRadius: 10,
            backgroundColor: COLORS.lightGray,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
          }}>
          Task: {task}
        </Text>

        <View style={{marginTop: 20, flex: 1, alignItems: 'center'}}>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 200,
              margin: 5,
              borderRadius: 10,
              backgroundColor: COLORS.lightGray,
              fontWeight: 'bold',
              fontSize: 14,
              textAlign: 'center',
            }}>
            Please Take a Picture
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Camera')}
            style={{
              height: 50,
              width: 50,
              margin: 10,
              backgroundColor: COLORS.primary,
              borderRadius: 80,
            }}>
            <Image
              source={icons.camera}
              resizeMode="stretch"
              style={{
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{
              height: 30,
              width: 140,
              margin: 10,
              backgroundColor: COLORS.lightGray,
              borderRadius: 50,
              elevation: 8,
            }}>
            <Text
              style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>
              SUBMIT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default AddStudent;
