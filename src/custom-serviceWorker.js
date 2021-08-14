import { createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching';
import { registerRoute, NavigationRoute } from 'workbox-routing';
import { skipWaiting, clientsClaim } from 'workbox-core';
import {
  NetworkFirst,
  StaleWhileRevalidate,
  CacheFirst,
} from 'workbox-strategies';
/* eslint-disable no-undef */

// eslint-disable-next-line
precacheAndRoute(self.__WB_MANIFEST);

// eslint-disable-next-line
self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
// eslint-disable-next-line
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

registerRoute(new NavigationRoute(createHandlerBoundToURL('/index.html')))
// //Cache cdn files and external links
registerRoute(
  new RegExp('https:.*\.(css|js|json|html)'),
  new NetworkFirst({ cacheName: 'external-cache'})
)

// app-shell
registerRoute("/", new NetworkFirst());