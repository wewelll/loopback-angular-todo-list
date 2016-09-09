module.exports = (config) ->
  config.set
    basePath: '.'
    frameworks: ['mocha', 'sinon-chai']
    files: [
      'vendors/angular/angular.min.js'
      'vendors/angular-mocks/angular-mocks.js'
      'src/app.coffee'
      'test/app.coffee'
    ]
    preprocessors:
      'src/app.coffee': ['coffee']
      'test/app.coffee': ['coffee']
    reporters: ['mocha']
    port: 9876
    colors: true
    logLevel: config.LOG_WARN
    autoWatch: true
    browsers: [ 'PhantomJS' ]
    singleRun: true
  return
