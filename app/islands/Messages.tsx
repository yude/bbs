import { useState } from 'hono/jsx'

export default function Messages() {
    const [messages, setMessages] = useState("");

    const submit = () => {
        fetch("/api/messages")
        .then((res) => res.json())
        .then((data) => setMessages(data))
    }

    return (
        <>
        {messages}
        </>
    )
}
