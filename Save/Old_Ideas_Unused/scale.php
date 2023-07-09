<!DOCTYPE html>
<html>
<head>
  <title>Piano Scales</title>
  <style>
    /* CSS code for piano keyboard */
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .keyboard {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .row {
      display: flex;
    }

    .white-key {
      width: 40px;
      height: 200px;
      background-color: white;
      border: 1px solid #ccc;
      border-radius: 2px;
      margin-right: 2px;
      position: relative;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      transition: background-color 0.2s ease-in-out;
      cursor: pointer;
    }

    .black-key {
      width: 25px;
      height: 120px;
      background-color: black;
      border: 1px solid #333;
      border-radius: 2px;
      margin-left: -13px;
      margin-right: -13px;
      position: relative;
      z-index: 1;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
      transition: background-color 0.2s ease-in-out;
      cursor: pointer;
    }

    .scale-highlight {
      background-color: yellow;
    }

    .scale-highlight-right {
      background-color: lime;
    }

    /* CSS code for musical notation */
    .notation {
      display: flex;
      justify-content: center;
      margin-top: 20px;
      font-size: 24px;
    }

    /* CSS code for fingering */
    .fingering {
      display: flex;
      justify-content: center;
      margin-top: 10px;
      font-size: 14px;
    }

    /* CSS code for responsiveness */
    @media screen and (max-width: 600px) {
      .white-key {
        width: 30px;
        height: 150px;
      }

      .black-key {
        width: 20px;
        height: 90px;
        margin-left: -10px;
        margin-right: -10px;
      }

      .notation {
        font-size: 18px;
      }

      .fingering {
        font-size: 12px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="keyboard">
      <div class="row">
        <?php
          function generateKeyboard($scaleNotes) {
            $keyboard = '';
            $whiteKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
            $blackKeys = ['C#', 'D#', 'F#', 'G#', 'A#'];
          
            foreach ($whiteKeys as $whiteKey) {
              $keyboard .= '<div class="white-key">';
              $keyboard .= '<span>' . $whiteKey . '</span>';
              $keyboard .= '<div class="notation">' . $whiteKey . '</div>';
          
              if (in_array($whiteKey, $scaleNotes)) {
                $blackKey = $blackKeys[array_search($whiteKey, $whiteKeys)];
                $keyboard .= '<div class="black-key scale-highlight"><span>' . $blackKey . '</span></div>';
              } else {
                $keyboard .= '<div class="black-key"></div>';
              }
          
              $keyboard .= '</div>';
            }
          
            // Add the duplicate of the first key
            $keyboard .= '<div class="white-key">';
            $keyboard .= '<span>' . $whiteKeys[0] . '</span>';
            $keyboard .= '<div class="notation">' . $whiteKeys[0] . '</div>';
          
            if (in_array($whiteKeys[0], $scaleNotes)) {
              $blackKey = $blackKeys[array_search($whiteKeys[0], $whiteKeys)];
              $keyboard .= '<div class="black-key scale-highlight"><span>' . $blackKey . '</span></div>';
            } else {
              $keyboard .= '<div class="black-key"></div>';
            }
          
            $keyboard .= '</div>';
          
            return $keyboard;
          }
          
          // Example usage with the C major scale
          $scaleNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];
          echo generateKeyboard($scaleNotes);

        
          
        ?>
      </div>
    </div>
  </div>

  <div class="notation" id="scale-notation"></div>
  <div class="fingering" id="scale-fingering"></div>
</body>
</html>
