const brandIcons = require("./emerald-brands.json");
const filledIcons = require("./emerald-filled.json");
const outlinedIcons = require("./emerald-outlined.json");

// Function to get a filled icon by name
function getBrandIcon(iconName) {
  return brandIcons.find((icon) => icon.name === iconName) || null;
}

// Function to get a filled icon by name
function getFilledIcon(iconName) {
  return filledIcons.find((icon) => icon.name === iconName) || null;
}

// Function to get an outlined icon by name
function getOutlinedIcon(iconName) {
  return outlinedIcons.find((icon) => icon.name === iconName) || null;
}

// Export both icon sets and functions to get individual icons
module.exports = {
  brandIcons,
  filledIcons,
  outlinedIcons,
  getBrandIcon,
  getFilledIcon,
  getOutlinedIcon,
};
