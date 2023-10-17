//HTML for Flat: &#9837
//HTML for Sharp: &#9839

/*******************************
 * SCALE Note Generation
 * Used to generate the notes in the scale based on the starting note and scale type using the scale interval section
 *******************************/
function generateScaleNotes(startingNote, scaleType) {
  const startingNoteIndex = getNoteMapByChar(startingNote);
  const scaleNotes = [];
  const intervals = scaleIntervals[scaleType] || scaleIntervals["major"];

  for (const interval of intervals) {
    const noteIndex = (startingNoteIndex + interval) % 12;
    const note = getNoteMapByIndex(noteIndex);
    scaleNotes.push(note);
  }

  console.log(scaleNotes + "Scale Notes");

  return scaleNotes;
}

/*******************************
 * KEYBOARD Layout Function
 * JavaScript code for automagically generating the piano keyboard
 *******************************/
function generatePianoKeyboard(startingNote, keysPerOctave, scaleType) {
  const keyboard = document.getElementById("piano-keyboard");
  let noteIndex = getNoteMapByChar(startingNote);
  const scaleNotes = generateScaleNotes(startingNote, scaleType);

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

  console.log("Sent to highlightScale(scalenotes) from generatePianoKeyboard");
  highlightScale(scaleNotes);
}


/*******************************
 * HIGHLIGHT Scale Function Place Fingerings
 *******************************/
function highlightScale(scaleNotes) {
  const keyboard = document.querySelectorAll(".keyboard .white-key, .keyboard .black-key");

  const leftHandFingering = scaleFingerings[getSelectedKeyButton()][getSelectedScaleButton()].leftHand;
  const rightHandFingering = scaleFingerings[getSelectedKeyButton()][getSelectedScaleButton()].rightHand;

  let counter = 0;

  console.log("highlightScale(scaleNotes)");
  console.log("-------------------------------");
  console.log("Selected Key: " + getSelectedKeyButton());
  console.log("Selected Scale: " + getSelectedScaleButton());
  console.log("Left Hand Fingers: " + leftHandFingering);
  console.log("Right Hand Fingers: " + rightHandFingering);
  console.log("-------------------------------");

  keyboard.forEach((key) => {
    const note = key.id;

    if (scaleNotes.includes(note)) {
      key.classList.add("scale-highlight");

      // Set content for left and right hand fingerings
      key.style.setProperty('--before-content', `"L: ${leftHandFingering[counter]}"`);
      key.style.setProperty('--after-content', `"R: ${rightHandFingering[counter]}"`);

      counter++;
    } else {
      key.classList.remove("scale-highlight");
    }
  });
}


/*******************************
 * Generate Scale Buttons
 * Function sets up the initial Scale Buttons in the "Options" Menu under heading "Scales:"
 *******************************/
function generateScaleButtons() {
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
    button.onclick = () => setSelectedScaleButton(scale);

    // Append the button to the container
    buttonContainer.appendChild(button);
  }
}


/*******************************
 * Generate Key Buttons
 * Function sets up the initial Key Buttons in the "Options" Menu under heading "Keys:"
 *******************************/
function generateKeyButtons() {
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

    button.onclick = () => setSelectedKeyButton(key);

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
  renderer.draw();
}






/************************************************************************************************************************************************/

/*******************************
Helper Functions

*******************************/

/*******************************
 * SCALE Button set and get functions
 *******************************/

// Function: Sets the selected ScaleType as Active
function setSelectedScaleButton(scaleType) {
  // Remove highlight from all scale buttons and enable them
  const scaleButtons = document.querySelectorAll('.button-scale');
  scaleButtons.forEach(button => {
    button.classList.remove('active');
    button.disabled = false;
  });

  // Get the currently selected key
  const keyNote = getSelectedKeyButton();

  // Remove key highlighting
  deletePianoKeyboard();

  // Add highlight to the selected scale button
  const selectedButton = document.getElementById(`${scaleType}ScaleButton`);
  if (selectedButton) {
    selectedButton.classList.add('active');
    selectedButton.disabled = true;
    console.log("Out:" + scaleType);

    // Generate the piano keyboard with the updated scale
    generatePianoKeyboard(keyNote, getSelectedKeysPerOctave(), scaleType);

  }
}


// Function: Gets the current active ScaleType
function getSelectedScaleButton() {
  const scaleButtons = document.querySelectorAll('.button-scale');

  for (const scaleButton of scaleButtons) {
    if (scaleButton.classList.contains('active')) {
      console.log("getSelectedScaleButton()");
      console.log("scaleID: " + scaleButton.id);
      console.log("scaleTextContent: " + scaleButton.textContent);
      console.log(scaleButton.textContent);
      return scaleButton.textContent;
    }
  }

  // Default scale if no active scale button is found
  return 'major';
}



/*******************************
 * KEY Button set and get functions
 *******************************/

// Function: Sets the selected KeyType as Active
function setSelectedKeyButton(startingNote) {
   // Remove highlight from all key buttons and enable them
   const keyButtons = document.querySelectorAll('.button-key');
   keyButtons.forEach(button => {
     button.classList.remove('active');
     button.disabled = false;
   });
  
   // Delete previous piano to generate the next one starting at the startingNote
   deletePianoKeyboard();

  // Add highlight to the selected key button
  const selectedButton = document.getElementById(`${startingNote}KeyButton`);
  if (selectedButton) {
    selectedButton.classList.add('active');
    selectedButton.disabled = true;
  }

 // Generate the piano keyboard with the updated starting key
 generatePianoKeyboard(startingNote, getSelectedKeysPerOctave(), getSelectedScaleButton());
}


// Function Gets the current Active KeyType
// it splits out the sharp and flats and uses the Sharp name for the note. 
function getSelectedKeyButton() {
  const keyButtons = document.querySelectorAll('.button-key');
  for (const keyButton of keyButtons) {
    if (keyButton.classList.contains('active')) {
      console.log("getSelectedKeyButton()");
      console.log("KeyID: " + keyButton.id);
      console.log("KeyTextContent: " + keyButton.textContent);

      const buttonText = keyButton.textContent;
      const keyName = extractKeyFromButtonText(buttonText);

      console.log(keyName);
      return keyName;
    }
  }
  return ; // Default starting note
}


function extractKeyFromButtonText(buttonText) {
  // If '\\' is present, split the text content and trim any leading or trailing spaces
  const match = buttonText.match(/[A-Ga-g]#?/);

  // Check if there is a match, and extract the result
  return match ? match[0] : buttonText;
}

/****************************************************************************************************
 * ConvertToVexFlowFormat
 *  converts output from generateScaleNotes into a format that VexFlow can recognize in a voice. 
 ***************************************************************************************************/

function convertToVexFlowFormat(scaleNotes) {
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
// Function to get the selected keys per octave
/// multiple octives math is 13 + 12*#of octives. if 1 then 13, if 2 then 25, if 3 then 37, 4 = 49, 5 = 61,6 = 73,7 = 85
function getSelectedKeysPerOctave() {
  return 13; // Default value
}


/*******************************
NOTE Mapping Get functions
//Get by Character and by Index
*******************************/

//Function returns the index of the character sent into it based on the piano key names
function getNoteMapByChar(noteChar) {
  const charNoteMap = {
    "C": 0,
    "C#": 1,
    "Db": 1,
    "D": 2,
    "D#": 3,
    "Eb": 3,
    "E": 4,
    "F": 5,
    "F#": 6,
    "Gb": 6,
    "G": 7,
    "G#": 8,
    "Ab": 8,
    "A": 9,
    "A#": 10,
    "Bb": 10,
    "B": 11
  };

  return charNoteMap[noteChar];
}

//Function returns the name of the key based on the index
//Doesn't reference flat keys as the indexing is the same as sharps
//Code in functions add in flat when needed but reference the sharp only
function getNoteMapByIndex(noteIndex) {
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

//Returns true or false based on if the inbound string has a sharp or flat symbol in it.
function isBlackKey(note) {
  return note.includes("#") || note.includes("b");
}

//Deletes the keyboard completely by using the getELementsByID and replacing the internal HTML with an empty string.
function deletePianoKeyboard() {
  const pianoContainer = document.getElementById('piano-keyboard');
  pianoContainer.innerHTML = '';
}

/*******************************
FINGERING function
//TODO: Need to impliment getting the fingerings from the fignerings.js file and load them in the
// ::BEFORE (Left hand fingerings) & ::AFTER(Right hand fingerings) areas of each highlighted key.  
*******************************/
function getLeftFingerings() {
  return scaleFingerings[getSelectedKeyButton()][getSelectedScaleButton()].lefthand;
}

/*******************************
OBJECTS

*******************************/

//Object holds all numeric spacing for each scale based on the index there being 12 unique keys.
//It should be noted that we duplicate the name of the initial key at the end of each octive so the displayed board is 13 keys total. 
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

