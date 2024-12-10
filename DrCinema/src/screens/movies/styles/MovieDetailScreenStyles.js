import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  poster: {
    width: '100%',
    height: 300,
    marginBottom: 16,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  plot: {
    fontSize: 16,
    marginBottom: 16,
  },
  detail: {
    fontSize: 14,
    marginBottom: 8,
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
  },
  showtimesContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  showtimesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  showtimesBlock: {
    marginBottom: 15,
  },
  showtimesCinemaName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  showtimeButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginVertical: 4,
  },
  showtimeText: {
    fontSize: 14,
    color: '#333',
  },
  noShowtimeText: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#777',
  },
});
