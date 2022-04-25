import React from 'react'
import "../App.css"
import { useNavigate } from 'react-router-dom'

export const BookCard = (props) => {
    const book = props.title;
    const deleteBook = props.deleteBook;

    const navigate = useNavigate();
    const handleEdit = () => {
        navigate("/editBook")
    }

    return (
        <div className="flexing">
            <div className="card" style={{ width: "22rem" }} >
                {/* <img src="..." className="card-img-top" alt="..."> */}
                <div className="card-body">
                    <h5 className="card-title">{book.bookName}</h5>
                    <p className="card-text">{book.bookDescription}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Author : </b>{book.bookAuthor}</li>
                    <li className="list-group-item"><b>Price :</b>{book.price}</li>
                </ul>
                <div className="card-body">
                    <div>
                        <button type="button" className="btn btn-primary editDelete" onClick={handleEdit} >Edit</button>
                        <button type="button" className="btn btn-primary btn-danger editDelete" onClick={() => { deleteBook(book._id) }}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
