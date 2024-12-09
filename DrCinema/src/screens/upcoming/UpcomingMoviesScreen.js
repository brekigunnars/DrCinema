import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getUpcomingMovies } from '../../api/services/upcomingMovies';
import { styles } from './styles/UpcomingMoviesScreenStyles';

const UpcomingMoviesScreen = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const data = await getUpcomingMovies();
        setUpcomingMovies(data);
      } catch (error) {
        console.error('Error fetching upcoming movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUpcomingMovies();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <Text>Loading upcoming movies...</Text>
      </View>
    );
  }

  if (upcomingMovies.length === 0) {
    return (
      <View style={styles.center}>
        <Text>No upcoming movies found.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={upcomingMovies}
      keyExtractor={(item) => item.id.toString()} // Assuming each movie has a unique `id`
      renderItem={({ item }) => (
        <View style={styles.movieCard}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.releaseDate}>Release Date: {item.releaseDate}</Text>
        </View>
      )}
    />
  );
};

export default UpcomingMoviesScreen;
