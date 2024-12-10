import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import { getMovies } from '../../api/services/movies'; 
import { styles } from './styles/CinemaDetailScreenStyles';

const CinemaDetailScreen = ({ route, navigation }) => {
  const { cinema } = route.params;
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await getMovies();
        const filteredMovies = moviesData.filter((movie) =>
          movie.showtimes.some((show) => show.cinema.name === cinema.name)
        );
        
        // Create sections: one for cinema details, one for the movie list
        const sectionsData = [
          {
            title: 'Cinema Details',
            data: [{ type: 'details', cinema }],
          },
          {
            title: 'Movies Playing Here:',
            data: filteredMovies.map((movie) => ({ type: 'movie', movie })),
          },
        ];

        setSections(sectionsData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [cinema]);

  const renderItem = ({ item }) => {
    if (item.type === 'details') {
      // Render cinema details
      const { cinema } = item;
      const cleanedDescription = cinema.description
      ? cinema.description.replace(/<br\s*\/?>/g, '\n')
      : 'No description available for this cinema.';

    return (
      <View style={styles.details}>
        <Text style={styles.name}>{cinema.name}</Text>
        <Text style={styles.description}>{cleanedDescription}</Text>
        <Text style={styles.address}>
          {/* Address not displaying */}
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
    );
    } else if (item.type === 'movie') {
      // Render each movie
      const { movie } = item;
      const cinemaShowtimes = movie.showtimes.find((show) => show.cinema.name === cinema.name);

      return (
        <TouchableOpacity
          style={styles.movieCard}
          onPress={() => navigation.navigate('MovieDetail', { movie, cinema })}
        >
          <Image
            source={{
              uri: movie.poster || 'https://via.placeholder.com/500x750?text=No+Poster+Available',
            }}
            style={styles.poster}
          />
          <View style={styles.movieDetails}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>Year: {movie.year}</Text>
            <Text style={styles.genres}>
              Genres: {movie.genres.map((genre) => genre.Name).join(', ')}
            </Text>
            {cinemaShowtimes && cinemaShowtimes.schedule?.length > 0 && (
              <View style={styles.showtimesContainer}>
                <Text style={styles.showtimesTitle}>Showtimes:</Text>
                {cinemaShowtimes.schedule.map((timeSlot, idx) => (
                  <Text key={idx} style={styles.showtimeText}>{timeSlot.time}</Text>
                ))}
              </View>
            )}
          </View>
        </TouchableOpacity>
      );
    }
    return null;
  };

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => `${item.type}-${index}`}
      renderItem={renderItem}
    />
  );
};

export default CinemaDetailScreen;
