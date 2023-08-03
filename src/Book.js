const Book = (props) => {
  const { img, title, author } = props.book;
  // console.log(props);

  const getSingleBook = () => {};
  return (
    <article className="Book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};
export default Book;
