
function testSingleNotePage(){
  list = new List();
 var noteController = new NoteController(list);
 note = Note.create("Favourite drink: seltzer")
 note2 = Note.create("Favourite drink: seltzer2");
 list.store(note);
  list.store(note2);
 noteController.getHTML();
 window.addEventListener("hashchange", noteController.showClickedNote);
 // if (document.getElementById("notelist").innerHTML !== 'Favourite drink: seltzer'){
 //       throw new Error ("testfailed. single note not displaying")
 // }
 // else {console.log("11th test passed");
 // }
}
testSingleNotePage();
