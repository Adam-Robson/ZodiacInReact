
import { ZodiacSignProps } from '../lib/types'

export default function ZodiacSignContainer({ title, image, dates,  }: ZodiacSignProps) {
  return (
    <div>
      <div className="image-container">
        <img src={image} alt={title} className="image"/>
        <div className="image-text">
          <p>{title}</p>
          <p>{dates}</p>
        </div>
      </div>
    </div>
  )
}

