angular.module('todo-list', ['ngRoute', 'ngMaterial', 'lbServices']).controller('TodoListController', function($scope, $mdDialog, Todo) {
  $scope.title = 'Ma todo list';
  $scope.new_todo = '';
  $scope.todolist = Todo.find();
  $scope.addTodo = function() {
    if ($scope.new_todo !== "") {
      $scope.todolist.push({
        "task": $scope.new_todo,
        "checked": false
      });
      Todo.create({
        "task": $scope.new_todo,
        "checked": false
      });
      return $scope.new_todo = "";
    }
  };
  $scope.deleteTodo = function(i) {
    Todo.deleteById({
      id: $scope.todolist[i].id
    });
    return $scope.todolist.splice(i, 1);
  };
  $scope.editTodo = function(ev, i) {
    var confirm;
    confirm = $mdDialog.prompt().title('Editer le todo').textContent('').placeholder('todo').ariaLabel('todo').initialValue($scope.todolist[i].task).targetEvent(ev).ok('Sauvegarder').cancel('Annuler');
    return $mdDialog.show(confirm).then(function(new_todo_text) {
      $scope.todolist[i].task = new_todo_text;
      return $scope.todolist[i].$save();
    });
  };
  return $scope.updateTodo = function(i) {
    return $scope.todolist[i].$save();
  };
}).config(function(LoopBackResourceProvider) {
  LoopBackResourceProvider.setAuthHeader('X-Access-Token');
  return LoopBackResourceProvider.setUrlBase('http://localhost:3000/api');
});
