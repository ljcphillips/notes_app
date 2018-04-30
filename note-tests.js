
(function(exports){
  function testDisplayFunction() {
    var note = new Note("my first note");
    console.log(note.display())
    if (note.display() !== "my first note"){
      throw new Error ("did not work, fix your code!")
    };
  };
  testDisplayFunction();

  function testListModel() {
    var list = new List();
    console.log(list.display());
    if (!Array.isArray(list.display())) {
      throw new Error ("note list does not include '[]'")
    };
  };
  testListModel();

  function testListStorage() {
    var list = new List();
    var note3 = new Note("third note");
    var note4 = new Note("fourth note");
    list.store(note3.text);
    list.store(note4.text);
    if (list.display()[0] !== note3.text) {
      throw new Error ("note has not been stored")
    };
    if (list.display()[1] !== note4.text) {
      throw new Error ("note has not been stored")
    };
  };
  testListStorage();

})(this);
