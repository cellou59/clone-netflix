import React from 'react'
import {NetflixAppBar} from './NetflixAppBar'
import {NetflixRow} from './NetflixRow'
import {NetFlixFooter} from './NetFlixFooter'
import {NetflixHeader} from './NetflixHeader'
import {getRandomType, getRandomId} from '../utils/helper'
import {clientApi} from '../utils/clientApi'
import {makeStyles} from '@mui/styles'
import {Alert, AlertTitle} from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import {useFetchData} from '../utils/hooks'
import './Netflix.css'
import {TYPE_MOVIE, TYPE_TV} from '../config'

// 🐶 Ajoute des nouveaux types de <NetflixRow /> dans le render
const useStyles = makeStyles(theme => ({
  alert: {
    width: '50%',
    margin: 'auto',
    marginBotton: '50px',
  },
  progress: {
    marginLeft: '30px',
  },
}))

const NetflixApp = () => {
  const classes = useStyles()
  const {data: headerMovie, error, status, execute} = useFetchData()
  const [type] = React.useState(getRandomType())
  const defaultMovieId = getRandomId(type)

  React.useEffect(() => {
    execute(clientApi(`${type}/${defaultMovieId}`))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (status === 'error') {
    // sera catché par ErrorBoundary
    throw new Error(error.message)
  }
  return (
    <div>
      <NetflixAppBar />
      <NetflixHeader movie={headerMovie?.data} type={type} />

      <NetflixRow 
        wideImage={true} 
        title="Films Netflix"
        watermark={true}
        filter='trending'
        type={TYPE_MOVIE}
        muiClasses={classes}
      />

      <NetflixRow
       wideImage={false} 
       title="Série Netflix" 
       watermark={true}
       filter='trending'
       type={TYPE_TV}
       muiClasses={classes}
       />

      <NetflixRow
       wideImage={true} 
       title="Les mieux notés" 
       watermark={true}
       filter='toprated'
       type={TYPE_MOVIE}
       muiClasses={classes}
      />

      <NetflixRow
       wideImage={true} 
       title="Action & aventure" 
       watermark={true}
       filter='genre'
       param='10759'
       type={TYPE_TV}
       muiClasses={classes}
      />

      <NetflixRow
       wideImage={true} 
       title="Les meilleurs Thrillers" 
       watermark={true}
       filter='genre'
       param='53'
       type={TYPE_MOVIE}
       muiClasses={classes}
      />

      {status === 'error' ? (
        <div className={classes.alert}>
          <Alert severity="error">
            <AlertTitle>Une erreur est survenue</AlertTitle>
            Detail : {error.message}
          </Alert>
        </div>
      ) : null}

      {status === 'fetching' ? (
        <div className={classes.progress}>
          <CircularProgress />{' '}
        </div>
      ) : null}
      <NetFlixFooter color="secondary" si />
    </div>
  )
}
export {NetflixApp}
