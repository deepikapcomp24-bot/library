import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const mockBooks = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    title: `Book Title ${i + 1}`,
    author: `Author ${i + 1}`,
    year: 2000 + (i % 20),
    genre: ["Fiction", "Mystery", "Sci-Fi", "Romance"][i % 4],
    isbn: `978-0-${Math.floor(100000 + Math.random() * 900000)}`,
    rented: Math.random() > 0.5,
    image: `https://picsum.photos/300/400?random=${i + 1}`,
    description:
      "This is a detailed description for the book. Replace with real content later."
  }));

  const book = mockBooks.find((b) => b.id === Number(id));

  if (!book)
    return (
      <div className="min-h-screen flex justify-center items-center bg-black text-white text-3xl">
        Book not found
      </div>
    );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6">

      {/* 🔙 Back Button */}
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-5 py-2 bg-[#1f1f1f] border border-[#333] 
                     hover:bg-[#2a2a2a] rounded-full text-gray-300 transition"
        >
          ← Back
        </button>
      </div>

      {/* 📘 Book Details Card */}
      <div
        className="max-w-4xl mx-auto bg-[#111] border border-[#2c2c2c] 
                   shadow-xl rounded-2xl p-8 flex flex-col md:flex-row gap-8"
      >
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={book.image}
            alt={book.title}
            className="w-64 h-96 object-cover rounded-xl shadow-lg 
                       hover:scale-105 transition"
          />
        </div>

        {/* Right Details */}
        <div className="flex-1">

          <h1 className="text-4xl font-bold mb-2 text-white">{book.title}</h1>
          <p className="text-lg text-gray-400 mb-6">by {book.author}</p>

          {/* Info Section */}
          <div className="space-y-2 text-gray-300 text-sm">
            <p>
              <strong className="text-white">Genre:</strong> {book.genre}
            </p>
            <p>
              <strong className="text-white">Published:</strong> {book.year}
            </p>
            <p>
              <strong className="text-white">ISBN:</strong> {book.isbn}
            </p>
            <p>
              <strong className="text-white">Status:</strong>{" "}
              <span className={book.rented ? "text-red-400" : "text-green-400"}>
                {book.rented ? "Rented" : "Available"}
              </span>
            </p>
          </div>

          {/* Description */}
          <p className="mt-6 text-gray-300 leading-relaxed text-sm">
            {book.description}
          </p>

          {/* Request Button */}
          <button
            className="mt-8 w-full bg-blue-600 py-3 rounded-xl shadow 
                       hover:bg-blue-700 transition text-white text-sm"
          >
            Request Rental
          </button>
        </div>
      </div>
    </div>
  );
}
