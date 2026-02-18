import { readFileSync } from 'fs';

const svg = readFileSync('/vercel/share/v0-project/public/images/pillsette-logo.svg', 'utf-8');

// Extract all fill values
const fillMatches = svg.match(/fill="([^"]*)"/g);
console.log("Fill values:", fillMatches);

// Extract all hex colors
const hexMatches = svg.match(/#[0-9a-fA-F]{3,8}/g);
console.log("Hex colors:", [...new Set(hexMatches)]);

// Extract all style attributes
const styleMatches = svg.match(/style="([^"]*)"/g);
console.log("Style values:", styleMatches);
