(function(exports) {
  function ListView(list){
    this.list = list

  };

  ListView.prototype.display = function(){

    return '<ul>' + this.list.notelist.map(note => "<li><a href='#notes/" + note.id + "'>"+ note.text.slice(0,20)).join("</a></li>")+"</a></li></ul>";

  };

 exports.ListView = ListView;
  })(this);
