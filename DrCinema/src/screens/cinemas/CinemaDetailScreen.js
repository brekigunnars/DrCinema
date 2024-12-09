import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { styles } from './styles/CinemaDetailScreenStyles';

const CinemaDetailScreen = ({ route, navigation }) => {
  const { cinema } = route.params;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Filter movies being shown in the selected cinema
        const moviesData = await getMovies();
        const filteredMovies = moviesData.filter((movie) =>
          movie.showtimes.some((show) => show.cinema.name === cinema.name)
        );
        setMovies(filteredMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [cinema]);

  return (
    <View style={styles.container}>
      {/* Cinema Details */}
      <View style={styles.details}>
        <Text style={styles.name}>{cinema.name}</Text>
        <Text style={styles.description}>{cinema.description}</Text>
        <Text style={styles.address}>
          {cinema.address}, {cinema.city}
        </Text>
        <Text style={styles.phone}>Phone: {cinema.phone}</Text>
        <Text
          style={styles.website}
          onPress={() => Linking.openURL(`https://${cinema.website}`)}
        >
          Website: {cinema.website}
        </Text>
      </View>

      {/* Movies List */}
      <Text style={styles.sectionTitle}>Movies Playing Here:</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.movieCard}
            onPress={() =>
              navigation.navigate('MovieDetail', { movie: item, cinema: cinema })
            }
          >
            <Image
              source={{
                uri: item.poster || 'https://via.placeholder.com/500x750?text=No+Poster+Available',
              }}
              style={styles.poster}
            />
            <View style={styles.details}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.year}>Year: {item.year}</Text>
              <Text style={styles.genres}>
                Genres: {item.genres.map((genre) => genre.Name).join(', ')}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CinemaDetailScreen;
