import pg from 'pg';
const {Pool} = pg;

let localPoolConfig = {
    user: 'postgres',
    password: 'Spiderman64',
    host: 'localhost',
    port: '5432',
    database:'jwtdb'
};

const poolConfig = process.env.DATABASE_URL
 ? {
    connectionString:process.env.DATABASE_URL,
    ssl:{rejectUnauthorized:false}
} : localPoolConfig;
// 6f20875a-213c-4317-aeed-9d5d85cfd911
const pool = new Pool(poolConfig);
