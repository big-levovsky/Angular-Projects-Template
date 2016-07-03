var app = angular.module('intraTest', ['ngRoute']);

app.controller ('MainCtrl' , function(){
    this.x="yo";

    this.func = function (x) {
      return x+1;
    };


});