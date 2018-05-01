
(function(exports){
  function testDisplayFunction() {
    var note = new Note("my first note");
    if (note.display() !== "my first note"){
      throw new Error ("did not work, fix your code!")
    }
    else {console.log("1st test passed");
    }
  };
  testDisplayFunction();

  function testListModel() {
    var list = new List();
    if (!Array.isArray(list.display())) {
      throw new Error ("note list does not include '[]'")
    }
    else {console.log("2nd test passed");
    }
  };
  testListModel();

  function testListStorage() {
    var list = new List();
    var note2 = new Note("second note");
    var note3 = new Note("third note");
    list.store(note2.text);
    list.store(note3.text);
    if (list.display()[0] !== note2.text) {
      throw new Error ("note has not been stored")
    };
    if (list.display()[1] !== note3.text) {
      throw new Error ("note has not been stored")
    }
    else {console.log("3rd test passed");
    }
  };
  testListStorage();

  function testListView() {
    var list = new List();
    var note2 = new Note("second note");
    var note3 = new Note("third note");
    list.store(note2.text);
    list.store(note3.text);
    var listView = new ListView(list)
    if (listView.display()!== "<ul><li><div>second note</div></li><li><div>third note</div></li></ul>") {
      throw new Error ("testfailed. list not in html format")
    }
    else {console.log("4th test passed");
    }
  };
  testListView();

})(this);
