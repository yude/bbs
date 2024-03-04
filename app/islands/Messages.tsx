import { useEffect, useState } from 'hono/jsx'

export default function Messages() {
    const [messages, setMessages] = useState<any>([]);
    
    const submit = () => {
        fetch("/api/messages")
        .then((res) => res.json())
        .then((data) => setMessages(data))
    }

    useEffect(() => {
        submit()
    }, [])

    return (
        <>
        {messages}
        </>
    )
}
