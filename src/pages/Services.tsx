import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Services = () => {
  const services = [
    {
      id: 'rental',
      title: 'Аренда инструмента',
      description: 'Широкий выбор профессионального инструмента для любых задач',
      icon: 'Wrench',
      features: ['Более 500 единиц техники', 'Гибкие тарифы', 'Техническая поддержка'],
      price: 'от 200₽/день'
    },
    {
      id: 'delivery',
      title: 'Доставка и самовывоз',
      description: 'Быстрая доставка по Краснодару и области',
      icon: 'Truck',
      features: ['Доставка от 2 часов', 'Бесплатно от 1000₽', 'Удобные пункты выдачи'],
      price: 'от 300₽'
    },
    {
      id: 'repair',
      title: 'Ремонт инструмента',
      description: 'Профессиональный ремонт и обслуживание техники',
      icon: 'Settings',
      features: ['Диагностика', 'Замена запчастей', 'Гарантия на работы'],
      price: 'от 500₽'
    },
    {
      id: 'consultation',
      title: 'Консультации',
      description: 'Помощь в выборе инструмента для ваших задач',
      icon: 'MessageCircle',
      features: ['Бесплатные консультации', 'Подбор инструмента', 'Техническая поддержка'],
      price: 'Бесплатно'
    },
    {
      id: 'training',
      title: 'Обучение работе',
      description: 'Обучение безопасной работе с профессиональным инструментом',
      icon: 'GraduationCap',
      features: ['Индивидуальное обучение', 'Групповые занятия', 'Сертификаты'],
      price: 'от 1500₽'
    },
    {
      id: 'maintenance',
      title: 'Техническое обслуживание',
      description: 'Регулярное ТО для продления срока службы инструмента',
      icon: 'Shield',
      features: ['Плановое ТО', 'Замена расходников', 'Профилактика поломок'],
      price: 'от 800₽'
    }
  ];

  const pricingPlans = [
    {
      name: 'Базовый',
      price: '200₽/день',
      description: 'Для разовых работ',
      features: [
        'Аренда до 3 дней',
        'Базовая техподдержка',
        'Самовывоз',
        'Стандартная комплектация'
      ],
      popular: false
    },
    {
      name: 'Стандартный',
      price: '150₽/день',
      description: 'Для регулярного использования',
      features: [
        'Аренда от 4 до 14 дней',
        'Приоритетная поддержка',
        'Бесплатная доставка',
        'Расширенная комплектация',
        'Скидка 25%'
      ],
      popular: true
    },
    {
      name: 'Профессиональный',
      price: '120₽/день',
      description: 'Для строительных компаний',
      features: [
        'Долгосрочная аренда от 15 дней',
        'Персональный менеджер',
        'Бесплатная доставка и самовывоз',
        'Полная комплектация',
        'Скидка 40%',
        'Техническое обслуживание'
      ],
      popular: false
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Полный спектр услуг для работы с профессиональным инструментом
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={24} className="text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-green-600" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-orange-600">{service.price}</span>
                    <Link to={`/services/${service.id}`}>
                      <Button variant="outline">Подробнее</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Тарифные планы</h2>
            <p className="text-gray-600 text-lg">Выберите подходящий тариф для ваших задач</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-orange-600 shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-orange-600">Популярный</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-orange-600 my-4">{plan.price}</div>
                  <p className="text-gray-600">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-orange-600 hover:bg-orange-700' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Как это работает</h2>
            <p className="text-gray-600 text-lg">Простой процесс получения услуги</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Выберите услугу</h3>
              <p className="text-gray-600">Определите, какая услуга вам нужна</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Оставьте заявку</h3>
              <p className="text-gray-600">Свяжитесь с нами любым удобным способом</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Получите консультацию</h3>
              <p className="text-gray-600">Наш специалист подберет оптимальное решение</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Получите услугу</h3>
              <p className="text-gray-600">Воспользуйтесь нашими услугами</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна консультация?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Наши специалисты помогут выбрать подходящую услугу
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacts">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить сейчас
              </Button>
            </Link>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в чат
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;