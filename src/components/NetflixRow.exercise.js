import * as React from 'react'
import {TYPE_MOVIE, imagePath400} from '../config'
import {useFetchData} from '../utils/hooks'
import {clientApi} from '../utils/clientApi'
import {Alert, AlertTitle} from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
const getEndpoint = (filter, type, param) => {
  switch (filter) {
    case 'populaire':
      return `${type}/popular`
    case 'latest':
      return `${type}/latest`
    case 'toprated':
      return `${type}/top_rated`
    case 'genre':
      return `discover/${type}?with_genres=${param}`
    case 'trending':
      return `trending/${type}/day`
    default:
      throw new Error('Action non supporté')
  }
}

const NetflixRow = ({
  title = '',
  wideImage = true,
  type = TYPE_MOVIE,
  param,
  filter = 'populaire',
  watermark = false,
  muiClasses,
}) => {
  const {data: media, error, status, execute} = useFetchData()
  const endpoint = getEndpoint(filter, type, param)
  React.useEffect(() => {
    execute(clientApi(endpoint))

  }, [endpoint,execute])

  const buildImagePath = data =>
    wideImage
      ? `${imagePath400}/${data['backdrop_path']}`
      : `${imagePath400}/${data['poster_path']}`
  const watermarkClass = watermark ? 'watermarked' : null

  if (status === 'fetching' || status === 'idle') {
    return (
      <div className="row">
        <h2>{title}</h2>
        <div className="row__posters">
          <CircularProgress />
        </div>
      </div>
    )
  }
  if (status === 'error') {
    return (
      <Alert severity="error">
        <AlertTitle>Une erreur est survenue</AlertTitle>
        Detail : {error.message}
      </Alert>
    )
  }
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {media.data.results.map(movie => {
          return (
            <div
              key={movie.id}
              className={`row__poster row__posterLarge ${watermarkClass}`}
            >
              <img src={buildImagePath(movie)} alt={movie.name} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export {NetflixRow}
