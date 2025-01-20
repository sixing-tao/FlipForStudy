export const cardReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CARDS":
      return {
        ...state,
        cards: [...state.cards, action.payload],
        selectedCard: action.payload,
      };

    case "UPDATE_CARDS":
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload.id ? action.payload : card
        ),
      };

    case "DELETE_CARD":
      const currentIndex = state.cards.findIndex(
        (card) => card.id === action.payload
      );
      const nextIndex =
        currentIndex < state.cards.length - 1
          ? currentIndex + 1
          : currentIndex - 1;
      const nextCard = state.cards.length > 1 ? state.cards[nextIndex] : null;

      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.payload),
        selectedCard: nextCard,
      };

    case "RESET_CARDS":
      return {
        cards: action.payload.cards,
        selectedCard:
          action.payload.cards.length > 0 ? action.payload.cards[0] : null,
      };

    case "SET_SELECTED_CARD":
      return {
        ...state,
        selectedCard: action.payload,
      };

    case "CLEAR_CARDS":
      return {
        cards: [],
        selectedCard: null,
      };

    default:
      throw new Error("Action unknown");
  }
};
