import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const BlogPost = () => {
  const { slug } = useParams();

  // Mock data - в реальном приложении это будет загружаться по slug
  const post = {
    id: 1,
    title: 'Как выбрать перфоратор для домашних работ',
    content: `
      <p>Перфоратор — это незаменимый инструмент для любого, кто занимается строительством или ремонтом. В этой статье мы расскажем, как правильно выбрать перфоратор для домашних работ.</p>
      
      <h2>Основные характеристики перфораторов</h2>
      
      <p>При выборе перфоратора важно обратить внимание на следующие характеристики:</p>
      
      <ul>
        <li><strong>Мощность</strong> — определяет производительность инструмента</li>
        <li><strong>Энергия удара</strong> — влияет на способность пробивать твердые материалы</li>
        <li><strong>Частота ударов</strong> — количество ударов в минуту</li>
        <li><strong>Тип патрона</strong> — SDS-plus или SDS-max</li>
      </ul>
      
      <h2>Виды перфораторов</h2>
      
      <p>Существует несколько видов перфораторов:</p>
      
      <h3>1. Легкие перфораторы (до 3 кг)</h3>
      <p>Подходят для сверления отверстий диаметром до 20 мм в бетоне. Идеальны для домашнего использования.</p>
      
      <h3>2. Средние перфораторы (3-5 кг)</h3>
      <p>Универсальные инструменты для большинства строительных задач. Могут сверлить отверстия до 30 мм.</p>
      
      <h3>3. Тяжелые перфораторы (свыше 5 кг)</h3>
      <p>Профессиональные инструменты для сложных задач и работы с армированным бетоном.</p>
      
      <h2>Рекомендации по выбору</h2>
      
      <p>Для домашних работ рекомендуем выбирать легкие или средние перфораторы с мощностью 600-800 Вт. Обратите внимание на наличие дополнительных функций:</p>
      
      <ul>
        <li>Регулировка скорости</li>
        <li>Реверс</li>
        <li>Система пылеудаления</li>
        <li>Антивибрационная система</li>
      </ul>
      
      <h2>Заключение</h2>
      
      <p>Правильный выбор перфоратора поможет вам эффективно выполнять строительные работы. Если вы не уверены в выборе, лучше сначала арендовать инструмент и протестировать его в деле.</p>
    `,
    category: 'Советы',
    author: 'Алексей Петров',
    date: '2024-01-20',
    readTime: '5 мин',
    image: '/img/blog-1.jpg',
    tags: ['перфоратор', 'выбор инструмента', 'строительство', 'ремонт']
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'Техника безопасности при работе с электроинструментом',
      slug: 'tehnika-bezopasnosti',
      category: 'Безопасность'
    },
    {
      id: 3,
      title: 'Обзор новинок строительного инструмента 2024',
      slug: 'obzor-novinok-2024',
      category: 'Обзоры'
    },
    {
      id: 4,
      title: 'Уход и обслуживание садовой техники',
      slug: 'uhod-za-sadovoy-tehnikoy',
      category: 'Уход'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumbs */}
      <section className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-orange-600">Главная</Link>
            <Icon name="ChevronRight" size={16} className="text-gray-400" />
            <Link to="/blog" className="text-gray-500 hover:text-orange-600">Блог</Link>
            <Icon name="ChevronRight" size={16} className="text-gray-400" />
            <span className="text-gray-900">{post.title}</span>
          </nav>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article>
              {/* Header */}
              <div className="mb-8">
                <Badge className="mb-4">{post.category}</Badge>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
                <div className="flex items-center space-x-4 text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <Icon name="User" size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="aspect-video bg-gray-200 rounded-lg mb-8 flex items-center justify-center">
                <Icon name="Image" size={64} className="text-gray-400" />
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none mb-8">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              {/* Tags */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Теги:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="border-t border-gray-200 pt-8 mb-8">
                <h3 className="text-lg font-semibold mb-4">Поделиться:</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm">
                    <Icon name="Share2" size={16} className="mr-2" />
                    ВКонтакте
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Send" size={16} className="mr-2" />
                    Telegram
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Copy" size={16} className="mr-2" />
                    Копировать ссылку
                  </Button>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Author */}
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-gray-500" />
                  </div>
                  <h3 className="font-semibold mb-2">{post.author}</h3>
                  <p className="text-sm text-gray-600 mb-4">Эксперт по строительному инструменту</p>
                  <Button variant="outline" size="sm">
                    Все статьи автора
                  </Button>
                </CardContent>
              </Card>

              {/* Related Posts */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Похожие статьи</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.id}>
                        <Badge variant="secondary" className="mb-2 text-xs">
                          {relatedPost.category}
                        </Badge>
                        <Link 
                          to={`/blog/${relatedPost.slug}`}
                          className="block text-sm font-medium hover:text-orange-600 transition-colors"
                        >
                          {relatedPost.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon name="Mail" size={32} className="text-orange-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Подпишитесь на новости</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Получайте полезные советы и новости
                  </p>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    Подписаться
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужен инструмент?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Арендуйте качественный инструмент для ваших проектов
          </p>
          <Link to="/catalog">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <Icon name="Search" size={20} className="mr-2" />
              Посмотреть каталог
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;