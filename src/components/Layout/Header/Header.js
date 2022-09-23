import './Header.css';

import background from '../../../background.png';

export default function Header() {
  return (
    <div>
      <div style={{ backgroundImage: `url(${background}.png)` }} />
      <div className="header">Zodiaac</div>
    </div>
  );
}
