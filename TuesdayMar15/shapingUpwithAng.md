questions to which I asked for the solution:

1. In order to set the current tab, we'll need a setTab method to use in our HTML. It should set the tab property of TabController to a value passed in.
Create a new controller named TabController.

```app.controller('TabController', function(){
  this.tab = 1;
  this.setTab = function(selectedTab){
    this.tab = selectedTab;
  };
});```

2. Attach the TabController to the <section> element with the .tab class. Don't forget to also add an alias.

```<ul class="nav nav-pills">
          <li>
            <a href ng-click="tab.setTab(1)">Description</a></li>
          <li>
            <a href ng-click="tab.setTab(2)">Specs</a></li>
          <li>
            <a href ng-click="tab.setTab(3)">Reviews</a></li>
        </ul>```
