var app = angular.module('servicesWorkshop', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/messages", {
        templateUrl : "/templates/messages.html",
        controller: 'MessagesController'
    })
    .when("/postmessages", {
        templateUrl : "/templates/new_message.html",
        controller:'PostMessageController'
    })
    .otherwise("/", {
        templateUrl : "index.html"
    });
});
