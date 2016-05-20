function SingleController($scope, $http, URL, $stateParams, $state) {

  function init() {
    $http.get(URL + $stateParams.nameId).then ( (res) =>{
      $scope.singleContact= res.data;
    });
  }
}
SingleController.$inject = [ '$scope', '$http', 'URL', '$stateParams', '$state']
export { SingleController };
