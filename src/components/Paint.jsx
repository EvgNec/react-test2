import defaultImage from '../default.jpg';

const Paint = ({
  imgUrl = defaultImage,
  title,
  authorName = 'noname',
  profileUser,
  price,
  qty,
}) => {
  return (
    <div>
      <img src={imgUrl} alt={title} with="480" />
      <h2>{title}</h2>
      <p>
        Autor: <a href={profileUser}>{authorName}</a>
      </p>
      <p>Price: {price} $</p>
      <p>
        {' '}
        Доступность: {qty < 10 ? 'end' : 'start'} {qty}
      </p>
      <button type="button">Add bascet</button>
    </div>
  );
};

export default Paint;