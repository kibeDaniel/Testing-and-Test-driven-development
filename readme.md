This is a sample NPM module created in Learn JavaScript.

The module can be used as follows:

$ npm install --global kibe_palindrome
$ vim test.js
let Phrase = require("kibe_palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
