import { Hono } from 'hono'
import { Message, findAllMessages } from '../../../db'

const app = new Hono()

app.get('/', async (c) => {
    const results = await findAllMessages(c.env.DB);
    return c.json(results.map(function (obj) {
        return {
            name: obj.username,
            body: obj.body,
            created_at: obj.created_at,
        }
    }));
})

export default app
