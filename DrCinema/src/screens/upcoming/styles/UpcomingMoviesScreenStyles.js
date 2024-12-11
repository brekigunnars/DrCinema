import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
  },
  searchBar: {
    height: 50,
    borderWidth: 1,
    borderRadius: 25,
    marginVertical: 15,
    marginTop: 60,
    paddingHorizontal: 20,
    fontSize: 16,
    backgroundColor: '#ffffff',
    borderColor: '#ddd',
    color: '#333',
    shadowColor: '#aaa',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  listContainer: {
    paddingBottom: 20,
  },
  upcomingMovieCard: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#ccc',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  poster: {
    width: 100,
    height: 150,
  },
  details: {
    flex: 1,
    marginLeft: 15,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#555',
  },
  infoLabel: {
    fontWeight: 'bold',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#e74c3c',
    textAlign: 'center',
  },
});