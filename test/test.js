var Rediss  = require("../index");
var redis = new Rediss({password:"root@2017@2018"});
async function myTest () {
	var gVal = await redis.hmget("device:" + 'BVvT4QJrrwJ6MQJy',"name","state");
	console.log(gVal);
	var fun = redis.use();
	var ctx = {};
	async function next() {
		console.log("next...");
		gVal = await ctx.redis.hmget("device:" + 'BVvT4QJrrwJ6MQJy',"name","state");
		console.log(gVal);
	}
	fun(ctx,next);
}
myTest();