import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { View, Text } from 'react-native'
import Login from '../../pages/LoggedOut/Login';
import SignUp from '../../pages/LoggedOut/SignUp';


const Stack = createNativeStackNavigator();

const LoggedOutNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
            
       </Stack.Navigator>
    )
}

export default LoggedOutNavigator
