(function(exports){
  function NoteBuilder(){
  var id = 0;
   this.create = function (text){
     return new Note(id++, text)
   };
 };
  function Note(id, text){
    this.text = text;
    this.id = id;

   };
   Note.prototype.display = function(){
     return this.text
   };

     exports.Note = new NoteBuilder();

})(this);
