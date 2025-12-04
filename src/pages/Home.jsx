import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books")  // Your API
      .then((res) => res.json())
      .then((data) => {
        // Show only latest 20 books
        setBooks(data.slice(0, 20));
      })
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Newest Books</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {books.map((book) => (
          <Link
            to={`/book/${book.id}`}
            key={book.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={book.image}
              alt={book.title}
              className="h-48 w-full object-cover rounded mb-3"
            />

            <h2 className="text-lg font-semibold">{book.title}</h2>
            <p className="text-sm text-gray-600">by {book.author}</p>

            <p className="mt-2 text-sm text-blue-600">View Details →</p>
          </Link>
        ))}

      </div>
    </div>
  );
};

export default Home;
