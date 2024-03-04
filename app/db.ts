export type Message = {
    id: string
    username: string
    body: string
    created_at: string
    remote_host: string
    remote_cf_ray: string
}

export const findAllMessages = async (db: D1Database) => {
    const { results } = await db.prepare('SELECT * FROM messages ORDER BY created_at DESC').all<Message>()
    const messages = results
    return messages
}

export const findMessageById = async (db: D1Database, id: string) => {
    const message = await db.prepare('SELECT * FROM messages WHERE id = ?').bind(id).first<Message>()
    return message
}

export const createMessage = async (db: D1Database, message: Pick<Message, 'username' | 'body' | 'remote_host' | 'remote_cf_ray'>) => {
    const id = crypto.randomUUID()
    const results = await db
        .prepare('INSERT INTO messages(id, name, body) VALUES(?, ?, ?)')
        .bind(id, message.username, message.body)
        .run()
    return results.success
}
