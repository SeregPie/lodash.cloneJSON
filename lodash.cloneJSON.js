(function(_) {

	_.mixin({cloneJSON: function(value) {
		return JSON.parse(JSON.stringify(value));
	}});

})((function() {
	if (typeof exports !== 'undefined' && this === exports) {
		return require('lodash');
	} else {
		return _;
	}
}).call(this));