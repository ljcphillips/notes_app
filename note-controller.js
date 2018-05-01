(function(exports) {
  function NoteController (list = new List()) {
    this.list = list
    note = new Note("Favourite drink: seltzer");
    list.store(note);
    this.listview = new ListView(list);

  };

  NoteController.prototype.getHTML = function () {
    
    document.getElementById("app").innerHTML = this.listview.display();

  }
 exports.NoteController = NoteController;
})(this);
