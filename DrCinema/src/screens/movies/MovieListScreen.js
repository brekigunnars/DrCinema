import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getMovies } from '../../api/services/movies';
import { getCinemas } from '../../api/services/cinemas';
import { styles } from './styles/MovieListScreenStyles';

const MovieListScreen = () => {
  const navigation = useNavigation();

  const [movies, setMovies] = useState([]);
  const [cinemas, setCinemas] = useState([]);
  const [selectedCinema, setSelectedCinema] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMoviesAndCinemas = async () => {
      try {
        const moviesData = await getMovies();
        const cinemasData = await getCinemas();
        setMovies(moviesData);
        setCinemas(cinemasData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesAndCinemas();
  }, []);

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesCinema =
      selectedCinema === null ||
      movie.showtimes.some((showtime) => showtime.cinema.name === selectedCinema);

    return matchesSearch && matchesCinema;
  });

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('MovieDetail', { movie: item }) // Passing `item` as `movie`
      }
      style={styles.movieCard}
    >
      <Image
        source={{
          uri: item.poster || 'https://via.placeholder.com/500x750?text=No+Poster+Available',
        }}
        style={styles.poster}
      />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.plot}</Text>
        <Text style={styles.genres}>
          Genres: {item.genres.map((genre) => genre.Name).join(', ')}
        </Text>
      </View>
    </TouchableOpacity>
  );
  

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search movies..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>
          Filter: {selectedCinema ? selectedCinema : 'All Cinemas'}
        </Text>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => {
            const nextCinemaIndex =
              selectedCinema === null
                ? 0
                : (cinemas.findIndex((c) => c.name === selectedCinema) + 1) %
                  (cinemas.length + 1);

            setSelectedCinema(
              nextCinemaIndex === cinemas.length ? null : cinemas[nextCinemaIndex].name
            );
          }}
        >
          <Text style={styles.filterButtonText}>Change Filter</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredMovies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default MovieListScreen;
