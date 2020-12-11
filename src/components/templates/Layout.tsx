import Navigation from './Navigation'
import MainContainer from './MainContainer'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex'
    }
  })
)

const Layout = (props): any => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Navigation />
      <MainContainer>{props.children}</MainContainer>
    </div>
  )
}

export default Layout
