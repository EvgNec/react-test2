const Painting = ({ imgUrl, title, authorName ='noname', profileUser, price, qty })=> {
  return (
    <div>
      <img src={imgUrl} alt={title} with="480" />
      <h2>{title}</h2>
      <p>
        Autor: <a href={profileUser}>{authorName}</a>
      </p>
      <p>Price: {price} $</p>
      <p> QTY: {qty}</p>
      <button type="button">Add bascet</button>
    </div>
  );
}

export default Painting;