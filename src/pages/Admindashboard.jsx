import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiBook, FiUser, FiCheckCircle, FiXCircle } from 'react-icons/fi';

const initialBooks = Array.from({ length: 20 }, (v, i) => ({
  id: i + 1,
  title: `Book ${i + 1}`,
  author: `Author ${i + 1}`,
  year: 2000 + (i % 20),
  status: i % 3 === 0 ? 'rented' : 'available',
}));

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState(initialBooks);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    year: '',
    status: 'available',
  });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isLoggedIn) navigate('/admin-login');
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    navigate('/admin-login');
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    const nextId = books.length ? books[books.length - 1].id + 1 : 1;
    setBooks([...books, { ...newBook, id: nextId }]);
    setNewBook({ title: '', author: '', year: '', status: 'available' });
  };

  const rentedBooks = books.filter(book => book.status === 'rented');
  const availableBooks = books.filter(book => book.status === 'available');

  return (
    <div className="min-h-screen bg-[#f7f0e9] text-[#6b4c3b] px-10 py-12 font-serif">

      {/* Header */}
      <div className="bg-[#f2e9e1] shadow-lg rounded-b-2xl py-8 px-10 mb-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-4xl font-semibold mb-4 md:mb-0 drop-shadow-sm">
            Admin Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="bg-[#b08357] hover:bg-[#a06d3f] text-white py-2 px-6 rounded-xl shadow-md transition"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-10">

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card icon={<FiBook className="text-[#b08357] text-3xl" />} title="Total Books" value={books.length} />
          <Card icon={<FiXCircle className="text-[#b08357] text-3xl" />} title="Rented Books" value={rentedBooks.length} />
          <Card icon={<FiCheckCircle className="text-[#b08357] text-3xl" />} title="Available Books" value={availableBooks.length} />
          <Card icon={<FiUser className="text-[#b08357] text-3xl" />} title="Authors" value={new Set(books.map(b => b.author)).size} />
        </div>

        {/* Add Book Form */}
        <div className="bg-[#f2e9e1] shadow-lg rounded-xl p-8 hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold mb-6 text-[#4a3623]">Add New Book</h2>
          <form className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end" onSubmit={handleAddBook}>
            <div className="flex flex-col">
              <label className="text-[#6b4c3b] mb-2">Title</label>
              <input
                type="text"
                placeholder="Book Title"
                value={newBook.title}
                onChange={e => setNewBook({ ...newBook, title: e.target.value })}
                className="border border-[#d7c4b9] p-3 rounded-xl focus:ring-2 focus:ring-[#b08357] outline-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#6b4c3b] mb-2">Author</label>
              <input
                type="text"
                placeholder="Author Name"
                value={newBook.author}
                onChange={e => setNewBook({ ...newBook, author: e.target.value })}
                className="border border-[#d7c4b9] p-3 rounded-xl focus:ring-2 focus:ring-[#b08357] outline-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#6b4c3b] mb-2">Year</label>
              <input
                type="number"
                placeholder="Year"
                value={newBook.year}
                onChange={e => setNewBook({ ...newBook, year: e.target.value })}
                className="border border-[#d7c4b9] p-3 rounded-xl focus:ring-2 focus:ring-[#b08357] outline-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#6b4c3b] mb-2">Status</label>
              <select
                value={newBook.status}
                onChange={e => setNewBook({ ...newBook, status: e.target.value })}
                className="border border-[#d7c4b9] p-3 rounded-xl focus:ring-2 focus:ring-[#b08357] outline-none"
              >
                <option value="available">Available</option>
                <option value="rented">Rented</option>
              </select>
            </div>
            <div className="md:col-span-4">
              <button type="submit" className="w-full bg-[#b08357] hover:bg-[#a06d3f] text-white py-3 rounded-xl shadow-md transition">
                Add Book
              </button>
            </div>
          </form>
        </div>

        {/* Books Lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Rented Books */}
          <ListCard title="Rented Books" books={rentedBooks} statusColor="text-[#b08357]" icon={<FiXCircle />} />

          {/* Available Books */}
          <ListCard title="Available Books" books={availableBooks} statusColor="text-[#b08357]" icon={<FiCheckCircle />} />

        </div>

      </div>
    </div>
  );
};

// Reusable Card
const Card = ({ icon, title, value }) => (
  <div className="bg-[#f2e9e1] shadow-lg rounded-xl p-6 flex items-center gap-4 hover:shadow-2xl transition transform hover:-translate-y-1">
    {icon}
    <div>
      <h3 className="text-[#6b4c3b]">{title}</h3>
      <p className="text-2xl font-bold text-[#4a3623]">{value}</p>
    </div>
  </div>
);

// Reusable List Card
const ListCard = ({ title, books, statusColor, icon }) => (
  <div className="bg-[#f2e9e1] shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
    <h2 className={`text-xl font-semibold mb-4 flex items-center justify-between`}>
      {title}
      <span className="bg-[#d7c4b9] text-[#6b4c3b] px-3 py-1 rounded-full text-sm">
        {books.length}
      </span>
    </h2>
    <div className="max-h-96 overflow-y-auto space-y-3">
      {books.length === 0 ? (
        <p className="text-[#8b6a4e]">No books</p>
      ) : (
        books.map(book => (
          <div key={book.id} className="bg-[#f7f0e9] p-3 rounded-lg shadow flex justify-between items-center hover:shadow-md transition">
            <div>
              <h3 className="font-semibold">{book.title}</h3>
              <p className="text-sm text-[#7b6045]">{book.author}</p>
            </div>
            <span className={`font-bold flex items-center gap-1 ${statusColor}`}>
              {icon} {book.status.charAt(0).toUpperCase() + book.status.slice(1)}
            </span>
          </div>
        ))
      )}
    </div>
  </div>
);

export default AdminDashboard;
