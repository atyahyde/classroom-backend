import { db } from "../src/db";
import { sql } from "drizzle-orm";

async function main() {
  try {
    console.log("Dropping tables...");
    await db.execute(sql`DROP TABLE IF EXISTS "users" CASCADE`);
    await db.execute(sql`DROP TABLE IF EXISTS "departments" CASCADE`);
    await db.execute(sql`DROP TABLE IF EXISTS "subjects" CASCADE`);
    await db.execute(sql`DROP TABLE IF EXISTS "__drizzle_migrations" CASCADE`);
    console.log("Tables dropped successfully.");
  } catch (error) {
    console.error("Error dropping tables:", error);
    process.exit(1);
  }
  process.exit(0);
}

main();
