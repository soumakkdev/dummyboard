import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'

const url = process.env.DATABASE_URL as string
const sql = postgres(url, { max: 1 })
const db = drizzle(sql)

async function main() {
	try {
		await migrate(db, {
			migrationsFolder: 'src/db/migrations',
		})
		console.log('[server] migration successful')
	} catch (error) {
		console.log(error)
		process.exit(1)
	}
}

main()
