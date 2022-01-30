import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {colors} from '../styles';
import {appRoutes} from '../routes/app.routes';
import ScanItem from '../screens/ScanItem';
import Results from '../screens/Results';
const Stack = createStackNavigator();

const mainRoutes = [
  {
    name: appRoutes.SCAN_ITEM,
    component: ScanItem,
    options: {
      headerShown: false,
    },
  },
  {
    name: appRoutes.RESULTS,
    component: Results,
    options: {
      headerShown: false,
    },
  },
];

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={appRoutes.SCAN_ITEM}
      screenOptions={{
        headerTitleAllowFontScaling: true,
        headerTitle: '',
        headerTitleStyle: {color: colors.cliqkiBlack},
        headerStyle: {backgroundColor: colors.cliqkiWhite},
        headerTintColor: colors.cliqkiBlack,
      }}>
      {mainRoutes.map(({name, options, component}) => {
        return (
          <Stack.Screen
            name={name}
            component={component}
            key={name}
            options={options}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default MainNavigator;
