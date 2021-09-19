import React from "react";
import ReactDOM from "react-dom";

//CSS

import "./index.css";
const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
    title: "I Love You to the moon and Back",
    author: "Amelia Hepworth",
  },

  {
    img: "https://m.media-amazon.com/images/I/71e38cCzk2L._AC_UY218_.jpg",
    title: "More than a Princess",
    author: "Delanda Coleman",
  },
  {
    img: "https://m.media-amazon.com/images/I/713cuUqsE-L._AC_UY218_.jpg",
    title:
      "Madam C.J. Walker Builds a Business (A Good Night Stories for Rebel Girls Chapter Book)",
    author: "Rebel Girls and Salini Perera",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
