CREATE TABLE IF NOT EXISTS messages (
  id TEXT PRIMARY KEY,
  created_at TEXT DEFAULT (datetime('now')),
  username TEXT,
  body TEXT,
  remote_host TEXT,
  remote_cf_ray TEXT,
);
