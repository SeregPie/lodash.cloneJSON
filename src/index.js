import _ from 'lodash';

_.mixin({
	cloneJSON(value) {
		return JSON.parse(JSON.stringify(value));
	},
});
