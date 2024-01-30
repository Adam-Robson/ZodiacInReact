import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import ZodiacSignContainer from '../components/ZodiacSignContainer'
import HoverTouchContainer from '../components/HoverTouchContainer'
import BackgroundContainer from '../components/BackgroundContainer'
import { zodiac } from '../lib/data'
import bg from '../assets/bg.svg'
import { Sign } from '../lib/types'

export default function Zodiac() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeId, setActiveId] = useState<Sign>({
    id: 0,
    name: '',
    title: '',
    image: '',
    dates: '',
  })

  const handleSignClick = useCallback((id: number) => {
    const newSign = zodiac.find((sign) => sign.id === id)
    if (newSign) setActiveId(newSign)
  }, [setActiveId])

  return (
    <BackgroundContainer backgroundImage={bg}>
      <Link to="/" className="absolute top-8 left-8 text-base subpixel-antialiased">home</Link>
    <section>
        <h1 className="text-5xl text-center pt-10 font-light subpixel-antialiased">zōdēˌak</h1>
        <ul className="max-w-screen-lg mx-auto flex justify-center flex-row flex-wrap">
          {
            zodiac.map(({ id, name, title, image, dates }) => (
              <div key={id} className="p-2" onClick={() => handleSignClick(activeId.id)}>
                <li className="flex justify-center p-2">
                  <HoverTouchContainer>
                    <Link to={`/zodiac/${name}`}>
                      <ZodiacSignContainer title={title} image={image} dates={dates} />
                    </Link>
                  </HoverTouchContainer>
                </li>
              </div>
            ))
          }
        </ul>
      </section>
    </BackgroundContainer>
  )
}
