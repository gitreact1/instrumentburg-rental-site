import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const Index = () => {
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    tool: '',
    startDate: undefined as Date | undefined,
    endDate: undefined as Date | undefined,
    comment: ''
  });

  const tools = [
    { id: 1, name: 'Перфоратор Bosch', price: '500₽/день', category: 'Электроинструмент', image: '/img/abfaf011-d040-498c-b83d-ee538aa52793.jpg' },
    { id: 2, name: 'Болгарка Makita', price: '400₽/день', category: 'Электроинструмент', image: '/img/61ab0642-baac-4024-bde5-2a23eb96c09d.jpg' },
    { id: 3, name: 'Дрель ударная', price: '300₽/день', category: 'Электроинструмент', image: '/img/a9332a6b-c23a-4b4e-ab87-9aa39ea79024.jpg' },
    { id: 4, name: 'Шуруповёрт', price: '250₽/день', category: 'Электроинструмент', image: '/img/a9332a6b-c23a-4b4e-ab87-9aa39ea79024.jpg' },
    { id: 5, name: 'Лобзик', price: '350₽/день', category: 'Электроинструмент', image: '/img/61ab0642-baac-4024-bde5-2a23eb96c09d.jpg' },
    { id: 6, name: 'Строительный миксер', price: '450₽/день', category: 'Строительное оборудование', image: '/img/abfaf011-d040-498c-b83d-ee538aa52793.jpg' }
  ];

  const reviews = [
    { name: 'Андрей К.', rating: 5, text: 'Отличный сервис! Инструмент в идеальном состоянии, доставили вовремя.' },
    { name: 'Елена М.', rating: 5, text: 'Пользуюсь услугами уже год. Всё быстро и качественно.' },
    { name: 'Дмитрий П.', rating: 4, text: 'Хорошие цены, широкий выбор инструмента.' }
  ];

  const handleBooking = (toolName: string) => {
    setBookingForm(prev => ({ ...prev, tool: toolName }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Wrench" className="text-orange-600" size={32} />
              <h1 className="text-2xl font-bold text-gray-900">ИнструментБург</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-gray-600 hover:text-orange-600 transition-colors">Каталог</a>
              <a href="#how-to-rent" className="text-gray-600 hover:text-orange-600 transition-colors">Как арендовать</a>
              <a href="#delivery" className="text-gray-600 hover:text-orange-600 transition-colors">Доставка</a>
              <a href="#reviews" className="text-gray-600 hover:text-orange-600 transition-colors">Отзывы</a>
              <a href="#contacts" className="text-gray-600 hover:text-orange-600 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-orange-600 hover:bg-orange-700">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">Прокат строительного инструмента в Краснодаре</h2>
            <p className="text-xl mb-8 text-blue-100">Профессиональный инструмент для любых задач. Быстрая доставка и выгодные цены.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Icon name="Search" size={20} className="mr-2" />
                Выбрать инструмент
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Каталог инструментов</h2>
            <p className="text-gray-600 text-lg">Профессиональный инструмент ведущих брендов</p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="electric">Электроинструмент</TabsTrigger>
              <TabsTrigger value="equipment">Оборудование</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool) => (
                  <Card key={tool.id} className="group hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                        <img src={tool.image} alt={tool.name} className="w-full h-full object-cover" />
                      </div>
                      <CardTitle className="text-lg">{tool.name}</CardTitle>
                      <CardDescription>
                        <Badge variant="secondary">{tool.category}</Badge>
                      </CardDescription>
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
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            className="w-full bg-orange-600 hover:bg-orange-700" 
                            onClick={() => handleBooking(tool.name)}
                          >
                            <Icon name="Calendar" size={16} className="mr-2" />
                            Забронировать
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle>Бронирование: {tool.name}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="name">Имя</Label>
                              <Input 
                                id="name" 
                                placeholder="Ваше имя"
                                value={bookingForm.name}
                                onChange={(e) => setBookingForm(prev => ({ ...prev, name: e.target.value }))}
                              />
                            </div>
                            <div>
                              <Label htmlFor="phone">Телефон</Label>
                              <Input 
                                id="phone" 
                                placeholder="+7 (999) 123-45-67"
                                value={bookingForm.phone}
                                onChange={(e) => setBookingForm(prev => ({ ...prev, phone: e.target.value }))}
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label>Дата начала</Label>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <Button variant="outline" className="w-full justify-start">
                                      <Icon name="Calendar" size={16} className="mr-2" />
                                      {bookingForm.startDate ? format(bookingForm.startDate, 'dd.MM.yyyy', { locale: ru }) : 'Выберите дату'}
                                    </Button>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-auto p-0">
                                    <Calendar
                                      mode="single"
                                      selected={bookingForm.startDate}
                                      onSelect={(date) => setBookingForm(prev => ({ ...prev, startDate: date }))}
                                      initialFocus
                                    />
                                  </PopoverContent>
                                </Popover>
                              </div>
                              <div>
                                <Label>Дата окончания</Label>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <Button variant="outline" className="w-full justify-start">
                                      <Icon name="Calendar" size={16} className="mr-2" />
                                      {bookingForm.endDate ? format(bookingForm.endDate, 'dd.MM.yyyy', { locale: ru }) : 'Выберите дату'}
                                    </Button>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-auto p-0">
                                    <Calendar
                                      mode="single"
                                      selected={bookingForm.endDate}
                                      onSelect={(date) => setBookingForm(prev => ({ ...prev, endDate: date }))}
                                      initialFocus
                                    />
                                  </PopoverContent>
                                </Popover>
                              </div>
                            </div>
                            <div>
                              <Label htmlFor="comment">Комментарий</Label>
                              <Textarea 
                                id="comment" 
                                placeholder="Дополнительные пожелания..."
                                value={bookingForm.comment}
                                onChange={(e) => setBookingForm(prev => ({ ...prev, comment: e.target.value }))}
                              />
                            </div>
                            <Button className="w-full bg-orange-600 hover:bg-orange-700">
                              Отправить заявку
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="electric">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.filter(tool => tool.category === 'Электроинструмент').map((tool) => (
                  <Card key={tool.id} className="group hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                        <img src={tool.image} alt={tool.name} className="w-full h-full object-cover" />
                      </div>
                      <CardTitle className="text-lg">{tool.name}</CardTitle>
                      <CardDescription>
                        <Badge variant="secondary">{tool.category}</Badge>
                      </CardDescription>
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
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">
                        <Icon name="Calendar" size={16} className="mr-2" />
                        Забронировать
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="equipment">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.filter(tool => tool.category === 'Строительное оборудование').map((tool) => (
                  <Card key={tool.id} className="group hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                        <img src={tool.image} alt={tool.name} className="w-full h-full object-cover" />
                      </div>
                      <CardTitle className="text-lg">{tool.name}</CardTitle>
                      <CardDescription>
                        <Badge variant="secondary">{tool.category}</Badge>
                      </CardDescription>
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
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">
                        <Icon name="Calendar" size={16} className="mr-2" />
                        Забронировать
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* How to Rent Section */}
      <section id="how-to-rent" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Как арендовать инструмент</h2>
            <p className="text-gray-600 text-lg">Простой процесс в 4 шага</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Search" size={24} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Выберите инструмент</h3>
              <p className="text-gray-600">Найдите нужный инструмент в каталоге</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Calendar" size={24} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Забронируйте</h3>
              <p className="text-gray-600">Укажите даты и оставьте заявку</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" size={24} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Оплатите</h3>
              <p className="text-gray-600">Удобная оплата наличными или картой</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={24} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4. Получите</h3>
              <p className="text-gray-600">Доставка или самовывоз</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Доставка и условия</h2>
            <p className="text-gray-600 text-lg">Удобные условия аренды для вашего комфорта</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="Truck" size={24} className="text-blue-600" />
                </div>
                <CardTitle>Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Доставка по Краснодару от 2 часов. Бесплатная доставка при заказе от 1000₽.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="Shield" size={24} className="text-green-600" />
                </div>
                <CardTitle>Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Весь инструмент проверен и готов к работе. Гарантия исправности.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="Clock" size={24} className="text-purple-600" />
                </div>
                <CardTitle>Гибкие сроки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Аренда от 1 дня до нескольких месяцев. Скидки при длительной аренде.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Отзывы клиентов</h2>
            <p className="text-gray-600 text-lg">Что говорят о нас наши клиенты</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                      <Icon name="User" size={24} className="text-gray-600" />
                    </div>
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <div className="flex items-center">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Контакты</h2>
            <p className="text-blue-100 text-lg">Мы всегда готовы помочь вам</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={24} className="text-blue-200" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-blue-100">+7 (861) 123-45-67</p>
              <p className="text-blue-100">Работаем 24/7</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={24} className="text-blue-200" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="text-blue-100">г. Краснодар</p>
              <p className="text-blue-100">ул. Строительная, 123</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={24} className="text-blue-200" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-blue-100">info@instrumentburg.ru</p>
              <p className="text-blue-100">support@instrumentburg.ru</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Wrench" className="text-orange-600" size={24} />
              <span className="text-xl font-bold">ИнструментБург</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2024 ИнструментБург. Все права защищены.</p>
              <p className="text-gray-400">Прокат строительного инструмента в Краснодаре</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;