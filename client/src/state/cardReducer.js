export const cardReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CARDS":
      return [...state, action.payload];

    case "UPDATE_CARDS":
      return state.map((card) =>
        card.id === action.payload.id ? action.payload : card
      );

    case "DELETE_CARD":
      return state.filter((card) => card.id !== action.payload);

    case "RESET_CARDS":
      return action.payload;

    case "CLEAR_CARDS":
      return [];

    default:
      throw new Error("Action unknown");
  }
};
