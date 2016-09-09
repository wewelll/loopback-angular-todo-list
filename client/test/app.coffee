describe 'TodoListController', ->
  $rootScope = null
  $scope = null
  $controller = null

  beforeEach ->
    module 'todo-list'

  beforeEach ->
    inject ($controller, $rootScope, $injector) ->
      $rootScope = $rootScope
      $scope = $rootScope.$new()

      $controller = $controller 'TodoListController',
        $scope: $scope

  it 'should have a title property initialized', ->
    $scope.title.should.equal 'Ma todo list'
