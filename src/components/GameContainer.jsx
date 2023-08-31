import React, { useState, useEffect } from "react";
import { cardArray, shuffleArray } from "./array";
import Card from "./Card";

const GameContainer = () => {
  const [cards, setCards] = useState(shuffleArray(cardArray));
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [timeSeconds, setTimeSeconds] = useState(0);
  const [timeMinutes, setTimeMinutes] = useState(0);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSeconds((previousSecond) => previousSecond + 1);
    }, 1000);

    return () => clearTimeout(interval);
  }, []);

  useEffect(() => {
    if (timeSeconds > 59) {
      setTimeMinutes((previousMinute) => previousMinute + 1);
    }
  }, [timeSeconds]);

  useEffect(() => {
    setTimeSeconds(0);
  }, [timeMinutes]);

  useEffect(() => {
    if (selectedCards.length >= 2) {
      setMoves((previousMove) => previousMove + 1);
      const timeoutId = setTimeout(() => {
        checkMatch(selectedCards[0], selectedCards[1]);
        setSelectedCards([]);
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [selectedCards]);

  const stopGame = () => {
    setSelectedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setTimeout(() => {
      setCards((previousCards) => {
        return shuffleArray(previousCards);
      });
    }, 400);
  };

  const handleClickEvent = (clickedIndex) => {
    if (
      matchedCards.includes(clickedIndex) ||
      selectedCards.includes(clickedIndex) ||
      selectedCards.length === 2
    ) {
      return;
    }

    setSelectedCards((prevSelectedCards) => [
      ...prevSelectedCards,
      clickedIndex,
    ]);
  };

  const checkMatch = (cardIndex1, cardIndex2) => {
    const card1 = cards[cardIndex1];
    const card2 = cards[cardIndex2];
    if (card1.name === card2.name) {
      setMatchedCards((prevMatchedCards) => [
        ...prevMatchedCards,
        cardIndex1,
        cardIndex2,
      ]);
    }
  };

  return (
    <main id="game-container">
      <div className="watermark-container">
        <span className="watermark">MADE BY UZAIF</span>
      </div>
      <div id="moves" className="info">
        <strong>Moves :</strong> {moves}
      </div>
      <div id="time" className="info">
        <strong>Time : </strong>
        {timeMinutes < 10 ? `0${timeMinutes}` : timeMinutes} <strong>:</strong>{" "}
        {timeSeconds < 10 ? `0${timeSeconds}` : timeSeconds}
      </div>
      <div id="game">
        {cards.map((element, index) => {
          return (
            <Card
              key={element.id}
              frontContent="?"
              backImage={element.imgSrc}
              cardClickEvent={() => handleClickEvent(index)}
              style={
                selectedCards.includes(index) || matchedCards.includes(index)
                  ? { transform: "rotateY(180deg)" }
                  : {}
              }
            />
          );
        })}
      </div>
      <div id="stop-btn-container">
        <button id="stop-btn" type="button" onClick={stopGame}>
          Stop Game
        </button>
      </div>
    </main>
  );
};

export default GameContainer;
