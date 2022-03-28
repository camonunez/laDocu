import Vue from 'vue'
import _ from 'lodash'

_.isString = function (x) {
	return typeof x === 'string'
}
_.omitDeep = function (collection, excludeKeys) {
	function omitFn(v) {
		if (v && typeof v === 'object') {
			excludeKeys.forEach(k => {
				delete v[k]
			})
		}
	}
	return _.cloneDeepWith(collection, omitFn)
}

_.pathValues = function (objeto) {
	function getPaths(object) {
		return (
			object &&
			typeof object === 'object' &&
			!_.isArray(object) &&
			!_.isfunction(object) &&
			Object.keys(object).reduce(
				(p, k) =>
					(getPaths(object[k]) || [[]]).reduce((r, a) => [...r, [k, ...a]], p),
				[]
			)
		)
	}

	const paths = getPaths(objeto)
	const pvs = {}
	_.forEach(paths, path => {
		pvs[path.join('.')] = _.get(objeto, path)
	})
	return pvs
}

export default () => {
	Vue.prototype._ = _
}

export { _ }
