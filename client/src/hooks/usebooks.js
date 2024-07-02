
import { useState, useEffect } from 'react';
import axios from 'axios';

export const useBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get("/books");
                setBooks(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    return { books, loading, error };
};