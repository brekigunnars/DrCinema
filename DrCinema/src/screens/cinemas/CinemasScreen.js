import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { getCinemas } from '../../api/services/cinemas';
import { styles } from './styles/CinemasScreenStyles';

const CinemasScreen = ({ navigation }) => {
  const [cinemas, setCinemas] = useState([]);

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

  return (
    <View style={styles.container}>
      <FlatList
        data={cinemas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cinemaCard}
            onPress={() =>
              navigation.navigate('CinemaDetail', { cinema: item })
            }
          >
            <Text style={styles.cinemaName}>{item.name}</Text>
            <Text
              style={styles.cinemaWebsite}
              onPress={() => Linking.openURL(`https://${item.website}`)}
            >
              {item.website}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CinemasScreen;
