import Koa from "koa";
import views from "koa-views";
import co from "co";
import convert from "koa-convert";
import json from "koa-json";
import onerror from "koa-onerror";
import logger from "koa-logger";
import fs from "fs";
import path from "path";

import session from "koa-session2";
// import Store from './service/MongoStore';
import {Store} from "koa-session2";

const bodyparser = require('koa-bodyparser')();
const router = require('koa-router')();
const app = new Koa();

// middlewares
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));

app.use(session({
  key: 'settings.sessionkey',
  store: new Store()
}));

app.use(require('koa-static')(__dirname + '/public'));
// app.use(views(__dirname + '/views', {extension: 'jade'}));
app.use(views(__dirname + '/views', {
	map: {
		html: 'swig'
	}
}));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});


const readdirSync = (dir) => {
  fs.readdirSync(dir).forEach( (name) => {
    let stat = fs.lstatSync(path.join(dir,name));
    if(stat.isDirectory()){
      readdirSync(path.join(dir,name));
    }
    else{
      console.log(`NAME: ${dir}/${name}`);
      (new (require(`${dir}/${name}`))(router)).init();
    }
  });
}

readdirSync(path.resolve('./routes'));
app.use(router.routes(), router.allowedMethods());

app.on('error', function(err, ctx){
  console.log(err)
  logger.error('server error', err, ctx);
});

// module.exports = app;
export default app