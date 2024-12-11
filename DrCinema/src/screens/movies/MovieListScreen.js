import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../redux/reducers/moviesSlice';
import { styles } from './styles/MovieListScreenStyles';
import { useNavigation } from '@react-navigation/native';

const MovieListScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const { items: movies, status, error } = useSelector((state) => state.movies);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMovies());
    }
  }, [dispatch, status]);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('MovieDetail', { movie: item })}
      style={styles.movieCard}
    >
      {/* Movie Poster */}
      <Image
        source={{
          uri: item.poster || 'https://via.placeholder.com/500x750?text=No+Poster+Available',
        }}
        style={styles.poster}
      />

      <View style={styles.details}>
        {/* Movie Name */}
        <Text style={styles.title}>{item.title}</Text>

        

        {/* Duration */}
        <Text style={styles.infoText}>
          <Text style={styles.infoLabel}>Duration:</Text> {item.durationMinutes || 'N/A'} mins
        </Text>

        {/* Year of Release */}
        <Text style={styles.infoText}>
          <Text style={styles.infoLabel}>Year:</Text> {item.year || 'N/A'}
        </Text>

        {/* Genres */}
        <Text style={styles.infoText}>
          <Text style={styles.infoLabel}>Genres:</Text>{' '}
          {item.genres.map((genre) => genre.Name).join(', ') || 'N/A'}
        </Text>
      </View>
    </TouchableOpacity>
  );

  if (status === 'loading') {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  if (status === 'failed') {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error || 'Failed to fetch movies'}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search movies..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
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
