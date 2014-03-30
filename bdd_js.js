var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("test.db");
var util = require("util");

create = function () {
	db.run("CREATE TABLE test (info TEXT)");
    db.close();
};

insert = function () {
    db.serialize( function () {
        var stmt = db.prepare("INSERT INTO test VALUES (?)");
        for (var a = 0;  a < 10; a++)  {
            stmt.run("" + a);
        }
        stmt.finalize();
    });
    db.close();
};

read = function () {
    var stmt = "SELECT * FROM test";
    db.each(stmt, function (e, r) {
        console.log(util.inspect(r));
    });
    db.close();
};

read();


/**
*Created by Olivier ANTUNES
*login function checks if the username & pswd puts in parameters are corrects
*@param1 log
*@param2 pwd
* Return: true or false 
*/
login = function (log, pwd) {
	db.serialize( function () {
		var stmt = db.prepare("SELECT * FROM test WHERE user = '"+log+"' && password = '"+pwd+"'"); //TODO : Update here the name of the table "test" 
		if(){
			console.log(true);
		}
		else{
			console.log(false);
		}
		stmt.finalize();
	});
	db.close();
};
