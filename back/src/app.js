import express from "express"
import cors from 'cors';


const app = express()
app.use(cors());
app.use(express.json())

const userData = []

const tweetFormat = []

app.post("/sign-up", (req, res) => {
	const { username, avatar } = req.body

	const newUser = { username, avatar }

	userData.push(newUser)

    res.send("OK")
})

app.post("/tweet", (req, res) => {
	const { username, tweet } = req.body

	const profilePicture = userData.find(data => data.username === username)

	const newTweet = { username, avatar: profilePicture.avatar, tweet }

	tweetFormat.push(newTweet)

    res.send("OK")
})

app.get("/tweets", (req, res) => {
	const n = 10
	let newArr = []
	newArr = tweetFormat.slice(-n)
	
	res.send(newArr)
})



const PORT = 5000

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))