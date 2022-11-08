import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from "../screens/CreatePost";
import Feed from "../screens/Feed";
import { TabBarIOSItem } from 'react-native';

const BottomTabNavigator = () => {
    return (
        <createBottomTabNavigator.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "Feed") {
                        iconName = focused
                            ? 'book'
                            : 'book-outline'
                    } else if (route.name === 'CreatePost') {
                        iconName = focused
                            ? 'create'
                            : create - outline;
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                },
            })}
            tabBarOptions = {{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <createBottomTabNavigator.Screen name = "Feed" component = {Feed} />
            <createBottomTabNavigator.Screen name = "CreatePost" component = {CreatePost}/>
            </createBottomTabNavigator.Navigator>
    )
}

export default BottomTabNavigator;