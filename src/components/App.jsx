import paintings from '../painting.json';
import PaintingList from './PaintingList';
import Section from './Section';



export const App = () => {
  return (
    <div>
      <Section title="Top">
        <PaintingList items={paintings} /> 
      </Section>
      <Section/>
    </div>
  );
};
