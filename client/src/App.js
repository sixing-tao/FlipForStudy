import React, { useReducer, useEffect, useState } from "react";
import { cardReducer } from "./state/cardReducer";
import CardsList from "./components/CardsList";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [cards, dispatch] = useReducer(cardReducer, []);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    fetch("/cards.json")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "RESET_CARDS", payload: data });
      })
      .catch((error) => console.error("Error Loading data", error));
  }, []);

  const addCard = (newCard) => {
    dispatch({
      type: "ADD_CARDS",
      payload: { ...newCard, id: Date.now() },
    });
  };

  const deleteCard = (id) => {
    dispatch({ type: "DELETE_CARD", payload: id });
  };

  const updateCard = (updatedCard) => {
    dispatch({ type: "UPDATE_CARDS", payload: updatedCard });
  };

  return (
    <div>
      <Header />
      <CardsList
        cards={cards}
        onSelectCard={setSelectedCard}
        selectedCard={selectedCard}
      />
      <Footer
        onAdd={addCard}
        onDelete={deleteCard}
        onUpdate={updateCard}
        currentCard={selectedCard}
      />
    </div>
  );
}

export default App;
