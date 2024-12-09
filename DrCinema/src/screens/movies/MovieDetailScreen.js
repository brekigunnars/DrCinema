import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from './styles/MovieDetailScreenStyles';

const MovieDetailScreen = ({ route }) => {
  const { movie } = route.params; // Destructure the `movie` object from route.params

  if (!movie) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No movie details available.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: movie.poster || 'https://via.placeholder.com/500x750?text=No+Poster+Available',
        }}
        style={styles.poster}
      />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.plot}>{movie.plot}</Text>
      <Text style={styles.detail}>Duration: {movie.durationMinutes} minutes</Text>
      <Text style={styles.detail}>Year: {movie.year}</Text>
      <Text style={styles.detail}>
        Genres: {movie.genres.map((genre) => genre.Name).join(', ')}
      </Text>
    </ScrollView>
  );
};

export default MovieDetailScreen;
