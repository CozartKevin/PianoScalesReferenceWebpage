
<!DOCTYPE html>
<html>
<head>
  <title>Piano Scales</title>
  <style>
    /* CSS code for piano keyboard */
    .keyboard {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
    }

    .row {
      display: flex;
    }

    .white-key {
      width: 50px;
      height: 200px;
      background-color: white;
      border: 1px solid black;
      margin-right: 1px;
      position: relative;
      color: black;
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }

    .white-key span {
      transform: translateY(8px);
    }

    .black-key {
      width: 30px;
      height: 120px;
      background-color: black;
      border: 1px solid black;
      margin-left: -15px;
      margin-right: -15px;
      z-index: 1;
      position: relative;
    }

    .scale-highlight {
      background-color: lightblue;
    }

    /* CSS code for musical notation */
    .notation-black-key {
      position: absolute;
      bottom: 5px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 16px;
      color: white;
    }

    /* CSS code for musical notation */
    .notation-white-key {
      position: absolute;
      bottom: 5px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 16px;
      color: black;
    }

    /* CSS code for fingering */
    .fingering {
      display: flex;
      justify-content: center;
      margin-top: 10px;
      font-size: 14px;
    }
  </style>
</head>
<body>

<?php
$scaleNotes = [];
$leftHandFingerings = [];
$rightHandFingerings = [];

if (isset($_GET['key'])) {
  $selectedKey = $_GET['key'];

  // Define the scale notes and fingerings based on the selected key
  switch ($selectedKey) {
    case 'C':
      $scaleNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C'];
      $leftHandFingerings = ['5', '1', '4', '1', '3', '5', '1', '4', '1', '3', '5', '1', '5'];
      $rightHandFingerings = ['1', '3', '1', '4', '1', '2', '3', '1', '3', '1', '4', '1', '5'];
      break;
    case 'C#':
      $scaleNotes = ['C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#'];
      $leftHandFingerings = ['5', '4', '1', '3', '5', '1', '4', '1', '3', '5', '1', '4', '5'];
      $rightHandFingerings = ['1', '4', '1', '3', '1', '3', '1', '4', '1', '2', '3', '1', '5'];
      break;
    case 'D':
      $scaleNotes = ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D'];
      $leftHandFingerings = ['5', '1', '3', '5', '1', '4', '1', '3', '5', '1', '4', '1', '5'];
      $rightHandFingerings = ['1', '3', '1', '2', '3', '1', '4', '1', '3', '1', '4', '1', '5'];
      break;
    // Add more cases for other scales...
    default:
      break;
  }
}
?>
<div class="keyboard">
  <div class="row">
    <div class="white-key <?php if (in_array('C', $scaleNotes)) echo 'scale-highlight'; ?>" id="C">
      <div class="notation-white-key">C</div>
      <div class="fingering"><?php echo in_array('C', $scaleNotes) ? 'L: ' . $leftHandFingerings[array_search('C', $scaleNotes)] . '<br>R: ' . $rightHandFingerings[array_search('C', $scaleNotes)] : ''; ?></div>
    </div>
    <div class="black-key <?php if (in_array('C#', $scaleNotes)) echo 'scale-highlight'; ?>" id="C#">
      <div class="notation-black-key">C#</div>
      <div class="fingering"><?php echo in_array('C#', $scaleNotes) ? 'L: ' . $leftHandFingerings[array_search('C#', $scaleNotes)] . '<br>R: ' . $rightHandFingerings[array_search('C#', $scaleNotes)] : ''; ?></div>
    </div>
    <div class="white-key <?php if (in_array('D', $scaleNotes)) echo 'scale-highlight'; ?>" id="D">
      <div class="notation-white-key">D</div>
      <div class="fingering"><?php echo in_array('D', $scaleNotes) ? 'L: ' . $leftHandFingerings[array_search('D', $scaleNotes)] . '<br>R: ' . $rightHandFingerings[array_search('D', $scaleNotes)] : ''; ?></div>
    </div>
    <div class="black-key <?php if (in_array('D#', $scaleNotes)) echo 'scale-highlight'; ?>" id="D#">
      <div class="notation-black-key">D#</div>
      <div class="fingering"><?php echo in_array('D#', $scaleNotes) ? 'L: ' . $leftHandFingerings[array_search('D#', $scaleNotes)] . '<br>R: ' . $rightHandFingerings[array_search('D#', $scaleNotes)] : ''; ?></div>
    </div>
    <div class="white-key <?php if (in_array('E', $scaleNotes)) echo 'scale-highlight'; ?>" id="E">
      <div class="notation-white-key">E</div>
      <div class="fingering"><?php echo in_array('E', $scaleNotes) ? 'L: ' . $leftHandFingerings[array_search('E', $scaleNotes)] . '<br>R: ' . $rightHandFingerings[array_search('E', $scaleNotes)] : ''; ?></div>
    </div>
    <div class="white-key <?php if (in_array('F', $scaleNotes)) echo 'scale-highlight'; ?>" id="F">
      <div class="notation-white-key">F</div>
      <div class="fingering"><?php echo in_array('F', $scaleNotes) ? 'L: ' . $leftHandFingerings[array_search('F', $scaleNotes)] . '<br>R: ' . $rightHandFingerings[array_search('F', $scaleNotes)] : ''; ?></div>
    </div>
    <div class="black-key <?php if (in_array('F#', $scaleNotes)) echo 'scale-highlight'; ?>" id="F#">
      <div class="notation-black-key">F#</div>
      <div class="fingering"><?php echo in_array('F#', $scaleNotes) ? 'L: ' . $leftHandFingerings[array_search('F#', $scaleNotes)] . '<br>R: ' . $rightHandFingerings[array_search('F#', $scaleNotes)] : ''; ?></div>
    </div>
    <div class="white-key <?php if (in_array('G', $scaleNotes)) echo 'scale-highlight'; ?>" id="G">
      <div class="notation-white-key">G</div>
      <div class="fingering"><?php echo in_array('G', $scaleNotes) ? 'L: ' . $leftHandFingerings[array_search('G', $scaleNotes)] . '<br>R: ' . $rightHandFingerings[array_search('G', $scaleNotes)] : ''; ?></div>
    </div>
    <div class="black-key <?php if (in_array('G#', $scaleNotes)) echo 'scale-highlight'; ?>" id="G#">
      <div class="notation-black-key">G#</div>
      <div class="fingering"><?php echo in_array('G#', $scaleNotes) ? 'L: ' . $leftHandFingerings[array_search('G#', $scaleNotes)] . '<br>R: ' . $rightHandFingerings[array_search('G#', $scaleNotes)] : ''; ?></div>
    </div>
    <div class="white-key <?php if (in_array('A', $scaleNotes)) echo 'scale-highlight'; ?>" id="A">
      <div class="notation-white-key">A</div>
      <div class="fingering"><?php echo in_array('A', $scaleNotes) ? 'L: ' . $leftHandFingerings[array_search('A', $scaleNotes)] . '<br>R: ' . $rightHandFingerings[array_search('A', $scaleNotes)] : ''; ?></div>
    </div>
    <div class="black-key <?php if (in_array('A#', $scaleNotes)) echo 'scale-highlight'; ?>" id="A#">
      <div class="notation-black-key">A#</div>
      <div class="fingering"><?php echo in_array('A#', $scaleNotes) ? 'L: ' . $leftHandFingerings[array_search('A#', $scaleNotes)] . '<br>R: ' . $rightHandFingerings[array_search('A#', $scaleNotes)] : ''; ?></div>
    </div>
    <div class="white-key <?php if (in_array('B', $scaleNotes)) echo 'scale-highlight'; ?>" id="B">
      <div class="notation-white-key">B</div>
      <div class="fingering"><?php echo in_array('B', $scaleNotes) ? 'L: ' . $leftHandFingerings[array_search('B', $scaleNotes)] . '<br>R: ' . $rightHandFingerings[array_search('B', $scaleNotes)] : ''; ?></div>
    </div>
    <div class="white-key <?php if (in_array('C', $scaleNotes)) echo 'scale-highlight'; ?>" id="C2">
      <div class="notation-white-key">C</div>
      <div class="fingering"><?php echo in_array('C2', $scaleNotes) ? 'L: ' . $leftHandFingerings[array_search('C2', $scaleNotes)] . '<br>R: ' . $rightHandFingerings[array_search('C2', $scaleNotes)] : ''; ?></div>
    </div>
    <div class="black-key <?php if (in_array('C#2', $scaleNotes)) echo 'scale-highlight'; ?>" id="C#2">
      <div class="notation-black-key">C#</div>
      <div class="fingering"><?php echo in_array('C#2', $scaleNotes) ? 'L: ' . $leftHandFingerings[array_search('C#2', $scaleNotes)] . '<br>R: ' . $rightHandFingerings[array_search('C#2', $scaleNotes)] : ''; ?></div>
    </div>
    <div class="white-key <?php if (in_array('D2', $scaleNotes)) echo 'scale-highlight'; ?>" id="D2">
      <div class="notation-white-key">D</div>
      <div class="fingering"><?php echo in_array('D2', $scaleNotes) ? 'L: ' . $leftHandFingerings[array_search('D2', $scaleNotes)] . '<br>R: ' . $rightHandFingerings[array_search('D2', $scaleNotes)] : ''; ?></div>
    </div>
    <div class="black-key <?php if (in_array('D#2', $scaleNotes)) echo 'scale-highlight'; ?>" id="D#2">
      <div class="notation-black-key">D#</div>
      <div class="fingering"><?php echo in_array('D#2', $scaleNotes) ? 'L: ' . $leftHandFingerings[array_search('D#2', $scaleNotes)] . '<br>R: ' . $rightHandFingerings[array_search('D#2', $scaleNotes)] : ''; ?></div>
    </div>
    <div class="white-key <?php if (in_array('E2', $scaleNotes)) echo 'scale-highlight'; ?>" id="E2">
      <div class="notation-white-key">E</div>
      <div class="fingering"><?php echo in_array('E2', $scaleNotes) ? 'L: ' . $leftHandFingerings[array_search('E2', $scaleNotes)] . '<br>R: ' . $rightHandFingerings[array_search('E2', $scaleNotes)] : ''; ?></div>
    </div>
    <div class="white-key <?php if (in_array('F2', $scaleNotes)) echo 'scale-highlight'; ?>" id="F2">
      <div class="notation-white-key">F</div>
      <div class="fingering"><?php echo in_array('F2', $scaleNotes) ? 'L: ' . $leftHandFingerings[array_search('F2', $scaleNotes)] . '<br>R: ' . $rightHandFingerings[array_search('F2', $scaleNotes)] : ''; ?></div>
    </div>
    <div class="black-key <?php if (in_array('F#2', $scaleNotes)) echo 'scale-highlight'; ?>" id="F#2">
      <div class="notation-black-key">F#</div>
      <div class="fingering"><?php echo in_array('F#2', $scaleNotes) ? 'L: ' . $leftHandFingerings[array_search('F#2', $scaleNotes)] . '<br>R: ' . $rightHandFingerings[array_search('F#2', $scaleNotes)] : ''; ?></div>
    </div>
    <div class="white-key <?php if (in_array('G2', $scaleNotes)) echo 'scale-highlight'; ?>" id="G2">
      <div class="notation-white-key">G</div>
      <div class="fingering"><?php echo in_array('G2', $scaleNotes) ? 'L: ' . $leftHandFingerings[array_search('G2', $scaleNotes)] . '<br>R: ' . $rightHandFingerings[array_search('G2', $scaleNotes)] : ''; ?></div>
    </div>
    <div class="black-key <?php if (in_array('G#2', $scaleNotes)) echo 'scale-highlight'; ?>" id="G#2">
      <div class="notation-black-key">G#</div>
      <div class="fingering"><?php echo in_array('G#2', $scaleNotes) ? 'L: ' . $leftHandFingerings[array_search('G#2', $scaleNotes)] . '<br>R: ' . $rightHandFingerings[array_search('G#2', $scaleNotes)] : ''; ?></div>
    </div>
    <div class="white-key <?php if (in_array('A2', $scaleNotes)) echo 'scale-highlight'; ?>" id="A2">
      <div class="notation-white-key">A</div>
      <div class="fingering"><?php echo in_array('A2', $scaleNotes) ? 'L: ' . $leftHandFingerings[array_search('A2', $scaleNotes)] . '<br>R: ' . $rightHandFingerings[array_search('A2', $scaleNotes)] : ''; ?></div>
    </div>
    <div class="black-key <?php if (in_array('A#2', $scaleNotes)) echo 'scale-highlight'; ?>" id="A#2">
      <div class="notation-black-key">A</div>
      <div class="fingering"><?php echo in_array('A#2', $scaleNotes) ? 'L: ' . $leftHandFingerings[array_search('A#2', $scaleNotes)] . '<br>R: ' . $rightHandFingerings[array_search('A#2', $scaleNotes)] : ''; ?></div>
    </div>
    <div class="white-key <?php if (in_array('B2', $scaleNotes)) echo 'scale-highlight'; ?>" id="B2">
      <div class="notation-white-key">B</div>
      <div class="fingering"><?php echo in_array('B2', $scaleNotes) ? 'L: ' . $leftHandFingerings[array_search('B2', $scaleNotes)] . '<br>R: ' . $rightHandFingerings[array_search('B2', $scaleNotes)] : ''; ?></div>
    </div>
    <div class="white-key <?php if (in_array('C3', $scaleNotes)) echo 'scale-highlight'; ?>" id="C3">
      <div class="notation-white-key">C</div>
      <div class="fingering"><?php echo in_array('C3', $scaleNotes) ? 'L: ' . $leftHandFingerings[array_search('C3', $scaleNotes)] . '<br>R: ' . $rightHandFingerings[array_search('C3', $scaleNotes)] : ''; ?></div>

    </div>

</div>