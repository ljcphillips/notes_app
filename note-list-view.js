(function(exports) {
  function ListView(list){
    this.list = list
  };

  ListView.prototype.display = function(){
    return "<ul><li><div>"+(this.list.notelist.join("</div></li><li><div>"))+"</div></li></ul>";
  };
 exports.ListView = ListView;
  })(this);
