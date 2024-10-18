require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
  "login": "srishtykumari",
  "id": 103942468,
  "node_id": "U_kgDOBjIJRA",
  "avatar_url": "https://avatars.githubusercontent.com/u/103942468?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/srishtykumari",
  "html_url": "https://github.com/srishtykumari",
  "followers_url": "https://api.github.com/users/srishtykumari/followers",
  "following_url": "https://api.github.com/users/srishtykumari/following{/other_user}",
  "gists_url": "https://api.github.com/users/srishtykumari/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/srishtykumari/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/srishtykumari/subscriptions",
  "organizations_url": "https://api.github.com/users/srishtykumari/orgs",
  "repos_url": "https://api.github.com/users/srishtykumari/repos",
  "events_url": "https://api.github.com/users/srishtykumari/events{/privacy}",
  "received_events_url": "https://api.github.com/users/srishtykumari/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "srishty kumari",
  "company": null,
  "blog": "",
  "location": "bangalore",
  "email": null,
  "hireable": null,
  "bio": "Aspiring Frontend Developer with expertise in React.js, JavaScript, HTML, CSS,  Bootstrap. Passionate about creating responsive and user-friendly web interface",
  "twitter_username": null,
  "public_repos": 23,
  "public_gists": 0,
  "followers": 1,
  "following": 4,
  "created_at": "2022-04-18T13:28:43Z",
  "updated_at": "2024-09-30T16:30:14Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/facebook',(req,res) => {
    res.send("welcome to my facebook profile")
})

app.get('/login', (req, res) =>{
  res.send("<h1>please login at chai aur code</h1>")
})

app.get('/youtube', (req, res) =>{
   res.send("<h2> chai aue code </h2>")
})

app.get('/github', (req,res) =>{
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})