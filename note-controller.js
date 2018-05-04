(function(exports) {
  function NoteController (list){
    this.list = list
    this.listview = new ListView(list);
  };

  NoteController.prototype.getHTML = function () {

    document.getElementById("notelist").innerHTML = this.listview.display();

  }
  NoteController.prototype.showClickedNote = function () {

      var noteid = window.location.hash.split("#notes/")[1]
      console.log(noteid)

      var retrievednote = this.list.notelist.filter(note => note.id = noteid)
      console.log(retrievednote.text)




  }

 exports.NoteController = NoteController;
})(this);
