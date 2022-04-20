const express = require('express');
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },

    bookDescription: {
        type: String,
        required: true
    },

    bookAuthor: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    // image : {}
})

const Books = new mongoose.model("Book", bookSchema)

module.exports = Books;