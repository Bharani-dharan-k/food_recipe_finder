# Food Recipe Finder

Food Recipe Finder is a React-based web application that allows users to search for recipes based on ingredients or dish names. The application fetches recipes from the Spoonacular API and displays them in an interactive and user-friendly manner.

---

## Features
- **Search Recipes**: Enter dish names or ingredients to search for related recipes.
- **View Recipe Details**: Click on any recipe to view its description and other details in a visually appealing card.
- **Dynamic Display**: Recipes are displayed dynamically with proper formatting, ensuring a responsive layout.

---


## Screenshots
![Sample Image 1](./src/images/sample1.png)
![Sample Image 2](./src/images/sample2.png)
![Sample Image 3](./src/images/sample3.png)

*Screenshots showing the app functionality.*

---

### Home Page

![Search Page](https://via.placeholder.com/600x300?text=Search+Page)
*Search recipes by entering keywords like "apple" or "pasta".*

### Recipe List

![Recipe List](https://via.placeholder.com/600x300?text=Recipe+List)
*See a list of recipes matching your search query.*

### Recipe Details

![Recipe Details](https://via.placeholder.com/600x300?text=Recipe+Details)
*View detailed information about a selected recipe.*

---

## Prerequisites
To run this project, ensure you have the following installed:

- **Node.js** (v14 or above)
- **npm** or **yarn**

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/food-recipe-finder.git
   ```
2. Navigate to the project directory:
   ```bash
   cd food-recipe-finder
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

---

## Running the Application

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## API Integration
This project uses the **Spoonacular API** for fetching recipe data. 

- Obtain your API key from [Spoonacular](https://spoonacular.com/food-api).
- Replace the placeholder API key in the code:
  ```javascript
  const API_KEY = "your_api_key_here";
  ```

---

## Folder Structure
```
food-recipe-finder/
├── public/
├── src/
│   ├── components/
│   │   └── RecipeFinder.jsx
│   │   └── Footer.jsx
│   │   └── Navbar.jsx
│   │   └── Home.jsx
│   ├── index.js
│   ├── App.css
│   └── App.js
├── package.json
└── README.md
```

---

## Technologies Used

- **React.js**: Frontend framework for building user interfaces.
- **Bootstrap**: CSS framework for responsive design.
- **Spoonacular API**: For recipe data.

---

## About the Website
Food Recipe Finder is designed to help users explore a variety of recipes quickly and easily by providing relevant results and detailed descriptions in an intuitive interface.
