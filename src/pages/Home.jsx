import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()

  // Generate 20 sample books
  const books = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Book Title ${i + 1}`,
    author: `Author ${i + 1}`,
    year: 2000 + i,
    genre: "Fiction",
    isbn: `ISBN${10000 + i}`
  }))
  // Navigate to book details page
  const handleRowClick = (id) => {
    navigate(`/book/${id}`);
  }

  return (
    <div className="home-container">
      <h2>Newest 20 Books</h2>

      <table className="book-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
            <th>Genre</th>
            <th>ISBN</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr
              key={book.id}
              onClick={() => handleRowClick(book.id)}
              style={{ cursor: "pointer" }}
            >
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
              <td>{book.genre}</td>
              <td>{book.isbn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home
