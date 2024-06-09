import * as React from 'react'
// 🐶 importe le composant Skeleton de MUI
// 📑 Le lien vers la documentation de Skeleton https://mui.com/components/skeleton/
import Skeleton from '@mui/material/Skeleton';
// 🐶 Le style et le rendu du composant <NetflixHeader> et copier coller ci dessous
// 🐶 Ton boulot est de remplacer les données manquantes par des composants <Skeleton />

const styles = {
  banner: {
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    color: 'white',
    objectFit: 'contain',
    height: '448px',
  },
  skeleton:{
    margin:'0.5rem 0'
  }
}

const HeaderSkeleton = () => {
  return (
    <>
      <header style={styles.banner}>
      <div className="banner__contents">
        <Skeleton
          style={{ marginBottom: 6 }}
          variant="rectangular"
          width='33%'
          height={68}
          sx={{ bgcolor: 'grey.900' }}
        />

        <div className="banner__buttons">
          <button className="banner__button banner__buttonplay">Lecture</button>
          <button className="banner__button banner__buttonInfo">
            Ajouter à ma liste
          </button>
        </div>
      <Skeleton
          style={{ marginTop: 12 , marginBottom: 6 }}
          variant="rectangular"
          width={500}
          height={28}
          sx={{ bgcolor: 'grey.900' }}
      />
      <Skeleton
          style={{ marginTop: 6 , marginBottom: 6 }}
          variant="rectangular"
          width={500}
          height={28}
          sx={{ bgcolor: 'grey.900' }}
      />
      <Skeleton
          style={{ marginTop: 6 , marginBottom: 6 }}
          variant="rectangular"
          width={500}
          height={28}
          sx={{ bgcolor: 'grey.900' }}
      />
      </div>
    </header>
    </>
  )
}
export {HeaderSkeleton}
