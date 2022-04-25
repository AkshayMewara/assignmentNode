import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

export const EditBook = () => {
    const navigate = useNavigate();

    // const book = props.title;
    // const deleteBook = props.deleteBook;

    const [bookName, setBookName] = useState("book.bookName");
    const [bookDescription, setBookDescription] = useState("book.bookDescription")
    const [bookAuthor, setBookAuthor] = useState("book.bookAuthor")
    const [price, setPrice] = useState("book.bookPrice")

    const handleList =() => {
        navigate("/bookList");
    }

    return (
        <div>
            {/* <Dashboard /> */}
            <h1>Edit Book</h1>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Book Name</label>
                <input type="text" value={bookName} onChange={(e) => setBookName(e.target.value)} className="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Book Description</label>
                <textarea className="form-control" value={bookDescription} onChange={(e) => setBookDescription(e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Book Author</label>
                <input type="text" value={bookAuthor} onChange={(e) => setBookAuthor(e.target.value)} className="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Price</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Upload Image</label>
                <input className="form-control" type="file" id="formFile" />
            </div>
            <div>
                <button type="button" className="btn btn-primary edit" onClick={handleList}>Cancel</button>
                <button type="button" className="btn btn-primary edit" >Update</button>
            </div>
        </div>
    )
}
