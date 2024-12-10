import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from './styles/UpcomingMovieDetailScreenStyles';

const UpcomingMovieDetailScreen = ({ route }) => {
  const { upcomingMovie } = route.params; // Destructure the `movie` object from route.params
  console.log(upcomingMovie)
  if (!upcomingMovie) {
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
          uri: upcomingMovie.poster || 'https://via.placeholder.com/500x750?text=No+Poster+Available',
        }}
        style={styles.poster}
      />
      <Text style={styles.title}>{upcomingMovie.title}</Text>
      <Text style={styles.plot}>{upcomingMovie.plot}</Text>
      <Text style={styles.detail}>Duration: {upcomingMovie.omdb[0]?.Runtime || 'N/A'}</Text>
      <Text style={styles.detail}>Year: {upcomingMovie.year}</Text>
      <Text style={styles.detail}>
        Genres: {upcomingMovie.genres.map((genre) => genre.Name).join(', ')}
      </Text>
    </ScrollView>
  );
};

export default UpcomingMovieDetailScreen;
