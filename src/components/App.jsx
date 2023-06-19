import paintings from '../painting.json';
import PaintingList from './PaintingList';



export const App = () => {
  return (
    <div>
      <PaintingList items={paintings} />       
    </div>
  );
};
