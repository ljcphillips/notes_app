(function(exports) {
  function NoteController (list = new List()) {
    this.list = list
    note = Note.create("Favourite drink: seltzer");
    list.store(note);
    this.listview = new ListView(list);
  };

  NoteController.prototype.getHTML = function () {

    document.getElementById("notelist").innerHTML = this.listview.display();

  }
  NoteController.prototype.showClickedNote = function () {
      window.addEventListener("hashchange", console.log("it worked"))

      // var noteid = window.location.hash.split("#notes/")[1]
      //
      //
      // var retrievednote = this.list.notelist.filter(note => note.id === noteid)
      //
      // console.log(retrievednote)


  }

 exports.NoteController = NoteController;
})(this);
