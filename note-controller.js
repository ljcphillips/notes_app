(function(exports){
  function NoteController(notelist = new List()) {
    this.notelist = notelist
    notelist.store("Favourite drink: seltzer")
  };
  console.log(document);
  NoteController.prototype.getHTML = function() {
    console.log(document);
    document.getElementById("app").innerHTML = this.notelist.notelist[0];
  };

  exports.NoteController = NoteController;

})(this);

note_cont = new NoteController();
note_cont.getHTML();
// document.getElementById("app").innerHTML = notecontroller.notelist.notelist[0]
