
import { signs } from '../../data.js';
import Zodiac from '../Zodiac/Zodiac.js';
import './Main.css';

export default function Main() {
  return (
    <main>
      {signs.map(({ id, title, dates }) => (
        <Zodiac
          key={id}
          title={title}
          dates={dates}
        />
      ))}
    </main>
  );
}