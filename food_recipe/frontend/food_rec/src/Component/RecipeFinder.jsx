import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function RecipeFinder() {
  const [inputValue, setInputValue] = useState("");
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const API_KEY = ""; // Your Spoonacular API key

  const handleSearch = () => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${inputValue}&number=10&apiKey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results.length === 0) {
          setShowMessage(true);
          setMeals([]);
        } else {
          setShowMessage(false);
          setMeals(data.results);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const fetchMealDetails = (id) => {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSelectedMeal(data);
      })
      .catch((error) => console.error("Error fetching meal details:", error));
  };

  const formatText = (text, wordsPerLine) => {
    const words = text.split(" ");
    let formattedText = "";
    for (let i = 0; i < words.length; i += wordsPerLine) {
      formattedText += words.slice(i, i + wordsPerLine).join(" ") + "\n";
    }
    return formattedText.trim();
  };

  return (
    <div className="container-fluid d-flex flex-column min-vh-100">
      <div>
        <h1 className="headName text-center py-4">RECIPE FINDER</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className="col-md-6 m-auto py-3"
        >
          <div className="input-group mb-3">
            <input
              type="text"
              id="inputName"
              className="form-control"
              placeholder="Enter a ingredients (e.g., Eggs,Flour,Butter.)..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              aria-label="Search by dish name"
              aria-describedby="button-addon2"
            />
            <button
              type="button"
              className="btn btn-primary"
              id="button"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </form>

        {showMessage && (
          <div id="msg">
            <h3 className="text-center text-danger">
              No recipes found for the entered dish. Please try a different dish.
            </h3>
          </div>
        )}

        {selectedMeal && (
          <div id="details" className="text-center mb-4">
            <div
              className="card mx-auto"
              style={{
                width: "18rem",
                height: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              {selectedMeal.image ? (
                <img
                  src={selectedMeal.image}
                  className="card-img-top"
                  alt={selectedMeal.title}
                  style={{
                    width: "100%",
                    height: "12rem",
                    objectFit: "cover",
                    borderRadius: "8px 8px 0 0",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "12rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f0f0f0",
                    color: "#555",
                  }}
                >
                  No Image Available
                </div>
              )}
              <div className="card-body text-center">
                <h5 className="card-title">{selectedMeal.title}</h5>
                <p
                  className="card-text"
                  style={{
                    fontSize: "0.9rem",
                    whiteSpace: "pre-wrap",
                    textAlign: "justify",
                  }}
                >
                  {selectedMeal.summary
                    ? formatText(
                        selectedMeal.summary.replace(/<[^>]+>/g, "").slice(0, 300),
                        9
                      )
                    : "No description available."}
                </p>
              </div>
            </div>
          </div>
        )}

        <div id="items" className="d-flex flex-wrap">
          {meals.map((meal) => (
            <div
              key={meal.id}
              className="m-2 singleItem"
              onClick={() => fetchMealDetails(meal.id)}
            >
              <div className="card" style={{ width: "12rem" }}>
                <img
                  src={meal.image}
                  className="card-img-top"
                  alt={meal.title}
                  style={{ height: "8rem", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-text">{meal.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer bg-dark text-white text-center mt-auto py-2">
        <p className="mb-0">
          &copy; 2025 Recipe Finder❤️ | Made By TEAM BLACK 🖤
        </p>
      </footer>
    </div>
  );
}

export default RecipeFinder;
