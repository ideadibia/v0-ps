import { readFileSync } from 'fs';
const svg = readFileSync('/vercel/share/v0-project/public/images/pillsette-logo.svg', 'utf8');
const fillMatches = svg.match(/fill="([^"]*)"/g);
const uniqueFills = [...new Set(fillMatches)];
console.log("Fill values found:", uniqueFills);

const hexMatches = svg.match(/#[0-9a-fA-F]{3,8}/g);
const uniqueHex = [...new Set(hexMatches)];
console.log("Hex colors found:", uniqueHex);

const rgbMatches = svg.match(/rgb\([^)]*\)/g);
const uniqueRgb = [...new Set(rgbMatches || [])];
console.log("RGB colors found:", uniqueRgb);
