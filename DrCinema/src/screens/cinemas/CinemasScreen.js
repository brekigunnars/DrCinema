import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getCinemas } from '../../api/services/cinemas';
import { styles } from './styles/CinemasScreenStyles';

const CinemasScreen = () => {
  const [cinemas, setCinemas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCinemas = async () => {
      try {
        const data = await getCinemas();
        setCinemas(data);
      } catch (error) {
        console.error('Error fetching cinemas:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCinemas();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <Text>Loading cinemas...</Text>
      </View>
    );
  }

  if (cinemas.length === 0) {
    return (
      <View style={styles.center}>
        <Text>No cinemas found.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={cinemas}
      keyExtractor={(item) => item.id.toString()} // Assuming cinemas have a unique `id` field
      renderItem={({ item }) => (
        <View style={styles.cinemaCard}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.address}>{item.address}</Text>
        </View>
      )}
    />
  );
};

export default CinemasScreen;
