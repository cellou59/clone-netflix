import React from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import './Netflix.css'

const NetflixApp = () => {
  const [appBarStyle, setAppBarStyle] = React.useState({
    background: 'transparent',
    boxShadow: 'none',
  })

  const margin10 = {
    margin: 10,
  }

  React.useEffect(() =>{   
    const onScroll = e => {
      if (e.target.documentElement.scrollTop >= 100) {
        console.log('🚀 ~ onScroll ~ e.target.documentElement.scrollTop :', e.target.documentElement.scrollTop )
        setAppBarStyle({
          background: '#111',
          transition: 'background .5s ease-out',
          boxShadow: 'none',
        })
      } else {
        setAppBarStyle({
          background: 'transparent',
          transition: 'background .5s ease-out',
          boxShadow: 'none',
        })
      }
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <div>
      <AppBar className='nav__black' style={appBarStyle}>
        <Toolbar>
        <img className="nav__logo" src="/images/netflix-logo.png" alt="" />
        <a href="/le_lien">
          <Typography style={margin10} variant="h6">
            Acceuil
          </Typography>
        </a>
        <a href="/le_lien">
          <Typography style={margin10} variant="h6">
            Séries
          </Typography>
        </a>
        <a href="/le_lien">
          <Typography style={margin10} variant="h6">
            Films
          </Typography>
        </a>
        <a href="/le_lien">
          <Typography style={margin10} variant="h6">
            Nouveautés
          </Typography>
        </a>
        <a href="/le_lien">
          <Typography style={margin10} variant="h6">
            Ma liste
          </Typography>
        </a>
        <img className="nav__avatar" src="/images/netflix-avatar.png" alt="" />
        </Toolbar>
      </AppBar>

      <header className="banner">
        <div className="banner__contents">
          <h1 className="banner__title">La casa de papel</h1>
          <div className="banner__buttons">
            <button className="banner__button banner__buttonplay">
              Lecture
            </button>
            <button className="banner__button banner__buttonInfo">
              Ajouter à ma liste
            </button>
          </div>
          <h1 className="synopsis">
            Le Professeur recrute une jeune braqueuse et sept autres criminels
            en vue d'un cambriolage grandiose ciblant la Maison royale de la
            Monnaie d'Espagne.
          </h1>
        </div>
        <div className="banner--fadeBottom"></div>
      </header>

      <div className="row">
        <h2>Films Netflix</h2>
        <div className="row__posters">
          <img src="images/sample.jpg" className="row__poster row__posterLarge" alt="" />
          <img src="images/sample1.jpg" className="row__poster row__posterLarge" alt="" />
          <img src="images/sample.jpg" className="row__poster row__posterLarge" alt="" />
          <img src="images/sample1.jpg" className="row__poster row__posterLarge" alt="" />
        </div>
      </div>

      <div className="row">
        <h2>Série Netflix</h2>

        <div className="row__posters">
          <img src="images/sample-poster.jpg" alt="" className="row__poster row__posterLarge" />
          <img src="images/sample-poster1.jpg" alt="" className="row__poster row__posterLarge" />
          <img src="images/sample-poster.jpg" alt="" className="row__poster row__posterLarge" />
          <img src="images/sample-poster1.jpg" alt="" className="row__poster row__posterLarge" />
        </div>
      </div>

      <footer className="footer">2021 - Netflix Clone</footer>
    </div>
  )
}
export {NetflixApp}
