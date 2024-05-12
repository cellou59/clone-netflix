import React from 'react'
import {NetflixAppBar} from './NetflixAppBar'
import {NetflixRow} from './NetflixRow'
import {NetFlixFooter} from './NetFlixFooter'

import './Netflix.css'

import {getRandomType,getRandomId,clientApi} from '../utils/helper'
import {imagePathOriginal,TYPE_MOVIE} from '../config'




const NetflixHeader = ({movie,type=TYPE_MOVIE}) => {
  const imageUrl = `${imagePathOriginal}/${movie?.backdrop_path}`
  const banner = {
    backgroundImage: `url('${imageUrl}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    color: 'white',
    objectFit: 'contain',
    height: '448px',
  }

  if (!movie) {
    return <></>
  }
  
  const title = type === TYPE_MOVIE ? movie?.title : movie?.name
  
  return (
    <header style={banner}>
      <div className="banner__contents">
        <h1 className="banner__title">{title ?? '...'}</h1>
        <div className="banner__buttons">
          <button className="banner__button banner__buttonplay">Lecture</button>
          <button className="banner__button banner__buttonInfo">
            Ajouter à ma liste
          </button>
        </div>
        <h1 className="synopsis">{movie?.overview ?? '...'}</h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  )
}

const NetflixApp = () => {
  const [headerMovie, setHeaderMovie] = React.useState({})
  const [type] = React.useState(getRandomType())

  const defaultMovieId =getRandomId(type)

  React.useEffect(() => {

      clientApi(`/${type}/${defaultMovieId}`)
      .then(function (response) {
        // handle success
        setHeaderMovie(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <NetflixAppBar />
      <NetflixHeader movie={headerMovie} type={type} />
      <NetflixRow wideImage={false} title="Films Netflix" />
      <NetflixRow wideImage={true} title="Série Netflix" />
      <NetFlixFooter />
    </div>
  )
}
export {NetflixApp}
