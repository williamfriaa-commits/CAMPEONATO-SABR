import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Rota simples só pra testar se o backend está no ar
app.get("/", (req, res) => {
  res.send("Backend SABR funcionando!");
});

// Porta da Render ou 3000 local
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
