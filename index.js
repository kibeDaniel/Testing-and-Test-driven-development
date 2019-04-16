module.exports = Phrase; // exporting the module

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Returns the letters in the content.
  // For example:
  //   new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
    let theLetters = [];
    const letterRegex = /[a-z]/i; // simplify the regex by using i after /.../ to make a case-insensitive match
    Array.from(this.content).forEach(function(character) {
       if (character.match(letterRegex)) {
          theLetters.push(character);
       }
    });
    return theLetters.join("");
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}
