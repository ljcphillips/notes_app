(function(exports) {
  function List() {
    this.notelist = [];
  };

  List.prototype.display = function() {
    return this.notelist
  };

  List.prototype.store = function(note) {
    this.notelist.push(new Note(note))
  };

  exports.List = List;
})(this);
