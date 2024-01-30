export interface Sign {
  id: number
  name: string;
  title: string
  dates: string
  image: string
}

export interface ZodiacSignProps {
  title: string
  image: string
  dates: string
}

export interface HoverTouchContainerTypes {
  children: React.ReactNode
}

export interface Horoscope {
  about: string;
  career: string;
  compatibility: string;
  date_range: string;
  element: string;
  health: string;
  love: string;
  man: string;
  name: string;
  nature: string;
  relationship: string;
  ruling_planet: string;
  strengths: string;
  symbol: string;
  weaknesses: string;
  woman: string;
}
