import { createRoute } from 'honox/factory'
import { Message, createMessage } from '../../../db'

type MessageReq = {
    username: string;
    body: string;
}

export const POST = createRoute(async (c) => {
    const params = await c.req.json<MessageReq>();

    if (params.username == '' || params.username == null) {
        c.status(400);
        return c.text("Name is required")
    }

    if (params.body == '' || params.body == null) {
        c.status(400);
        return c.text("Message body is required")
    }

    const msg: Message = {
        id: "",
        created_at: "",
        username: params.username,
        body: params.body,
        remote_host: c.req.raw.headers.get("CF-Connecting-IP")?.toString() || "N/A",
        remote_cf_ray: c.req.raw.headers.get("CF-RAY") || "N/A",
    }

    await createMessage(c.env.DB, msg)

    return c.text("Success")
})
