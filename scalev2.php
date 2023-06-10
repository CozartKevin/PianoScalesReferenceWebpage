<?php
// Array of notes in the C major scale
$notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];
?>

<!DOCTYPE html>
<html>
<head>
    <title>C Major Scale</title>
    <style>
        .keyboard {
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }

        .key {
            width: 50px;
            height: 120px;
            border: 1px solid black;
            background-color: white;
            margin-right: 5px;
            position: relative;
        }

        .highlight {
            background-color: lightblue;
        }

        .finger {
            font-size: 12px;
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
        }
    </style>
</head>
<body>
    <h1>C Major Scale</h1>

    <div class="keyboard">
        <div class="key<?= in_array('C', $notes) ? ' highlight' : '' ?>">
            <span class="finger">1</span>
        </div>
        <div class="key<?= in_array('D', $notes) ? ' highlight' : '' ?>">
            <span class="finger">2</span>
        </div>
        <div class="key<?= in_array('E', $notes) ? ' highlight' : '' ?>">
            <span class="finger">3</span>
        </div>
        <div class="key<?= in_array('F', $notes) ? ' highlight' : '' ?>">
            <span class="finger">4</span>
        </div>
        <div class="key<?= in_array('G', $notes) ? ' highlight' : '' ?>">
            <span class="finger">5</span>
        </div>
        <div class="key<?= in_array('A', $notes) ? ' highlight' : '' ?>">
            <span class="finger">1</span>
        </div>
        <div class="key<?= in_array('B', $notes) ? ' highlight' : '' ?>">
            <span class="finger">2</span>
        </div>
        <div class="key<?= in_array('C', $notes) ? ' highlight' : '' ?>">
            <span class="finger">3</span>
        </div>
    </div>

    <?php
    // Additional PHP code for the C major scale visualization

    // Function to display the keyboard image
    function displayKeyboard($highlightedKeys)
    {
        // Path to your keyboard image file
        $keyboardImage = 'path/to/keyboard/image.jpg';

        // Output the HTML with the keyboard image and highlighted keys
        echo '<div class="keyboard-image">';
        echo '<img src="' . $keyboardImage . '" alt="Keyboard Image">';
        foreach ($highlightedKeys as $key) {
            echo '<div class="highlighted-key" style="left: ' . $key['position'] . 'px;"></div>';
            echo '<span class="finger" style="left: ' . $key['position'] . 'px;">' . $key['finger'] . '</span>';
        }
        echo '</div>';
    }

    // Array of highlighted keys with their corresponding positions and finger numbers
    $highlightedKeys = [
        ['position' => 100, 'finger' => '1'],
        ['position' => 160, 'finger' => '2'],
        ['position' => 220, 'finger' => '3'],
        ['position' => 280, 'finger' => '4'],
        ['position' => 340, 'finger' => '5'],
        ['position' => 400, 'finger' => '1'],
        ['position' => 460, 'finger' => '2'],
        ['position' => 520, 'finger' => '3'],
    ];

    // Call the function to display the keyboard image
    displayKeyboard($highlightedKeys);
    ?>

</body>
</html>
