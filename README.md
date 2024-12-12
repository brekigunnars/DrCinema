# 
# DrCinema Application

## Overview
DrCinema is a React Native application designed to showcase movie listings, cinema details, and upcoming movies. The app integrates with an external API for real-time data, ensuring users have the most accurate information on movies, showtimes, and ticket purchasing links.

## Features
- **Movies Screen**
  - Displays a list of movies that are showing in cinemas in Iceland at that time.
  - Allows users to search for movies.
  - Displays details like name, poster, plot, duration, release year, and genres.
  - Links to the movie detail page for more information.

- **Cinemas Screen**
  - Displays a list of cinemas with their details.
  - Users can view cinema-specific movie listings.
  - Each cinema detail screen includes address, phone, website, and more.

- **Upcoming Movies**
  - Displays a list of upcoming movies fetched from the API.
  - Allows users to search for upcoming movies.
  - Displays details like name, poster, plot, release date, and genres.
  - Allows user to watch a trailer for the selected upcoming movie.



## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/brekigunnars/DrCinema.git
   ```
2. Navigate to the project directory:
   ```bash
   cd DrCinema
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

4. Add your api.kvikmyndir.is username and password to 'tokenSlice.js'(src/redux/reducers/tokenSlice.js)

5. Start the development server:
   ```bash
   npx expo start
   ```

---

## API Integration
The application integrates with the [Kvikmyndir API](https://api.kvikmyndir.is) for movie data. The API requires authentication using a username and password. Credentials are stored in `tokenSlice.js` for fetching and refreshing the token.

---





## License
This project is licensed under the MIT License.