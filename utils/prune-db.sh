#!/bin/sh

rm -rf .wrangler/state/d1
rm -rf drizzle/

bunx drizzle-kit generate:sqlite

bunx wrangler d1 migrations apply wtfbbs --local
bunx wrangler d1 migrations apply wtfbbs
