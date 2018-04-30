(function(exports) {
  function ListView(list){
    this.list = list;
  };

  ListView.prototype.display = function(){
    for (var i = 0; i < this.list.notelist.length; i++){
      return "<ul><li><div>" + this.list.notelist[i] + "</div></li></ul>"
    };
  };
 exports.ListView = ListView;
  })(this);
