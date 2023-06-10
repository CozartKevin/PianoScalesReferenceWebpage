<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Scale</title>
  <link rel="stylesheet" type="text/css" href="css/styles.css">
</head>
<body>
  <header>
    <h1>Scale</h1>
  </header>
  
  <main>
    <?php
    $key = $_GET['key']; // Retrieve the key parameter from the URL
    
    // Define an array of scales with their respective names
    $scales = array(
      "C" => "C Major Scale",
      "C#" => "C# Major Scale",
      // Add more scales for other keys...
    );
    
    // Check if the requested scale exists in the array
    if (array_key_exists($key, $scales)) {
      $scaleName = $scales[$key]; // Retrieve the scale name
      
      // Display the scale name on the page
      echo "<h2>$scaleName</h2>";
      
      // Add further content related to the scale (e.g., notes, fingerings, etc.)
      // Modify this part based on your specific requirements
      echo "<p>Scale content goes here.</p>";
    } else {
      // If the requested scale doesn't exist, display an error message
      echo "<p>Invalid scale.</p>";
    }
    ?>
  </main>

  <script src="js/piano-scales.js"></script>
</body>
</html>
