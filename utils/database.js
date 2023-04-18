const  { Pool } = require('pg');

let pool;

if(process.env.DATABASE === 'SUPABASE'){
     pool = new Pool({
        user:'postgres',
        host:process.env.SUPABASE_HOST,
        port:'5432',
        database: 'postgres',
        password:process.env.SUPABASE_PASSWORD,
    });
    console.log(`Connecting PostgreSQL database ${pool.options.database} on port ${pool.options.port}`);
}else{
     pool = new Pool({
        user:'postgres',
        host:'localhost',
        port:'5433',
        database: 'project',
        password:'0000'
    });
}



console.log(`Connecting local database ${pool.options.database} on port ${pool.options.port}`);

module.exports = pool;