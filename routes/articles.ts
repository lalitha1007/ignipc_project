import { FastifyInstance } from 'fastify';
import { Pool } from 'pg';

const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});

export default async function (fastify: FastifyInstance) {
  fastify.get('/api/articles', async (request, reply) => {
    const res = await pool.query('SELECT * FROM articles');
    reply.send(res.rows);
  });

  fastify.post('/api/articles', async (request, reply) => {
    const { title, content } = request.body;
    const result = await pool.query('INSERT INTO articles (title, content) VALUES ($1, $2) RETURNING *', [title, content]);
    reply.code(201).send(result.rows[0]);
  });
}
