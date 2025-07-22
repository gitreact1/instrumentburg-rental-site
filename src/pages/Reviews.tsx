import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Reviews = () => {
  const [reviewForm, setReviewForm] = useState({
    name: '',
    email: '',
    rating: '',
    tool: '',
    comment: ''
  });

  const [filter, setFilter] = useState('all');

  const reviews = [
    {
      id: 1,
      name: 'Алексей Михайлов',
      rating: 5,
      tool: 'Перфоратор Bosch',
      comment: 'Отличный сервис! Инструмент в идеальном состоянии, доставили точно в срок. Персонал очень вежливый и профессиональный. Обязательно буду обращаться еще!',
      date: '2024-01-20',
      verified: true,
      helpful: 12
    },
    {
      id: 2,
      name: 'Елена Петрова',
      rating: 5,
      tool: 'Болгарка Makita',
      comment: 'Пользуюсь услугами уже второй год. Всегда качественный инструмент, быстрая доставка. Цены очень конкурентные. Рекомендую всем!',
      date: '2024-01-18',
      verified: true,
      helpful: 8
    },
    {
      id: 3,
      name: 'Дмитрий Козлов',
      rating: 4,
      tool: 'Дрель ударная',
      comment: 'Хорошие цены, широкий выбор инструмента. Единственный минус - иногда приходится ждать доставку дольше обещанного времени.',
      date: '2024-01-15',
      verified: false,
      helpful: 5
    },
    {
      id: 4,
      name: 'Сергей Волков',
      rating: 5,
      tool: 'Строительный миксер',
      comment: 'Арендовал миксер на неделю для ремонта. Все прошло отлично - инструмент работал без нареканий, вернул в удобное время.',
      date: '2024-01-12',
      verified: true,
      helpful: 6
    },
    {
      id: 5,
      name: 'Анна Сидорова',
      rating: 5,
      tool: 'Лобзик',
      comment: 'Очень довольна сервисом! Помогли выбрать подходящий инструмент, объяснили как пользоваться. Результатом работы полностью довольна.',
      date: '2024-01-10',
      verified: true,
      helpful: 9
    },
    {
      id: 6,
      name: 'Игорь Новиков',
      rating: 4,
      tool: 'Шуруповерт',
      comment: 'Неплохой сервис, инструмент качественный. Хотелось бы больше моделей в наличии, но в целом все устраивает.',
      date: '2024-01-08',
      verified: false,
      helpful: 3
    }
  ];

  const stats = {
    total: reviews.length,
    average: 4.7,
    distribution: {
      5: 4,
      4: 2,
      3: 0,
      2: 0,
      1: 0
    }
  };

  const filteredReviews = reviews.filter(review => {
    if (filter === 'all') return true;
    if (filter === 'verified') return review.verified;
    if (filter === '5') return review.rating === 5;
    if (filter === '4') return review.rating === 4;
    return true;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Отзывы клиентов</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Узнайте, что говорят о нас наши клиенты, и поделитесь своим опытом
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Overall Rating */}
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-5xl font-bold text-orange-600 mb-2">{stats.average}</div>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon 
                      key={i} 
                      name="Star" 
                      size={20} 
                      className={`${i < Math.floor(stats.average) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-600">Средняя оценка</p>
                <p className="text-sm text-gray-500">{stats.total} отзывов</p>
              </CardContent>
            </Card>

            {/* Rating Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Распределение оценок</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <span className="text-sm w-2">{rating}</span>
                      <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-orange-600 h-2 rounded-full" 
                          style={{ width: `${(stats.distribution[rating as keyof typeof stats.distribution] / stats.total) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm w-6">{stats.distribution[rating as keyof typeof stats.distribution]}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Add Review */}
            <Card>
              <CardContent className="p-8 text-center">
                <Icon name="MessageSquare" size={48} className="text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Поделитесь опытом</h3>
                <p className="text-gray-600 mb-4">Ваш отзыв поможет другим клиентам</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-orange-600 hover:bg-orange-700">
                      Написать отзыв
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Написать отзыв</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Имя</Label>
                        <Input 
                          id="name" 
                          placeholder="Ваше имя"
                          value={reviewForm.name}
                          onChange={(e) => setReviewForm(prev => ({ ...prev, name: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email"
                          placeholder="your@email.com"
                          value={reviewForm.email}
                          onChange={(e) => setReviewForm(prev => ({ ...prev, email: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label>Оценка</Label>
                        <Select value={reviewForm.rating} onValueChange={(value) => setReviewForm(prev => ({ ...prev, rating: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите оценку" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5">5 звезд - Отлично</SelectItem>
                            <SelectItem value="4">4 звезды - Хорошо</SelectItem>
                            <SelectItem value="3">3 звезды - Нормально</SelectItem>
                            <SelectItem value="2">2 звезды - Плохо</SelectItem>
                            <SelectItem value="1">1 звезда - Ужасно</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="tool">Инструмент</Label>
                        <Input 
                          id="tool" 
                          placeholder="Какой инструмент арендовали?"
                          value={reviewForm.tool}
                          onChange={(e) => setReviewForm(prev => ({ ...prev, tool: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="comment">Отзыв</Label>
                        <Textarea 
                          id="comment" 
                          placeholder="Поделитесь своим опытом..."
                          value={reviewForm.comment}
                          onChange={(e) => setReviewForm(prev => ({ ...prev, comment: e.target.value }))}
                        />
                      </div>
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">
                        Отправить отзыв
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-gray-600">Фильтр:</span>
            <Button 
              variant={filter === 'all' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setFilter('all')}
            >
              Все отзывы
            </Button>
            <Button 
              variant={filter === 'verified' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setFilter('verified')}
            >
              Проверенные
            </Button>
            <Button 
              variant={filter === '5' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setFilter('5')}
            >
              5 звезд
            </Button>
            <Button 
              variant={filter === '4' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setFilter('4')}
            >
              4 звезды
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            {filteredReviews.map((review) => (
              <Card key={review.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        <Icon name="User" size={20} className="text-gray-500" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold">{review.name}</h3>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs">
                              <Icon name="CheckCircle" size={12} className="mr-1" />
                              Проверен
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-1 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Icon 
                              key={i} 
                              name="Star" 
                              size={16} 
                              className={`${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <p className="text-sm text-gray-500">Арендовал: {review.tool}</p>
                      </div>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{review.comment}</p>
                  
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" size="sm" className="text-gray-500">
                      <Icon name="ThumbsUp" size={16} className="mr-1" />
                      Полезно ({review.helpful})
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-500">
                      <Icon name="Flag" size={16} className="mr-1" />
                      Пожаловаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredReviews.length === 0 && (
            <div className="text-center py-12">
              <Icon name="MessageSquare" size={48} className="text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Отзывы не найдены</h3>
              <p className="text-gray-500">Попробуйте изменить фильтр</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Станьте нашим клиентом</h2>
          <p className="text-xl mb-8 text-orange-100">
            Присоединяйтесь к сотням довольных клиентов
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            <Icon name="Search" size={20} className="mr-2" />
            Выбрать инструмент
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Reviews;