import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  IconButton
} from '@material-ui/core'
import Icon from '../atoms/Icons'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import BreadCrumbs from '../atoms/BreadCrumbs'

const drawerWidth = 240
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      // zIndex: theme.zIndex.drawer + 1,
      backgroundColor: 'white',
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    appBarSpacer: theme.mixins.toolbar,
    toolbar: {
      paddingRight: 24
    },
    menuButton: {
      marginRight: 36
    },
    menuButtonHidden: {
      display: 'none'
    },
    title: {
      flexGrow: 1
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar
    },
    drawer: {
      display: 'inline'
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9)
      }
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.text.secondary
    }
  })
)

const Navigation = (): any => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)
  const toggleDrawer = () => {
    setOpen(!open)
  }
  return (
    <div>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <Icon>menu</Icon>
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            <BreadCrumbs />
          </Typography>
        </Toolbar>
        <title>
          {process.env.NODE_ENV}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </AppBar>
      <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={toggleDrawer}>
            {open ? <Icon>chevron_left</Icon> : <Icon>chevron_right</Icon>}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link href="/dashboard">
            <a className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <Icon>speed</Icon>
                </ListItemIcon>
                <ListItemText primary="ダッシュボード" />
              </ListItem>
            </a>
          </Link>
          <Link href="/settings/users">
            <a className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <Icon>settings</Icon>
                </ListItemIcon>
                <ListItemText primary="設定" />
              </ListItem>
            </a>
          </Link>
        </List>
      </Drawer>
    </div>
  )
}

export default Navigation
