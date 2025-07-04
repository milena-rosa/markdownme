# markdownme

`markdownme` is a simple Node.js utility that converts a JSON file into a Markdown-formatted table. It traverses the structure of a given JSON file and outputs a table where each row represents a key path and its value.

## Features

- Reads a JSON file (`sample.json`)
- Converts all data paths and their values to a Markdown table
- Outputs the table to the console
- Optionally saves the table to a file (`output.md`)

## Usage

1. Place your input JSON in `sample.json` in the project directory.
2. Run the script:

   ```bash
   node index.js
   ```

3. The Markdown table will be printed in the console and saved as `output.md`.

## Example

Given this `sample.json`:
```json
{
  "name": "Alice",
  "age": 30,
  "skills": ["JavaScript", "Python"]
}
```

The output will be:

| Path          | Value           |
|---------------|-----------------|
| name          | "Alice"         |
| age           | 30              |
| skills[0]     | "JavaScript"    |
| skills[1]     | "Python"        |

## License

This project is private and does not specify a license.
