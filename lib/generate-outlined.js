const fs = require("fs");
const path = require("path");

// Directory containing your SVG icons
const iconsDir = path.join(__dirname, "../icons");

// Output file path for the JSON
const outputFile = path.join(__dirname, "../icons.json");

// Read all SVG files from the icons directory
const icons = fs.readdirSync(iconsDir).reduce((acc, file) => {
  if (path.extname(file) === ".svg") {
    const iconName = path.basename(file, ".svg");
    const svgContent = fs.readFileSync(path.join(iconsDir, file), "utf-8");
    acc[iconName] = svgContent;
  }
  return acc;
}, {});

// Write the JSON file
fs.writeFileSync(outputFile, JSON.stringify(icons, null, 2));

console.log("Icons JSON generated successfully!");
