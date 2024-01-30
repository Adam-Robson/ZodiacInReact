import { zodiac } from '../lib/data.ts';
import { useEffect, useState } from 'react';
import { fetchurl, host, key } from '../services/signs.ts';
import axios from 'axios';
import { type Horoscope } from '../lib/types'

export function useSign(signName: string) {
  const [horoscope, setHoroscope] = useState<Horoscope | null>(null);

  useEffect(() => {
    async function fetchHoroscope() {
      const sign = zodiac.find((sign) => sign.name === signName)
      if (!sign) return

      const options = {
        method: 'GET',
        url: fetchurl,
        params: { s: sign.name },
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
  }, [signName, setHoroscope])

  return (
    { horoscope }
  )
}
