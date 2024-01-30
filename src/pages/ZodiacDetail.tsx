import { useEffect, useState } from 'react'
import { useSign } from '../hooks/useSign'
import { Link, useParams } from 'react-router-dom'
import { Horoscope, Sign } from '../lib/types'
import { zodiac } from '../lib/data'
import BackgroundContainer from '../components/BackgroundContainer'
import bg from '../assets/bg.svg'

export default function ZodiacDetail() {
  const { name } = useParams<{ name: string }>()

  const [strengths, setStrengths] = useState<boolean>(false)
  const [career, setCareer] = useState<boolean>(false)
  const [nature, setNature] = useState<boolean>(false)
  const [relationship, setRelationship] = useState<boolean>(false)
  const [weaknesses, setWeaknesses] = useState<boolean>(false)
  const [love, setLove] = useState<boolean>(false)

  const toggleStrengths = () => setStrengths(!strengths)
  const toggleCareer = () => setCareer(!career)
  const toggleNature = () => setNature(!nature)
  const toggleRelationship = () => setRelationship(!relationship)
  const toggleWeaknesses = () => setWeaknesses(!weaknesses)
  const toggleLove = () => setLove(!love)


  const [sign, setSign] = useState<Sign>({
    id: 0,
    name: '',
    title: '',
    image: '',
    dates: '',
  })

  useEffect(() => {
    const theSign = zodiac.find((sign) => sign.name === name)
    if (theSign) setSign(theSign)
  }, [name])

  const { horoscope }: {horoscope: Horoscope | null} = useSign(sign.name)
  return (
    <BackgroundContainer backgroundImage={bg}>
      <Link to="/zodiac" className="absolute top-8 left-8 text-base subpixel-antialiased">back</Link>
      <section className="max-w-screen-lg w-full mx-auto flex flex-col justify-center items-center">
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
        <div className="flex justify-around">
          <button className="m-2" onClick={toggleStrengths}>Strengths</button>
          <button className="m-2" onClick={toggleCareer}>Career</button>
          <button className="m-2" onClick={toggleNature}>Nature</button>
          <button className="m-2" onClick={toggleRelationship}>Relationship</button>
          <button className="m-2" onClick={toggleWeaknesses}>Weaknesses</button>
          <button className="m-2" onClick={toggleLove}>Love</button>
        </div>
      </section>
      <div className="px-6">
        {strengths && <p>{horoscope?.strengths}</p>}
        {career && <p>{horoscope?.career}</p>}
        {nature && <p>{horoscope?.nature}</p>}
        {relationship && <p>{horoscope?.relationship}</p>}
        {weaknesses && <p>{horoscope?.weaknesses}</p>}
        {love && <p>{horoscope?.love}</p>}
      </div>
    </BackgroundContainer>
  )
}
