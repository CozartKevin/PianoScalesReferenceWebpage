//HTML for Flat: &#9837
//HTML for Sharp: &#9839


/**
 * Initialize Scale Reference.
 * Function to set up the initial state of the Scale Reference application by generating scale buttons,
 * key buttons, and initializing the piano keyboard.
 */
function initializeScaleReference() {
  console.log("initialize Scale Reference");
  generateScaleButtons();
  generateKeyButtons();
  setSelectedScaleButton("major");
  setSelectedKeyButton("C");
  generateKeyboardAndVexFlow();
}

/**
 * Generate Piano Keyboard and VexFlow
 * Function to generate the piano keyboard and VexFlow representation based on the selected key and scale.
 **/
function generateKeyboardAndVexFlow() {
  console.log("Generate Keyboard and Vex Flow");

  const startingNote = getSelectedKeyButton();
  const scaleType = getSelectedScaleButton();

  // Generate piano keyboard
  generatePianoKeyboard(startingNote, scaleType);

  // Highlight current scale 
  highlightScale(startingNote, scaleType);

  // Generate VexFlow representation
  generateVexFlowScale(startingNote, scaleType);
}


/**
 * Update Piano Keyboard
 * Function to delete the existing piano keyboard and generate a new one based on the selected key and scale.
 */
function updateKeyboard() {
  console.log("-----------------------------------------------------------------------Update Keyboard");
  // Delete the existing piano keyboard
  deletePianoKeyboard();

  // Generate a new piano keyboard and VexFlow representation
  generateKeyboardAndVexFlow();
}

/**
 * Generate Piano Keyboard
 * Function to generate the piano keyboard based on the selected key and scale.
 *
 */
function generatePianoKeyboard(startingNote, scaleType) {
  console.log("-- Generate Keyboard ")

  const keysPerOctave = getSelectedKeysPerOctave();
  const keyboard = document.getElementById("piano-keyboard");

  let noteIndex = getNoteMapByChar(startingNote);

  while (keyboard.children.length < keysPerOctave) {
    const note = getNoteMapByIndex(noteIndex);
    const key = document.createElement("div");

    key.className = isBlackKey(note) ? "black-key" : "white-key";
    key.id = note;

    const noteLabel = document.createElement("div");
    noteLabel.className = "note-label";

    if (note.includes("#")) {
      const nextNote = getNoteMapByIndex(noteIndex + 1);
      noteLabel.innerHTML = `<span>${getNoteMapByIndex(noteIndex - 1)}&#9839 </span>${nextNote}&#9837`;
    } else {
      noteLabel.innerText = note;
    }

    key.appendChild(noteLabel);
    keyboard.appendChild(key);

    noteIndex = (noteIndex + 1) % 12;
  }

}


/**
 * Generate VexFlow Code for Scales.
 * Function to generate the VexFlow representation of scales.
 */
function generateVexFlowScale(startingNote, scaleType) {
  console.log("-- Generate Vex flow Scale")

  // Get the container element for VexFlow
  const vexFlowContainer = document.getElementById('vexflow-container');

  // Clear previous VexFlow content
  vexFlowContainer.innerHTML = '';

  const scaleNotes = generateScaleNotes(startingNote, scaleType);

  // VexFlow setup
  const renderer = new Vex.Flow.Renderer(vexFlowContainer, Vex.Flow.Renderer.Backends.SVG);
  const context = renderer.getContext();
  context.setFont('Arial', 10);

  // Create a stave of width 400 at position 10, 40 with treble clef
  const stave = new Vex.Flow.Stave(10, 40, 400);
  stave.addClef('treble');

  // Connect stave to the rendering context and draw
  stave.setContext(context).draw();

  // Create a voice and add dynamically generated notes
  const voice = new Vex.Flow.Voice({ num_beats: scaleNotes.length, beat_value: 4 });

  scaleNotes.forEach(note => {
    const staveNote = new Vex.Flow.StaveNote({
      keys: [`${note}/4`], // Assuming quarter notes for simplicity
      duration: 'q'
    });
    voice.addTickable(staveNote);
  });

  // Format and render the voice
  const formatter = new Vex.Flow.Formatter().joinVoices([voice]).format([voice], 350);
  voice.draw(context, stave, formatter);

  // Render
  renderer.resize(500, 200);
  renderer.getContext().scale(1.25, 1.25); // Adjust scale as needed
  //renderer.draw();
}


/**
 * Highlight Scale Function Place Fingerings.
 * Function to highlight keys on the piano keyboard and place fingerings.
 */
function highlightScale(startingNote, scaleType) {
  console.log("-- highlightScale");

  const keyboard = document.querySelectorAll(".keyboard .white-key, .keyboard .black-key");
  const scaleNotes = generateScaleNotes(startingNote, scaleType);

  const { leftHand, rightHand } = scaleFingerings[startingNote][scaleType];

  let counter = 0;

  keyboard.forEach((key) => {
    const note = key.id;

    if (scaleNotes.includes(note)) {
      key.classList.add("scale-highlight");

      // Set content for left and right hand fingerings
      key.style.setProperty('--before-content', `"L: ${leftHand[counter]}"`);
      key.style.setProperty('--after-content', `"R: ${rightHand[counter]}"`);

      counter++;
    } else {
      key.classList.remove("scale-highlight");
    }
  });
}



/************************************************************************************************************************************************/

/***************************
*Button Generation Functions
***************************/

/**
 * SCALE Button Generation.
 * Function sets up the initial Scale Buttons in the "Options" Menu under heading "Scales:"
 */
function generateScaleButtons() {
  console.log("----- Generate Scale buttons");
  // Get the container element to append the buttons
  const buttonContainer = document.querySelector('.button-container-scale');

  // Iterate over the scaleIntervals object
  for (const scale in scaleIntervals) {
    // Create a new button element
    const button = document.createElement('button');

    // Set the button properties
    button.id = `${scale}ScaleButton`;
    button.className = 'button-scale';
    button.textContent = scale;
    button.onclick = () => handleScaleButtonClick(scale);

    // Append the button to the container
    buttonContainer.appendChild(button);
  }
}


/**
 * KEY Button Generation.
 * Function sets up the initial Key Buttons in the "Options" Menu under heading "Keys:"
 */
function generateKeyButtons() {
  console.log("----- Generate Key buttons");
  // Mapping of notes to their corresponding positions
  const noteMap = {
    "C": 0, "C#": 1, "Db": 1,
    "D": 2, "D#": 3, "Eb": 3,
    "E": 4, "F": 5, "F#": 6, "Gb": 6,
    "G": 7, "G#": 8, "Ab": 8,
    "A": 9, "A#": 10, "Bb": 10,
    "B": 11
  };

  // Get the container element to append the buttons
  const buttonContainer = document.querySelector('.button-container-key');
  // Get the keys as an array
  const keys = Object.keys(noteMap);

  // Iterate over the keys
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const nextKey = keys[i + 1];

    // Create a new button element
    const button = document.createElement('button');

    // Set the button properties
    button.id = `${key}KeyButton`;
    button.className = 'button-key';

    // Concatenate note names into the same button with '\'
    if (nextKey && noteMap[key] === noteMap[nextKey]) {
      button.innerHTML = `${keys[i - 1]}&#9839 | ${keys[i + 2]}&#9837`;
      // Skip the next key and move to the key after that
      i += 1;
    } else {
      button.textContent = key;
    }

    button.onclick = () => handleKeyButtonClick(key);

    // Append the button to the container
    buttonContainer.appendChild(button);
  }
};


/*******************************
 * Generate VexFlow Code for Scales
 *******************************/
function generateVexFlowScale() {
  // Get the container element for VexFlow
  const vexFlowContainer = document.getElementById('vexflow-container');

  // Clear previous VexFlow content
  vexFlowContainer.innerHTML = '';

  const scaleNotes = generateScaleNotes(getSelectedKeyButton(), getSelectedScaleButton());

  // VexFlow setup
  const renderer = new Vex.Flow.Renderer(vexFlowContainer, Vex.Flow.Renderer.Backends.SVG);
  const context = renderer.getContext();
  context.setFont('Arial', 10);

  // Create a stave of width 400 at position 10, 40 with treble clef
  const stave = new Vex.Flow.Stave(10, 40, 400);
  stave.addClef('treble').addTimeSignature('4/4');

  // Connect stave to the rendering context and draw
  stave.setContext(context).draw();

  // Create a voice and add dynamically generated notes
  const voice = new Vex.Flow.Voice({ num_beats: scaleNotes.length, beat_value: 4 });

  scaleNotes.forEach(note => {
    const staveNote = new Vex.Flow.StaveNote({
      keys: [`${note}/4`], // Assuming quarter notes for simplicity
      duration: 'q'
    });
    voice.addTickable(staveNote);
  });

  // Format and render the voice
  const formatter = new Vex.Flow.Formatter().joinVoices([voice]).format([voice], 350);
  voice.draw(context, stave, formatter);

  // Render
  renderer.resize(500, 200);
  renderer.getContext().scale(1.25, 1.25); // Adjust scale as needed
  
}






/************************************************************************************************************************************************/

/*******************************
Helper Functions

*******************************/


/*******************************
 * SCALE Note Generation.
 * Used to generate the notes in the scale based on the starting note and scale type using the scale interval section.
 *
 * @param {string} startingNote - The starting note for the scale.
 * @param {string} scaleType - The type of scale.
 * @returns {string[]} An array of notes in the generated scale.
 */
function generateScaleNotes(startingNote, scaleType) {
  console.log("----- Generate Scale Notes");
  const startingNoteIndex = getNoteMapByChar(startingNote);
  const scaleNotes = [];
  const intervals = scaleIntervals[scaleType] || scaleIntervals["major"];

  for (const interval of intervals) {
    const noteIndex = (startingNoteIndex + interval) % 12;
    const note = getNoteMapByIndex(noteIndex);
    scaleNotes.push(note);
  }

  return scaleNotes;
}


/*******************************
 * SCALE Button set and get functions
 *******************************/

/**
 * Handles the click event for a scale button.
 *
 * @param {string} selectedScale - The selected scale associated with the clicked scale button.
 * @returns {void}
 */
function handleScaleButtonClick(selectedScale) {
  console.log("---- handle Scale button Click");
  setSelectedScaleButton(selectedScale);
  updateKeyboard(selectedScale);
}

/**
 * Sets the selected ScaleType as Active.
 *
 * @param {string} scaleType - The type of scale to set as active.
 */
function setSelectedScaleButton(scaleType) {
  console.log("------ Set Scale Button")

  //Prevent incorrect matching of capitolizations
  const sanitizedScaleType = scaleType.toLowerCase();

  // Remove highlight from all scale buttons and enable them
  const scaleButtons = document.querySelectorAll('.button-scale');

  scaleButtons.forEach(button => {
    button.classList.remove('active');
    button.disabled = false;
  });


  // Add active status and disable the selected scale button
  const selectedButton = document.getElementById(`${sanitizedScaleType}ScaleButton`);
  if (selectedButton) {
    selectedButton.classList.add('active');
    selectedButton.disabled = true;
  }
}


/**
 * Gets the current active ScaleType.
 *
 * @returns {string} The active scale type.
 */
function getSelectedScaleButton() {
  console.log("---- get selected Scale button");
  const scaleButtons = document.querySelectorAll('.button-scale');

  for (const scaleButton of scaleButtons) {
    if (scaleButton.classList.contains('active')) {
      return scaleButton.textContent;
    }
  }

  console.log("-Did not find Scale Active: ");
  // Sets and returns Default scale of major if no active scale button is found
  setSelectedScaleButton('major');
  return 'major';
}



/*******************************
 * KEY Button set and get functions
 *******************************/

/**
 * Handles the click event for a key button.
 *
 * @param {string} startingNote - The starting note associated with the clicked key button.
 * @returns {void}
 */
function handleKeyButtonClick(startingNote) {
  console.log("-----handle key button clicks");
  setSelectedKeyButton(startingNote);
  updateKeyboard(startingNote);
}


/**
 * Sets the selected KeyType as Active.
 *
 * @param {string} startingNote - The starting note to set as active.
 */
function setSelectedKeyButton(startingNote) {
  console.log("------ Set key button");
  // Remove highlight from all key buttons and enable them
  const keyButtons = document.querySelectorAll('.button-key');
  keyButtons.forEach(button => {
    button.classList.remove('active');
    button.disabled = false;
  });

  // Add highlight to the selected key button
  const selectedButton = document.getElementById(`${startingNote}KeyButton`);
  if (selectedButton) {
    selectedButton.classList.add('active');
    selectedButton.disabled = true;
  }

}


/**
 * Gets the current Active KeyType.
 * It splits out the sharp and flats and uses the Sharp name for the note.
 *
 * @returns {string} The active key type.
 */
function getSelectedKeyButton() {
  console.log("---- get selected key button");
  const keyButtons = document.querySelectorAll('.button-key');
  for (const keyButton of keyButtons) {
    if (keyButton.classList.contains('active')) {
      const buttonID = keyButton.id;
      const keyName = extractKeyFromButtonText(buttonID);
      return keyName;
    }
  }
  // Sets and returns Default key of C if no active scale button is found
  setSelectedKeyButton('C');
  return 'C'; // Default starting note
}


function extractKeyFromButtonText(buttonID) {
  console.log("-------- get key button text");
  // Remove the string "KeyButton" from the buttonID
  const keyWithoutKeyButton = buttonID.replace(/KeyButton/g, '');

  return keyWithoutKeyButton;
}


/**
 * Convert To VexFlow Format
 * Converts output from generateScaleNotes into a format that VexFlow can recognize in a voice.
 *
 * @param {string[]} scaleNotes - An array of notes in the scale.
 * @returns {string[]} An array of notes in VexFlow format.
 */
function convertToVexFlowFormat(scaleNotes) {
  console.log("----- Conver to vexFlow Format");
  const vexFlowNotes = [];

  for (const note of scaleNotes) {
    // Start from the 4th octave and append the note name
    const vexFlowNote = note + '4/q';

    // Add the note to the array
    vexFlowNotes.push(vexFlowNote);
  }

  return vexFlowNotes;
}

/*******************************
Octive Button set and get functions

*******************************/


// TODO: Implement additional octives in this funciton by adding a number of octives 

/**
 * Get Selected Keys per Octave
 * Gets the selected keys per octave.
 * Multiple octaves math is 13 + 12 * #of octaves. If 1, then 13; if 2, then 25; if 3, then 37; 4 = 49; 5 = 61; 6 = 73; 7 = 85.
 *
 * @returns {number} The number of keys per octave.
 */
function getSelectedKeysPerOctave() {
  console.log("----- get selected keys per octave");
  return 13; // Default value
}


/*******************************
NOTE Mapping Get functions
//Get by Character and by Index
*******************************/

/**
 * Get Note Map by Char
 * Returns the index of the character sent into it based on the piano key names.
 *
 * @param {string} noteChar - The character representing the note.
 * @returns {number} The index of the note.
 */
function getNoteMapByChar(noteChar) {
  console.log("-------- Get Note map by char");
  const charNoteMap = {
    "C": 0,
    "C#": 1,
    "D": 2,
    "D#": 3,
    "E": 4,
    "F": 5,
    "F#": 6,
    "G": 7,
    "G#": 8,
    "A": 9,
    "A#": 10,
    "B": 11
  };

  // Extract the first two characters and trim
  const normalizedNoteChar = noteChar.substring(0, 2).trim();
  const noteIndex = charNoteMap[normalizedNoteChar];

  return noteIndex;
}

/**
 * Get Note Map by index
 * Doesn't reference flat keys as the indexing is the same as sharps.
 * Code in functions add in flat when needed but reference the sharp only.
 *
 * @param {number} noteIndex - The index of the note.
 * @returns {string} The note name.
 */
function getNoteMapByIndex(noteIndex) {
  console.log("-------- get Note map by Index");
  const indexNoteMap = {
    0: "C",
    1: "C#",
    2: "D",
    3: "D#",
    4: "E",
    5: "F",
    6: "F#",
    7: "G",
    8: "G#",
    9: "A",
    10: "A#",
    11: "B"
  };

  return indexNoteMap[noteIndex];
}

/**
 * Is Black Key
 * Returns true or false based on if the inbound string has a sharp or flat symbol in it.
 *
 * @param {string} note - The note name.
 * @returns {boolean} True if the note is a black key, false otherwise.
 */
function isBlackKey(note) {
  console.log("--------  is black key");
  return note.includes("#") || note.includes("b");
}

/**
 * Delete Piano keyboard
 * Deletes the keyboard completely by using the getElementsById and replacing the internal HTML with an empty string.
 */
function deletePianoKeyboard() {
  console.log("Delete piano");
  const pianoContainer = document.getElementById('piano-keyboard');
  pianoContainer.innerHTML = '';
}

/*******************************
OBJECTS

*******************************/

/**
 * Object holds all numeric spacing for each scale based on the index, there being 12 unique keys.
 * It should be noted that we duplicate the name of the initial key at the end of each octave so the displayed board is 13 keys total.
 *
 * @type {Object.<string, number[]>}
 */
const scaleIntervals = {
  "major": [0, 2, 4, 5, 7, 9, 11],
  "natural-minor": [0, 2, 3, 5, 7, 8, 10],
  "harmonic-minor": [0, 2, 3, 5, 7, 8, 11],
  "melodic-minor": [0, 2, 3, 5, 7, 9, 11],
  "dorian": [0, 2, 3, 5, 7, 9, 10],
  "phrygian": [0, 1, 3, 5, 7, 8, 10],
  "lydian": [0, 2, 4, 6, 7, 9, 11],
  "mixolydian": [0, 2, 4, 5, 7, 9, 10],
  "locrian": [0, 1, 3, 5, 6, 8, 10],
  "pentatonic-major": [0, 2, 4, 7, 9],
  "pentatonic-minor": [0, 3, 5, 7, 10],
  "blues": [0, 3, 5, 6, 7, 10],
  "whole-tone": [0, 2, 4, 6, 8, 10],
  "chromatic": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  "augmented": [0, 3, 4, 7, 8, 11],
  "diminished": [0, 2, 3, 5, 6, 8, 9, 11],
  "prometheus": [0, 2, 4, 6, 9, 10],
  "tritone": [0, 1, 4, 6, 7, 10],
  "enigmatic": [0, 1, 4, 6, 8, 10, 11],
  "double-harmonic": [0, 1, 4, 5, 7, 8, 11],
  "neapolitan-major": [0, 1, 3, 5, 7, 9, 11],
  "neapolitan-minor": [0, 1, 3, 5, 7, 8, 11],
  "major-blues": [0, 2, 3, 4, 7, 9],
  "minor-blues": [0, 3, 5, 6, 7, 10],
  "exotic": [0, 1, 4, 6, 8, 9, 11]
};

