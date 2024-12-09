import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import MovieListScreen from './src/screens/movies/MovieListScreen';
import CinemasScreen from './src/screens/cinemas/CinemasScreen';
import CinemaDetailScreen from './src/screens/cinemas/CinemaDetailScreen';
import MovieDetailScreen from './src/screens/movies/MovieDetailScreen';
import UpcomingMoviesScreen from './src/screens/upcoming/UpcomingMoviesScreen';

// Tab and Stack Navigators
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Movies Stack Navigator
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


// Cinemas Stack Navigator
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

// App's Tab Navigation
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Movies') {
              iconName = 'film-outline';
            } else if (route.name === 'Cinemas') {
              iconName = 'location-outline';
            } else if (route.name === 'Upcoming') {
              iconName = 'time-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007BFF',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          name="Movies"
          component={MoviesStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Cinemas"
          component={CinemasStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Upcoming"
          component={UpcomingMoviesScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
