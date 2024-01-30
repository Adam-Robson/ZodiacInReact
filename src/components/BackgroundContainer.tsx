import { BackgroundPropTypes } from '../lib/types'

export default function BackgroundContainer({ backgroundImage, children }: BackgroundPropTypes) {
  return (
    <div className="background-container">
      <div className="background" style={{ backgroundImage:`url(${backgroundImage})` }} />
        <div className="content">
          {children}
        </div>
    </div>
  )
}

