import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to generate Markdown table from JSON object
function jsonToMarkdownTable(jsonData) {
  let markdownTable = "| Path | Value |\n|------|-------|\n";

  function traverse(obj, path = "") {
    for (let key in obj) {
      let newPath = path ? `${path}.${key}` : key;
      if (typeof obj[key] === "object" && obj[key] !== null) {
        if (Array.isArray(obj[key])) {
          obj[key].forEach((item, index) => {
            traverse(item, `${newPath}[${index}]`);
          });
        } else {
          traverse(obj[key], newPath);
        }
      } else {
        markdownTable += `| ${newPath} | ${JSON.stringify(obj[key])} |\n`;
      }
    }
  }

  traverse(jsonData);
  return markdownTable;
}

const inputFilePath = path.join(__dirname, "./sample.json");
const outputFilePath = path.join(__dirname, "./output.md");
fs.readFile(inputFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  const jsonData = JSON.parse(data);
  const markdownTable = jsonToMarkdownTable(jsonData);

  // Output the Markdown table
  console.log(markdownTable);

  // Optionally, write the Markdown table to a file
  fs.writeFile(outputFilePath, markdownTable, (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("Markdown table saved to output.md");
    }
  });
});
