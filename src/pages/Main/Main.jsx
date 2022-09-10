import { Link } from 'react-router-dom'
import './Main.scss'

export const Main = () => {
  return (
    <div className="main">
      <Link className="main__link" to={'/profile'}>
        /profile
      </Link>
      <Link className="main__link" to={'/news'}>
        /news
      </Link>
    </div>
  )
}
