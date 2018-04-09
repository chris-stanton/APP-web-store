
///////////////////////////////////////////////
//  DATABASES W/ DEPLOY FILE                 //
//  Note: FILE SETUP FOR DEPLOY WITH HEROKU  //
///////////////////////////////////////////////

// requiring dependancies
let pg = require('pg');
let url = require('url');
let config = {};

// checking for enviroment type
if (process.env.DATABASE_URL) {
  // Heroku gives a url, not a connection object
  let params = url.parse(process.env.DATABASE_URL);
  let auth = params.auth.split(':');
  // for uses with heroku
  config = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    // heroku requires ssl to be true
    ssl: true,
    // max number of clients in the pool
    max: 10,
    // how long a client is allowed to remain idle before being closed
    idleTimeoutMillis: 30000,
  };
} else {
  // local use
  config = {
    //env var: PGUSER (postgresql username)
    user: process.env.PG_USER || 'chrisstanton',
    //env var: PGPASSWORD (postgresql password)
    password: process.env.DATABASE_SECRET || null,
    // Server hosting the postgres database (postgresql server name)
    host: process.env.DATABASE_SERVER || 'localhost',
    //env var: PGPORT (postgresql port listening)
    port: process.env.DATABASE_PORT || 5432,
    //env var: PGDATABASE (postgresql DB name)
    database: process.env.DATABASE_NAME || 'guide-spacing',
    // max number of clients in the pool
    max: 10,
    // how long a client is allowed to remain idle before being closed
    idleTimeoutMillis: 30000,
  };
}; // end else/if


module.exports = new pg.Pool(config);
