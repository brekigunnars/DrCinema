import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { styles } from './styles/MovieDetailScreenStyles';

const MovieDetailScreen = ({ route }) => {
  const { movie } = route.params; // Ensure this includes the movie with showtimes

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

      {/* Showtimes Section */}
      {movie.showtimes && movie.showtimes.length > 0 && (
        <View style={styles.showtimesContainer}>
          <Text style={styles.showtimesTitle}>Showtimes at Various Cinemas:</Text>
          {movie.showtimes.map((show, index) => (
            <View key={index} style={styles.showtimesBlock}>
              <Text style={styles.showtimesCinemaName}>{show.cinema.name}</Text>
              {show.schedule && show.schedule.length > 0 ? (
                show.schedule.map((timeSlot, idx) => (
                  <TouchableOpacity
                    key={idx}
                    onPress={() => {
                      // Ensure timeSlot.purchaseLink is available. If not, handle gracefully.
                      if (timeSlot.purchaseLink) {
                        Linking.openURL(timeSlot.purchaseLink);
                      } else {
                        console.warn('No purchase link provided for this showtime.');
                      }
                    }}
                    style={styles.showtimeButton}
                  >
                    <Text style={styles.showtimeText}>{timeSlot.time}</Text>
                  </TouchableOpacity>
                ))
              ) : (
                <Text style={styles.noShowtimeText}>No times available</Text>
              )}
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default MovieDetailScreen;
