import React, { useState, useCallback } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { styles } from './styles/MovieDetailScreenStyles';
import YoutubePlayer from 'react-native-youtube-iframe';

const MovieDetailScreen = ({ route }) => {
  const { movie } = route.params; // Ensure this includes the movie with showtimes
  const trailerID = movie.trailers[0]?.results[0]?.key;
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

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
      <View style={styles.textContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.plot} numberOfLines={3}>
          {movie.plot || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis magna metus, vel pulvinar justo placerat non. Vivamus lobortis metus augue, et rhoncus mauris ultricies ut. '}
        </Text>
        <Text style={styles.detail}>Duration: {movie.durationMinutes} minutes</Text>
        <Text style={styles.detail}>Year: {movie.year}</Text>
        <Text style={styles.detail}>
          Genres: {movie.genres.map((genre) => genre.Name).join(', ')}
        </Text>
      </View>

      {/* Trailer Section */}
      <View style={styles.youtubePlayerContainer}>
        {trailerID ? (
          <YoutubePlayer
            height={300}
            play={playing}
            videoId={trailerID}
            onChangeState={onStateChange}
          />
        ) : (
          <Text style={styles.detail}>No trailer available</Text>
        )}
      </View>

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
                      // Ensure timeSlot.purchase_url is available. If not, handle gracefully.
                      if (timeSlot.purchase_url) {
                        Linking.openURL(timeSlot.purchase_url);
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
