import { useState } from "react";

function Card({ question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div onClick={handleFlip}>
      {isFlipped ? <p>{answer}</p> : <p>{question}</p>}
    </div>
  );
}

export default Card;
