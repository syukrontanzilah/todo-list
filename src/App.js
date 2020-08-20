import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import FlashMessage from "react-native-flash-message";
import Router from './Router/Index';

const MainApp = () => {
  console.disableYellowBox = true;
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  )
}

const App = () => {
  return (
    <MainApp />
  )
}

export default App

