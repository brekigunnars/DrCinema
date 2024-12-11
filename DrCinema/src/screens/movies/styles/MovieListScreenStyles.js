export const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingTop: 50, // Add padding to avoid content being too high on the screen
  },
  searchBar: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#F9F9F9',
    fontSize: 16,
  },
  movieCard: {
    flexDirection: 'row',
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginRight: 10,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 12,
    color: '#444',
    marginBottom: 4,
  },
  infoLabel: {
    fontWeight: 'bold',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
  listContainer: {
    paddingBottom: 20,
  },
};
