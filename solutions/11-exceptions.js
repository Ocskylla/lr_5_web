export class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
  }
}

// BEGIN
function parseJson(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (err) {
    throw new ParseError('Invalid JSON string');
  }
}
export  {parseJson};
// END
