(function(exports) {
  function NoteController (list = new List()) {
    this.list = list
    note = Note.create("Favourite drink: seltzer");
    note1 = Note.create("Favourite food: chicken");
    note2 = Note.create("Favourite code: Ruby");
    list.store(note);
    list.store(note1);
    list.store(note2);
    this.listview = new ListView(list);

  };

  NoteController.prototype.getHTML = function () {

    document.getElementById("app").innerHTML = this.listview.display();

  }
 exports.NoteController = NoteController;
})(this);
