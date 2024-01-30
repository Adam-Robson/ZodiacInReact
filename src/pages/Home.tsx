import { Link } from "react-router-dom"

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center">
      <Link to="/zodiac" className="text-5xl/9 font-normal subpixel-antialiased">zōdēˌak</Link>
    </main>
  )
}
