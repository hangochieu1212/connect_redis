const redis = require('ioredis');
const redisClient = redis.createClient({host:'127.0.0.1',port:6379,username:'',password:''});

redisClient.on('connect',() => {
    console.log('connected to redis successfully!');
})

redisClient.on('error',(error) => {
    console.log('Redis connection error :', error);
})
const main = async() => {
const number =1;
const age= 29;
const data = 2000;
//await redisClient.hset("info" , info);
const result = await redisClient.hmset(`info_${number}`, "age", `${age}`, "date" ,`${data}`);
await redisClient.expire(`info_${number}`, 15 * 60);
const getKey = await redisClient.hvals(`info_${number}`);
const ageInKey = getKey[1];
console.log(`age_in_key: ${ageInKey}`);
console.log(`result : ${result}`);
console.log(`key: ${getKey}`);
// const get = await redisClient.hmget(`info_${number}`, "name", "age")
// await redisClient.expire(`info_${number}`, 10*60);
// const data = (await redisClient.hmget(`info_${number}`, "age"));

// console.log("age",data.getTime());
// if(data === "Ha Ngoc Hieu") {
//     console.log('ok')
// }
//await redisClient.hset("info", "age", `${number}`);
//await redisClient.expire("info", 100);
//const name = await redisClient.hget("info", "name");
//console.log(name)
// const data = await redisClient.hexists("info", "name");
// if(data ===1) {
//     console.log('ok');
//     await redisClient.hset("info", "birthday", "22/12/2000")
// }

}
main();
module.exports = redisClient;