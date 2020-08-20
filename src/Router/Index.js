import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Splash from '../pages/Splash';
import Home from '../pages/Home';

const Stack = createStackNavigator()

const Router = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Home" component={Home} />
          
        </Stack.Navigator>
    )
}

export default Router


