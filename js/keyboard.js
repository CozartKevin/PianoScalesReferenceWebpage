
// JavaScript code for generating the piano keyboard
function generatePianoKeyboard(startingNote, keysPerOctave, scaleType) {
  const keyboard = document.getElementById("piano-keyboard");
  const noteMap = {
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

  const startingNoteIndex = noteMap[startingNote];
  let noteIndex = startingNoteIndex;
  const scaleNotes = generateScaleNotes(startingNote, scaleType);

  while (keyboard.children.length < keysPerOctave) {
    const note = getNoteByIndex(noteIndex);

    const key = document.createElement("div");
    key.className = isBlackKey(note) ? "black-key" : "white-key";
    key.id = note;

    const noteLabel = document.createElement("div");
    noteLabel.className = "note-label";

    if (note.includes("#")) {
      const nextNote = getNoteByIndex(noteIndex + 1);
      noteLabel.innerHTML = `<span>${note} </span><br/>${nextNote}b`;

    } else if (note.includes("b")) {
      const prevNote = getNoteByIndex(noteIndex - 1);
      noteLabel.innerHTML = `<span>${prevNote}# </span><br/>${note}`;
    } else {
      noteLabel.innerText = note;
    }

    key.appendChild(noteLabel);
    keyboard.appendChild(key);

    noteIndex = (noteIndex + 1) % 12;
  }

  highlightScale(scaleNotes);
}




function highlightScale(scaleNotes) {
  const keyboard = document.querySelectorAll(".keyboard .white-key, .keyboard .black-key");

  keyboard.forEach((key) => {
    const note = key.id;

    if (scaleNotes.includes(note)) {
      key.classList.add("scale-highlight");
    } else {
      key.classList.remove("scale-highlight");
    }
  });
}



const scaleFingerings = {
  "C": {
    "major": {
      "leftHand": [1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 4, 5],
      "rightHand": [1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 4, 5]
    },
    "natural-minor": {
      "leftHand": [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4],
      "rightHand": [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]
    },
    "harmonic-minor": {
      "leftHand": [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4],
      "rightHand": [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]
    },
    "melodic-minor": {
      "leftHand": [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4],
      "rightHand": [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]
    },
    "dorian": {
      "leftHand": [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4],
      "rightHand": [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]
    },
    "phrygian": {
      "leftHand": [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4],
      "rightHand": [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]
    }, "lydian": {
      "leftHand": [1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 4, 5],
      "rightHand": [1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 4, 5]
    },
    "mixolydian": {
      "leftHand": [1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 4, 5],
      "rightHand": [1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 4, 5]
    },
    "locrian": {
      "leftHand": [1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 4, 5],
      "rightHand": [1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 4, 5]
    },
    "pentatonic-major": {
      "leftHand": [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3],
      "rightHand": [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]
    },
    "pentatonic-minor": {
      "leftHand": [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3],
      "rightHand": [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]
    },
    "blues": {
      "leftHand": [1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 4, 1],
      "rightHand": [1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 4, 1]
    },
    "whole-tone": {
      "leftHand": [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3],
      "rightHand": [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]
    },
    "chromatic": {
      "leftHand": [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2],
      "rightHand": [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2]
    },
    "augmented": {
      "leftHand": [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4],
      "rightHand": [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]
    },
  },
  "C#": {
    // Fingerings for "C#"...
  },
  "Db": {
    // Fingerings for "Db"...
  },
  "D": {
    // Fingerings for "D"...
  },
  // Add fingerings for other keys...
};




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

const noteMap = {
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

function generateScaleNotes(startingNote, scaleType) {



  const startingNoteIndex = noteMap[startingNote];
  const scaleNotes = [];
  const intervals = scaleIntervals[scaleType] || scaleIntervals["major"];

  for (let i = 0; i < intervals.length; i++) {
    const noteIndex = (startingNoteIndex + intervals[i]) % 12;
    const note = getNoteByIndex(noteIndex);
    scaleNotes.push(note);
  }


  return scaleNotes;
}

function getNoteByIndex(noteIndex) {
  const noteMap = {
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

  return noteMap[noteIndex];
}

function isBlackKey(note) {
  return note.includes("#") || note.includes("b");
}


function deletePianoKeyboard() {
  const pianoContainer = document.getElementById('piano-keyboard');
  pianoContainer.innerHTML = '';
}



// Function to toggle the scale type
function toggleScale(scaleType) {
  // Remove highlight from all scale buttons
  const scaleButtons = document.querySelectorAll('.button-scale');
  scaleButtons.forEach(button => {
    button.classList.remove('active');
    button.disabled = false; // Enable all buttons
  });


  //remove Key Highlighting
  deletePianoKeyboard();

  // Generate the piano keyboard with the updated scale
  const startingNote = getSelectedKey();
  const keysPerOctave = getSelectedKeysPerOctave();
  console.log(scaleType);
  console.log(getSelectedKey());
  console.log(getSelectedKeysPerOctave());
  generatePianoKeyboard(startingNote, keysPerOctave, scaleType);

  //Sending currently selected Key and the toggled scaletype to scale notes. 
  const scaleNotes = generateScaleNotes(getSelectedKey(), scaleType);
  highlightScale(scaleNotes);

  // Add highlight to the selected scale button
  const selectedButton = document.getElementById(`${scaleType}ScaleButton`);
  selectedButton.classList.add('active');
  selectedButton.disabled = true;

}

// Function to toggle the starting key
function toggleKey(startingNote) {
  // Remove highlight from all key buttons
  const keyButtons = document.querySelectorAll('.button-key');
  keyButtons.forEach(button => {
    button.classList.remove('active')
    button.disabled = false; // Enable all buttons
  });
  //deletes previous piano so we can generate the next one starting at the startingNote
  deletePianoKeyboard();

  //Generate the piano keyboard with the updated starting key
  generatePianoKeyboard(startingNote, getSelectedKeysPerOctave(), getSelectedScale());

  // Add highlight to the selected key button
  const selectedButton = document.getElementById(`${startingNote}KeyButton`);
  selectedButton.classList.add('active');
  selectedButton.disabled = true;


}

// Function to get the selected scale
function getSelectedScale() {
  const scaleButtons = document.querySelectorAll('.button-scale');
  for (let i = 0; i < scaleButtons.length; i++) {
    if (scaleButtons[i].classList.contains('active')) {

      return scaleButtons[i].textContent;
    }
  }
  return 'major'; // Default scale
}

// Function to get the selected starting key
function getSelectedKey() {
  const keyButtons = document.querySelectorAll('.button-key');
  for (let i = 0; i < keyButtons.length; i++) {
    if (keyButtons[i].classList.contains('active')) {
      const buttonText = keyButtons[i].textContent;
      const keyName = buttonText.includes('\\') ? buttonText.split('\\')[0].trim() : buttonText.trim();
      return keyName;
    }
  }
  return 'C'; // Default starting note
}

// Function to get the selected keys per octave
/// multiple octives math is 13 + 12*#of octives. if 1 then 13, if 2 then 25, if 3 then 37, 4 = 49, 5 = 61,6 = 73,7 = 85
function getSelectedKeysPerOctave() {
  return 13; // Default value
}


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
    button.onclick = () => toggleScale(scale);

    // Append the button to the container
    buttonContainer.appendChild(button);
  }
}



function generateKeyButtons() {
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

    if (nextKey && noteMap[key] === noteMap[nextKey]) {
      // Concatenate note names into the same button with '\'
      button.textContent = `${key} \\ ${nextKey}`;
      // Skip the next key and move to the key after that
      i += 1;
    } else {
      button.textContent = key;
    }

    button.onclick = () => toggleKey(key);

    // Append the button to the container
    buttonContainer.appendChild(button);
  }
}



