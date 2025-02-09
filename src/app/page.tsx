"use client";
import { useState, FormEvent } from "react";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Call the API route with the provided name
    const res = await fetch(`/api/hello?name=${encodeURIComponent(name)}`);
    const data = await res.json();
    setGreeting(data.message);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Enter Your Name</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        />
        <button
          type="submit"
          style={{ marginLeft: "0.5rem", padding: "0.5rem 1rem" }}
        >
          Submit
        </button>
      </form>
      {greeting && <p style={{ fontSize: "1.2rem" }}>{greeting}</p>}
    </div>
  );
}
