import express, { Request, Response } from 'express';
import { Pool } from 'pg';
import cors from 'cors';

/**
 * Configuração do pool de conexões com PostgreSQL.
 * Altere as credenciais abaixo conforme seu ambiente.
 */
const pool = new Pool({
  user: 'seu_usuario',       // Usuário do banco
  host: 'localhost',         // Host do banco
  database: 'seu_banco',     // Nome do banco
  password: 'sua_senha',     // Senha do banco
  port: 5432,                // Porta padrão do PostgreSQL
});

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

/**
 * Endpoint GET /items
 * Retorna uma lista de itens da tabela exemplo.
 * Substitua 'items' pelo nome da sua tabela real.
 */
app.get('/items', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM items LIMIT 10');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao buscar itens:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
