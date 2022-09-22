import './Zodiac.css';

export default function Zodiac({ title, image, dates }) {
  return (
    <div className='card'>
      <img src={process.env.PUBLIC_URL + `/img/${title}.png`} />
      <p className='name'>{title}</p>
      <p>{image}</p>
      <p>{dates}</p>
    </div>
  );
}