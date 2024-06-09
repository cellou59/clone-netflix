import * as React from 'react'
import Skeleton from '@mui/material/Skeleton';

const RowSkeleton = ({nbElement = 20, title = 'films', wideImage = true}) => {
  const postersSkeletons = []
  for (let i = 0; i < nbElement; i++) {
    const poster = (
      <div key={i} className="row__poster row__posterLarge">
        <Skeleton
          variant="rectangular"
          width={wideImage ? 400 : 166}
          height={wideImage ? 225 : 250}
          sx={{ bgcolor: 'grey.900' }}
        />
      </div>
    )
    postersSkeletons.push(poster)
  }
  return (
    <>
      <div className="row">
        <h2>{title}</h2>
        <div className="row__posters">{postersSkeletons}</div>
      </div>
    </>
  )
}
export {RowSkeleton}
