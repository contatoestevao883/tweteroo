import express from "express"
import cors from 'cors';


const app = express()
app.use(cors());
app.use(express.json())

const userData = []

const tweetFormat = []

let user = undefined

app.post("/sign-up", (req, res) => {
	const { username, avatar } = req.body

	const newUser = { username, avatar }

	user = username

	userData.push(newUser)

    res.send("OK")
})

app.post("/tweets", (req, res) => {
	const { tweet } = req.body
	
	if(user === undefined){
		return res.status(401).send("UNAUTHORIZED")
	}

	const userInfoAndPfp = userData.find(data => data.username === user)

	const newTweet = { username: userInfoAndPfp.username, avatar: userInfoAndPfp.avatar, tweet }

	tweetFormat.push(newTweet)

    res.send("OK")
})

app.get("/tweets", (req, res) => {
	if(tweetFormat.length === 0){
		return res.send([])
	}
	const n = 10
	let newArr = []
	newArr = tweetFormat.slice(-n)
	
	res.send(newArr)
})



const PORT = 5000

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))