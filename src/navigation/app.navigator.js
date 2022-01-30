import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {appRoutes} from '../routes/app.routes';
import AuthNavigator from './auth.navigator';

const Stack = createStackNavigator();

const AppNavigator = props => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} {...props}>
      <Stack.Screen
        name={appRoutes.AUTH}
        component={AuthNavigator}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: 'push',
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
