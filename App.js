import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Instagram from "./assets/scr/Instagram";
import facebook from "./scr/facebook";
import instagram from "./scr/Instagram";



export default class App extends React.Component{
render(){
return<AppContainer></AppContainer>




}






}
const TabNavigator=createBottomTabNavigator({facebook: {scr: facebook},
  instagram: {scr: Instagram }})

const AppContainer= createAppContainer(TabNavigator)
    