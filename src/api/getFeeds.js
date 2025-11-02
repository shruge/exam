export const getFeeds = async () => {
  try {
    const res = await fetch('/data/feeds.json')

    return await res.json()
  } catch (e) {
    console.error(e)
  }
}

export const getFeed = async (id) => {
  try {
    const res = await fetch('/data/feeds.json')
    const feeds = await res.json()

    return feeds.find((feed) => feed.id === id)
  } catch (e) {
    console.error(e)
  }
}
