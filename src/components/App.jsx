import paintings from '../painting.json';
import Painting from './Painting';


export const App = () => {
  return (
    <div>
        <Painting
    imgUrl={paintings[0].url}
    title={paintings[0].title}
    authorName={paintings[0].author.tag}
    profileUser={paintings[0].author.url}
    price={paintings[0].price}
    qty={paintings[0].quantity}
      />
              <Painting
    imgUrl={paintings[1].url}
    title={paintings[1].title}
    authorName={paintings[1].author.tag}
    profileUser={paintings[1].author.url}
    price={paintings[1].price}
    qty={paintings[1].quantity}
  />
    </div>
  );
};
