(function(exports){
  var id = 0;
  function Note(text){
    this.text = text;
    this.id = id;
    id++;

   };
   Note.prototype.display = function(){
     return this.text
   };
     exports.Note = Note;
})(this);
