const redirectMap = new Map([
  ["/bulkurl1", "https://mysite.com/newurl1"],
  ["/bulkurl2", "https://mysite.com/newurlt2"],
  ["/bulkurl3", "https://mysite.com/newurl3"],
  ["/bulkurl4", "https://mysite.com/newurl4"],
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