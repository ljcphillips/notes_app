(function(exports) {
  function ListView(list){
    this.list = list
  };

  ListView.prototype.display = function(){

    return "<ul><li><div>"+(this.list.notelist.map(note => note.slice(0,20)).join("</div></li><li><div>"))+"</div></li></ul>";
  };
 exports.ListView = ListView;
  })(this);
