myApp.directive("superman", function(){
	return {
		// restrict: E-> Element, - A-> Attribute, C-> Class, M-> Comment
		// Exemple avec E
		/*
		restrict: "E",//Elements
		template: "<div>Here I am to save the day</div>"
		*/
		// Exemple avec A ou C(class="superman") ou M
		restrict: "M",
		link: function(){
			alert("I'm working stronger")
		}
	}
})

myApp.directive("flash", function(){
	return {
		restrict: "A",
		link: function(){
			alert("I'm working faster")
		}
	}
})

myApp.directive("myFirstDirective", function(){
	return function(scope, element, attrs){
		element.text(scope.message + " " + attrs.person);
	}
})