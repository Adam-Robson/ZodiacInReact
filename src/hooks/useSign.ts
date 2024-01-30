import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Horoscope } from '../lib/types'
import { zodiac } from '../lib/data'
import { fetchurl, key, host } from '../services/signs'

export function useSign() {
  const [horoscope, setHoroscope] = useState<Horoscope | null>(null)
  const { name } = useParams<{ name: string }>()

  useEffect(() => {
    async function fetchHoroscope() {
      const sign = zodiac.find((sign) => sign.name === name)

      const options = {
        method: 'GET',
        url: fetchurl,
        params: { s: sign?.name },
        headers: {
          'x-rapidapi-key': key,
          'x-rapidapi-host': host
        }
      }

      try {
        const res = await axios.request(options)
        setHoroscope(res.data)
      } catch (error) {
        if (error instanceof Error) {
          console.error(error)
        }
      }
    }

    void fetchHoroscope()
  }, [name, setHoroscope])

  return (
    { horoscope }
  )
}
