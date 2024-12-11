import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe', // Light background for light mode
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  poster: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  textContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#222831', // Darker shade for text
    marginBottom: 10,
    textAlign: 'center',
  },
  plot: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4b5563', // Softer shade for readability
    textAlign: 'justify',
    marginBottom: 15,
  },
  detail: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 8,
  },
  youtubePlayerContainer: {
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden', // Ensures the player is cleanly contained
  },
  errorText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#dc2626', // Bright red for error messages
    textAlign: 'center',
    marginTop: 20,
  },
});
