const pool = require('../dbconnect');
const SQL = require('sql-template-strings');
//const bcrypt = require('bcrypt-nodejs');

/**
 * Updates User Password in the Database
 */
function updatePass(username, callback) {
  // hash the plaintext password
  let password = document.getElementById('newPass').value;
  //let hash = bcrypt.hashSync(document.getElementById('newPass').value);
  let string = SQL`UPDATE employee_info
                 SET Password = ${ password },
                 WHERE Username = ${ username };`;
  pool.query(string,
      (err, res)=> {
        if(err) {
          callback(err);
        } else {
          callback(null);
		  alert("Password Updated Successfully!");
        }

  });
}

module.exports = updatePass;