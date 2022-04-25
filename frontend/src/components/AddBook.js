import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Dashboard } from './Dashboard'

export const AddBook = () => {

    const [bookName, setBookName] = useState("")
    const [bookDescription, setBookDescription] = useState("")
    const [bookAuthor, setBookAuthor] = useState("")
    const [price, setPrice] = useState("")

    const createBook = async (e) => {
        e.preventDefault();

        let info = { bookName, bookDescription, bookAuthor, price };
        let token = sessionStorage.getItem("Token");
        // console.log(token);
        try {
            await axios.post("http://localhost:9000/book", info,
                {
                    headers: {
                        "access-token": token,
                    },
                })
                .then((res) => {
                    console.log(res);
                    setBookName("");
                    setBookDescription("");
                    setBookAuthor("");
                    setPrice("");
                    // navigate("/dashboard");
                })
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <Dashboard />
            <h1>Add New Book</h1>
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
                <button type="button" className="btn btn-primary" onClick={createBook} >Add Book</button>
            </div>
        </div>
    )
}
