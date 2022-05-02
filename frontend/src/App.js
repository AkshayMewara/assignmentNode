import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignUp } from '../src/components/SignUp'
import { AddBook } from '../src/components/AddBook'
import { Login } from '../src/components/Login'
import { Dashboard } from '../src/components/Dashboard'
import { BookList } from '..//src/components/BookList'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/addBook" element={<AddBook />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bookList" element={<BookList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
