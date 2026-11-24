console.log("Starting database connection...");

const sql = require('mssql/msnodesqlv8');

const config = {
    server: 'localhost',
    database: 'NPBookstore',

    driver: 'ODBC Driver 18 for SQL Server',

    options: {
        trustedConnection: true,
        trustServerCertificate: true
    }
};

async function connectToDatabase() {
    console.log("Attempting connection...");

    try {
        await sql.connect(config);

        console.log("Connected to NPBookstore!");

        const result = await sql.query(
            'SELECT DB_NAME() AS DatabaseName'
        );

        console.log(result.recordset);

    } catch (err) {
        console.error("Connection failed:", err);
    }
}

connectToDatabase();