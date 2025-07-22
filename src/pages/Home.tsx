import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Home = () => {
  const featuredTools = [
    { id: 1, name: 'Перфоратор Bosch', price: '500₽/день', category: 'Электроинструмент', image: '/img/abfaf011-d040-498c-b83d-ee538aa52793.jpg' },
    { id: 2, name: 'Болгарка Makita', price: '400₽/день', category: 'Электроинструмент', image: '/img/61ab0642-baac-4024-bde5-2a23eb96c09d.jpg' },
    { id: 3, name: 'Дрель ударная', price: '300₽/день', category: 'Электроинструмент', image: '/img/a9332a6b-c23a-4b4e-ab87-9aa39ea79024.jpg' },
  ];

  const advantages = [
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'Весь инструмент проверен и готов к работе'
    },
    {
      icon: 'Truck',
      title: 'Быстрая доставка',
      description: 'Доставка по Краснодару от 2 часов'
    },
    {
      icon: 'Clock',
      title: 'Работаем 24/7',
      description: 'Круглосуточная поддержка клиентов'
    },
    {
      icon: 'CreditCard',
      title: 'Удобная оплата',
      description: 'Наличные, карта, безналичный расчет'
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Прокат строительного инструмента в Краснодаре
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Профессиональный инструмент для любых задач. Быстрая доставка и выгодные цены.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/catalog">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  <Icon name="Search" size={20} className="mr-2" />
                  Выбрать инструмент
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Популярный инструмент</h2>
            <p className="text-gray-600 text-lg">Самые востребованные позиции нашего каталога</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredTools.map((tool) => (
              <Card key={tool.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                    <img src={tool.image} alt={tool.name} className="w-full h-full object-cover" />
                  </div>
                  <CardTitle className="text-lg">{tool.name}</CardTitle>
                  <Badge variant="secondary">{tool.category}</Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-orange-600">{tool.price}</span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <Link to={`/catalog/${tool.id}`}>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      <Icon name="Calendar" size={16} className="mr-2" />
                      Забронировать
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/catalog">
              <Button variant="outline" size="lg">
                Посмотреть весь каталог
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
            <p className="text-gray-600 text-lg">Преимущества работы с ИнструментБург</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon as any} size={24} className="text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Как это работает</h2>
            <p className="text-gray-600 text-lg">Простой процесс аренды в 4 шага</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Выберите инструмент</h3>
              <p className="text-gray-600">Найдите нужный инструмент в каталоге</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Забронируйте</h3>
              <p className="text-gray-600">Укажите даты и оставьте заявку</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Оплатите</h3>
              <p className="text-gray-600">Удобная оплата наличными или картой</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Получите</h3>
              <p className="text-gray-600">Доставка или самовывоз</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать работу?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Свяжитесь с нами прямо сейчас и получите консультацию специалиста
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacts">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить сейчас
              </Button>
            </Link>
            <Link to="/catalog">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                <Icon name="Search" size={20} className="mr-2" />
                Выбрать инструмент
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;