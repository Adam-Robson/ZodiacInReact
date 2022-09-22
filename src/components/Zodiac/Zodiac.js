import './Zodiac.css';

export default function Zodiac({ id, title, image, dates }) {
  return (
    <div className='card'>
      <img src={process.env.PUBLIC_URL + `/img/${title}.png`} />
      <p className="title">{title}</p>
      <img src={ `${image}`.png } alt={ title } />
      <p className="dates">{ dates }</p>
      <p className="id">{ id }</p>
    </div>
  );
}