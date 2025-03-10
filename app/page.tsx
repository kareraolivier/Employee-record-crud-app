"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await fetch("/api/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      setUsers(data.data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  console.log("karera", users);

  return (
    <div>
      <h1>Welcome to my employee record crud app</h1>
    </div>
  );
}
