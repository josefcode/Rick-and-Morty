import { Link } from 'react-router-dom'

import FavoriteIcon from '@mui/icons-material/Favorite'

import './index.css'

type Cardprops = {
  id: number
  image: string
  name: string
  favorite: boolean
  addToFavorites?: any
  removeFromFavorites?: any
  noLink: boolean
}

export default function Card({
  id,
  image,
  name,
  favorite,
  addToFavorites,
  removeFromFavorites,
  noLink,
}: Cardprops) {
  // const isFavorite = favorite?.includes(id)

  const handleFavoriteClick = () => {
    if (favorite) {
      removeFromFavorites(id)
    } else {
      addToFavorites(id)
    }
  }

  return (
    <>
      <div className="character">
        <img src={image} alt={name} className="character__thumbnail" />
        <div className="character__name">
          <h2>{name}</h2>
          <div onClick={handleFavoriteClick}>
            {favorite ? (
              <FavoriteIcon className="favorite-icon" />
            ) : (
              <FavoriteIcon />
            )}
          </div>
          {noLink ? null : (
            <Link to={`detail/${id}`}>
              {' '}
              <button>info</button>{' '}
            </Link>
          )}
        </div>
      </div>
    </>
  )
}
