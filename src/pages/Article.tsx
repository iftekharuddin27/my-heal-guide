import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';

const Article = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Header title="Article" showBack showCart />
      
      <main className="container py-6">
        <Card>
          <CardHeader>
            <div className="text-6xl mb-4 text-center">🏥</div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Badge>Wellness</Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-3 w-3" />
                5 min read
              </div>
            </div>
            <h1 className="text-3xl font-bold text-center">
              10 Ways to Boost Your Immune System
            </h1>
          </CardHeader>
          <CardContent className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              Your immune system is your body's natural defense mechanism. Here are proven ways to strengthen it.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Get Adequate Sleep</h2>
            <p>
              Quality sleep is crucial for immune function. Aim for 7-9 hours of sleep per night. During sleep, 
              your body produces and releases cytokines, proteins that target infection and inflammation.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Stay Hydrated</h2>
            <p>
              Water helps carry oxygen to your cells, which ensures your systems function properly. It also helps 
              flush toxins from your body. Aim for at least 8 glasses of water daily.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Exercise Regularly</h2>
            <p>
              Regular physical activity can help flush bacteria out of the lungs and airways, reducing your chance 
              of getting a cold or flu. Exercise also causes changes in antibodies and white blood cells.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Eat a Balanced Diet</h2>
            <p>
              Focus on fruits, vegetables, whole grains, and lean proteins. Foods rich in vitamins C, D, E, and 
              zinc are particularly beneficial for immune health.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Manage Stress</h2>
            <p>
              Chronic stress can suppress immune function. Practice stress-reduction techniques like meditation, 
              yoga, or deep breathing exercises.
            </p>

            <p className="mt-8 text-sm text-muted-foreground border-t pt-6">
              <strong>Disclaimer:</strong> This article is for informational purposes only and should not replace 
              professional medical advice. Always consult with a healthcare provider for medical concerns.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Article;
