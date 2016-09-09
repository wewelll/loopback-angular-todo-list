describe('todolist App', function() {
  it('should have a title', function() {
    browser.get('file:///Users/Samuel/Theodo/todo-list/client/www/index.html');

    expect(browser.getTitle()).toEqual('Ma Todo List');
  });
});
