import express from "express"

const app = express()


app.get("/holidays", (req, res) => {
	res.send(holidays)
})

const PORT = 5000

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))