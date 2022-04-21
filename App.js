import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/tabs';
import {Home, StudentInfo, Location, AddStudent, Camera, Payment} from './displays';



const Stack = createStackNavigator();
const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={"Home"}
            >
                <Stack.Screen name="Home" component={Tabs}/>
                <Stack.Screen name="StudentInfo" component={StudentInfo}/>
                <Stack.Screen name="Location" component={Location}/>
                <Stack.Screen name="AddStudent" component={AddStudent}/>
                <Stack.Screen name="Camera" component={Camera}/>
                <Stack.Screen name={'Payment'} component={Payment}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App;
