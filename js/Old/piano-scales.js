const scales = {
  major: ["C Major", "D Major", "E Major", /* ... */],
  minor: ["A Minor", "B Minor", "C# Minor", /* ... */],
  major7: ["C Major 7th", "D Major 7th", "E Major 7th", /* ... */],
  minor7: ["A Minor 7th", "B Minor 7th", "C# Minor 7th", /* ... */],
  dominant7: ["G7", "C7", "D7", /* ... */],
  diminished: ["B Diminished", "C# Diminished", "D Diminished", /* ... */],
  extended: ["C Major 9th", "A Minor 9th", "G Major 9th", /* ... */]
};

const scaleTypeDropdown = document.getElementById("scale-type");
const scaleContainer = document.getElementById("scale-container");

scaleTypeDropdown.addEventListener("change", function() {
  const selectedScaleType = this.value;
  const selectedScales = scales[selectedScaleType];
  
  displayScales(selectedScales);
});

function displayScales(scaleList) {
  scaleContainer.innerHTML = "";
  
  scaleList.forEach(function(scale) {
    const scaleElement = document.createElement("div");
    scaleElement.classList.add("scale");
    scaleElement.textContent = scale;
    
    scaleContainer.appendChild(scaleElement);
  });
}