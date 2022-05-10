// Songs
// const nobody = require("./nobody.mp3");
// const conAltura = require("./conAltura.mp3");
// const bringItBack = require("./bringItBack.mp3");
// const missy = require("./missy.mp3");
// const caseClosed = require("./caseClosed.mp3");
// const billie = require("./billie.mp3");
// const darkClouds = require("./darkClouds.mp3");
// const throughTheWire = require("./throughTheWire.mp3");
// const andIStill = require("./andIStill.mp3");
// const sunset = require("./sunset.mp3");
// const daysOfThunder = require("./daysOfThunder.mp3");
// const jason = require("./jason.mp3");
// const shadows = require("./shadows.mp3");
// const deepBlue = require("./deepBlue.mp3");
// const endless = require("./endless.mp3");
// const echobo = require("./echobo.mp3");

const bewareOfTheDog = require("./bewareOfTheDog.mp3");
const keepTheFunk = require("./keepTheFunk.mp3");
const poison = require("./poison.mp3");

export const songs = [
  // nobody,
  // conAltura,
  // bringItBack,
  // missy,
  // caseClosed,
  // billie,
  // darkClouds,
  // throughTheWire,
  // andIStill,
  // sunset,
  poison,
  keepTheFunk,
  bewareOfTheDog,
  // daysOfThunder,
  // jason,
  // shadows,
  // deepBlue,
  // endless,
  // echobo,
];

//
// skyboxes
//
const intersterllarOne = require("./skyboxes/interstellar/xpos.png");
const intersterllarTwo = require("./skyboxes/interstellar/xneg.png");
const intersterllarThree = require("./skyboxes/interstellar/ypos.png");
const intersterllarFour = require("./skyboxes/interstellar/yneg.png");
const intersterllarFive = require("./skyboxes/interstellar/zpos.png");
const intersterllarSix = require("./skyboxes/interstellar/zneg.png");

const blueSpaceOne = require("./skyboxes/blueSpace/bkg1_right.png");
const blueSpaceTwo = require("./skyboxes/blueSpace/bkg1_left.png");
const blueSpaceThree = require("./skyboxes/blueSpace/bkg1_top.png");
const blueSpaceFour = require("./skyboxes/blueSpace/bkg1_bot.png");
const blueSpaceFive = require("./skyboxes/blueSpace/bkg1_front.png");
const blueSpaceSix = require("./skyboxes/blueSpace/bkg1_back.png");

const redSpaceOne = require("./skyboxes/redSpace/bkg2_right1.png");
const redSpaceTwo = require("./skyboxes/redSpace/bkg2_left2.png");
const redSpaceThree = require("./skyboxes/redSpace/bkg2_top3.png");
const redSpaceFour = require("./skyboxes/redSpace/bkg2_bottom4.png");
const redSpaceFive = require("./skyboxes/redSpace/bkg2_front5.png");
const redSpaceSix = require("./skyboxes/redSpace/bkg2_back6.png");

// order loader requires
// x + , x -
// y + , y -
// z + , z -
export const SkyBoxImages = {
  interstellar: [
    intersterllarOne,
    intersterllarTwo,
    intersterllarThree,
    intersterllarFour,
    intersterllarFive,
    intersterllarSix,
  ],
  blueSpace: [
    blueSpaceOne,
    blueSpaceTwo,
    blueSpaceThree,
    blueSpaceFour,
    blueSpaceFive,
    blueSpaceSix,
  ],
  redSpace: [
    redSpaceOne,
    redSpaceTwo,
    redSpaceThree,
    redSpaceFour,
    redSpaceFive,
    redSpaceSix,
  ],
};
