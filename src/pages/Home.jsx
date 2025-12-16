import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  "Novel",
  "Personal development",
  "Classic",
  "Investment",
  "Business",
  "History",
  "Reading history",
];

const Home = () => {
  const navigate = useNavigate();

  const books = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Book Title ${i + 1}`,
    author: `Author ${i + 1}`,
    year: 2000 + i,
    genre: categories[i % categories.length],
    isbn: `ISBN${10000 + i}`,
    image: `https://picsum.photos/seed/book${i}/200/300`,
  }));

  const [searchTerm, setSearchTerm] = useState("");
  const [likedBooks, setLikedBooks] = useState([]);

  const handleRowClick = (id) => navigate(`/book/${id}`);

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLikeToggle = (id) => {
    setLikedBooks((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-[#f7f0e9] text-[#6b4c3b] px-10 py-12 font-serif">
      {/* Page Title */}
      <h1 className="text-4xl font-semibold mb-10 drop-shadow-sm">
        Personal Library
      </h1>

      <div className="flex max-w-7xl mx-auto gap-12">
        {/* Category List */}
        <aside className="w-64 bg-[#f2e9e1] rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-6 border-b border-[#d7c4b9] pb-2">
            Category
          </h2>
          <ul className="space-y-3 text-sm">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setSearchTerm(cat)}
                  className="hover:underline cursor-pointer"
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-8 italic text-xs text-[#8b6a4e] border-l-2 border-[#bda589] pl-3">
            Sometimes we need fantasy to survive reality
          </p>
        </aside>

        {/* Books Grid */}
        <main className="flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                onClick={() => handleRowClick(book.id)}
                className="bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition p-4 flex flex-col"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="rounded-md mb-4 object-cover h-48 w-full"
                />
                <h3 className="font-semibold text-[#4a3623] mb-1">{book.title}</h3>
                <p className="text-xs text-[#7b6045] mb-3">{book.author}</p>
                <span
                  className="inline-block bg-[#c8b8a6] text-[#5c4735] text-xs rounded-full px-2 py-0.5"
                >
                  {book.genre}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLikeToggle(book.id);
                  }}
                  className={`mt-auto py-1 rounded text-sm font-medium ${
                    likedBooks.includes(book.id)
                      ? "bg-[#b08357] text-white"
                      : "bg-[#e6d9cc] text-[#7b6045]"
                  } hover:bg-[#b08357] hover:text-white transition`}
                >
                  {likedBooks.includes(book.id) ? "♥ Liked" : "♡ Like"}
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
