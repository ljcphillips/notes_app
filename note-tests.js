
(function(exports){
function test() {
var note = new Note("my first note");
console.log(note.display())
if (note.display() !== "my first note"){
   throw new Error ("did not work, fix your code!")
};


};

test();
})(this);
