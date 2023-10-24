//HTML for Flat: &#9837
//HTML for Sharp: &#9839

/*******************************
 * SCALE Note Generation
 * Used to generate the notes in the scale based on the starting note and scale type using the scale interval section
 *******************************/
function generateScaleNotes() {
  const scaleNotes = [];
  const intervals = scaleIntervals[getSelectedScaleButton()] || scaleIntervals["major"];

  for (const interval of intervals) {
    const noteIndex = (getStartingNoteIndex() + interval) % 12;
    //console.log(noteIndex);
    const note = getNoteMapByIndex(noteIndex);
    scaleNotes.push(note);
  }

 //console.log(scaleNotes + "Scale Notes");

  return scaleNotes;
}

/*******************************
 * KEYBOARD Layout Function
 * JavaScript code for automagically generating the piano keyboard
 *******************************/
function generatePianoKeyboard() {
 const keysPerOctave = getSelectedKeysPerOctave();
 let startingNoteIndex = getStartingNoteIndex();
   //console.log(startingNoteIndex + "getStartingNoteIndex");


  const keyboard = document.getElementById("piano-keyboard");
  keyboard.innerHTML = ''; // Clear previous Keyboard



  while (keyboard.children.length < keysPerOctave) {
 const note = getNoteMapByIndex(startingNoteIndex);
  const key = document.createElement("div");
 // console.log(note + " NOTE INDEX GOING INTO isBlackkey");

    key.className = isBlackKey(note) ? "black-key" : "white-key";
    key.id = note;

    const noteLabel = document.createElement("div");
    noteLabel.className = "note-label";

    if (note.includes("#")) {
      const nextNote = getNoteMapByIndex(startingNoteIndex + 1);
      noteLabel.innerHTML = `<span>${getNoteMapByIndex(startingNoteIndex - 1)}&#9839 </span>${nextNote}&#9837`;
    } else {
      noteLabel.innerText = note;
    }

    key.appendChild(noteLabel);
    keyboard.appendChild(key);

    startingNoteIndex = (startingNoteIndex + 1) % 12;
  }

  //console.log("Sent to highlightScale(scalenotes) from generatePianoKeyboard");
  highlightScale(generateScaleNotes());

  generateVexFlowScale();
}


/*******************************
 * HIGHLIGHT Scale Function Place Fingerings
 *******************************/
function highlightScale(scaleNotes) {
  const keyboard = document.querySelectorAll(".keyboard .white-key, .keyboard .black-key");

  const leftHandFingering = scaleFingerings[getSelectedKeyButton()][getSelectedScaleButton()].leftHand;
  const rightHandFingering = scaleFingerings[getSelectedKeyButton()][getSelectedScaleButton()].rightHand;

  let counter = 0;

 /* console.log("highlightScale(scaleNotes)");
  console.log("-------------------------------");
  console.log("Selected Key: " + getSelectedKeyButton());
  console.log("Selected Scale: " + getSelectedScaleButton());
  console.log("Left Hand Fingers: " + leftHandFingering);
  console.log("Right Hand Fingers: " + rightHandFingering);
  console.log("-------------------------------");
*/
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
    button.className = 'scale-button';
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
    button.className = 'key-button';

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
 * Generate Ovtave Buttons
 * Function sets up the initial Octave Buttons in the "Options" Menu under heading "Keys:"
 *******************************/


  function generateOctaveButtons() {
    const octaveContainer = document.getElementById('Octaves'); // Use getElementById
  
    // Specify the number of octaves you want to support
    const octaveOptions = [1, 2, 3];
  
    octaveOptions.forEach(octave => {
      const button = document.createElement('button');
      button.className = 'octave-button';
      button.dataset.octaves = octave;
      button.textContent = `${octave}`;
  
      button.onclick = () => {
        setOctaveButtonActive(button);
        generatePianoKeyboard();
      };
  
      octaveContainer.appendChild(button);
    });
  
    // Set the default octave button as active
    setOctaveButtonActive(octaveContainer.firstElementChild);
  }
  

  /*******************************
 *  Generate VexFlow Code for Scales
 * Function sets up the VexFlow content based on selected Key and Buttons
 *******************************/
function generateVexFlowScale() {
  // Get the container element for VexFlow
  const vexFlowContainer = document.getElementById('vexflow-container');

  // Clear previous VexFlow content
  vexFlowContainer.innerHTML = '';

  const scaleNotes = generateScaleNotes();
  console.log(scaleNotes + " Inside VexFlowScale");

  // VexFlow setup
  const renderer = new Vex.Flow.Renderer(vexFlowContainer, Vex.Flow.Renderer.Backends.SVG);
  const context = renderer.getContext();
  context.setFont('Arial', 10);

  // Create a stave of width 400 at position 10, 40 with treble clef
  const stave = new Vex.Flow.Stave(10, 40, 500);
  stave.addClef('treble');

  // Connect stave to the rendering context and draw
  stave.setContext(context).draw();

  // Create a voice and add dynamically generated notes

  const voice = new Vex.Flow.Voice({ num_beats: scaleNotes.length, beat_value: 4 });

  

  scaleNotes.forEach(note => {
    console.log(note + " Notes going into staveNote as Keys: ['${note}/4']");
    
    const staveNote = new Vex.Flow.StaveNote({
      keys: [note + '/4'],  // Assuming quarter notes for simplicity
      duration: 'q',
      
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
  const scaleButtons = document.querySelectorAll('.scale-button');
  scaleButtons.forEach(button => {
    button.classList.remove('active');
    button.disabled = false;
  });

  // Remove key highlighting
  deletePianoKeyboard();

  // Add highlight to the selected scale button
  const selectedButton = document.getElementById(`${scaleType}ScaleButton`);
  if (selectedButton) {
    selectedButton.classList.add('active');
    selectedButton.disabled = true;
   // console.log("Out:" + scaleType);

    // Generate the piano keyboard with the updated scale
    generatePianoKeyboard();

  }
}

// Function: Gets the current active ScaleType
function getSelectedScaleButton() {
  const scaleButtons = document.querySelectorAll('.scale-button');

  for (const scaleButton of scaleButtons) {
    if (scaleButton.classList.contains('active')) {
      /*(console.log("getSelectedScaleButton()");
      console.log("scaleID: " + scaleButton.id);
      console.log("scaleTextContent: " + scaleButton.textContent);
      console.log(scaleButton.textContent); */
      return scaleButton.textContent;
    }
  }

  // Sets and returns Default scale of major if no active scale button is found
  setSelectedScaleButton('major');
  return 'major';
}


/*******************************
 * KEY Button set and get functions
 *******************************/
// Function: Sets the selected KeyType as Active
function setSelectedKeyButton(startingNote) {
   // Remove highlight from all key buttons and enable them
   const keyButtons = document.querySelectorAll('.key-button');
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
 generatePianoKeyboard();
}

// Function Gets the current Active KeyType
// it splits out the sharp and flats and uses the Sharp name for the note. 
function getSelectedKeyButton() {
  const keyButtons = document.querySelectorAll('.key-button');
  for (const keyButton of keyButtons) {
    if (keyButton.classList.contains('active')) {
     /* console.log("getSelectedKeyButton()");
      console.log("KeyID: " + keyButton.id);
      console.log("KeyTextContent: " + keyButton.textContent);
*/
      const buttonID = keyButton.id;
    //  console.log(buttonID + " BUTTON TEXT");
      const keyName = extractKeyFromButtonID(buttonID);

     // console.log(keyName);
      return keyName;
    }
  }
    // Sets and returns Default key of C if no active scale button is found
    //console.log("Here before setSelectedKeyButton('C')");
    setSelectedKeyButton('C');
  return 'C'; // Default starting note
}

/*******************************
 * Octave Button set and get functions
 *******************************/

function setOctaveButtonActive(button) {
  const octaveButtons = document.querySelectorAll('.octave-button');
  octaveButtons.forEach(b => b.classList.remove('active'));
  button.classList.add('active');
}

// Function: Gets the current active ScaleType
function getSelectedOctaveButton() {
  const octaveButtons = document.querySelectorAll('.octave-button');
  for (const button of octaveButtons) {
    if (button.classList.contains('active')) {
      return button.dataset.octaves // 13 keys per octave, plus the starting note
    }
  }

  // Default value
  return 1;
}

// Function: calculates the keys per octive based on the current active Octaves button * 12 + 1
// Defaults to 13 keys or 1 * 12 + 1
function getSelectedKeysPerOctave() {
  const octaveButtons = document.querySelectorAll('.octave-button');
  for (const button of octaveButtons) {
    if (button.classList.contains('active')) {
      return parseInt(button.dataset.octaves, 10) * 12 + 1; // 13 keys per octave, plus the starting note
    }
  }

  // Default value
  return 13;
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
NOTE Mapping Get functions
//Get by Character and by Index
*******************************/

//Function returns the index of the character sent into it based on the piano key names
function getStartingNoteIndex() {
  
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
  const normalizedNoteChar = getSelectedKeyButton().substring(0, 2).trim();

 // console.log (normalizedNoteChar + "getStartingNoteIndex |  Note normalized");
  const noteIndex = charNoteMap[normalizedNoteChar];
 // console.log(noteIndex + " Note Index");

  return noteIndex;
}
  
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

//  console.log(indexNoteMap[noteIndex] + "Note Index");

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
Extract Keys From Button ID Mapping Get functions
//Get by Character and by Index
*******************************/
function extractKeyFromButtonID(buttonID) {
  // Remove the string "KeyButton" from the buttonID
  const keyWithoutKeyButton = buttonID.replace(/KeyButton/g, '');

  return keyWithoutKeyButton;
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

