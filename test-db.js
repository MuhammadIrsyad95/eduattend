require('dotenv').config()

const postgres = require('postgres')

const sql = postgres(process.env.DATABASE_URL)

async function test() {
  try {
    const result = await sql`SELECT NOW()`

    console.log('DB Connected ✅')

    console.log(result)
  } catch (error) {
    console.error(error)
  }
}

test()