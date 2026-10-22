import { sql } from 'bun'

const version = 'v1'

Bun.serve({
  port: Number(process.env.PORT ?? 8080),
  async fetch(req) {
    const { pathname } = new URL(req.url)
    if (pathname === '/env') return Response.json({ FOO: process.env.FOO ?? null })
    if (pathname === '/db') {
      if (!process.env.DATABASE_URL) return new Response('no database attached\n', { status: 503 })
      try {
        await sql`create table if not exists hits (at timestamptz default now())`
        await sql`insert into hits default values`
        const [{ count }] = await sql`select count(*)::int as count from hits`
        return Response.json({ hits: count })
      } catch (error) {
        return new Response(`database error: ${(error as Error).message}\n`, { status: 502 })
      }
    }
    return new Response(`hello from marsa-smoke ${version}\n`)
  },
})
