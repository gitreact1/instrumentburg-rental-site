import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Delivery = () => {
  const deliveryZones = [
    { zone: 'Центральный район', price: 'Бесплатно', time: '1-2 часа' },
    { zone: 'Западный район', price: '200₽', time: '2-3 часа' },
    { zone: 'Восточный район', price: '250₽', time: '2-3 часа' },
    { zone: 'Северный район', price: '300₽', time: '3-4 часа' },
    { zone: 'Южный район', price: '350₽', time: '3-4 часа' },
    { zone: 'Пригород (до 15 км)', price: '500₽', time: '4-5 часов' },
    { zone: 'Область (15-50 км)', price: 'от 800₽', time: 'на следующий день' }
  ];

  const pickupPoints = [
    {
      name: 'Центральный склад',
      address: 'ул. Строительная, 123',
      hours: '24/7',
      phone: '+7 (861) 123-45-67',
      features: ['Парковка', 'Погрузка', 'Консультации']
    },
    {
      name: 'Склад "Западный"',
      address: 'ул. Индустриальная, 45',
      hours: '8:00 - 20:00',
      phone: '+7 (861) 123-45-68',
      features: ['Парковка', 'Погрузка']
    },
    {
      name: 'Склад "Восточный"',
      address: 'ул. Заводская, 78',
      hours: '9:00 - 18:00',
      phone: '+7 (861) 123-45-69',
      features: ['Парковка']
    }
  ];

  const deliveryOptions = [
    {
      title: 'Экспресс-доставка',
      description: 'Доставка в течение 2 часов',
      price: '+200₽ к стоимости',
      icon: 'Zap',
      features: ['Приоритетная обработка', 'SMS-уведомления', 'Точное время']
    },
    {
      title: 'Стандартная доставка',
      description: 'Доставка в течение дня',
      price: 'По тарифу',
      icon: 'Truck',
      features: ['Удобное время', 'Звонок за час', 'Помощь с переноской']
    },
    {
      title: 'Доставка на следующий день',
      description: 'Планируемая доставка',
      price: 'Скидка 20%',
      icon: 'Calendar',
      features: ['Выбор времени', 'Предварительный звонок', 'Гибкий график']
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Доставка и самовывоз</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Удобные способы получения инструмента в Краснодаре и области
          </p>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Варианты доставки</h2>
            <p className="text-gray-600 text-lg">Выберите удобный способ получения</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {deliveryOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={option.icon as any} size={24} className="text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <p className="text-gray-600">{option.description}</p>
                  <div className="text-lg font-bold text-orange-600">{option.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-green-600" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="zones" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="zones">Зоны доставки</TabsTrigger>
              <TabsTrigger value="pickup">Пункты выдачи</TabsTrigger>
              <TabsTrigger value="conditions">Условия</TabsTrigger>
            </TabsList>
            
            <TabsContent value="zones" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {deliveryZones.map((zone, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{zone.zone}</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Стоимость:</span>
                          <span className="font-semibold text-orange-600">{zone.price}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Время:</span>
                          <span className="font-semibold">{zone.time}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="pickup" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pickupPoints.map((point, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{point.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-2">
                          <Icon name="MapPin" size={16} className="text-gray-500 mt-1" />
                          <span className="text-sm">{point.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Clock" size={16} className="text-gray-500" />
                          <span className="text-sm">{point.hours}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Phone" size={16} className="text-gray-500" />
                          <span className="text-sm">{point.phone}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-3">
                          {point.features.map((feature, featureIndex) => (
                            <Badge key={featureIndex} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="conditions" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Truck" size={20} className="text-orange-600" />
                      <span>Условия доставки</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-600 mt-1" />
                        <span className="text-sm">Бесплатная доставка при заказе от 1000₽</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-600 mt-1" />
                        <span className="text-sm">Доставка осуществляется 7 дней в неделю</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-600 mt-1" />
                        <span className="text-sm">Подъем на этаж включен в стоимость</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-600 mt-1" />
                        <span className="text-sm">Возможна доставка в выходные и праздники</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-600 mt-1" />
                        <span className="text-sm">SMS-уведомления о статусе доставки</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Package" size={20} className="text-orange-600" />
                      <span>Условия самовывоза</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-600 mt-1" />
                        <span className="text-sm">Бесплатный самовывоз с любого склада</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-600 mt-1" />
                        <span className="text-sm">Помощь с погрузкой в автомобиль</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-600 mt-1" />
                        <span className="text-sm">Бесплатная парковка на территории</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-600 mt-1" />
                        <span className="text-sm">Консультации специалистов</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-600 mt-1" />
                        <span className="text-sm">Проверка инструмента перед выдачей</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Можно ли изменить время доставки?</h3>
                <p className="text-gray-600">Да, вы можете изменить время доставки, связавшись с нами не позднее чем за 2 часа до назначенного времени.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Что делать, если меня не будет дома?</h3>
                <p className="text-gray-600">Вы можете указать другого получателя или выбрать доставку в удобное время. Также возможен самовывоз с наших складов.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Есть ли доставка в другие города?</h3>
                <p className="text-gray-600">Да, мы осуществляем доставку в города Краснодарского края. Стоимость и сроки рассчитываются индивидуально.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна доставка?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Оформите заказ и мы доставим инструмент в удобное время
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                <Icon name="Search" size={20} className="mr-2" />
                Выбрать инструмент
              </Button>
            </Link>
            <Link to="/contacts">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                <Icon name="Phone" size={20} className="mr-2" />
                Уточнить доставку
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Delivery;