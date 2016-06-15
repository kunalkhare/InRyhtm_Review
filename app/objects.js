exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
	// was unable to figure out had to look 
	return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
	  // was unable to figure out had to look 
	constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
	  var testObject =[];
	  Object.getOwnPropertyNames(obj).forEach(
		function(properties){
			testObject.push(properties+ ': ' + obj[properties]);
		}
	  )
	  return testObject;

  }
};
