import React, {Component} from 'react';
import {createAppContainer,createStackNavigator} from  'react-navigation';
import Home from './src/screens/Home';
import bandaLarga from './src/screens/bandaLarga';
import fixo from './src/screens/fixo';
import bandaLargaEntrar from './src/screens/bandaLargaEntrar';
import fixoEntrar from './src/screens/fixoEntrar';

const AppNavigator = createStackNavigator({
  Home:{
      screen:Home
    },
    bandaLarga:{
      screen:bandaLarga
    },
    fixo:{
      screen:fixo
    },
    bandaLargaEntrar:{
      screen:bandaLargaEntrar
    },
    fixoEntrar:{
      screen:fixoEntrar
    }

  });
  

export default createAppContainer(AppNavigator);