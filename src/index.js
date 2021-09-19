import React from "react";
import ReactDOM from "react-dom";

//CSS

import "./index.css";
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  title: "I Love You to the moon and Back",
  author: "Amelia Hepworth",
};

const secondBook = {
  img: "https://m.media-amazon.com/images/I/71e38cCzk2L._AC_UY218_.jpg",
  title: "More than a Princess",
  author: "Delanda Coleman",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        {/* adicionando children */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime soluta
          ullam, nihil dolores voluptatum nulla a quo voluptates aliquam itaque?
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  const { img, title, author, children } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
