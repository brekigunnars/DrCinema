import React, { useState, useCallback } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { styles } from './styles/UpcomingMovieDetailScreenStyles';

const UpcomingMovieDetailScreen = ({ route }) => {
  // Youtube player constants
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  const { upcomingMovie } = route.params; // Destructure the `movie` object from route.params
  const movieRuntime = upcomingMovie.omdb[0]?.Runtime
  const trailerID = upcomingMovie.trailers[0]?.results[0]?.key

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
      <View style={styles.textContainer}>
        <Text style={styles.title}>{upcomingMovie.title}</Text>
        <Text style={styles.plot}>{upcomingMovie.plot}</Text>
        <Text>
          <Text style={styles.detail}>Duration: </Text>{movieRuntime || 'N/A'}
        </Text>
        <Text>
          <Text style={styles.detail}>Release Date: </Text>{upcomingMovie['release-dateIS']}
        </Text>
        <Text>
          <Text style={styles.detail}>
            Genres:
          </Text> {upcomingMovie.genres.map((genre) => genre.Name).join(', ')}
        </Text>
      </View>
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
    </ScrollView>
  );
};

export default UpcomingMovieDetailScreen;
