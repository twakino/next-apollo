import React from 'react'
import { Container, Typography, Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1
    },
    pageTitle: {
      marginBottom: theme.spacing(1)
    },
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto'
    },
    appBarSpacer: theme.mixins.toolbar,
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
    }
  })
)

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      管理画面
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const MainContainer: React.FC = (props) => {
  const classes = useStyles()
  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        {props.children}
        <Box pt={4}>
          <Copyright />
        </Box>
      </Container>
    </main>
  )
}

export default MainContainer
