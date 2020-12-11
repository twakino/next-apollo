import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Paper, Breadcrumbs, Typography, Link } from '@material-ui/core'
import { withRouter } from 'next/router'

const routingMapping = {
  '/dashboard': { title: 'ダッシュボード' },

  '/settings/users': { title: 'ユーザー' },
  '/settings/users/[id]': { title: 'ユーザー' }
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      display: 'flex'
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20
    }
  })
)

const Breadcrumb = (props) => {
  const classes = useStyles(props)
  const pathname = props.router.pathname
    .split('/')
    .filter((element) => element.length > 0)
  const asPath = props.router.asPath
    .split('/')
    .filter((element) => element.length > 0)
  const length = pathname.length
  const links: Array<JSX.Element> = []
  let pathnameHierarchy = '/'
  let asPathHierarchy = '/'
  for (let i = 0; i < length; i += 1) {
    const target = routingMapping[pathnameHierarchy]
    // links.push(
    //   target ? (
    //     <Link
    //       color="inherit"
    //       className={classes.link}
    //       href={asPathHierarchy}
    //       key={asPathHierarchy}
    //     >
    //       {target.title}
    //     </Link>
    //   ) : (
    //     <Link
    //       color="inherit"
    //       className={classes.link}
    //       href={asPathHierarchy}
    //       key={asPathHierarchy}
    //     >
    //       {asPath[i]}
    //     </Link>
    //   )
    // )
    pathnameHierarchy += pathnameHierarchy.endsWith('/')
      ? pathname[i]
      : `/${pathname[i]}`
    asPathHierarchy += asPathHierarchy.endsWith('/')
      ? asPath[i]
      : `/${asPath[i]}`
  }
  const deepest = routingMapping[asPathHierarchy] // 最下層=現在のルーティングはクリックできないように<Typography>でリストを作成
  links.push(
    deepest ? (
      <Typography
        color="textPrimary"
        className={classes.link}
        key={asPathHierarchy}
      >
        {deepest.title}
      </Typography>
    ) : (
      <Typography color="textPrimary" key={asPathHierarchy}>
        {asPathHierarchy}
      </Typography>
    )
  )

  return (
    <Paper elevation={0}>
      <Breadcrumbs aria-label="breadcrumb">
        {links.map((link) => link)}
      </Breadcrumbs>
    </Paper>
  )
}

export default withRouter(Breadcrumb)
