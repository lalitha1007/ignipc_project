import { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch('/api/articles');
      const data = await response.json();
      setArticles(data);
    };
    fetchArticles();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Blog Articles
      </Typography>
      {articles.map((article) => (
        <Card key={article.id}>
          <CardContent>
            <Typography variant="h5">{article.title}</Typography>
            <Typography>{article.content}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Home;
