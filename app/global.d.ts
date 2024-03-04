import { } from 'hono'
import { D1Database } from '@cloudflare/workers-types';
import 'vite/client'

type Head = {
  title?: string
}

type MessageReq = {
  name: string;
  body: string;
}

declare module 'hono' {
  interface Env {
    Variables: {
      MessageReq: MessageReq;
    }
    Bindings: {
      DB: D1Database;
    }
  }
  interface ContextRenderer {
    (content: string | Promise<string>, head?: Head): Response | Promise<Response>
  }
}
