// return a definedMovie detail structure
// detail from `https://api.dianying.fm/movies/${title_en}` or `https://api.dianying.fm/movies?ids=${id}`
export function undefinedMovie () {
  return {
    _id: undefined,
    info: {
      director: undefined,
      writer: undefined,
      actors: undefined,
      genre: undefined,
      region: undefined,
      language: undefined,
      release: undefined,
      duration: undefined,
      alias: undefined,
      // fix split undefined in movie detail
      summary: ''
    },
    imdb_id: undefined,
    title: undefined,
    year: undefined,
    title_en: undefined,
    rating: {
      douban_score: undefined,
      douban_votes: undefined,
      tags: undefined,
      imdb_score: undefined,
      imdb_votes: undefined
    },
    poster: undefined,
    recs: [],
    trailers: [],
    backdrops: [],
    path: undefined,
    update_time: undefined,
    tmdb_id: undefined
  }
}

export async function sleep (ms = 2000) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function deepCopy (source) {
  // ignore Date RegExp DOM
  if (!source || typeof source !== 'object') {
    return source
  }
  let target = Array.isArray(source) ? [] : {}
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = typeof source[key] !== 'object' ? source[key] : deepCopy(source[key])
    }
  }
  return target
}
