# Pokemon-Explorer-API_INTEGRATION

A RESPONSIVE WEBPAGE ABOUT POKEMONS WITH API DATA DYNAMICALLY LOADED AND DISPLAYED

_COMPANY_: CODTECH IT SOLUTIONS

_NAME_: DON FERRIDA D

_INTERN ID_: CT04DG3262

_DOMAIN_: FULL STACK WEB DEVELOPMENT

_DURATION_: 4 WEEKS

_MENTOR_: NEELA SANTOSH

# Pokémon Explorer

**Pokémon Explorer** is a fun and interactive web application built using HTML, CSS, JavaScript, and the [PokéAPI](https://pokeapi.co/). This project allows users to explore detailed information about various Pokémon by simply entering their names into a search box. The app fetches data in real time and displays cleanly formatted details such as type, height, weight, abilities, and sample moves, along with high-quality official artwork of the Pokémon.

This project was developed as part of an internship task to demonstrate the integration of public APIs into a responsive and user-friendly webpage. The main goal was to fetch data from a third-party API (PokéAPI in this case), display it dynamically on the page, and ensure a visually appealing experience that works across devices.

---

## Objective

The main objective of this project is to:

- Understand and work with public APIs
- Dynamically update webpage content using JavaScript
- Build a clean and functional user interface
- Practice writing responsive design using CSS
- Gain experience with real-world API integration in a frontend project

---

## How It Works

1. The user enters the name of a Pokémon (e.g., `pikachu`, `charizard`, or `rayquaza`) in the search box.
2. A request is sent to the PokéAPI endpoint using the `fetch()` method in JavaScript.
3. If the name is valid, the app:
   - Displays the Pokémon’s official artwork
   - Shows its type(s), height, weight, and abilities
   - Lists a few sample moves (from the API's massive move database)
4. If the name is invalid or not found, the app shows an error message.

All content is updated dynamically on the page without refreshing, making the experience smooth and interactive.

---

## Features

- Dark theme design for better visual appeal
- Clean layout with responsive CSS
- High-quality official artwork using PokéAPI’s image resources
- Displays type, height (in meters), weight (in kg), and special abilities
- Lists first five available moves
- Error handling for invalid inputs
- **Live Pokémon Search**  
  Users can search any Pokémon by name using the search box. The app fetches and displays the Pokémon’s official artwork, type, abilities, height, weight, and sample moves.

- **Featured Pokémon Cards**  
  On page load, a set of **predefined popular Pokémon** — Pikachu, Charizard, Bulbasaur, Eevee, Snorlax, and Gengar — are shown as clickable cards.  
  When a user clicks on one of these featured Pokémon, their details appear immediately just like a search result.  
  This adds a quick-start experience for users who want to explore without typing anything.

---

## Screenshots

![Home](screenshot/screenshot1.png)

![Details](screenshot/screenshot2.png)

![Details](screenshot/screenshot3.png)

![Details](screenshot/screenshot4.png)

![Details](screenshot/screenshot5.png)

---

## Technologies Used

- **HTML5** – For structuring the webpage
- **CSS3** – For styling and making it responsive
- **JavaScript (Vanilla)** – For handling API requests and DOM manipulation
- **PokéAPI** – A powerful RESTful API providing free access to Pokémon data

---

## How to Run This Project

1. Clone this repository or download the ZIP.
2. Open the `index.html` file in your browser.
3. Type a Pokémon name and click “Explore” to view details.

_No installation or external setup required._

---

## What I Learned

Through this project, I gained hands-on experience working with APIs and JavaScript’s asynchronous programming model. I also learned how to make dynamic updates to a webpage using DOM manipulation and how to design a responsive layout using just HTML and CSS. This task helped me understand how API data can be transformed into visual content and taught me good coding practices like error handling and clean UI design.

---

## Future Improvements

- Add search suggestions or autocomplete
- Show evolution chain or stats graph
- Add ability to compare multiple Pokémon side-by-side
- Create a light/dark mode toggle

---

## License

This project is free to use for educational purposes and internships. All Pokémon content belongs to their respective owners and is used here for learning only.

---

## About the Author

Built with curiosity, creativity, and a love for clean interfaces.  
Feel free to fork the repo or reach out with suggestions!
