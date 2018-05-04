
(function(exports){
  function testDisplayFunction() {
    var note = Note.create("my first note");
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
    var note2 = Note.create("second note");
    var note3 = Note.create("third note");
    list.store(note2);
    list.store(note3);
    if (list.display()[0] !== note2) {
      throw new Error ("note has not been stored")
    };
    if (list.display()[1] !== note3) {
      throw new Error ("note has not been stored")
    }
    else {console.log("3rd test passed");
    }
  };
  testListStorage();

  function testListView() {
    var list = new List();
    var note2 = Note.create("second note");
    var note3 = Note.create("third note");
    list.store(note2);
    list.store(note3);
    var listView = new ListView(list)
    if (listView.display()!== "<ul><li><a href='#notes/3'>second note</a></li><li><a href='#notes/4'>third note</a></li></ul>") {
      throw new Error ("testfailed. list not in html format")
    }
    else {console.log("4th test passed");
    }
  };
  testListView();

  function testGetHTML() {
    var notecontroller = new NoteController();

    notecontroller.getHTML();
    if (document.getElementById("notelist").innerHTML !== '<ul><li><a href="#notes/5">Favourite drink: sel</a></li></ul>'){
          throw new Error ("testfailed. innerHTML not displaying")
    }
    else {console.log("5th test passed");
    }
  };
  testGetHTML();

   function testSingleNote() {
     var singlenoteview = new SingleNoteView(note = Note.create("this is a note"));
     if (singlenoteview.display() != "<div>this is a note</div>") {
       throw new Error ("test failed. string does not match note model")
     }
     else {console.log("6th test passed");
     }
   };
   testSingleNote();

   function test20Characters() {
     var list = new List();
     var note2 = Note.create("This note has way more than 20 characters!");
     var note3 = Note.create("This note also has way more than 20 characters!");
     list.store(note2);
     list.store(note3);
     var listView = new ListView(list)
     if (listView.display()!== "<ul><li><a href='#notes/7'>This note has way mo</a></li><li><a href='#notes/8'>This note also has w</a></li></ul>") {
       throw new Error ("testfailed. Notes not under 20 characters")
     }
     else {console.log("7th test passed");
     }
   };
   test20Characters();

   function testNoteID() {
     var note = Note.create("text");
     if (note.id == null) {
       throw new Error ("note does not have ID");
     } else {
       console.log("8th test passed");
     }
   }
   testNoteID();

   function testUniqueID() {
     var note1 = Note.create("some text");
     var note2 = Note.create("some different text");
     var note3 = Note.create("more different text");
     if (note1.id == note2.id) {
       throw new Error ("IDs are not unique")
     } else if (note2.id == note3.id) {
       throw new Error ("IDs are not unique")
     } else {
       console.log("9th test passed")
     }
   }
   testUniqueID();

   function testListViewHTML() {
       var note1 = Note.create("some text");
       list = new List();
       list.store(note1);

       var listview = new ListView(list);

       var actual = listview.display();
       var expected = "<ul><li><a href='#notes/13'>some text</a></li></ul>";

       if (actual === expected) {
         console.log("10th test passed");
       }
       else {
         throw new Error ("Link is not displayed");
       }
     }
     testListViewHTML();

    function testSingleNotePage(){
      var noteController = new NoteController();
      noteController.getHTML();
      console.log(noteController.showClickedNote());
      // if (document.getElementById("notelist").innerHTML !== 'Favourite drink: seltzer'){
      //       throw new Error ("testfailed. single note not displaying")
      // }
      // else {console.log("11th test passed");
      // }
    }
    testSingleNotePage();
})(this);
