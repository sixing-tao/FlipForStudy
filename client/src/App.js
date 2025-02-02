import React, { useReducer, useEffect } from "react";
import { cardReducer } from "./state/cardReducer";
import CardsList from "./components/CardsList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from "./App.module.css";

function App() {
  const [state, dispatch] = useReducer(cardReducer, {
    cards: [],
    selectedCard: null,
  });

  useEffect(() => {
    fetch("/cards.json")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "RESET_CARDS",
          payload: { cards: data },
        });
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

  const setSelectedCard = (card) => {
    dispatch({ type: "SET_SELECTED_CARD", payload: card });
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <CardsList
          cards={state.cards}
          onSelectCard={setSelectedCard}
          selectedCard={state.selectedCard}
        />
        <Footer
          onAdd={addCard}
          onDelete={deleteCard}
          onUpdate={updateCard}
          currentCard={state.selectedCard}
        />
      </main>
    </div>
  );
}

export default App;
