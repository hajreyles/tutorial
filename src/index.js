import React from "react";
import ReactDom from "react-dom";

function BookList() {
  return ( 
    <section >
     <Book />
     <Title />
     <Author />
    </section>

  );
}

const Book = () => {
  return (
    <img src="https://m.media-amazon.com/images/I/41+OZ+-AQ6L._SX366_BO1,204,203,200_.jpg" alt="Book_cover" />
  )
}

const Title = () =>
  <h1>I Didn't Do The Thing Today</h1>;

const Author = () =>
  <h4>Madeleine Dore</h4>;

ReactDom.render( <BookList /> , document.getElementById("root"));