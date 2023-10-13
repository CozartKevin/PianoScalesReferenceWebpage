const scaleFingerings = {
  "C": {
    "major": {
      "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
      "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
    },
    "natural-minor": {
      "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
      "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
    },
    // Fill in the remaining scales with proper fingerings
    "harmonic-minor": {
      "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
      "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
    },
    "melodic-minor": {
      "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
      "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
    },
    "dorian": {
      "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
      "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
    },
    "phrygian": {
      "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
      "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
    },
    "lydian": {
      "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
      "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
    },
    "mixolydian": {
      "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
      "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
    },
    "locrian": {
      "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
      "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
    },
    "pentatonic-major": {
      "leftHand": [3, 2, 1, 3, 2, 1],
      "rightHand": [1, 2, 3, 1, 2, 3]
    },
    "pentatonic-minor": {
      "leftHand": [1, 3, 2, 1, 2, 1],
      "rightHand": [1, 2, 3, 1, 2, 3]
    },
    "blues": { //REMOVE? We have blues minor & major later
      "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
      "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
    },
    "whole-tone": {
      "leftHand": [3, 2, 1, 4, 3, 2, 1],
      "rightHand": [1, 2, 1, 2, 3, 4, 5]
    },
    "chromatic": {
      "leftHand": [1, 3, 1, 3, 2, 1, 3, 1, 3, 1, 3, 2, 1],
      "rightHand": [1, 3, 1, 3, 1, 2, 3, 1, 3, 1, 3, 1, 2]
    },
    "augmented": {
      "leftHand": [5, 3, 2, 1, 3, 2, 2],
      "rightHand": [1, 3, 1, 2, 3, 4, 5]
    },
    "diminished": {
      "leftHand": [5, 4, 3, 1, 5, 4, 3, 2, 1],
      "rightHand": [1, 2, 3, 1, 2, 3, 1, 2, 3]
    },
    "prometheus": {
      "leftHand": [5, 4, 3, 2, 1, 2, 1],
      "rightHand": [1, 2, 1, 2, 3, 4, 5]
    },
    "tritone": {  //not really a scale so remove?
      "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
      "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
    },
    "enigmatic": { //Fingering?
      "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
      "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
    },
    "double-harmonic": {
      "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
      "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
    },
    "neapolitan-major": {
      "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
      "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
    },
    "neapolitan-minor": {
      "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
      "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
    },
    "major-blues": {
      "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
      "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
    },
    "minor-blues": {
      "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
      "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
    },
    "exotic": {
      "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
      "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
    }
  },
  //TODO customize all fingerings for C# - A# as the default fingering is for C on all scales atm (07/09/2023)
"C#": {
  "major": {
    "leftHand": [2, 3, 1, 2, 3, 4, 1, 2],
    "rightHand": [3, 2, 1, 4, 3, 2, 1, 3]
  },
  "natural-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  // Fill in the remaining scales with proper fingerings
  "harmonic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "melodic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "dorian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "phrygian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "lydian": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "mixolydian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "locrian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "pentatonic-major": {
    "leftHand": [3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "pentatonic-minor": {
    "leftHand": [1, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "blues": { //REMOVE? We have blues minor & major later
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "whole-tone": {
    "leftHand": [3, 2, 1, 3, 2, 1, 3],
    "rightHand": [2, 3, 1, 2, 3, 1, 2]
  },
  "chromatic": {
    "leftHand": [1, 3, 1, 3, 2, 1, 3, 1, 3, 1, 3, 2, 1],
    "rightHand": [1, 3, 1, 3, 1, 2, 3, 1, 3, 1, 3, 1, 2]
  },
  "augmented": {
    "leftHand": [5, 3, 2, 1, 3, 2, 2],
    "rightHand": [1, 3, 1, 2, 3, 4, 5]
  },
  "diminished": {
    "leftHand": [5, 4, 3, 1, 5, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 1, 2, 3]
  },
  "prometheus": {
    "leftHand": [5, 4, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 1, 2, 3, 4, 5]
  },
  "tritone": {  //not really a scale so remove?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "enigmatic": { //Fingering?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "double-harmonic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-major": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-minor": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "major-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "minor-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "exotic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  }
},
"Db": {
  "major": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "natural-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  // Fill in the remaining scales with proper fingerings
  "harmonic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "melodic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "dorian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "phrygian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "lydian": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "mixolydian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "locrian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "pentatonic-major": {
    "leftHand": [3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "pentatonic-minor": {
    "leftHand": [1, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "blues": { //REMOVE? We have blues minor & major later
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "whole-tone": {
    "leftHand": [3, 2, 1, 3, 2, 1, 3],
    "rightHand": [2, 3, 1, 2, 3, 1, 2]
  },
  "chromatic": {
    "leftHand": [1, 3, 1, 3, 2, 1, 3, 1, 3, 1, 3, 2, 1],
    "rightHand": [1, 3, 1, 3, 1, 2, 3, 1, 3, 1, 3, 1, 2]
  },
  "augmented": {
    "leftHand": [5, 3, 2, 1, 3, 2, 2],
    "rightHand": [1, 3, 1, 2, 3, 4, 5]
  },
  "diminished": {
    "leftHand": [5, 4, 3, 1, 5, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 1, 2, 3]
  },
  "prometheus": {
    "leftHand": [5, 4, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 1, 2, 3, 4, 5]
  },
  "tritone": {  //not really a scale so remove?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "enigmatic": { //Fingering?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "double-harmonic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-major": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-minor": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "major-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "minor-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "exotic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  }
},
"D": {
  "major": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "natural-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  // Fill in the remaining scales with proper fingerings
  "harmonic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "melodic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "dorian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "phrygian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "lydian": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "mixolydian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "locrian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "pentatonic-major": {
    "leftHand": [3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "pentatonic-minor": {
    "leftHand": [1, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "blues": { //REMOVE? We have blues minor & major later
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "whole-tone": {
    "leftHand": [2, 1, 4, 3, 2, 1, 2],
    "rightHand": [2,1,2,3,4,1,2]
  },
  "chromatic": {
    "leftHand": [1, 3, 1, 3, 2, 1, 3, 1, 3, 1, 3, 2, 1],
    "rightHand": [1, 3, 1, 3, 1, 2, 3, 1, 3, 1, 3, 1, 2]
  },
  "augmented": {
    "leftHand": [5, 3, 2, 1, 3, 2, 2],
    "rightHand": [1, 3, 1, 2, 3, 4, 5]
  },
  "diminished": {
    "leftHand": [5, 4, 3, 1, 5, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 1, 2, 3]
  },
  "prometheus": {
    "leftHand": [5, 4, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 1, 2, 3, 4, 5]
  },
  "tritone": {  //not really a scale so remove?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "enigmatic": { //Fingering?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "double-harmonic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-major": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-minor": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "major-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "minor-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "exotic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  }
},
"D#":{
  "major": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "natural-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  // Fill in the remaining scales with proper fingerings
  "harmonic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "melodic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "dorian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "phrygian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "lydian": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "mixolydian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "locrian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "pentatonic-major": {
    "leftHand": [3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "pentatonic-minor": {
    "leftHand": [1, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "blues": { //REMOVE? We have blues minor & major later
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "whole-tone": {
    "leftHand": [3, 2, 1, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "chromatic": {
    "leftHand": [1, 3, 1, 3, 2, 1, 3, 1, 3, 1, 3, 2, 1],
    "rightHand": [1, 3, 1, 3, 1, 2, 3, 1, 3, 1, 3, 1, 2]
  },
  "augmented": {
    "leftHand": [5, 3, 2, 1, 3, 2, 2],
    "rightHand": [1, 3, 1, 2, 3, 4, 5]
  },
  "diminished": {
    "leftHand": [5, 4, 3, 1, 5, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 1, 2, 3]
  },
  "prometheus": {
    "leftHand": [5, 4, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 1, 2, 3, 4, 5]
  },
  "tritone": {  //not really a scale so remove?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "enigmatic": { //Fingering?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "double-harmonic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-major": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-minor": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "major-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "minor-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "exotic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  }
},
"Eb":{
  "major": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "natural-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  // Fill in the remaining scales with proper fingerings
  "harmonic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "melodic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "dorian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "phrygian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "lydian": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "mixolydian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "locrian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "pentatonic-major": {
    "leftHand": [3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "pentatonic-minor": {
    "leftHand": [1, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "blues": { //REMOVE? We have blues minor & major later
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "whole-tone": {
    "leftHand": [3, 2, 1, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "chromatic": {
    "leftHand": [1, 3, 1, 3, 2, 1, 3, 1, 3, 1, 3, 2, 1],
    "rightHand": [1, 3, 1, 3, 1, 2, 3, 1, 3, 1, 3, 1, 2]
  },
  "augmented": {
    "leftHand": [5, 3, 2, 1, 3, 2, 2],
    "rightHand": [1, 3, 1, 2, 3, 4, 5]
  },
  "diminished": {
    "leftHand": [5, 4, 3, 1, 5, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 1, 2, 3]
  },
  "prometheus": {
    "leftHand": [5, 4, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 1, 2, 3, 4, 5]
  },
  "tritone": {  //not really a scale so remove?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "enigmatic": { //Fingering?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "double-harmonic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-major": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-minor": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "major-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "minor-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "exotic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  }
},
"E":{
  "major": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "natural-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  // Fill in the remaining scales with proper fingerings
  "harmonic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "melodic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "dorian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "phrygian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "lydian": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "mixolydian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "locrian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "pentatonic-major": {
    "leftHand": [3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "pentatonic-minor": {
    "leftHand": [1, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "blues": { //REMOVE? We have blues minor & major later
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "whole-tone": {
    "leftHand": [3, 2, 1, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "chromatic": {
    "leftHand": [1, 3, 1, 3, 2, 1, 3, 1, 3, 1, 3, 2, 1],
    "rightHand": [1, 3, 1, 3, 1, 2, 3, 1, 3, 1, 3, 1, 2]
  },
  "augmented": {
    "leftHand": [5, 3, 2, 1, 3, 2, 2],
    "rightHand": [1, 3, 1, 2, 3, 4, 5]
  },
  "diminished": {
    "leftHand": [5, 4, 3, 1, 5, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 1, 2, 3]
  },
  "prometheus": {
    "leftHand": [5, 4, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 1, 2, 3, 4, 5]
  },
  "tritone": {  //not really a scale so remove?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "enigmatic": { //Fingering?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "double-harmonic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-major": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-minor": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "major-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "minor-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "exotic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  }
},
"E#":{
  "major": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "natural-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  // Fill in the remaining scales with proper fingerings
  "harmonic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "melodic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "dorian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "phrygian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "lydian": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "mixolydian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "locrian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "pentatonic-major": {
    "leftHand": [3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "pentatonic-minor": {
    "leftHand": [1, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "blues": { //REMOVE? We have blues minor & major later
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "whole-tone": {
    "leftHand": [3, 2, 1, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "chromatic": {
    "leftHand": [1, 3, 1, 3, 2, 1, 3, 1, 3, 1, 3, 2, 1],
    "rightHand": [1, 3, 1, 3, 1, 2, 3, 1, 3, 1, 3, 1, 2]
  },
  "augmented": {
    "leftHand": [5, 3, 2, 1, 3, 2, 2],
    "rightHand": [1, 3, 1, 2, 3, 4, 5]
  },
  "diminished": {
    "leftHand": [5, 4, 3, 1, 5, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 1, 2, 3]
  },
  "prometheus": {
    "leftHand": [5, 4, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 1, 2, 3, 4, 5]
  },
  "tritone": {  //not really a scale so remove?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "enigmatic": { //Fingering?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "double-harmonic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-major": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-minor": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "major-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "minor-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "exotic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  }
},
"Fb":{
  "major": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "natural-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  // Fill in the remaining scales with proper fingerings
  "harmonic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "melodic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "dorian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "phrygian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "lydian": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "mixolydian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "locrian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "pentatonic-major": {
    "leftHand": [3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "pentatonic-minor": {
    "leftHand": [1, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "blues": { //REMOVE? We have blues minor & major later
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "whole-tone": {
    "leftHand": [3, 2, 1, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "chromatic": {
    "leftHand": [1, 3, 1, 3, 2, 1, 3, 1, 3, 1, 3, 2, 1],
    "rightHand": [1, 3, 1, 3, 1, 2, 3, 1, 3, 1, 3, 1, 2]
  },
  "augmented": {
    "leftHand": [5, 3, 2, 1, 3, 2, 2],
    "rightHand": [1, 3, 1, 2, 3, 4, 5]
  },
  "diminished": {
    "leftHand": [5, 4, 3, 1, 5, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 1, 2, 3]
  },
  "prometheus": {
    "leftHand": [5, 4, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 1, 2, 3, 4, 5]
  },
  "tritone": {  //not really a scale so remove?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "enigmatic": { //Fingering?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "double-harmonic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-major": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-minor": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "major-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "minor-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "exotic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  }
},
"F":{
  "major": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "natural-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  // Fill in the remaining scales with proper fingerings
  "harmonic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "melodic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "dorian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "phrygian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "lydian": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "mixolydian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "locrian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "pentatonic-major": {
    "leftHand": [3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "pentatonic-minor": {
    "leftHand": [1, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "blues": { //REMOVE? We have blues minor & major later
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "whole-tone": {
    "leftHand": [3, 2, 1, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "chromatic": {
    "leftHand": [1, 3, 1, 3, 2, 1, 3, 1, 3, 1, 3, 2, 1],
    "rightHand": [1, 3, 1, 3, 1, 2, 3, 1, 3, 1, 3, 1, 2]
  },
  "augmented": {
    "leftHand": [5, 3, 2, 1, 3, 2, 2],
    "rightHand": [1, 3, 1, 2, 3, 4, 5]
  },
  "diminished": {
    "leftHand": [5, 4, 3, 1, 5, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 1, 2, 3]
  },
  "prometheus": {
    "leftHand": [5, 4, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 1, 2, 3, 4, 5]
  },
  "tritone": {  //not really a scale so remove?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "enigmatic": { //Fingering?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "double-harmonic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-major": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-minor": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "major-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "minor-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "exotic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  }
},
"F#":{
  "major": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "natural-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  // Fill in the remaining scales with proper fingerings
  "harmonic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "melodic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "dorian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "phrygian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "lydian": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "mixolydian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "locrian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "pentatonic-major": {
    "leftHand": [3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "pentatonic-minor": {
    "leftHand": [1, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "blues": { //REMOVE? We have blues minor & major later
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "whole-tone": {
    "leftHand": [3, 2, 1, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "chromatic": {
    "leftHand": [1, 3, 1, 3, 2, 1, 3, 1, 3, 1, 3, 2, 1],
    "rightHand": [1, 3, 1, 3, 1, 2, 3, 1, 3, 1, 3, 1, 2]
  },
  "augmented": {
    "leftHand": [5, 3, 2, 1, 3, 2, 2],
    "rightHand": [1, 3, 1, 2, 3, 4, 5]
  },
  "diminished": {
    "leftHand": [5, 4, 3, 1, 5, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 1, 2, 3]
  },
  "prometheus": {
    "leftHand": [5, 4, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 1, 2, 3, 4, 5]
  },
  "tritone": {  //not really a scale so remove?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "enigmatic": { //Fingering?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "double-harmonic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-major": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-minor": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "major-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "minor-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "exotic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  }
},
"Gb":{
  "major": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "natural-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  // Fill in the remaining scales with proper fingerings
  "harmonic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "melodic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "dorian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "phrygian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "lydian": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "mixolydian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "locrian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "pentatonic-major": {
    "leftHand": [3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "pentatonic-minor": {
    "leftHand": [1, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "blues": { //REMOVE? We have blues minor & major later
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "whole-tone": {
    "leftHand": [3, 2, 1, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "chromatic": {
    "leftHand": [1, 3, 1, 3, 2, 1, 3, 1, 3, 1, 3, 2, 1],
    "rightHand": [1, 3, 1, 3, 1, 2, 3, 1, 3, 1, 3, 1, 2]
  },
  "augmented": {
    "leftHand": [5, 3, 2, 1, 3, 2, 2],
    "rightHand": [1, 3, 1, 2, 3, 4, 5]
  },
  "diminished": {
    "leftHand": [5, 4, 3, 1, 5, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 1, 2, 3]
  },
  "prometheus": {
    "leftHand": [5, 4, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 1, 2, 3, 4, 5]
  },
  "tritone": {  //not really a scale so remove?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "enigmatic": { //Fingering?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "double-harmonic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-major": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-minor": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "major-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "minor-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "exotic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  }
},
"G":{
  "major": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "natural-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  // Fill in the remaining scales with proper fingerings
  "harmonic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "melodic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "dorian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "phrygian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "lydian": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "mixolydian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "locrian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "pentatonic-major": {
    "leftHand": [3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "pentatonic-minor": {
    "leftHand": [1, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "blues": { //REMOVE? We have blues minor & major later
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "whole-tone": {
    "leftHand": [3, 2, 1, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "chromatic": {
    "leftHand": [1, 3, 1, 3, 2, 1, 3, 1, 3, 1, 3, 2, 1],
    "rightHand": [1, 3, 1, 3, 1, 2, 3, 1, 3, 1, 3, 1, 2]
  },
  "augmented": {
    "leftHand": [5, 3, 2, 1, 3, 2, 2],
    "rightHand": [1, 3, 1, 2, 3, 4, 5]
  },
  "diminished": {
    "leftHand": [5, 4, 3, 1, 5, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 1, 2, 3]
  },
  "prometheus": {
    "leftHand": [5, 4, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 1, 2, 3, 4, 5]
  },
  "tritone": {  //not really a scale so remove?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "enigmatic": { //Fingering?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "double-harmonic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-major": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-minor": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "major-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "minor-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "exotic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  }
},
"G#":{
  "major": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "natural-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  // Fill in the remaining scales with proper fingerings
  "harmonic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "melodic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "dorian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "phrygian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "lydian": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "mixolydian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "locrian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "pentatonic-major": {
    "leftHand": [3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "pentatonic-minor": {
    "leftHand": [1, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "blues": { //REMOVE? We have blues minor & major later
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "whole-tone": {
    "leftHand": [3, 2, 1, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "chromatic": {
    "leftHand": [1, 3, 1, 3, 2, 1, 3, 1, 3, 1, 3, 2, 1],
    "rightHand": [1, 3, 1, 3, 1, 2, 3, 1, 3, 1, 3, 1, 2]
  },
  "augmented": {
    "leftHand": [5, 3, 2, 1, 3, 2, 2],
    "rightHand": [1, 3, 1, 2, 3, 4, 5]
  },
  "diminished": {
    "leftHand": [5, 4, 3, 1, 5, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 1, 2, 3]
  },
  "prometheus": {
    "leftHand": [5, 4, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 1, 2, 3, 4, 5]
  },
  "tritone": {  //not really a scale so remove?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "enigmatic": { //Fingering?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "double-harmonic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-major": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-minor": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "major-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "minor-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "exotic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  }
},
"Ab":{
  "major": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "natural-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  // Fill in the remaining scales with proper fingerings
  "harmonic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "melodic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "dorian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "phrygian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "lydian": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "mixolydian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "locrian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "pentatonic-major": {
    "leftHand": [3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "pentatonic-minor": {
    "leftHand": [1, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "blues": { //REMOVE? We have blues minor & major later
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "whole-tone": {
    "leftHand": [3, 2, 1, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "chromatic": {
    "leftHand": [1, 3, 1, 3, 2, 1, 3, 1, 3, 1, 3, 2, 1],
    "rightHand": [1, 3, 1, 3, 1, 2, 3, 1, 3, 1, 3, 1, 2]
  },
  "augmented": {
    "leftHand": [5, 3, 2, 1, 3, 2, 2],
    "rightHand": [1, 3, 1, 2, 3, 4, 5]
  },
  "diminished": {
    "leftHand": [5, 4, 3, 1, 5, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 1, 2, 3]
  },
  "prometheus": {
    "leftHand": [5, 4, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 1, 2, 3, 4, 5]
  },
  "tritone": {  //not really a scale so remove?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "enigmatic": { //Fingering?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "double-harmonic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-major": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-minor": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "major-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "minor-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "exotic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  }
},
"A":{
  "major": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "natural-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  // Fill in the remaining scales with proper fingerings
  "harmonic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "melodic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "dorian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "phrygian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "lydian": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "mixolydian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "locrian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "pentatonic-major": {
    "leftHand": [3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "pentatonic-minor": {
    "leftHand": [1, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "blues": { //REMOVE? We have blues minor & major later
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "whole-tone": {
    "leftHand": [3, 2, 1, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "chromatic": {
    "leftHand": [1, 3, 1, 3, 2, 1, 3, 1, 3, 1, 3, 2, 1],
    "rightHand": [1, 3, 1, 3, 1, 2, 3, 1, 3, 1, 3, 1, 2]
  },
  "augmented": {
    "leftHand": [5, 3, 2, 1, 3, 2, 2],
    "rightHand": [1, 3, 1, 2, 3, 4, 5]
  },
  "diminished": {
    "leftHand": [5, 4, 3, 1, 5, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 1, 2, 3]
  },
  "prometheus": {
    "leftHand": [5, 4, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 1, 2, 3, 4, 5]
  },
  "tritone": {  //not really a scale so remove?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "enigmatic": { //Fingering?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "double-harmonic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-major": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-minor": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "major-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "minor-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "exotic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  }
},
"A#":{
  "major": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "natural-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  // Fill in the remaining scales with proper fingerings
  "harmonic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "melodic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "dorian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "phrygian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "lydian": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "mixolydian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "locrian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "pentatonic-major": {
    "leftHand": [3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "pentatonic-minor": {
    "leftHand": [1, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "blues": { //REMOVE? We have blues minor & major later
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "whole-tone": {
    "leftHand": [3, 2, 1, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "chromatic": {
    "leftHand": [1, 3, 1, 3, 2, 1, 3, 1, 3, 1, 3, 2, 1],
    "rightHand": [1, 3, 1, 3, 1, 2, 3, 1, 3, 1, 3, 1, 2]
  },
  "augmented": {
    "leftHand": [5, 3, 2, 1, 3, 2, 2],
    "rightHand": [1, 3, 1, 2, 3, 4, 5]
  },
  "diminished": {
    "leftHand": [5, 4, 3, 1, 5, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 1, 2, 3]
  },
  "prometheus": {
    "leftHand": [5, 4, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 1, 2, 3, 4, 5]
  },
  "tritone": {  //not really a scale so remove?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "enigmatic": { //Fingering?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "double-harmonic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-major": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-minor": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "major-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "minor-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "exotic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  }
},
"Bb": {
  "major": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "natural-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  // Fill in the remaining scales with proper fingerings
  "harmonic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "melodic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "dorian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "phrygian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "lydian": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "mixolydian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "locrian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "pentatonic-major": {
    "leftHand": [3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "pentatonic-minor": {
    "leftHand": [1, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "blues": { //REMOVE? We have blues minor & major later
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "whole-tone": {
    "leftHand": [3, 2, 1, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "chromatic": {
    "leftHand": [1, 3, 1, 3, 2, 1, 3, 1, 3, 1, 3, 2, 1],
    "rightHand": [1, 3, 1, 3, 1, 2, 3, 1, 3, 1, 3, 1, 2]
  },
  "augmented": {
    "leftHand": [5, 3, 2, 1, 3, 2, 2],
    "rightHand": [1, 3, 1, 2, 3, 4, 5]
  },
  "diminished": {
    "leftHand": [5, 4, 3, 1, 5, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 1, 2, 3]
  },
  "prometheus": {
    "leftHand": [5, 4, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 1, 2, 3, 4, 5]
  },
  "tritone": {  //not really a scale so remove?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "enigmatic": { //Fingering?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "double-harmonic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-major": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-minor": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "major-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "minor-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "exotic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  }
},
"B": {
  "major": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "natural-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  // Fill in the remaining scales with proper fingerings
  "harmonic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "melodic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "dorian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "phrygian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "lydian": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "mixolydian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "locrian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "pentatonic-major": {
    "leftHand": [3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "pentatonic-minor": {
    "leftHand": [1, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "blues": { //REMOVE? We have blues minor & major later
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "whole-tone": {
    "leftHand": [3, 2, 1, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "chromatic": {
    "leftHand": [1, 3, 1, 3, 2, 1, 3, 1, 3, 1, 3, 2, 1],
    "rightHand": [1, 3, 1, 3, 1, 2, 3, 1, 3, 1, 3, 1, 2]
  },
  "augmented": {
    "leftHand": [5, 3, 2, 1, 3, 2, 2],
    "rightHand": [1, 3, 1, 2, 3, 4, 5]
  },
  "diminished": {
    "leftHand": [5, 4, 3, 1, 5, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 1, 2, 3]
  },
  "prometheus": {
    "leftHand": [5, 4, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 1, 2, 3, 4, 5]
  },
  "tritone": {  //not really a scale so remove?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "enigmatic": { //Fingering?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "double-harmonic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-major": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-minor": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "major-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "minor-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "exotic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  }
},
"B#":{
  "major": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "natural-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  // Fill in the remaining scales with proper fingerings
  "harmonic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "melodic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "dorian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "phrygian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "lydian": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "mixolydian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "locrian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "pentatonic-major": {
    "leftHand": [3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "pentatonic-minor": {
    "leftHand": [1, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "blues": { //REMOVE? We have blues minor & major later
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "whole-tone": {
    "leftHand": [3, 2, 1, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "chromatic": {
    "leftHand": [1, 3, 1, 3, 2, 1, 3, 1, 3, 1, 3, 2, 1],
    "rightHand": [1, 3, 1, 3, 1, 2, 3, 1, 3, 1, 3, 1, 2]
  },
  "augmented": {
    "leftHand": [5, 3, 2, 1, 3, 2, 2],
    "rightHand": [1, 3, 1, 2, 3, 4, 5]
  },
  "diminished": {
    "leftHand": [5, 4, 3, 1, 5, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 1, 2, 3]
  },
  "prometheus": {
    "leftHand": [5, 4, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 1, 2, 3, 4, 5]
  },
  "tritone": {  //not really a scale so remove?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "enigmatic": { //Fingering?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "double-harmonic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-major": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-minor": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "major-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "minor-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "exotic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  }
},
"Cb":{
  "major": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "natural-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  // Fill in the remaining scales with proper fingerings
  "harmonic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "melodic-minor": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "dorian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "phrygian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "lydian": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "mixolydian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "locrian": {
    "leftHand": [5, 4, 3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 4, 5]
  },
  "pentatonic-major": {
    "leftHand": [3, 2, 1, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "pentatonic-minor": {
    "leftHand": [1, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3]
  },
  "blues": { //REMOVE? We have blues minor & major later
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "whole-tone": {
    "leftHand": [3, 2, 1, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "chromatic": {
    "leftHand": [1, 3, 1, 3, 2, 1, 3, 1, 3, 1, 3, 2, 1],
    "rightHand": [1, 3, 1, 3, 1, 2, 3, 1, 3, 1, 3, 1, 2]
  },
  "augmented": {
    "leftHand": [5, 3, 2, 1, 3, 2, 2],
    "rightHand": [1, 3, 1, 2, 3, 4, 5]
  },
  "diminished": {
    "leftHand": [5, 4, 3, 1, 5, 4, 3, 2, 1],
    "rightHand": [1, 2, 3, 1, 2, 3, 1, 2, 3]
  },
  "prometheus": {
    "leftHand": [5, 4, 3, 2, 1, 2, 1],
    "rightHand": [1, 2, 1, 2, 3, 4, 5]
  },
  "tritone": {  //not really a scale so remove?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "enigmatic": { //Fingering?
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "double-harmonic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-major": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "neapolitan-minor": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "major-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "minor-blues": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  },
  "exotic": {
    "leftHand": [1, 2, 3, 4, 1, 2, 3, 4],
    "rightHand": [1, 2, 3, 4, 1, 2, 3, 4]
  }
}
};



