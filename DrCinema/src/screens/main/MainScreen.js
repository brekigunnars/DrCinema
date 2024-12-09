import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MovieListScreen from '../movies/MovieListScreen';
import CinemasScreen from '../cinemas/CinemasScreen';
import UpcomingMoviesScreen from '../upcoming/UpcomingMoviesScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Movies"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Movies') {
            iconName = focused ? 'film' : 'film-outline';
          } else if (route.name === 'Cinemas') {
            iconName = focused ? 'location' : 'location-outline';
          } else if (route.name === 'Upcoming') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Movies" component={MovieListScreen} />
      <Tab.Screen name="Cinemas" component={CinemasScreen} />
      <Tab.Screen name="Upcoming" component={UpcomingMoviesScreen} />
    </Tab.Navigator>
  );
};

export default MainScreen;
