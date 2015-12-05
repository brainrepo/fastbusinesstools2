angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('RitenutaCtrl', function($scope) {
  $scope.val = "";
  $scope.netto = "";
  $scope.lordo = "";
  $scope.ritenuta = "";
  $scope.panel = "hide-panel";

  $scope.clear = function(){
    $scope.val = "";
    $scope.netto = "";
    $scope.lordo = "";
    $scope.ritenuta = "";
  }

  $scope.push = function(vala){
    if($scope.val .indexOf(".") > -1){
      var partials = $scope.val.split(".");
      if(partials[1].length < 2){
        $scope.val += vala;
        return;
      }
      return;
    }
    $scope.val += vala;
  }

  $scope.backspace = function(){
    $scope.val = $scope.val.substring(0, ($scope.val).length - 1);
  }

  $scope.dot = function(){
    if($scope.val .indexOf(".") == -1){
      $scope.val += ".";
    }
  }

  $scope.clearData = function(){
    $scope.clear();
  }

  $scope.calcByNetto = function(){
    
    $scope.netto = $scope.val;
    $scope.lordo = $scope.val / 0.8;
    $scope.ritenuta = $scope.val * 0.25;

    $scope.panel = "show-panel";
    ////$scope.clear();
  }

  $scope.calcByLordo = function(){
    
    $scope.netto = $scope.val * 0.8;
    $scope.lordo = $scope.val;
    $scope.ritenuta = $scope.val * 0.2;
    //$scope.clear();
    $scope.panel = "show-panel";
  }

  $scope.hidepanel = function(){
    $scope.panel = "hide-panel";
  }


})





.controller('IvaCtrl', function($scope) {
  $scope.val = "";
  $scope.netto = "";
  $scope.lordo = "";
  $scope.ritenuta = "";
  $scope.percentuale = 22;
  $scope.panel = "hide-panel";
  $scope.ivaSector = "hide-panel";

  $scope.clear = function(){
    $scope.val = "";
    $scope.netto = "";
    $scope.lordo = "";
    $scope.ritenuta = "";
  }

  $scope.push = function(vala){
    if($scope.val .indexOf(".") > -1){
      var partials = $scope.val.split(".");
      if(partials[1].length < 2){
        $scope.val += vala;
        return;
      }
      return;
    }
    $scope.val += vala;
  }

  $scope.backspace = function(){
    $scope.val = $scope.val.substring(0, ($scope.val).length - 1);
  }

  $scope.dot = function(){
    if($scope.val .indexOf(".") == -1){
      $scope.val += ".";
    }
  }

  $scope.clearData = function(){
    $scope.clear();
  }

  $scope.calcByNetto = function(){
    
    $scope.netto = $scope.val;
    $scope.lordo = $scope.val * (($scope.percentuale + 100) / 100);
    $scope.iva = $scope.val * ($scope.percentuale / 100);

    $scope.panel = "show-panel";
    ////$scope.clear();
  }

  $scope.calcByLordo = function(){
    
    $scope.netto = $scope.val / (1 + ($scope.percentuale / 100));
    $scope.lordo = $scope.val;
    $scope.iva = $scope.netto * ($scope.percentuale / 100);
    //$scope.clear();
    $scope.panel = "show-panel";
  }

  $scope.calcByIva = function(){
    
    $scope.netto = $scope.val * 100 / $scope.percentuale;
    $scope.lordo = $scope.val * ($scope.percentuale + 100) / $scope.percentuale;
    $scope.iva = $scope.val;
    //$scope.clear();
    $scope.panel = "show-panel";
  }

  $scope.hidepanel = function(){
    $scope.panel = "hide-panel";
  }

  $scope.hideAliquotapanel = function(){
    $scope.ivaSector = "hide-panel";
  }

  $scope.showAliquotapanel = function(){
    $scope.ivaSector = "show-panel";
  }

  $scope.setPercentuale = function(percentuale)
  {
    $scope.percentuale = percentuale;
    $scope.ivaSector = "hide-panel";
    $scope.clear();
  }



})
;
