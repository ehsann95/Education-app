import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer as Router} from '@react-navigation/native';
import StackNavigation from './src/Navigation/StackNavigation';

const App = () => {
  return (
    <Router>
      <StackNavigation />
    </Router>
  );
};

export default App;
