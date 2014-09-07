
### ng-color-picker
A simple color picker for AngularJS


### Requirements

*** Bower v1.3.0+ ***

*** AngularJS v1.2.0+ ***

("bower install angular" command on the project's directory)


### Script

== CSS ==

## link href="color-picker.css" media="all" rel="stylesheet" type="text/css"

=== JS ===

## <script src="bower_components/angular/angular.min.js"></script>
## <script src="color-picker.js"></script>
## <script src="example.js"></script>

=== HTML ===

<!--<ng-color-picker selected='selected' customized-colors="colors"></ng-color-picker>-->


### Changing the default colors


<!--<ul>-->
    <!-- ngRepeat: color in colors -->
        <!--<li class="ng-scope" ng-repeat="color in colors" ng-class="{selected: (color===selected)}" ng-click="pick(color)"
            style="background-color:#643264;"></li>-->
    <!-- end ngRepeat: color in colors -->
        <!--<li class="ng-scope" ng-repeat="color in colors" ng-class="{selected: (color===selected)}" ng-click="pick(color)"
            style="background-color:#d23c0a;"></li>-->
    <!-- end ngRepeat: color in colors -->
       .
       .
       .
    <!-- end ngRepeat: color in colors -->
<!--</ul>-->


### Using

Bower: bower v1.3.9
IDE: JetBRAINS WebStorm 8
Angular: angular v1.2.23


### Based on

## [http://ng-color-picker.herokuapp.com](http://ng-color-picker.herokuapp.com/)

