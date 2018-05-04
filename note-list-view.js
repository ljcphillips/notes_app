(function(exports) {
  function ListView(list){
    this.list = list

  };

  ListView.prototype.display = function(){

    return "<ul><li><a href='localhost:8080#notes/"+this.list.notelist.map(note => note.id)+"'>"+this.list.notelist.map(note => note.text.slice(0,20)).join("</a></li><li><a>")+"</a></li></ul>";

  };

 exports.ListView = ListView;
  })(this);
