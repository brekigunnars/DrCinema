import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpcomingMovies } from '../../redux/reducers/upcomingMoviesSlice';
import { styles } from './styles/UpcomingMoviesScreenStyles';
import { useNavigation } from '@react-navigation/native';

const UpcomingMoviesScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const { items: upcomingMovies, status, error } = useSelector((state) => state.upcomingMovies);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUpcomingMovies());
    }
  }, [dispatch, status]);

  const filteredMovies = upcomingMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('UpcomingMovieDetail', { upcomingMovie: item })}
      style={styles.upcomingMovieCard}
    >
      <Image
        source={{
          uri: item.poster || 'https://via.placeholder.com/500x750?text=No+Poster+Available',
        }}
        style={styles.poster}
      />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.infoText}>
          <Text style={styles.infoLabel}>Release Date: </Text>{item['release-dateIS']}
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
  };

  if (status === 'failed') {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error || 'Failed to fetch upcoming movies'}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search upcoming movies..."
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

export default UpcomingMoviesScreen;
