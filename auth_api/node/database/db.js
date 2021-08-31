import mysql from 'mysql2';
import util from 'util';
import * as config from '../config/default.json';

const db = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  port: config.dbport,
  database: config.database
});

db.query = util.promisify(db.query);
export default db;