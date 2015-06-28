/**
Check if the provided input starts with a given string

@param {string} input
@param {string} string
@link http://stackoverflow.com/a/4579228
@returns {bool} True if "input" starts with "string"
*/
function contains_string (input, string) {
  return input.lastIndexOf(string, 0) === 0;
}

/**
Slugify a given string

@param {string} text
@link https://gist.github.com/mathewbyrne/1280286
@returns {string}
*/
function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}
