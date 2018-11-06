import keys from "../keys.js"


export const searchVideos = (term, pageToken = "") => {
  return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${keys.API_KEY}&q=${term}&type=video&maxResults=50&pageToken=${pageToken}`)
    .then(res => res.json())
}
