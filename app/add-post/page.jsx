"use client";
import Link from "next/link";
import { useState } from "react";

export default function AddPost({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/add-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit post');
      }

      const data = await response.json();
      onSubmit(data); // Call the onSubmit function passed as a prop with the response data
    } catch (error) {
      console.error(error);
    }

    setTitle('');
    setContent('');
  };

  return (
    <div>
      <Link href={'/'}>View feed</Link>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 border rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter content"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
