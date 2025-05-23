/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as HomeRouteImport } from './routes/home/route'
import { Route as IndexImport } from './routes/index'
import { Route as HomeIndexImport } from './routes/home/index'
import { Route as HomeProfilesImport } from './routes/home/profiles'
import { Route as HomeMembershipIdInventoryImport } from './routes/home/$membershipId/inventory'

// Create/Update Routes

const HomeRouteRoute = HomeRouteImport.update({
  id: '/home',
  path: '/home',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const HomeIndexRoute = HomeIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => HomeRouteRoute,
} as any)

const HomeProfilesRoute = HomeProfilesImport.update({
  id: '/profiles',
  path: '/profiles',
  getParentRoute: () => HomeRouteRoute,
} as any)

const HomeMembershipIdInventoryRoute = HomeMembershipIdInventoryImport.update({
  id: '/$membershipId/inventory',
  path: '/$membershipId/inventory',
  getParentRoute: () => HomeRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/home': {
      id: '/home'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof HomeRouteImport
      parentRoute: typeof rootRoute
    }
    '/home/profiles': {
      id: '/home/profiles'
      path: '/profiles'
      fullPath: '/home/profiles'
      preLoaderRoute: typeof HomeProfilesImport
      parentRoute: typeof HomeRouteImport
    }
    '/home/': {
      id: '/home/'
      path: '/'
      fullPath: '/home/'
      preLoaderRoute: typeof HomeIndexImport
      parentRoute: typeof HomeRouteImport
    }
    '/home/$membershipId/inventory': {
      id: '/home/$membershipId/inventory'
      path: '/$membershipId/inventory'
      fullPath: '/home/$membershipId/inventory'
      preLoaderRoute: typeof HomeMembershipIdInventoryImport
      parentRoute: typeof HomeRouteImport
    }
  }
}

// Create and export the route tree

interface HomeRouteRouteChildren {
  HomeProfilesRoute: typeof HomeProfilesRoute
  HomeIndexRoute: typeof HomeIndexRoute
  HomeMembershipIdInventoryRoute: typeof HomeMembershipIdInventoryRoute
}

const HomeRouteRouteChildren: HomeRouteRouteChildren = {
  HomeProfilesRoute: HomeProfilesRoute,
  HomeIndexRoute: HomeIndexRoute,
  HomeMembershipIdInventoryRoute: HomeMembershipIdInventoryRoute,
}

const HomeRouteRouteWithChildren = HomeRouteRoute._addFileChildren(
  HomeRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/home': typeof HomeRouteRouteWithChildren
  '/home/profiles': typeof HomeProfilesRoute
  '/home/': typeof HomeIndexRoute
  '/home/$membershipId/inventory': typeof HomeMembershipIdInventoryRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/home/profiles': typeof HomeProfilesRoute
  '/home': typeof HomeIndexRoute
  '/home/$membershipId/inventory': typeof HomeMembershipIdInventoryRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/home': typeof HomeRouteRouteWithChildren
  '/home/profiles': typeof HomeProfilesRoute
  '/home/': typeof HomeIndexRoute
  '/home/$membershipId/inventory': typeof HomeMembershipIdInventoryRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/home'
    | '/home/profiles'
    | '/home/'
    | '/home/$membershipId/inventory'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/home/profiles' | '/home' | '/home/$membershipId/inventory'
  id:
    | '__root__'
    | '/'
    | '/home'
    | '/home/profiles'
    | '/home/'
    | '/home/$membershipId/inventory'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  HomeRouteRoute: typeof HomeRouteRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  HomeRouteRoute: HomeRouteRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/home"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/home": {
      "filePath": "home/route.tsx",
      "children": [
        "/home/profiles",
        "/home/",
        "/home/$membershipId/inventory"
      ]
    },
    "/home/profiles": {
      "filePath": "home/profiles.tsx",
      "parent": "/home"
    },
    "/home/": {
      "filePath": "home/index.tsx",
      "parent": "/home"
    },
    "/home/$membershipId/inventory": {
      "filePath": "home/$membershipId/inventory.tsx",
      "parent": "/home"
    }
  }
}
ROUTE_MANIFEST_END */
