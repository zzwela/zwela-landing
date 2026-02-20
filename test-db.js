const { Client } = require('pg');

const connectionString = 'postgresql://neondb_owner:npg_UWRP3hnzEb5y@ep-small-sound-aiyczkzf-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require';

const client = new Client({
    connectionString: connectionString,
});

client.connect()
    .then(() => {
        console.log('Connected successfully');
        process.exit(0);
    })
    .catch(err => {
        console.error('Connection error', err.stack);
        process.exit(1);
    });
