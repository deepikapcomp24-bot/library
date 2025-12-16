import React, { useState } from "react";

const booksData = Array.from({ length: 50 }, (v, i) => ({
  id: i + 1,
  title: `Book Title ${i + 1}`,
  author: `Author ${i + 1}`,
  year: 2000 + (i % 20),
  genre: ["Fiction", "Mystery", "Drama", "Romance"][i % 4],
  isbn: `ISBN100${i}`,
  image: `https://picsum.photos/seed/book${i}/300/450`,
}));

const BookStore = () => {
  const [search, setSearch] = useState("");
  const [filterGenre, setFilterGenre] = useState("All");
  const [page, setPage] = useState(1);

  const booksPerPage = 9;

  // Filter Books
  const filteredBooks = booksData.filter((book) => {
    navigate('/home');
    return (
      (filterGenre === "All" || book.genre === filterGenre) &&
      book.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  // Pagination
  const start = (page - 1) * booksPerPage;
  const paginatedBooks = filteredBooks.slice(start, start + booksPerPage);
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-yellow-400 bg-gray-800 py-4 rounded-md">
        BOOK STORE
      </h1>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-4">
        {/* Search */}
        <input
          type="text"
          placeholder="Search books..."
          className="w-full md:w-1/3 px-4 py-2 border rounded-lg shadow"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Genre Filter */}
        <select
          className="px-4 py-2 border rounded-lg shadow"
          value={filterGenre}
          onChange={(e) => setFilterGenre(e.target.value)}
        >
          <option>All</option>
          <option>Fiction</option>
          <option>Mystery</option>
          <option>Drama</option>
          <option>Romance</option>
        </select>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {paginatedBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white shadow-lg rounded-xl p-4 border hover:shadow-2xl transition duration-300 hover:scale-[1.03]"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />

            <h3 className="text-xl font-bold text-blue-700 mb-2">
              {book.title}
            </h3>

            <div className="space-y-1 text-gray-700">
              <p><span className="font-semibold">Author:</span> {book.author}</p>
              <p><span className="font-semibold">Year:</span> {book.year}</p>
              <p><span className="font-semibold">Genre:</span> {book.genre}</p>
              <p><span className="font-semibold">ISBN:</span> {book.isbn}</p>
            </div>

            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className={`px-4 py-2 rounded-lg shadow ${
            page === 1 ? "bg-gray-300" : "bg-blue-600 text-white"
          }`}
        >
          Prev
        </button>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className={`px-4 py-2 rounded-lg shadow ${
            page === totalPages ? "bg-gray-300" : "bg-blue-600 text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BookStore;
