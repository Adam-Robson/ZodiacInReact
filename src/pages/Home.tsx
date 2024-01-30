import { Link } from "react-router-dom"
import BackgroundContainer from "../components/BackgroundContainer"
import steal from '../assets/steal.svg'

export default function Home() {
  return (
    <BackgroundContainer backgroundImage={steal}>
    <main className="h-full w-full flex flex-col justify-around items-center">
      <Link to="/zodiac" className="text-5xl/9 font-normal subpixel-antialiased">zōdēˌak</Link>
      <Link to="/books" className="text-5xl/9 font-normal subpixel-antialiased">bo͝ok SHäp</Link>
      </main>
    </BackgroundContainer>
  )
}
