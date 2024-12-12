import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Linking,
  TextInput,
} from 'react-native';
import { getCinemas } from '../../api/services/cinemas';
import { styles } from './styles/CinemasScreenStyles';

const CinemasScreen = ({ navigation }) => {
  const [cinemas, setCinemas] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchCinemas = async () => {
      try {
        const cinemasData = await getCinemas();
        // Sort cinemas alphabetically by name
        const sortedCinemas = cinemasData.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setCinemas(sortedCinemas);
      } catch (error) {
        console.error('Error fetching cinemas:', error);
      }
    };

    fetchCinemas();
  }, []);

  // Filter by name instead of title since cinemas likely have `name` property
  const filteredCinemas = cinemas.filter((cinema) =>
    cinema.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.cinemaCard}
      onPress={() => navigation.navigate('CinemaDetail', { cinema: item })}
    >
      <Text style={styles.cinemaName}>{item.name}</Text>
      <Text
        style={styles.cinemaWebsite}
        onPress={() => Linking.openURL(`https://${item.website}`)}
      >
        {item.website}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search cinema..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      {/* Use only one FlatList, data will be filteredCinemas */}
      <FlatList
        data={filteredCinemas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default CinemasScreen;
