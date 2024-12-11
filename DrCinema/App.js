import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import store from './src/redux/store';

// Screens
import MovieListScreen from './src/screens/movies/MovieListScreen';
import CinemasScreen from './src/screens/cinemas/CinemasScreen';
import CinemaDetailScreen from './src/screens/cinemas/CinemaDetailScreen';
import MovieDetailScreen from './src/screens/movies/MovieDetailScreen';
import UpcomingMoviesScreen from './src/screens/upcoming/UpcomingMoviesScreen';
import UpcomingMovieDetailScreen from './src/screens/upcoming/UpcomingMovieDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MoviesStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Movies"
      component={MovieListScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="MovieDetail"
      component={MovieDetailScreen}
      options={{ title: 'Movie Details' }}
    />
  </Stack.Navigator>
);

const CinemasStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Cinemas"
      component={CinemasScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="CinemaDetail"
      component={CinemaDetailScreen}
      options={{ title: 'Cinema Details' }}
    />
    <Stack.Screen
      name="MovieDetail"
      component={MovieDetailScreen}
      options={{ title: 'Movie Details' }}
    />
  </Stack.Navigator>
);

const UpcomingMoviesStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Upcoming"
      component={UpcomingMoviesScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="UpcomingMovieDetail"
      component={UpcomingMovieDetailScreen}
      options={{ title: 'Movie Details' }}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'MoviesTab') iconName = 'film-outline';
              else if (route.name === 'CinemasTab') iconName = 'location-outline';
              else if (route.name === 'UpcomingTab') iconName = 'time-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#007BFF',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen
            name="MoviesTab"
            component={MoviesStack}
            options={{ headerShown: false, title: 'Movies' }}
          />
          <Tab.Screen
            name="CinemasTab"
            component={CinemasStack}
            options={{ headerShown: false, title: 'Cinemas' }}
          />
          <Tab.Screen
            name="UpcomingTab"
            component={UpcomingMoviesStack}
            options={{ headerShown: false, title: 'Upcoming' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
