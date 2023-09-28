import {Routes} from '../../global'

const menuItemsText: any = {
  [Routes.explore]: 'Here you can explore different routes created by other users',
  [Routes.profile]: 'Here you can see your profile, settings and your routes',
  [Routes.mapView]: {
    create: 'Here you can create a new route by manually adding points on the map',
    record: 'Here you can record a new route by walking, running or driving and then save it',
  },
}

export const getMenuItemText = (route: Routes, isCreate?: boolean) => {
  if (route === Routes.mapView) {
    return isCreate ? menuItemsText[route].create : menuItemsText[route].record
  }

  return menuItemsText[route]
}
