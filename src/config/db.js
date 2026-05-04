import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from '../db/schema.js'

const sql =process.env.DATABASE_URI

export const db = drizzle(sql,{schema});