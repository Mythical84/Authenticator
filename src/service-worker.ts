/// <reference types="@sveltejs/kit" />

import { build, files, version } from '$service-worker';

// Create a unique cache name for this deployment
const CACHE = `cache-${version}`;

// List of assets to cache (including the app itself and everything in the 'static' folder)
const ASSETS = [...build, ...files];

self.addEventListener('install', (event) => {
  // Create a new cache and add all files to it
  async function addFilesToCache() {
    const cache = await caches.open(CACHE);
    await cache.addAll(ASSETS);
  }
  event.waitUntil(addFilesToCache());
});

self.addEventListener('activate', (event) => {
  // Remove previous cached data from disk
  async function deleteOldCaches() {
    for (const key of await caches.keys()) {
      if (key !== CACHE) await caches.delete(key);
    }
  }
  event.waitUntil(deleteOldCaches());
});

self.addEventListener('fetch', (event) => {
  // Ignore non-GET requests (e.g., POST requests)
  if (event.request.method !== 'GET') return;

  // Handle caching and fetching logic here
  // (You can customize this part based on your app's requirements)
});

