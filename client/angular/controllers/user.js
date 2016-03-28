app.controller('user', ['$scope','usersFactory','sessionFactory','bucketFactory', '$routeParams', function($scope, uf,sf,bf, rp) {
  console.log('user.js rp.id',rp.id);
  var _this = this;
    this.show = function(){uf.show(rp.id, function(data){
      console.log('user.show - data from uf',data);
      _this.user = res.json(data);
    });
  }
    this.show();
    this.suser = sf.getUser();
    this.update_bucket = function(data){
    bf.update(data, this.usersshow);
  }
}]);
