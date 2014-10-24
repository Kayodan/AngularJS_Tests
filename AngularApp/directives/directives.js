myApp.directive("superman", function(){
	return {
		restrict: "E",//Elements
		template: "<div>Here I am to save the day</div>"
	}
})

myApp.directive("myFirstDirective", function(){
	return function(scope, element, attrs){
		element.text(scope.message + " " + attrs.person);
	}
})