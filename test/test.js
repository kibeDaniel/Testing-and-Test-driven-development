//require function, is how Node imports functionality from an external file.
// assertion library lets us assert that things are true in our tests.
// as we’re going to test palindrome inside the Phrase object, we’ll nest a second call to describe.
let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() { // describe () and it () are function in assert.

  describe("#palindrome", function() { // usual way to indicate an object method is to use a hash mark # in front of the method

    it("should return false for a non-palindrome", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return true for a plain palindrome", function() {
      let plainPalindrome = new Phrase("Racecar");
      assert(plainPalindrome.palindrome());
    });

    it("should return true for a mixed-case palindrome", function() {
      let mixedCase = new Phrase("RaceCar");
      assert(mixedCase.palindrome());
    });

    it("should return true for a palindrome with punctuation", function() {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert(punctuatedPalindrome.palindrome());
    });
  });
});
