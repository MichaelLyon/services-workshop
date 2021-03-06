var app = angular.module('servicesWorkshop.factories',[]);

app.factory('MessagesService', function () {
  return {
    all: [
      {
        id: 1,
        text: "I think knowing what you cannot do is more important than knowing what you can. - Lucille Ball"
      }
    ],
    add: function (message) {
      console.log(message);
      message.id = this.all.length+1;
      this.all.push(message);
    }
  }
})
