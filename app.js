/**
 * Created by Jonyguan on 30/08/2016.
 */

var iApp = angular.module("App", []);

iApp.controller('AddStyleCtrl', function($scope)
{
  $scope.tagcategories = [
    {
      id: 1,
      name: 'Color',
      tags: [
        {
          id:1,
          name:'color1'
        },
        {
          id:2,
          name:'color2'
        },
        {
          id:3,
          name:'color3'
        },
        {
          id:4,
          name:'color4'
        },
      ]
    },
    {
      id:2,
      name:'Cat',
      tags:[
        {
          id:5,
          name:'cat1'
        },
        {
          id:6,
          name:'cat2'
        },
      ]
    },
    {
      id:3,
      name:'Scenario',
      tags:[
        {
          id:7,
          name:'Home'
        },
        {
          id:8,
          name:'Work'
        },
      ]
    }
  ];

  $scope.selected = [];
  $scope.selectedTags = [];

  var updateSelected = function(action,id,name){
    if(action == 'add' && $scope.selected.indexOf(id) == -1){
      $scope.selected.push(id);
      $scope.selectedTags.push(name);
    }
    if(action == 'remove' && $scope.selected.indexOf(id)!=-1){
      var idx = $scope.selected.indexOf(id);
      $scope.selected.splice(idx,1);
      $scope.selectedTags.splice(idx,1);
    }
  }

  $scope.updateSelection = function($event, id){
    var checkbox = $event.target;
    var action = (checkbox.checked?'add':'remove');
    updateSelected(action,id,checkbox.name);
  }

  $scope.isSelected = function(id){
    return $scope.selected.indexOf(id)>=0;
  }
});