import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {Home, StudentInfo, Location} from './displays';

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
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="StudentInfo" component={StudentInfo}/>
                <Stack.Screen name="Location" component={Location}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App;
