import React from 'react'
import {NetflixAppBar} from './NetflixAppBar'
import {NetflixRow} from './NetflixRow'
import {NetFlixFooter} from './NetFlixFooter'
import {NetflixHeader} from './NetflixHeader'
import {getRandomType, getRandomId} from '../utils/helper'
import {clientApi} from '../utils/clientApi'
import {useFetchData} from '../utils/hooks'
// composants MUI
import {Alert, AlertTitle} from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
// style MUI
import {makeStyles} from '@mui/styles'
import './Netflix.css'



// 📑 https://material-ui.com/styles/basics/#hook-api
const useStyles = makeStyles({
  alert: {
    width: '50%',
    margin : 'auto',
    marginBotton:'50px'
  },
  progress: {
    marginLeft : '30px',
  },
});

const NetflixApp = () => {

  const classes = useStyles();
  const {data:headerMovie, error, status, execute} = useFetchData()
  const [type] = React.useState(getRandomType())
  const defaultMovieId = getRandomId(type)

  React.useEffect(() => {
    execute(clientApi(`${type}/${defaultMovieId}`))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (status === 'error') {
    // sera catcher par ErrorBoundary
    throw new Error(error.message)
  }
  return (
    <div>
      <NetflixAppBar />
      <NetflixHeader movie={headerMovie?.data} type={type} />
      <NetflixRow wideImage={false} title="Films Netflix" />
      <NetflixRow wideImage={true} title="Série Netflix" />
      {status === 'error' ? (
        <div className={classes.alert}>
          <Alert severity="error">
            <AlertTitle>Une erreur est survenue</AlertTitle>
            Detail : {error.message}
          </Alert>
        </div>
      ) : null}
      <div className={classes.progress}>
        {status ==='fetching'?
          <CircularProgress />
        : null
        }
      </div>
      <NetFlixFooter />
    </div>
  )
}
export {NetflixApp}
