
### ng-color-picker
A simple color picker for AngularJS


### Requirements

*** Bower v1.3.0+ ***

*** AngularJS v1.2.0+ ***


### Script

== CSS ==

*** link href="color-picker.css" media="all" rel="stylesheet" type="text/css"

== JS ==
script src="bower_components/angular/angular.min.js"

script src="color-picker.js"

script src="example.js"

== HTML ==

*** ng-color-picker selected='selected' customized-colors="colors"


### Changing the default colors


<!--<ul>-->
    <!-- ngRepeat: color in colors -->
        <!--<li class="ng-scope" ng-repeat="color in colors" ng-class="{selected: (color===selected)}" 
        ng-click="pick(color)" style="background-color:#643264;"></li>-->
    <!-- end ngRepeat: color in colors -->
        <!--<li class="ng-scope" ng-repeat="color in colors" ng-class="{selected: (color===selected)}" 
        ng-click="pick(color)" style="background-color:#d23c0a;"></li>-->
    <!-- end ngRepeat: color in colors -->
       .
       .
       .
    <!-- end ngRepeat: color in colors -->
<!--</ul>-->


### Using

Bower: bower v1.3.9

IDE: JetBRAINS WebStorm 8

AngularJS: angular v1.2.23


### Based on

##### [http://ng-color-picker.herokuapp.com](http://ng-color-picker.herokuapp.com/)

