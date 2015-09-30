console.log('loaded main.js');

function FriendsService() {
  this.response_thingy = fetch('http://localhost:4567/names').
    then(function(response) { return(response.json()) })
}


function FriendComponent() {

  this.broNames = function() {
      return "Mr." + this.broName;
  }
}

FriendComponent.annotations = [
  new angular.ComponentAnnotation({
    selector: 'friend',
    properties: ['broName']
  }),
  new angular.ViewAnnotation({
    template: '<h1>{{ broNames() + broNames() }}</h1>'
  })
]

function AppComponent(friends) {
  this.myName = 'Alice';
  that = this;
  friends.response_thingy.then(function(json) {
    console.log(json.names);
    that.names = json.names;
  });
  this.myControllerMethod = function(bros) {
    this.names.push(bros);
  }
}

AppComponent.annotations = [
  new angular.ComponentAnnotation({
    selector: 'my-app',
    appInjector: [FriendsService]
  }),
  new angular.ViewAnnotation({
    templateUrl: 'name_template.html',
    directives: [angular.NgFor, FriendComponent]
  })
];


console.log("setting params")
AppComponent.parameters = [[FriendsService]];

document.addEventListener('DOMContentLoaded', function() {
  angular.bootstrap(AppComponent);
});
