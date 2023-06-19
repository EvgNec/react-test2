import paintings from '../painting.json';
import PaintingList from './PaintingList';
import Section from './Section';



export const App = () => {
  return (
    <div>
      {/* <PaintingList items={paintings} />     */}
      <Section title="Top">
        <PaintingList items={paintings} /> 
      </Section>
      <Section/>
    </div>
  );
};
