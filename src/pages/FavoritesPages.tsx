import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { loadCharacterFavorite } from '../redux/reducers'
import Card from '../components/card'
import Loading from '../components/loading-page/Loading'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../redux/store'

interface EpisodeProps {
  id: number
  image: string
  name: string
}

const FavoritesPage = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  const dispatch = useAppDispatch()

  const {
    episodes,
    loading,
    favorites,
  }: { episodes: any; loading: boolean; favorites: number[] } = useAppSelector(
    (state: RootState) => state.characters,
  )

  useEffect(() => {
    dispatch(loadCharacterFavorite(favorites))
  }, [dispatch, favorites])

  return (
    <div className="p-8 bg-pink-200 h-screen">
      <button
        className="w-16 h-8 rounded-md mb-5 bg-black text-pink-200 tracking-widest"
        onClick={goBack}
      >
        {' '}
        back
      </button>

      <h2 className="text-2xl mb-4">Favorite Names</h2>

      {loading && <Loading />}
      {favorites.length === 0 ? (
        <p>No favorite names yet.</p>
      ) : (
        <ul>
          {episodes.results?.map((episode: EpisodeProps) => {
            const { id, image, name } = episode
            const isFavorite = favorites.includes(id)

            if (isFavorite) {
              return (
                <Card
                  key={id}
                  id={id}
                  image={image}
                  name={name}
                  favorite={isFavorite}
                  noLink
                />
              )
            } else {
              return null
            }
          })}
        </ul>
      )}
    </div>
  )
}

export default FavoritesPage
