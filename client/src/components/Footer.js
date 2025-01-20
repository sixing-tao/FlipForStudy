function Footer({ onAdd, onDelete, onUpdate, currentCard }) {
  const handleAddCard = () => {
    const question = prompt("Enter question:");
    const answer = prompt("Enter answer:");
    if (question && answer) {
      onAdd({ question, answer });
    }
  };

  const handleUpdateCard = (currentCard) => {
    const question = prompt("Update question:", currentCard.question);
    const answer = prompt("Update answer:", currentCard.answer);
    if (question && answer) {
      onUpdate({
        ...currentCard,
        question,
        answer,
      });
    }
  };

  return (
    <div>
      <button onClick={handleAddCard}>Add New Card</button>
      <button onClick={() => handleUpdateCard(currentCard)}>
        Modify Current Card
      </button>
      <button onClick={() => onDelete(currentCard.id)}>Delete Card</button>
    </div>
  );
}

export default Footer;
