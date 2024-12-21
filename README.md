# Weather App 🌤️

A React-based Weather Application that allows users to search for cities and view detailed weather information, including the current weather and a 7-day forecast. The app integrates the OpenWeather API and GeoDB Cities API for real-time weather data and city search functionality.

### 🌐 Live Demo

Check out the deployed app here: [Weather App](https://weather-app-theta-mauve-22.vercel.app/)

---

## 🛠️ Features

1. **Search City**: Type a city name to get weather details.
2. **Current Weather**:
    - City name and country code.
    - Weather condition (e.g., smoke).
    - Temperature in Celsius.
    - Details like:
      - Feels Like: `29°C`
      - Wind Speed: `3.6 m/s`
      - Humidity: `54%`
      - Pressure: `1010 hPa`
3. **7-Day Weather Forecast**:
    - Displays the same detailed weather information for the next 7 days.
4. **User-Friendly Interface**:
    - Accessible and responsive design.
    - Smooth city search with autocomplete.

---

## 🔧 Technologies Used

- **React**: For building the UI.
- **React Libraries**:
  - `react-accessible-accordion`: For collapsible weather details.
  - `react-select-async-paginate`: For efficient city search.
- **APIs**:
  - [OpenWeather API](https://openweathermap.org/): For fetching weather data.
  - [GeoDB Cities API](https://rapidapi.com/wirefreethought/api/geodb-cities): For city autocomplete functionality.

---s

## 📸 Screenshots

### Current Weather
![Current Weather](https://user-images.githubusercontent.com/placeholder/current-weather.png)

### 7-Day Forecast
![7-Day Forecast](https://user-images.githubusercontent.com/placeholder/7-day-forecast.png)

---

## 🚀 Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your API keys:
   ```env
   REACT_APP_OPENWEATHER_API_KEY=your_openweather_api_key
   REACT_APP_GEODB_API_KEY=your_geodb_api_key
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000`.

---

## 🌟 Deployed on Vercel

The app is deployed on Vercel for fast and reliable hosting.

🔗 **Live Link**: [Weather App](https://weather-app-theta-mauve-22.vercel.app/)

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

### Steps to Contribute
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request.

---

## 📝 License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## 📧 Contact

For any inquiries or feedback, feel free to reach out to me on GitHub: [yourusername](https://github.com/yourusername).
