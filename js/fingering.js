const scales = {
    major: {
      'C': {
        notation: 'C Major',
        fingering: {
          rightHand: '1 2 3 1 2 3 4 5',
          leftHand: '5 4 3 2 1 3 2 1'
        },
        keys: ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C2']
      },
      'G': {
        notation: 'G Major',
        fingering: {
          rightHand: '1 2 3 1 2 3 4 5',
          leftHand: '5 4 3 2 1 3 2 1'
        },
        keys: ['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G2']
      },
      'D': {
        notation: 'D Major',
        fingering: {
          rightHand: '1 2 3 1 2 3 1 2',
          leftHand: '2 1 3 2 1 3 2 1'
        },
        keys: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#', 'D2']
      },
      'A': {
        notation: 'A Major',
        fingering: {
          rightHand: '1 2 3 1 2 3 1 2',
          leftHand: '2 1 3 2 1 3 2 1'
        },
        keys: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#', 'A2']
      },
      'E': {
        notation: 'E Major',
        fingering: {
          rightHand: '1 2 3 1 2 3 1 2',
          leftHand: '2 1 3 2 1 3 2 1'
        },
        keys: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#', 'E2']
      },
      'B': {
        notation: 'B Major',
        fingering: {
          rightHand: '1 2 3 1 2 3 1 2',
          leftHand: '2 1 3 2 1 3 2 1'
        },
        keys: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#', 'B2']
      },
      'F#': {
        notation: 'F# Major',
        fingering: {
          rightHand: '1 2 3 1 2 3 1 2',
          leftHand: '2 1 3 2 1 3 2 1'
        },
        keys: ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'F', 'F#2']
      },
      'C#': {
        notation: 'C# Major',
        fingering: {
          rightHand: '1 2 3 1 2 3 1 2',
          leftHand: '2 1 3 2 1 3 2 1'
        },
        keys: ['C#', 'D#', 'F', 'F#', 'G#', 'A#', 'C', 'C#2']
      }
    },
    minor: {
      'A': {
        notation: 'A Minor',
        fingering: {
          rightHand: '1 2 3 1 2 3 4 5',
          leftHand: '5 4 3 2 1 3 2 1'
        },
        keys: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A2']
      },
      'E': {
        notation: 'E Minor',
        fingering: {
          rightHand: '1 2 3 1 2 3 4 5',
          leftHand: '5 4 3 2 1 3 2 1'
        },
        keys: ['E', 'F#', 'G', 'A', 'B', 'C', 'D', 'E2']
      },
      'B': {
        notation: 'B Minor',
        fingering: {
          rightHand: '1 2 3 1 2 3 4 5',
          leftHand: '5 4 3 2 1 3 2 1'
        },
        keys: ['B', 'C#', 'D', 'E', 'F#', 'G', 'A', 'B2']
      },
      'F#': {
        notation: 'F# Minor',
        fingering: {
          rightHand: '1 2 3 1 2 3 4 5',
          leftHand: '5 4 3 2 1 3 2 1'
        },
        keys: ['F#', 'G#', 'A', 'B', 'C#', 'D', 'E', 'F#2']
      },
      'C#': {
        notation: 'C# Minor',
        fingering: {
          rightHand: '1 2 3 1 2 3 4 5',
          leftHand: '5 4 3 2 1 3 2 1'
        },
        keys: ['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B', 'C#2']
      },
      'G#': {
        notation: 'G# Minor',
        fingering: {
          rightHand: '1 2 3 1 2 3 4 5',
          leftHand: '5 4 3 2 1 3 2 1'
        },
        keys: ['G#', 'A#', 'B', 'C#', 'D#', 'E', 'F#', 'G#2']
      }
    },
    extended: {
      'Cmaj7': {
        notation: 'C Major 7th',
        fingering: {
          rightHand: '1 2 3 4',
          leftHand: '5 4 3 2'
        },
        keys: ['C', 'E', 'G', 'B']
      },
      'Dmaj7': {
        notation: 'D Major 7th',
        fingering: {
          rightHand: '1 2 3 4',
          leftHand: '5 4 3 2'
        },
        keys: ['D', 'F#', 'A', 'C#']
      },
      'G7': {
        notation: 'G Dominant 7th',
        fingering: {
          rightHand: '1 2 3 1',
          leftHand: '5 4 3 2'
        },
        keys: ['G', 'B', 'D', 'F']
      },
      'Amin7': {
        notation: 'A Minor 7th',
        fingering: {
          rightHand: '1 2 3 4',
          leftHand: '5 4 3 2'
        },
        keys: ['A', 'C', 'E', 'G']
      },
      'Bdim': {
        notation: 'B Diminished',
        fingering: {
          rightHand: '1 2 3 1',
          leftHand: '5 4 3 2'
        },
        keys: ['B', 'D', 'F']
      },
      'Cmaj9': {
        notation: 'C Major 9th',
        fingering: {
          rightHand: '1 2 3 5',
          leftHand: '5 3 2 1'
        },
        keys: ['C', 'E', 'G', 'B', 'D']
      },
      'Amin9': {
        notation: 'A Minor 9th',
        fingering: {
          rightHand: '1 2 3 5',
          leftHand: '5 3 2 1'
        },
        keys: ['A', 'C', 'E', 'G', 'B']
      },
      'Gmaj9': {
        notation: 'G Major 9th',
        fingering: {
          rightHand: '1 2 3 5',
          leftHand: '5 3 2 1'
        },
        keys: ['G', 'B', 'D', 'F#', 'A']
      }
    }
  };
  