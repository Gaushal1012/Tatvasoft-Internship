import BookCard from "../components/global/Book/BookCard";
import React from "react";

const data = [
  {
    title: "Ramayan",
    price: 1999,
    author: "Sage Valmiki",
  },
  {
    title: "Doglapan",
    price: 299,
    author: "Ashneer",
  },
  {
    title: "Rich Dad poor Dad",
    price: 200,
    author: "Robert Kiyosaki",
  },
];

const Book = () => {
  return (
    <div>
      {data.map((ele) => {
        return (
          <BookCard title={ele.title} price={ele.price} author={ele.author} />
        );
      })}
    </div>
  );
};

export default Book;
