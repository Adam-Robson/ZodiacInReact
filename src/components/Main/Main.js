import { useState } from 'react';

import './Main.css';

export default function Main() {
  const [signs, setSigns] = useState([]);
  return (
    <main className="main">
      <section className="signContainer">
        { () => {
          const singleSign = signs.map(
            (sign) => {
              <div className="signContainer" key={ sign.name }>
                <div
                  style={ { backgroundImage: 'url(`../components/${sign.name}`.png)' } }
                  width="200"
                  height="200" />
              </div>;
            });
          return setSigns(singleSign);
        }
        }
      </section>
    </main>
  );
}