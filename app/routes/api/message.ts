import { createRoute } from 'honox/factory'
import { drizzle } from "drizzle-orm/d1";
import { messages } from "../../../src/schema";

type MessageReq = {
    name: string;
    body: string;
}

export const POST = createRoute(async (c) => {
    const params = await c.req.json<MessageReq>();
    const db = drizzle(c.env.DB);

    if (params.name == '' || params.name == null) {
        c.status(400);
        return c.text("Name is required")
    }

    if (params.body == '' || params.body == null) {
        c.status(400);
        return c.text("Message body is required")
    }

    const msg = {
        name: params.name,
        body: params.body,
        remote_host: c.req.raw.headers.get("CF-Connecting-IP")?.toString(),
        cf_ray: c.req.raw.headers.get("CF-RAY"),
    }

    const result = await db
        .insert(messages)
        .values(msg);

    return c.text("Success")
})
