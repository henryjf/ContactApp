function config ($stateProvider, $urlRouterProvider) {


  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('list', {
    url: '/',
    templateUrl: 'templates/list.tpl.html',
    controller: 'Listcontroller'
  })
  .state('single', {
    url:'/single/:itemId',
    templateUrl: 'templates/single.tpl.html',
    controller: 'SingleController'
  })
  .state('add', {
    url:'/add',
    templateUrl: 'templates/add.tpl.html',
    controller: 'AddController'
  });
}
config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };
