// Function to generate the piano keyboard
function generatePianoKeyboard(startingNote, keysPerOctave) {
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
  
    const container = document.querySelector(".container");
    const keyboard = document.createElement("div");
    keyboard.classList.add("keyboard");
  
    let currentNote = startingNote;
  
    for (let i = 0; i < keysPerOctave; i++) {
      const key = document.createElement("div");
      key.classList.add("white-key");
      key.id = currentNote;
      keyboard.appendChild(key);
  
      const noteIndex = noteMap[currentNote];
      const nextNoteIndex = (noteIndex + 1) % keysPerOctave;
  
      const nextNote = Object.keys(noteMap).find(
        (note) => noteMap[note] === nextNoteIndex
      );
  
      if (nextNote) {
        const blackKey = document.createElement("div");
        blackKey.classList.add("black-key");
        blackKey.id = nextNote;
        keyboard.appendChild(blackKey);
      }
  
      const nextNoteIndexAfterBlack = (noteIndex + 2) % keysPerOctave;
      currentNote = Object.keys(noteMap).find(
        (note) => noteMap[note] === nextNoteIndexAfterBlack
      );
    }
  
    container.appendChild(keyboard);
  }
  
  // Call the function to generate the piano keyboard
  generatePianoKeyboard("C", 13);
  