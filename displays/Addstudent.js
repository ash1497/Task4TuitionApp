import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {COLORS} from '../constants';
import { RNCamera } from 'react-native-camera'

const AddStudent = () => {
    const [task, setTask] = useState('Lawn-Mowing');

  return (
    <View style={{width:'100%', height: '100%', paddingTop: 15, paddingRight: 10, paddingLeft: 10, paddingBottom: 10}}>
      <Text style={{paddingLeft: '30%',fontSize: 25,fontWeight: 'bold', color: COLORS.primary}} > Add Student </Text>
      <View style={{height : '95%',paddingTop: 10,paddingBottom: 10, paddingLeft: 5, paddingRight: 5, borderRadius: 20, backgroundColor: COLORS.primary}}>
        <TextInput style={{margin: 5,borderRadius: 10, backgroundColor: COLORS.lightGray, fontWeight: 'bold', fontSize: 14}} placeholder="Full Name" />
        <TextInput style={{margin: 5,borderRadius: 10, backgroundColor: COLORS.lightGray, fontWeight: 'bold', fontSize: 14}} placeholder="Age" />
          <TextInput style={{margin: 5,borderRadius: 10, backgroundColor: COLORS.lightGray, fontWeight: 'bold', fontSize: 14}} placeholder="College/University" />
          <TextInput style={{margin: 5,borderRadius: 10, backgroundColor: COLORS.lightGray, fontWeight: 'bold', fontSize: 14}} placeholder="Student ID" />
          <TextInput style={{margin: 5,borderRadius: 10, backgroundColor: COLORS.lightGray, fontWeight: 'bold', fontSize: 14}} placeholder="Availability" />
        <Picker
          selectedValue={task}
          onValueChange={currentTask => setTask(currentTask)}
          >
            <Picker.Item label="Lawn-Mowing" value="Lawn-Mowing" />
            <Picker.Item label="Gardening" value="Gardening" />
            <Picker.Item label="Snow-Shovelling" value="Snow-Shovelling" />
            <Picker.Item label="Car-Washing" value="Car-Washing" />
            <Picker.Item label="Miscellaneous" value="Miscellaneous" />
        </Picker>
        <Text style={{paddingLeft: 5,margin: 5,borderRadius: 10, backgroundColor: COLORS.lightGray, fontWeight: 'bold', fontSize: 14}} >Selected: {task}</Text>
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

export default AddStudent
