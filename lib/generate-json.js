const fs = require("fs");
const path = require("path");

function generateIconsJson(folderName, outputFileName) {
  const iconsDir = path.join(__dirname, `../icons/${folderName}`);
  const outputFile = path.join(__dirname, `../${outputFileName}`);

  const icons = fs.readdirSync(iconsDir).reduce((acc, file) => {
    if (path.extname(file) === ".svg") {
      const iconName = path.basename(file, ".svg");
      const svgContent = fs.readFileSync(path.join(iconsDir, file), "utf-8");

      acc.push({
        name: iconName,
        content: svgContent,
        style: folderName,
      });
    }
    return acc;
  }, []);

  fs.writeFileSync(outputFile, JSON.stringify(icons, null, 2));
  console.log(`${folderName} icons JSON generated successfully!`);
}

generateIconsJson("brands", "emerald-brands.json");
generateIconsJson("filled", "emerald-filled.json");
generateIconsJson("outlined", "emerald-outlined.json");
