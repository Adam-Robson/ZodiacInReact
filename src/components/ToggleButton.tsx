import { useState } from 'react'
import { Horoscope } from '../lib/types'

export default function ToggleButton({label, horoscope}: {label: keyof Horoscope, horoscope: Horoscope | null}) {
  const [toggle, setToggle] = useState<boolean>(false)
  const toggleButton = () => setToggle(!toggle)
  return (
      <>
        <button className="m-2" onClick={toggleButton}>{label}</button>
        {toggle && horoscope && <p>{horoscope[label]}</p>}
      </>
    )
}
