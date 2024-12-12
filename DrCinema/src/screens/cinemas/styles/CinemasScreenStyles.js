import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  searchBar: {
    height: 50,
    borderWidth: 1,
    borderRadius: 25,
    marginVertical: 15,
    marginTop: 40,
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
  cinemaCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  cinemaName: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  cinemaWebsite: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0056CC',
    textDecorationLine: 'underline',
  },
  emptyListText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#777',
    textAlign: 'center',
    marginTop: 50,
  },
});