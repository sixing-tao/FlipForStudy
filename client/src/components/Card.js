import { useState } from "react";
import styles from "./Card.module.css";

function Card({ question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className={styles.cardContainer}>
      <div
        className={`${styles.card} ${isFlipped ? styles.cardFlipped : ""}`}
        onClick={handleFlip}
      >
        <div className={styles.cardFace}>
          <div className={styles.cardContent}>{question}</div>
        </div>
        <div className={`${styles.cardFace} ${styles.cardBack}`}>
          <div className={styles.cardContent}>{answer}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
