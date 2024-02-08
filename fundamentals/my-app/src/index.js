import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    author: " James Clear",
    title: "Atomic Habits",
    img: "https://m.media-amazon.com/images/I/81YkqyaFVEL._SY425_.jpg",
    id: 1,
  },
  {
    author: " Freida McFadden ",
    title: "The Housemaid",
    img: "https://m.media-amazon.com/images/I/81AHTyq2wVL._SY425_.jpg",
    id: 2,
  },
];

function BookList() {
  return (
    <section className="booklist">
      <EventExample />
      {books.map((book) => {
        console.log(book);
        // const { author, title, img, id } = book;
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}
const Book = (props) => {
  const { author, title, img } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      {/* {console.log(props)} */}
    </article>
  );
};

const EventExample = () => {
  const handleInput = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    console.log("handle from input");
  };

  const handleButton = () => {
    alert("You have clicked");
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("handle submiit");
  };

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h1>Event Example</h1>
        <input
          onChange={handleInput}
          type="text"
          name="example"
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handleButton}>Click</button>
    </section>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
