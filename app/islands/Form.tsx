import { useState } from 'hono/jsx'

export default function Form() {
    const [name, setName] = useState("");
    const [body, setBody] = useState("");

    const updateName = (e: any) => {
        setName(e.target.value);
    }
    const updateBody = (e: any) => {
        setBody(e.target.value);
    }
    
    const submit = () => {
        fetch("/api/message", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: name, body: body})
        })
        .then((res) => console.log(res))
    }

    return (
        <div class="border border-solid border-2 border-gray-200 p-5 rounded-lg">
        <label for="name" class="block mb-2 text-sm font-medium text-gray-900">名前</label>
        <input
            type="text"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Linus Torvalds"
            required
            onChange={updateName}
            value={name}
        />
        <label for="body" class="block mb-2 text-sm font-medium text-gray-900 mt-5">本文</label>
        <textarea
            id="body"
            rows={4}
            class="block p-2.5 w-full text-lg font-serif text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="言い残したいことは？"
            required
            onChange={updateBody}
            value={body}
        />
        <button
            id="submit"
            type="submit"
            class={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none mt-5${name === "" || body === "" ? " opacity-20 pointer-events-none": ""}`}
            onClick={submit}
        >
        <i class="fa-solid fa-paper-plane"></i>&nbsp;&nbsp;&nbsp;投稿する</button>
    </div>
    )
  }
