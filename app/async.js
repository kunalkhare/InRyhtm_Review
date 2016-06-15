exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
	
	var p= new Promise(function(resolve){			
		resolve(value);
	});
		
	if(value){	
		return p;
	}
  },

  manipulateRemoteData: function(url) {
	  
	  var deffered = $.Deferred();
	  var people;

	  $.ajax({url: url, success: function(response){
		// had to cheat here for $.map to map json as I forgot.  
        people = $.map(response.people, function(person) {
        return person.name;
      });
	  deffered.resolve(people.sort());
		}});

	  return deffered.promise();

  }
};

