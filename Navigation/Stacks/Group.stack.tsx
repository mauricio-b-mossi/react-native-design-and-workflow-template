import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Main from '../../pages/LoggedIn/Group/Main.group'
import Create from '../../pages/LoggedIn/Group/Create.group'
import One from '../../pages/LoggedIn/Group/One.group'

const Group = () => {

    const Stack = createNativeStackNavigator()


    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name='main' component={Main}/>
            <Stack.Screen name='createGroup' component={Create}/>
            <Stack.Screen name='oneGroup' component={One}/>
        </Stack.Navigator>
    )
}

export default Group
