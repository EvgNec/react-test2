import Painting from './Painting';
function PaintingList({ items }) {
  return <ul>
    {items.map(painting => (
      <li key={painting.id}>
        <Painting
          imgUrl={painting.url}
          title={painting.title}
          authorName={painting.author.tag}
          profileUser={painting.author.url}
          price={painting.price}
          qty={painting.quantity}
        />
      </li>
    ))}
  </ul>;
}

export default PaintingList;
