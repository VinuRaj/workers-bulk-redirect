const redirectMap = new Map([
  ["/wordops", "https://tutorialforest.com/build-performance-optimized-wordpress-wordops"],
  ["/snippets", "https://tutorialforest.com/topics/snippets"],
  ["/offers", "https://tutorialforest.com/deals"],
  ["/gotogoogle", "https://google.com"],
])

async function handleRequest(request) {
  const requestURL = new URL(request.url)
  const path = requestURL.pathname;
  const location = redirectMap.get(path)
  if (location) {
    return Response.redirect(location, 301)
  }
  // If request not in map, return the original request
  return fetch(request)
}

addEventListener("fetch", async event => {
  event.respondWith(handleRequest(event.request))
})