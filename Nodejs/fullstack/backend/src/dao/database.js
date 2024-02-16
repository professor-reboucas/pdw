import pg from 'pg';
    
const connect = async () => {
    if (global.connection)
        return global.connection.connect();
    const CONNECTION_STRING=`postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
    const pool = new pg.Pool({
        connectionString: CONNECTION_STRING
    });
    global.connection = pool;
    return pool.connect();
}

export const query = async (sql) => {
    const client = await connect();
    const res = await client.query(sql);
    client.release();
    return res;
}
