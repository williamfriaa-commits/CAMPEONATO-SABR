import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json()); // permite receber JSON no body

// Rota de teste para saber se o backend está funcionando
app.get("/", (req, res) => {
  res.send("Backend SABR funcionando!");
});

// Rota de pagamento (exemplo)
app.post("/pagamento", (req, res) => {
  const { valor, metodo } = req.body;

  // Aqui você faria a lógica real de pagamento
  console.log(`Recebi pagamento de R$${valor} via ${metodo}`);

  // Retorno para quem chamou a API
  res.json({
    status: "sucesso",
    mensagem: `Pagamento de R$${valor} via ${metodo} processado`,
  });
});

// Porta que o Render fornece ou 3000 local
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
