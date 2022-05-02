import React, { useState } from 'react'
import "../App.css"
import axios from 'axios'
import { Form, Button, Modal } from 'react-bootstrap'

export const BookCard = ({ book, deleteBook }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const token = sessionStorage.getItem("Token")
  const [bookById, setbookById] = useState({});
  const getData = (book) => {
    setbookById(book)
  }
  const inputHandler = (e) => {
    setbookById({ ...bookById, [e.target.name]: e.target.value })
  }





  const editBook = async (id, e) => {
    // console.log(id)
    // e.preventDefault();
    try {
      await axios.patch(`http://localhost:9000/book/${id}`, bookById,
        {
          headers: {
            "access-token": token,
          },
        })
        .then(() => {
          setShow(false);
          window.location.reload();
        })
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="flexing">
        <div className="card" style={{ width: "22rem" }} >
          <div className="card-body">
            <h5 className="card-title">{book.bookName}</h5>
            <p className="card-text">{book.bookDescription}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Author : </b>{book.bookAuthor}</li>
            <li className="list-group-item"><b>Price :</b>{book.price}</li>
          </ul>
          <div>
            <button type="button" className="btn btn-primary editDelete" onClick={() => { handleShow(); getData(book) }} >Edit</button>
            <button type="button" className="btn btn-primary btn-danger editDelete" onClick={() => deleteBook(book._id)}>Delete</button>
          </div>
        </div>
      </div>
     
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={editBook}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Book Name</Form.Label>
              <Form.Control
                type="text"
                name="bookName"
                value={bookById.bookName}
                placeholder="name"
                onChange={inputHandler}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Book Description</Form.Label>
              <Form.Control type="text" name="bookDescription" value={bookById.bookDescription}
                onChange={inputHandler} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Book Author</Form.Label>
              <Form.Control
                type="text"
                name="bookAuthor"
                value={bookById.bookAuthor}
                placeholder="Author"
                autoFocus
                onChange={inputHandler}

              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={bookById.price}
                placeholder="price"
                autoFocus
                onChange={inputHandler}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => { editBook(bookById._id); handleClose() }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
