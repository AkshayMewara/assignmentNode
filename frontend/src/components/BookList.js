import React, { useState, useEffect } from 'react'
import { BookCard } from './BookCard'
import axios from 'axios'
import { Dashboard } from './Dashboard'
// import '../App.css'

export const BookList = () => {

    var [books, setBooks] = useState([]);
    const [render, setRender] = useState(true);
    const token = sessionStorage.getItem("Token");

    useEffect(() => {
        const getBooks = (e) => {
            // e.preventDefault();
            try {
                axios.get("http://localhost:9000/book",
                    {
                        headers: {
                            "access-token": token,
                        },
                    })
                    .then((res) => {
                        setBooks(res.data);
                        console.log(books);
                    })
            } catch (err) {
                console.log(err);
            }
        }
        getBooks()
    }, [render]);

    const deleteBook = async (id) => {
        try {
            await axios.delete(`http://localhost:9000/book/${id}`,
                {
                    headers: {
                        "access-token": token,
                    },
                })
                .then((res) => {
                    console.log(res);
                })
            setRender(!render);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <Dashboard />
            {/* <BookCard /> */}
            <div>
                {
                    books.map((book, index) => {
                        return <BookCard book={book} deleteBook={deleteBook} key={index} />
                    })
                }
            </div>
        </div>
    )
}
