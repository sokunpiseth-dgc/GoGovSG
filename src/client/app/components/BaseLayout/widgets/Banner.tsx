import React from 'react'
import { Theme, Typography, createStyles, makeStyles } from '@material-ui/core'

import { ApplyAppMargins } from '../../AppMargins'

type BannerForProps = {
  text: string
  icon?: React.ReactElement
  isSticky: boolean
}

const useStyles = makeStyles<Theme, BannerForProps>((theme) =>
  createStyles({
    bannerContainer: {
      display: 'flex',
      position: (props) => (props.isSticky ? 'fixed' : 'relative'),
      zIndex: (props) => (props.isSticky ? 20 : 1),
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      minHeight: 50,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.default,
      paddingTop: 15,
      paddingBottom: 15,
    },
    appMargins: {
      width: '100%',
    },
    bannerContent: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: '100%',
    },
    typography: {
      fontSize: 13,
      fontWeight: 400,
      [theme.breakpoints.up('xs')]: {
        fontSize: 14,
      },
    },
  }),
)

export default function Banner({ text, icon, isSticky }: BannerForProps) {
  const classes = useStyles({ text, isSticky })
  return (
    <div className={classes.bannerContainer}>
      <ApplyAppMargins className={classes.appMargins}>
        <div className={classes.bannerContent}>
          {icon}
          <Typography className={classes.typography}>{text}</Typography>
        </div>
      </ApplyAppMargins>
    </div>
  )
}
