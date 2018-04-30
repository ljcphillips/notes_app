
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
    var note2 = new Note("second note");
    var note3 = new Note("third note");
    list.store(note2.text);
    list.store(note3.text);
    console.log(list.display());
    if (list.display()[0] !== note2.text) {
      throw new Error ("note has not been stored")
    };
    if (list.display()[1] !== note3.text) {
      throw new Error ("note has not been stored")
    };
  };
  testListStorage();

  function testListView() {
    var list = new List();
    var note2 = new Note("second note");
    var note3 = new Note("third note");
    list.store(note2.text);
    list.store(note3.text);
    var listView = new ListView(list.display)
    console.log(listView.display())
    if (listView.display()!== "<ul><li><div>second note</div></li><li><div>third note</div></li></ul>") {
      throw new Error ("list not in html format")
    };
  };
  testListView();

})(this);
