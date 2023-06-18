import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import paintings from './painting.json';

const painting = paintings[1];

function Painting(props) {
  return (
    <div>
      <img src={props.url} alt={props.title} with="480" />
      <h2>{painting.title}</h2>
      <p>
        Autor: <a href={props.profileUser}>{props.authorName}</a>
      </p>
      <p>Price: {props.price} $</p>
      <p> QTY: {props.quantity}</p>
      <button type="button">Add bascet</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Painting
    url={painting.url}
    title={painting.title}
    authorName={painting.author.tag}
    profileUser={painting.author.url}
    price={painting.price}
    qty={painting.quantity}
  />
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
