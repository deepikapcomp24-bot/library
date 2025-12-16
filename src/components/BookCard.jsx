import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    return (
        <div className="border p-4 rounded shadow hover:shadow-xl transition">
            <h2 className="text-xl font-bold">{book.title}</h2>
            <p className="text-gray-600">{book.author}</p>

            <span
                className={`inline-block mt-3 px-3 py-1 rounded text-sm ${
                    book.available ? "bg-green-200 text-green-800"
                    : "bg-red-200 text-red-800"
                }`}
            >
                {book.available ? "Available" : "Rented"}
            </span>

            <Link
                to={`/books/${book.id}`}
                className="block mt-4 bg-blue-600 text-white px-4 py-2 rounded text-center"
            >
                View Book
            </Link>
        </div>
    );
};

export default BookCard;
