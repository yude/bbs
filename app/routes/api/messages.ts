import { createRoute } from 'honox/factory'
import { drizzle } from "drizzle-orm/d1";
import { messages } from "../../../src/schema";

export const POST = createRoute(async (c) => {
    const db = drizzle(c.env.DB);
    const result = await db.select().from(messages).all();

    return c.json(result.map(function (obj) {
        return {
            name: obj.name,
            body: obj.body,
            createdAt: obj.createdAt,
        }
    }));
})
