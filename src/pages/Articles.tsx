import { Header } from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const articles = [
  {
    id: 'a1',
    title: '10 Ways to Boost Your Immune System',
    excerpt: 'Learn effective strategies to strengthen your body\'s natural defenses...',
    category: 'Wellness',
    readTime: '5 min',
    trending: true,
    image: '🏥',
  },
  {
    id: 'a2',
    title: 'Understanding Heart Health',
    excerpt: 'Essential information about maintaining a healthy cardiovascular system...',
    category: 'Cardiology',
    readTime: '7 min',
    trending: true,
    image: '❤️',
  },
  {
    id: 'a3',
    title: 'Healthy Eating Habits',
    excerpt: 'A comprehensive guide to nutrition and balanced diet...',
    category: 'Nutrition',
    readTime: '6 min',
    trending: false,
    image: '🥗',
  },
  {
    id: 'a4',
    title: 'Mental Health Matters',
    excerpt: 'Understanding and managing stress, anxiety, and depression...',
    category: 'Mental Health',
    readTime: '8 min',
    trending: true,
    image: '🧠',
  },
  {
    id: 'a5',
    title: 'Exercise and Fitness Tips',
    excerpt: 'Simple workouts and exercises for a healthier lifestyle...',
    category: 'Fitness',
    readTime: '5 min',
    trending: false,
    image: '💪',
  },
  {
    id: 'a6',
    title: 'Sleep Better Tonight',
    excerpt: 'Science-backed tips to improve your sleep quality...',
    category: 'Wellness',
    readTime: '4 min',
    trending: false,
    image: '😴',
  },
];

const Articles = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header title="Health Articles" showBack showCart />
      
      <main className="container py-6 space-y-6">
        {/* Trending Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold">Trending Now</h2>
          </div>
          <div className="grid gap-4">
            {articles.filter(a => a.trending).map(article => (
              <Card
                key={article.id}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigate(`/article/${article.id}`)}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{article.image}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{article.category}</Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-lg">{article.title}</CardTitle>
                      <CardDescription className="mt-2">{article.excerpt}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* All Articles */}
        <div>
          <h2 className="text-xl font-bold mb-4">More Articles</h2>
          <div className="grid gap-4">
            {articles.filter(a => !a.trending).map(article => (
              <Card
                key={article.id}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigate(`/article/${article.id}`)}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{article.image}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{article.category}</Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-lg">{article.title}</CardTitle>
                      <CardDescription className="mt-2">{article.excerpt}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Articles;
