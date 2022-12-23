import './Zodiac.css';

export default function Zodiac({ id, title, dates }) {
  return (
    <div className='container'>
      <div className="image"><img src={process.env.PUBLIC_URL + `/img/${title}.png`} /></div>
      <div className="middle"><p className="title">{title}</p>
        <p className="text">{ dates }</p></div>
      <p className="id">{ id }</p>
    </div>
  );
}