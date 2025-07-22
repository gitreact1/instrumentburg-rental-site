import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const ToolDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    startDate: undefined as Date | undefined,
    endDate: undefined as Date | undefined,
    comment: ''
  });

  // Mock data - в реальном приложении это будет загружаться по ID
  const tool = {
    id: 1,
    name: 'Перфоратор Bosch GBH 2-28',
    price: 500,
    category: 'Электроинструмент',
    brand: 'Bosch',
    model: 'GBH 2-28',
    images: [
      '/img/abfaf011-d040-498c-b83d-ee538aa52793.jpg',
      '/img/61ab0642-baac-4024-bde5-2a23eb96c09d.jpg',
      '/img/a9332a6b-c23a-4b4e-ab87-9aa39ea79024.jpg'
    ],
    available: true,
    description: 'Профессиональный перфоратор Bosch GBH 2-28 предназначен для сверления отверстий в бетоне, кирпиче и других твердых материалах. Мощный двигатель и надежная конструкция обеспечивают высокую производительность.',
    specifications: {
      'Мощность': '880 Вт',
      'Энергия удара': '3.2 Дж',
      'Частота ударов': '4000 уд/мин',
      'Частота вращения': '900 об/мин',
      'Диаметр сверления в бетоне': 'до 28 мм',
      'Вес': '2.9 кг',
      'Патрон': 'SDS-plus'
    },
    included: [
      'Перфоратор Bosch GBH 2-28',
      'Дополнительная рукоятка',
      'Ограничитель глубины',
      'Кейс для транспортировки',
      'Инструкция по эксплуатации'
    ],
    reviews: [
      { name: 'Алексей М.', rating: 5, text: 'Отличный инструмент! Легко справляется с бетоном.', date: '2024-01-15' },
      { name: 'Сергей К.', rating: 4, text: 'Хорошая мощность, удобно лежит в руке.', date: '2024-01-10' },
      { name: 'Дмитрий П.', rating: 5, text: 'Быстро просверлил все отверстия для розеток.', date: '2024-01-05' }
    ]
  };

  const relatedTools = [
    { id: 2, name: 'Болгарка Makita', price: '400₽/день', image: '/img/61ab0642-baac-4024-bde5-2a23eb96c09d.jpg' },
    { id: 3, name: 'Дрель ударная', price: '300₽/день', image: '/img/a9332a6b-c23a-4b4e-ab87-9aa39ea79024.jpg' },
    { id: 4, name: 'Шуруповёрт', price: '250₽/день', image: '/img/a9332a6b-c23a-4b4e-ab87-9aa39ea79024.jpg' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumbs */}
      <section className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-orange-600">Главная</Link>
            <Icon name="ChevronRight" size={16} className="text-gray-400" />
            <Link to="/catalog" className="text-gray-500 hover:text-orange-600">Каталог</Link>
            <Icon name="ChevronRight" size={16} className="text-gray-400" />
            <span className="text-gray-900">{tool.name}</span>
          </nav>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Images */}
          <div>
            <div className="aspect-square bg-white rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <img 
                src={tool.images[selectedImage]} 
                alt={tool.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-2">
              {tool.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-orange-600' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt={`${tool.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="mb-4">
              <Badge variant="secondary" className="mb-2">{tool.category}</Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{tool.name}</h1>
              <p className="text-gray-600">Бренд: <span className="font-semibold">{tool.brand}</span></p>
              <p className="text-gray-600">Модель: <span className="font-semibold">{tool.model}</span></p>
            </div>

            <div className="mb-6">
              <div className="flex items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                ))}
                <span className="text-gray-600 ml-2">({tool.reviews.length} отзывов)</span>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl font-bold text-orange-600">{tool.price}₽/день</span>
                {tool.available ? (
                  <Badge className="bg-green-100 text-green-800">В наличии</Badge>
                ) : (
                  <Badge variant="destructive">Недоступно</Badge>
                )}
              </div>
              
              <p className="text-gray-600 mb-6">{tool.description}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      size="lg" 
                      className="bg-orange-600 hover:bg-orange-700 flex-1"
                      disabled={!tool.available}
                    >
                      <Icon name="Calendar" size={20} className="mr-2" />
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

                <Button variant="outline" size="lg">
                  <Icon name="Heart" size={20} className="mr-2" />
                  В избранное
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="specs" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="specs">Характеристики</TabsTrigger>
            <TabsTrigger value="included">Комплектация</TabsTrigger>
            <TabsTrigger value="reviews">Отзывы ({tool.reviews.length})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="specs" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(tool.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-600">{key}:</span>
                      <span className="text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="included" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {tool.included.map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-4">
              {tool.reviews.map((review, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-semibold">{review.name}</h4>
                        <div className="flex items-center space-x-1 mt-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-700">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Tools */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Похожие инструменты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedTools.map((relatedTool) => (
              <Card key={relatedTool.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                    <img src={relatedTool.image} alt={relatedTool.name} className="w-full h-full object-cover" />
                  </div>
                  <CardTitle className="text-lg">{relatedTool.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-orange-600">{relatedTool.price}</span>
                  </div>
                  <Link to={`/catalog/${relatedTool.id}`}>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      Подробнее
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ToolDetail;