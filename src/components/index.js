import React from 'react';
import Search from './search';
import History from './/history';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import {useTheme} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const MainApp = () => {
  const {colors} = useTheme();

  return (
    <Tab.Navigator tabBarOptions={{activeTintColor: colors.primary}}>
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="search" color={focused ? colors.primary : colors.text} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="history" color={focused ? colors.primary : colors.text} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainApp;
