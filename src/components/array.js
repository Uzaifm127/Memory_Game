import dratini from "../Images/dratini.png";
import meowth from "../Images/meowth.png";
import egg from "../Images/egg.png";
import mankey from "../Images/mankey.png";
import gloom from "../Images/gloom.png";
import jigglypuff from "../Images/jigglypuff.png";
import fist from "../Images/fist.png";
import mew from "../Images/mew.png";
import pidgey from "../Images/pidgey.png";
import lion from "../Images/lion.png";
import gundam from "../Images/gundam.png";
import snorlax from "../Images/snorlax.png";
import pikachu from "../Images/pikachu.png";
import pokemonTrainer from "../Images/pokemon-trainer.png";
import pikachu2 from "../Images/pikachu-2.png";
import leonardo from "../Images/leonardo.png";
import santaClaus from "../Images/santa-claus.png";
import razzBerry from "../Images/razz-berry.png";

let cardArray = [
  {
    name: "pikachu",
    imgSrc: pikachu,
    isFlipped: false,
  },
  {
    name: "dratini",
    imgSrc: dratini,
    isFlipped: false,
  },
  {
    name: "razz-berry",
    imgSrc: razzBerry,
    isFlipped: false,
  },
  {
    name: "leonardo",
    imgSrc: leonardo,
    isFlipped: false,
  },
  {
    name: "meowth",
    imgSrc: meowth,
    isFlipped: false,
  },
  {
    name: "egg",
    imgSrc: egg,
    isFlipped: false,
  },
  {
    name: "gundam",
    imgSrc: gundam,
    isFlipped: false,
  },
  {
    name: "fist",
    imgSrc: fist,
    isFlipped: false,
  },
  {
    name: "jigglypuff",
    imgSrc: jigglypuff,
    isFlipped: false,
  },
  {
    name: "santa-claus",
    imgSrc: santaClaus,
    isFlipped: false,
  },
  {
    name: "gloom",
    imgSrc: gloom,
    isFlipped: false,
  },
  {
    name: "mew",
    imgSrc: mew,
    isFlipped: false,
  },
  {
    name: "lion",
    imgSrc: lion,
    isFlipped: false,
  },

  {
    name: "mankey",
    imgSrc: mankey,
    isFlipped: false,
  },

  {
    name: "pidgey",
    imgSrc: pidgey,
    isFlipped: false,
  },
  {
    name: "pikachu-2",
    imgSrc: pikachu2,
    isFlipped: false,
  },
  {
    name: "pokemon-trainer",
    imgSrc: pokemonTrainer,
    isFlipped: false,
  },

  {
    name: "snorlax",
    imgSrc: snorlax,
    isFlipped: false,
  },
];

cardArray = [...cardArray, ...cardArray];

cardArray = cardArray.map((element, index) => {
  return {
    id: index,
    ...element,
  };
});

const shuffleArray = (array) => {
  const shuffledArray = [...array];

  for (let i = 0; i < shuffledArray.length; i++) {
    const j = Math.floor(Math.random() * shuffledArray.length);
    const tempItem = shuffledArray[i];
    shuffledArray[i] = shuffledArray[j];
    shuffledArray[j] = tempItem;
  }

  return shuffledArray;
};

export { cardArray, shuffleArray };
