import React from "react";
import Book from "./Book";

const booksArr = [
  {
    imgSrc:
      "https://m.media-amazon.com/images/I/A1zJTaE6zcL._AC_UL600_FMwebp_QL65_.jpg",
    name: "Book 01",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "auhthor 01",
    btnLink:
      "https://www.amazon.com/Canterbury-Tales-Translation-Gerald-Davis-ebook/dp/B01GQK9EPY/ref=sr_1_1_sspa?adgrpid=151581110362&hvadid=661264209515&hvdev=c&hvlocphy=9077136&hvnetw=g&hvqmt=b&hvrand=15257272003715610380&hvtargid=kwd-492193565432&hydadcr=22337_13333082&keywords=amazon+classics&qid=1693481544&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
  },
  {
    imgSrc:
      "https://m.media-amazon.com/images/I/81WUAoL-wFL._AC_UL600_FMwebp_QL65_.jpg",
    name: "Book 02",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "auhthor 02",
    btnLink:
      "https://www.amazon.com/Lord-Flies-William-Golding/dp/0399501487/ref=sr_1_2?adgrpid=151581110362&hvadid=661264209515&hvdev=c&hvlocphy=9077136&hvnetw=g&hvqmt=b&hvrand=15257272003715610380&hvtargid=kwd-492193565432&hydadcr=22337_13333082&keywords=amazon+classics&qid=1693481544&sr=8-2",
  },
  {
    imgSrc:
      "https://m.media-amazon.com/images/I/813IzLl+x4L._AC_UL600_FMwebp_QL65_.jpg",
    name: "Book 03",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "auhthor 03",
    btnLink:
      "https://www.amazon.com/War-and-Peace-AmazonClassics-Edition/dp/B085LTK98B/ref=sr_1_3?adgrpid=151581110362&hvadid=661264209515&hvdev=c&hvlocphy=9077136&hvnetw=g&hvqmt=b&hvrand=15257272003715610380&hvtargid=kwd-492193565432&hydadcr=22337_13333082&keywords=amazon+classics&qid=1693481544&sr=8-3",
  },
  {
    imgSrc:
      "https://m.media-amazon.com/images/I/81yNWdTnoUL._AC_UL600_FMwebp_QL65_.jpg",
    name: "Book 04",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "auhthor 04",
    btnLink:
      "https://www.amazon.com/Picture-Dorian-Gray-AmazonClassics-ebook/dp/B071HDXV91/ref=sr_1_4?adgrpid=151581110362&hvadid=661264209515&hvdev=c&hvlocphy=9077136&hvnetw=g&hvqmt=b&hvrand=15257272003715610380&hvtargid=kwd-492193565432&hydadcr=22337_13333082&keywords=amazon+classics&qid=1693481544&sr=8-4",
  },
];
const BookList = () => {
  return (
    <div>
      {booksArr.map((elm, i) => (
        <Book
          imgSrc={elm.imgSrc}
          name={elm.name}
          desc={elm.desc}
          author={elm.author}
          addToCard={elm.btnLink}
        />
      ))}
    </div>
  );
};

export default BookList;
