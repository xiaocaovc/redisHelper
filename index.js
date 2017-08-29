var Redis = require('ioredis');
const _ = require('lodash');
const defaultOptions = {
	host: "localhost",
	port: 6379,
	password: "root",
	family: 4,
	db:0
};
var REDIS = function (options) {
	options = _.merge({}, defaultOptions, options);
	this.redis = new Redis(options);
	var that = this;
	this.redis.use = function () { // support koa & koa2
		return function (ctx,next) {
			ctx.redis = that.redis;
			return next();
		};
	};
	return this.redis;
};

module.exports  = REDIS;