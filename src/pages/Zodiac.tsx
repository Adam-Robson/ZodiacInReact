import { Link } from 'react-router-dom'
import ZodiacSignContainer from '../components/ZodiacSignContainer'
import HoverTouchContainer from '../components/HoverTouchContainer'
import { zodiac } from '../lib/data'

export default function Zodiac() {

  return (
    <section>
      <Link to="/" className="absolute top-8 left-8 text-base subpixel-antialiased">home</Link>
    <div>
      <h1 className="text-5xl text-center pt-10 font-light subpixel-antialiased">zōdēˌak</h1>
        <ul className="max-w-screen-lg mx-auto flex justify-center flex-row flex-wrap">
          {
            zodiac.map(({ id, name, title, image, dates }) => (
                <li key={id} className='flex justify-center p-2'>
                  <HoverTouchContainer>
                    <Link to={`/zodiac/${name}`}>
                      <ZodiacSignContainer title={title} image={image} dates={dates} />
                    </Link>
                  </HoverTouchContainer>
                </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}
