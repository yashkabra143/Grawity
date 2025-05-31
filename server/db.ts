import { drizzle } from 'drizzle-orm/neon-http';
import { neon, neonConfig } from '@neondatabase/serverless';
import * as schema from '../shared/schema';
import ws from 'ws';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is required');
}

// Enable WebSocket connections for better performance
neonConfig.webSocketConstructor = ws;
const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql); 