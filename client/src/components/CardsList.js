import Card from "./Card";

function CardsList({ cards, onSelectCard, selectedCard }) {
  const currentIndex = selectedCard
    ? cards.findIndex((card) => card.id === selectedCard.id)
    : 0;

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : cards.length - 1;
    onSelectCard(cards[newIndex]);
  };

  const handleNext = () => {
    const newIndex = currentIndex < cards.length - 1 ? currentIndex + 1 : 0;
    onSelectCard(cards[newIndex]);
  };

  return (
    <div>
      <button onClick={handlePrevious}>←</button>
      {cards.length > 0 && (
        <Card
          {...cards[currentIndex]}
          isSelected={true}
          onSelect={() => onSelectCard(cards[currentIndex])}
        />
      )}
      <button onClick={handleNext}>→</button>
    </div>
  );
}

export default CardsList;
