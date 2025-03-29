import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

export const runtime = 'edge'

const app = new Hono().basePath('/api')

// Debug route to check if env vars are loaded properly
// app.get('/debug-env', (c) => {
//   return c.json({
//     hasPublishableKey: !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
//     // Don't log the actual key value for security reasons
//     publishableKeyFirstChars: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.substring(0, 5) || "not-set"
//   })
// })

app.get('/hello', clerkMiddleware(), (c) => {
  const auth = getAuth(c);
  if (!auth?.userId) {
    return c.json({ error: "Unauthorized" });
  }
  return c.json({
    message: 'Hello maewww!',
    userId:auth.userId,
  })
})

export const GET = handle(app)