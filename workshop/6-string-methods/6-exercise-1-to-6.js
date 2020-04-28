// -------------------------------------------------------------
// String Methods Exercises
// ----------
// note: need to have covered string methods for these exercises
// -------------------------------------------------------------

// Write to the console, the desired length of each of the following strings.
// When this exercise is complete, it should write all of the answers to the console one after the other.

// Given the following data to answer the questions.
const smartGuy = 'Rick Sanchez';
const rickSaying = 'wubba lubba dub dub';
const grandson = 'Morty Antoine Smith';
const enemies =
  'Tammy Gueterman, Evil Morty, Zeep Xanflorp, Galactic Federation, Council of Ricks, Phoenixperson, Scary Terry, Abradolf Lincler, Supernova';
const alternateRicks =
  'Simple Rick, Slow Rick, Tall Rick, Cop Rick, Doofus Rick, Past Rick, Replacement Rick, Insurance Rick, Sales Rick, Supervisor Rick, Cool Rick, Cowboy Rick, Tiny Rick, Cronenberg Rick, Teacher Rick, Farmer Rick, Future Rick, Rick J22, Evil Rick, Toxic Rick, Crunk Rick, Pickle Rick, The Scientist Formerly Known as Rick, Rick C-137';
const secret =
  "summerlobaconokfamily ascaryt mintergalactice, I'jerrym Pimortybethckle Rick!";
const notCode = [
  'summer',
  'bacon',
  'scary',
  'intergalactic',
  'jerry',
  'morty',
  'beth',
  'family',
];

//
//
//
//
// Q1
// How many names does Morty have? (use the `grandson` string)
//
// PLEASE NOTE:
//     this first question is solved for you, as a demonstration
//     of how this works)
//
const mortyNamesArray = grandson.split(' ');
const numberOfNames = mortyNamesArray.length;
console.log(`A1) Morty has ${numberOfNames} names`);

//
//
//
//
// Q2
// Convert the alternateRicks string to an array, so that each name ("Simple
// Rick") is an element in that array. Log that array to the console.
  let rickNames = alternateRicks.split(", ");
  console.log('A2) ', rickNames);

//
//
//
//
// Q3
// How many Ricks have been named in alternateRicks?
// HINT: There are multiple ways to solve this one. Maybe try a `for` loop!

const alternateRicks =
  'Simple Rick, Slow Rick, Tall Rick, Cop Rick, Doofus Rick, Past Rick, Replacement Rick, Insurance Rick, Sales Rick, Supervisor Rick, Cool Rick, Cowboy Rick, Tiny Rick, Cronenberg Rick, Teacher Rick, Farmer Rick, Future Rick, Rick J22, Evil Rick, Toxic Rick, Crunk Rick, Pickle Rick, The Scientist Formerly Known as Rick, Rick C-137, Evil Morty, Vitor Correia';

  let rickNames = alternateRicks.split(", ");
  console.log('rickNames', rickNames);

  let countRicks = 0;

  for (let i = 0; i < rickNames.length; i++) {
    // console.log('i',i)
    if (rickNames[i].includes("Rick")) {
      countRicks++;
    } else {
      console.log('not Rick ->', rickNames[i]);
    }
  }
  console.log('A3) ', countRicks)

//
//
//
//
// Q4
// How many characters are there in rickSaying (without spaces)?

const rickSaying = 'wubba lubba dub dub';
console.log('A4) ', rickSaying.replace(/ +/g, '').length);

//
//
//
//
// Q5
// It turns out, Morty doesn't actually have a middle name. The `grandson`
// string is wrong! Console Morty's name without "Antoine".

const grandson = 'Morty Antoine Smith';
let newGrandsonName = grandson.replace('Antoine ', '');
console.log('A5) ', newGrandsonName);


//
//
//
//
// Q6
// Scary Terry is actually not an enemy. Remove him from the list and console only Rick's true enemies.
const enemies =
  'Tammy Gueterman, Evil Morty, Zeep Xanflorp, Galactic Federation, Council of Ricks, Phoenixperson, Scary Terry, Abradolf Lincler, Supernova';

  let trueEnemiers = enemies.replace ('Scary Terry,', '');
  console.log('A6) ', trueEnemiers)

//
//
//
//
// Q7 (STRETCH)
// `secret` is an encrypted message! Let's see if we can figure out what it
// says. To decode the message, you'll need to remove any words that are found
// in the "notCode" array.

const secret =
  "summerlobaconokfamily ascaryt mintergalactice, I'jerrym Pimortybethckle Rick!";
const notCode = [
  'summer',
  'bacon',
  'scary',
  'intergalactic',
  'jerry',
  'morty',
  'beth',
  'family',
];

let secretMessage = secret;

for (let i = 0; i < notCode.length; i++) {
  secretMessage = secretMessage.replace(notCode[i], '');
}
console.log('A7)', secretMessage)

//
// For example:
//   IF secret was `bluehired`
//   AND notCode was `['blue', 'red']`
//   THEN the answer would be `hi` (bluehired without blue and red).