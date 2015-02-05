'use strict';

/**
 * @ngdoc function
 * @name 01HolaMundoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 01HolaMundoApp
 */
/*hola*/
angular.module('01HolaMundoApp')
  .controller('MainCtrl', function () {
    
    this.borrarElemento = function(dato) {
        var index = this.awesomeThings.indexOf(dato);
        this.awesomeThings.splice(index, 1);
    }
    
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Cafe'
    ];
  });
