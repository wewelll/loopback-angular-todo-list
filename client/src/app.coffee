angular.module 'todo-list', ['ngRoute','ngMaterial','lbServices']
.controller 'TodoListController', ($scope, $mdDialog, Todo) ->
  $scope.title = 'Ma todo list'
  $scope.new_todo = ''

  $scope.todolist = Todo.find()

  $scope.addTodo = ->
    if $scope.new_todo isnt ""
      $scope.todolist.push(
        "task": $scope.new_todo
        "checked": false
      )
      Todo.create(
        "task": $scope.new_todo
        "checked": false
      )
      $scope.new_todo = ""

  $scope.deleteTodo = (i)->
    Todo.deleteById(
      id: $scope.todolist[i].id
    )
    $scope.todolist.splice(i,1)

  $scope.editTodo = (ev,i)->
    confirm = $mdDialog.prompt()
      .title('Editer le todo')
      .textContent('')
      .placeholder('todo')
      .ariaLabel('todo')
      .initialValue($scope.todolist[i].task)
      .targetEvent(ev)
      .ok('Sauvegarder')
      .cancel('Annuler');

    $mdDialog.show(confirm).then (new_todo_text)->
      $scope.todolist[i].task = new_todo_text
      $scope.todolist[i].$save()

  $scope.updateTodo = (i)->
    $scope.todolist[i].$save()

.config (LoopBackResourceProvider)->
  LoopBackResourceProvider.setAuthHeader('X-Access-Token')
  LoopBackResourceProvider.setUrlBase('http://localhost:3000/api')
