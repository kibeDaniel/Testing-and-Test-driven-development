//require function, is how Node imports functionality from an external file.
// assertion library lets us assert that things are true in our tests.
// as we’re going to test palindrome inside the Phrase object, we’ll nest a second call to describe.
let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() { // describe () and it () are function in assert.

  describe("#palindrome", function() {

    it("should return false for a non-palindrome", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return true for a plain palindrome", function() {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());

    it("should return true for a mixed-case palindrome");

    it("should return true for a palindrome with punctuation");
    });
  });
});
