import Card from "./Card";
import styles from "./CardsList.module.css";

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

  if (cards.length === 0) {
    return (
      <div className={styles.emptyMessage}>
        The card set is empty, please add card
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <button className={styles.navButton} onClick={handlePrevious}>
        ←
      </button>
      <Card
        {...cards[currentIndex]}
        isSelected={true}
        onSelect={() => onSelectCard(cards[currentIndex])}
      />
      <button className={styles.navButton} onClick={handleNext}>
        →
      </button>
    </div>
  );
}

export default CardsList;
