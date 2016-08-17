app.controller('PostMessageController', function ($scope, MessagesService, $location) {
  $scope.vw = {};
  $scope.vw.success = "Success!!"

  $scope.submit = function(){
    MessagesService.add($scope.vw.new_message);
    $location.path("/");
  }

  console.log(MessagesService.all);
})
