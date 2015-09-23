function DisplayComponent() {
    this.myName = "Alice";
}
DisplayComponent.annotations = [
  new angular.ComponentAnnotation({
        selector: "display"
      }),
    new angular.ViewAnnotation({
          template:
             '<p>My name: {{ myName }}</p>'
        })
];
