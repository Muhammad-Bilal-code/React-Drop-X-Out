import React from "react";

const Book = (props) => {
  console.log({ props });
  console.log(props.addToCard);
  return (
    <div>
      <div
        className="book"
        style={{
          padding: "10px",
          borderBottom: "1px solid #ccc",
          display: "flex",
        }}
      >
        <div className="img">
          <img
            src={props.imgSrc}
            alt=""
            style={{ width: "200px", height: "300px" }}
          />
        </div>
        <div className="details" style={{ marginLeft: "15px" }}>
          <h2 className="book-name">{props.name}</h2>
          <p className="desc">{props.desc}</p>
          <p className="author" style={{ fontWeight: "bold" }}>
            {props.author}
          </p>
          <a href={props.addToCard} target="_blank">
            <button>Add</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Book;
