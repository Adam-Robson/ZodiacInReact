interface HoroscopeProps {
  horoscope: string;
}
export default function Horoscope({ horoscope }: HoroscopeProps) {
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <h2 className="my-8">Horoscope</h2>
      <p className="my-8">Your horoscope is here!</p>
      {horoscope && <p className="my-8">{horoscope}</p>}
    </div>
  )
}
