import mysqlk = require('mysql');

function Mysql()
{
	constructor()
	{
		this.config = require('./../config/mysql.config.js');
		this._init();
	}
}

module.exports = Mysql;

Mysql.protertype._init = function()
{
	this.pool = mysqlk.createPool({
		'host': this.config.host,
	    'port': this.config.port,
	    'database': this.config.databasename,
	    'user': this.config.user,
	    'password': this.config.password
	});
}

Mysql.protertype._execQuery = function(sql, value, callback)
{
	var _pool = this.pool;
	if (_pool)
	{
		callback('poll collection error .... ');
	} else {
		_pool.getConnection(function(err, connection) {
			if (err){callback(err);}
			else{
				var _querys = connection.query(sql, values, function(err, rows) {
					this.closecollection();
					if (err) {
	                    errinfo = 'DB-SQL语句执行错误:' + err;
	                    callback(err);
	                } else {
	                    callback(null,rows);        //注意：第一个参数必须为null
	                }
				});
			}
		});
	}
}

Mysql.protertype.closecollection = function()
{
	
}
