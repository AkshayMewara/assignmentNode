import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'

export const Dashboard = () => {
    const navigate = useNavigate();

    const handleBook = (e) => {
        navigate("/addBook")
    }

    const handleSignup = (e) => {
        navigate("/")
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/bookList">Book Store</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="#">Home</NavLink>
                            </li> */}

                            {/* <div>
                                <button type="button" className="btn btn-primary" onClick={getBooks} >Add Book</button>
                            </div> */}


                            <div>
                                <button type="button" className="btn btn-primary" onClick={handleBook} >Add Book</button>
                            </div>
                        </ul>
                    </div>
                    <div>
                        <button type="button" className="btn btn-danger" onClick={handleSignup} >Logout</button>
                    </div>

                </div>
            </nav>
            <h1>Welcome to Book Store</h1>
        </div>
    )
}
