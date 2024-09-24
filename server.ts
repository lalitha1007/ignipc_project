import fastify from 'fastify';
import articlesRoutes from './routes/articles';

const app = fastify();

app.register(articlesRoutes);

const start = async () => {
  try {
    await app.listen(3001);
    console.log('Server listening on http://localhost:3001');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
