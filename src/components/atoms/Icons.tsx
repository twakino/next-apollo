import React, { Component } from 'react'
import {
  AccountBox,
  Add,
  AddCircle,
  AddShoppingCart,
  ArrowBack,
  ArrowDropDown,
  ArrowDropUp,
  ArrowForward,
  Assignment,
  Apps,
  Cached,
  Check,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Close,
  CloudDownload,
  CloudUpload,
  Create,
  Dashboard,
  Delete,
  Edit,
  EventNote,
  ExitToApp,
  FilterList,
  Flag,
  Group,
  Help,
  History,
  Info,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Label,
  Lens,
  LibraryBooks,
  ListAlt,
  LocalOffer,
  LocalShipping,
  Menu,
  MoreVert,
  Notes,
  Notifications,
  OpenInBrowser,
  PermDataSetting,
  PlaylistAdd,
  RateReview,
  Remove,
  Search,
  Settings,
  ShoppingCart,
  Sort,
  Speed,
  Star,
  StarBorder,
  Store,
  Storefront,
  Timeline,
  TrendingFlat,
  TrendingUp,
  ViewModule,
  Warning
} from '@material-ui/icons'
import { Icon as MaterialUiIcon } from '@material-ui/core'

class Icon extends Component {
  getIcon = () => {
    switch (this.props.children) {
      case 'account_box': {
        return <AccountBox style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'add': {
        return <Add style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'add_circle': {
        return <AddCircle style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'add_shopping_cart': {
        return <AddShoppingCart style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'arrow_back': {
        return <ArrowBack style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'arrow_drop_down': {
        return <ArrowDropDown style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'arrow_drop_up': {
        return <ArrowDropUp style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'arrow_forward': {
        return <ArrowForward style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'assignment': {
        return <Assignment style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'apps': {
        return <Apps style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'cached': {
        return <Cached style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'check': {
        return <Check style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'check_circle': {
        return <CheckCircle style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'chevron_right': {
        return <ChevronRight style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'chevron_left': {
        return <ChevronLeft style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'close': {
        return <Close style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'cloud_download': {
        return <CloudDownload style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'cloud_upload': {
        return <CloudUpload style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'create': {
        return <Create style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'dashboard': {
        return <Dashboard style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'delete': {
        return <Delete style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'edit': {
        return <Edit style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'event_note': {
        return <EventNote style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'exit_to_app': {
        return <ExitToApp style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'filter_list': {
        return <FilterList style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'flag': {
        return <Flag style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'group': {
        return <Group style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'help': {
        return <Help style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'history': {
        return <History style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'information': {
        return <Info style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'keyboard_arrow_left': {
        return (
          <KeyboardArrowLeft style={{ color: '#787e8a' }} {...this.props} />
        )
      }
      case 'keyboard_arrow_right': {
        return (
          <KeyboardArrowRight style={{ color: '#787e8a' }} {...this.props} />
        )
      }
      case 'label': {
        return <Label style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'lens': {
        return <Lens style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'library_books': {
        return <LibraryBooks style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'list_alt': {
        return <ListAlt style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'local_offer': {
        return <LocalOffer style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'local_shipping': {
        return <LocalShipping style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'menu': {
        return <Menu style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'more_vert': {
        return <MoreVert style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'notes': {
        return <Notes style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'notifications': {
        return <Notifications style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'open_in_browser': {
        return <OpenInBrowser style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'perm_data_setting': {
        return <PermDataSetting style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'play_list_add': {
        return <PlaylistAdd style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'rate_review': {
        return <RateReview style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'remove': {
        return <Remove style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'search': {
        return <Search style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'settings': {
        return <Settings style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'shopping_cart': {
        return <ShoppingCart style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'sort': {
        return <Sort style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'speed': {
        return <Speed style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'star_border': {
        return <StarBorder style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'star': {
        return <Star style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'store': {
        return <Store style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'store_front': {
        return <Storefront style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'timeline': {
        return <Timeline style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'trending_flat': {
        return <TrendingFlat style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'trending_up': {
        return <TrendingUp style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'view_module': {
        return <ViewModule style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'warning': {
        return <Warning style={{ color: '#787e8a' }} {...this.props} />
      }
      case 'finance': {
        return (
          <svg
            style={{ width: 24, height: 24, fill: '#787e8a' }}
            viewBox="0 0 22 22"
            {...this.props}
          >
            <path
              className="direct-writing"
              d="M6 16.5l-3 2.94V11h3m5 3.66l-1.57-1.34L8 14.64V7h3m5 6l-3 3V3h3m2.81 9.81L17 11h5v5l-1.79-1.79L13 21.36l-3.47-3.02L5.75 22H3l6.47-6.34L13 18.64"
              transform="translate(-3 -3)"
            />
          </svg>
        )
      }
      case 'garage_variant': {
        return (
          <svg
            style={{ width: 24, height: 24, fill: '#787e8a' }}
            viewBox="0 0 20 20"
            {...this.props}
          >
            <path
              className="direct-writing"
              d="M22 9v11h-2v-9H4v9H2V9l10-5 10 5M9 12H5v2h4v-2m0 6H5v2h4v-2m0-3H5v2h4zm5 3h-4v2h4v-2m0-3h-4v2h4zm5 3h-4v2h4v-2"
              transform="translate(-2 -4)"
            />
          </svg>
        )
      }
      case 'tag': {
        return (
          <svg
            style={{ width: 24, height: 24, fill: '#787e8a' }}
            viewBox="0 0 24 24"
            {...this.props}
          >
            <path
              className="direct-writing"
              d="M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4C2.89,2 2,2.89 2,4V11C2,11.55 2.22,12.05 2.59,12.41L11.58,21.41C11.95,21.77 12.45,22 13,22C13.55,22 14.05,21.77 14.41,21.41L21.41,14.41C21.78,14.05 22,13.55 22,13C22,12.44 21.77,11.94 21.41,11.58Z"
            />
          </svg>
        )
      }

      default: {
        return <MaterialUiIcon>this.props.children</MaterialUiIcon>
      }
    }
  }

  render(): JSX.Element {
    return this.getIcon()
  }
}

export default Icon
