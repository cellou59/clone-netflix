import {NetflixApp} from 'components/NetflixApp'
import {ThemeProvider} from '@mui/styles'
import {createTheme} from '@mui/material/styles'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback'
import Error404 from './components/Error404'
import {NetflixMovies} from './components/NetflixMovies'
import {NetflixSeries} from './components/NetflixSeries'
import {NetflixNews} from './components/NetflixNews'
import {NetflixById} from './components/NetflixById'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#E50914',
    },
    secondary: {
      main: '#E50914',
    },
  },
})

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Routes>
            <Route exact path="/" element={<NetflixApp />} />
            <Route path="/tv/:tvId" element={<NetflixById />} />
            <Route path="/movie/:movieId" element={<NetflixById />} />
            <Route path="/series" element={<NetflixSeries />} />
            <Route path="/movies" element={<NetflixMovies />} />
            <Route path="/news" element={<NetflixNews />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </ErrorBoundary>
      </ThemeProvider>
    </Router>
  )
}

export {App}
