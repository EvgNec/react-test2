import paintings from '../painting.json';
import Painting from './Painting';


export const App = () => {
  return (
    <div>
      {paintings.map(
        painting => 
      
<Painting
    imgUrl={painting.url}
    title={painting.title}
    authorName={painting.author.tag}
    profileUser={painting.author.url}
    price={painting.price}
    qty={painting.quantity}
      />) 
      }
       
    </div>
  );
};
