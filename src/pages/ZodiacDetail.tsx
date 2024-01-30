import { useEffect, useState } from 'react'
import { useSign } from '../hooks/useSign'
import { Link, useParams } from 'react-router-dom'
import { Sign } from '../lib/types'
import { zodiac } from '../lib/data'
import ToggleButton from '../components/ToggleButton'

export default function ZodiacDetail() {
  const { name } = useParams<{ name: string }>()
  const [sign, setSign] = useState<Sign | null>({
    id: 0,
    name: '',
    title: '',
    dates: '',
    image: '',
  })

  useEffect(() => {
    const pageSign = zodiac.find((sign) => sign.name === name)
    if (pageSign) setSign(pageSign)
  }, [name])

  const { horoscope } = useSign()

  return (
    <section>
      <Link to="/zodiac" className="absolute top-8 left-8 text-base subpixel-antialiased">back</Link>
      <div className="max-w-screen-lg w-full mx-auto flex flex-col justify-center items-center">
        <h1 className="my-8 text-4xl subpixel-antialiased underline">{sign?.title}</h1>
        <h2 className="mb-6 text-2xl subpixel-antialiased">{sign?.dates}</h2>

        <div className="grid grid-cols-7 p-4">
          <div className="col-span-2 flex flex-0 justify-center">
            <img src={sign?.image} alt={sign?.name} width="250" className="image max-w-40" />
          </div>
          <div className="col-span-5 flex justify-start text-left">
            <div>{horoscope?.about}</div>
          </div>
        </div>
        <div className="w-full flex justify-around my-10">
          <div className="flex flex-col items-center mx-6">
            <h3 className="text-2xl subpixel-antialiased">Element</h3>
            <div>{horoscope?.element}</div>
          </div>
          <div className="flex flex-col items-center mx-6">
            <h3 className="text-2xl subpixel-antialiased">Ruling Planet</h3>
            <div>{horoscope?.ruling_planet}</div>
          </div>
          <div className="flex flex-col items-center mx-6">
            <h3 className="text-2xl subpixel-antialiased">Compatibility</h3>
            <div>{horoscope?.compatibility}</div>
            </div>
        </div>
        <p>Click on the buttons below to show and hide the results</p>

      </div>

      <div className="px-6">
        <ToggleButton label="strengths" horoscope={horoscope} />
        <ToggleButton label="career" horoscope={horoscope} />
        <ToggleButton label="nature" horoscope={horoscope} />
        <ToggleButton label="relationship" horoscope={horoscope} />
        <ToggleButton label="weaknesses" horoscope={horoscope} />
        <ToggleButton label="love" horoscope={horoscope} />
      </div>
    </section>
  )
}
