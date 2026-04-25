console.log("Sahil and code");

require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const gitHubData = {
  "login": "sahil-ahmed-04",
  "id": 141450939,
  "node_id": "U_kgDOCG5euw",
  "avatar_url": "https://avatars.githubusercontent.com/u/141450939?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/sahil-ahmed-04",
  "html_url": "https://github.com/sahil-ahmed-04",
  "followers_url": "https://api.github.com/users/sahil-ahmed-04/followers",
  "following_url": "https://api.github.com/users/sahil-ahmed-04/following{/other_user}",
  "gists_url": "https://api.github.com/users/sahil-ahmed-04/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/sahil-ahmed-04/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/sahil-ahmed-04/subscriptions",
  "organizations_url": "https://api.github.com/users/sahil-ahmed-04/orgs",
  "repos_url": "https://api.github.com/users/sahil-ahmed-04/repos",
  "events_url": "https://api.github.com/users/sahil-ahmed-04/events{/privacy}",
  "received_events_url": "https://api.github.com/users/sahil-ahmed-04/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Sahil Ahmed",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Hala Madrid ...y nada más",
  "twitter_username": null,
  "public_repos": 11,
  "public_gists": 0,
  "followers": 1,
  "following": 3,
  "created_at": "2023-08-04T19:10:54Z",
  "updated_at": "2026-03-08T19:34:04Z"
}

app.get('/', (req, res)=>{
    res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
    res.send('sahildotcom')
})

app.get('/login', (req, res)=>{
    res.send('<h1>Welcome to login at Sahil and code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Youtube/videos.com</h2>')
})

app.get('/data', (res, req) => {
    res.json({gitHubData})
})

// ✅ FIXED
app.get('/github', async (req, res) => {
  const response = await fetch('https://api.github.com/users/sahil-ahmed-04'); // renamed
  const data = await response.json();
  res.json({ data });  // res is now correctly the Express response
});

app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${port}`)
})
