import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.createDrawerNavigator name = 'Home' component = {TabNavigator}/>
        <Drawer.createDrawerNavigator name = 'Profile' component = {Profile}/>
        </Drawer.Navigator> 
    );
};

export default DrawerNavigator;