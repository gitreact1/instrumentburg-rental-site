import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const posts = [
    {
      id: 1,
      title: 'Как выбрать перфоратор для домашних работ',
      excerpt: 'Подробное руководство по выбору перфоратора для различных задач. Рассматриваем основные характеристики и рекомендации.',
      category: 'Советы',
      author: 'Алексей Петров',
      date: '2024-01-20',
      readTime: '5 мин',
      image: '/img/blog-1.jpg',
      slug: 'kak-vybrat-perforator'
    },
    {
      id: 2,
      title: 'Техника безопасности при работе с электроинструментом',
      excerpt: 'Важные правила безопасности, которые должен знать каждый, кто работает с электроинструментом.',
      category: 'Безопасность',
      author: 'Мария Сидорова',
      date: '2024-01-18',
      readTime: '7 мин',
      image: '/img/blog-2.jpg',
      slug: 'tehnika-bezopasnosti'
    },
    {
      id: 3,
      title: 'Обзор новинок строительного инструмента 2024',
      excerpt: 'Рассказываем о самых интересных новинках строительного инструмента, которые появились в этом году.',
      category: 'Обзоры',
      author: 'Дмитрий Козлов',
      date: '2024-01-15',
      readTime: '10 мин',
      image: '/img/blog-3.jpg',
      slug: 'obzor-novinok-2024'
    },
    {
      id: 4,
      title: 'Уход и обслуживание садовой техники',
      excerpt: 'Как правильно ухаживать за садовой техникой, чтобы она служила долго и надежно.',
      category: 'Уход',
      author: 'Елена Волкова',
      date: '2024-01-12',
      readTime: '6 мин',
      image: '/img/blog-4.jpg',
      slug: 'uhod-za-sadovoy-tehnikoy'
    },
    {
      id: 5,
      title: 'Экономия на ремонте: аренда vs покупка инструмента',
      excerpt: 'Сравниваем затраты на аренду и покупку инструмента. Когда выгоднее арендовать?',
      category: 'Экономия',
      author: 'Сергей Новиков',
      date: '2024-01-10',
      readTime: '8 мин',
      image: '/img/blog-5.jpg',
      slug: 'arenda-vs-pokupka'
    },
    {
      id: 6,
      title: 'Подготовка к строительному сезону',
      excerpt: 'Что нужно знать и подготовить перед началом строительных работ в новом сезоне.',
      category: 'Планирование',
      author: 'Игорь Смирнов',
      date: '2024-01-08',
      readTime: '9 мин',
      image: '/img/blog-6.jpg',
      slug: 'podgotovka-k-sezonu'
    }
  ];

  const categories = ['all', 'Советы', 'Безопасность', 'Обзоры', 'Уход', 'Экономия', 'Планирование'];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 4);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Блог ИнструментБург</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Полезные советы, обзоры инструментов и новости из мира строительства
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Рекомендуем прочитать</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-square bg-gray-200 flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-gray-400" />
                </div>
                <div className="p-8">
                  <Badge className="mb-4">{featuredPost.category}</Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{featuredPost.author}</span>
                      <span>•</span>
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${featuredPost.slug}`}>
                    <Button className="bg-orange-600 hover:bg-orange-700">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <Input
                placeholder="Поиск статей..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-md"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все категории</SelectItem>
                {categories.slice(1).map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gray-200 rounded-t-lg flex items-center justify-center">
                    <Icon name="Image" size={32} className="text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <Badge className="mb-3">{post.category}</Badge>
                  <CardTitle className="text-lg mb-3 line-clamp-2">{post.title}</CardTitle>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="outline" className="w-full">
                      Читать далее
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" size={48} className="text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Статьи не найдены</h3>
              <p className="text-gray-500">Попробуйте изменить параметры поиска</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Подпишитесь на новости</h2>
          <p className="text-xl mb-8 text-orange-100">
            Получайте полезные советы и новости о строительном инструменте
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              placeholder="Ваш email" 
              className="bg-white text-gray-900"
            />
            <Button className="bg-white text-orange-600 hover:bg-gray-100">
              Подписаться
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;