import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const contacts = [
    {
      title: 'Главный офис',
      address: 'г. Краснодар, ул. Строительная, 123',
      phone: '+7 (861) 123-45-67',
      email: 'info@instrumentburg.ru',
      hours: '24/7',
      coordinates: { lat: 45.0355, lng: 38.9753 }
    },
    {
      title: 'Склад "Западный"',
      address: 'г. Краснодар, ул. Индустриальная, 45',
      phone: '+7 (861) 123-45-68',
      email: 'west@instrumentburg.ru',
      hours: '8:00 - 20:00',
      coordinates: { lat: 45.0255, lng: 38.9653 }
    },
    {
      title: 'Склад "Восточный"',
      address: 'г. Краснодар, ул. Заводская, 78',
      phone: '+7 (861) 123-45-69',
      email: 'east@instrumentburg.ru',
      hours: '9:00 - 18:00',
      coordinates: { lat: 45.0455, lng: 38.9853 }
    }
  ];

  const socialLinks = [
    { name: 'WhatsApp', icon: 'MessageCircle', link: 'https://wa.me/78611234567', color: 'text-green-600' },
    { name: 'Telegram', icon: 'Send', link: 'https://t.me/instrumentburg', color: 'text-blue-600' },
    { name: 'VKontakte', icon: 'Users', link: 'https://vk.com/instrumentburg', color: 'text-blue-700' },
    { name: 'Instagram', icon: 'Instagram', link: 'https://instagram.com/instrumentburg', color: 'text-pink-600' }
  ];

  const faqItems = [
    {
      question: 'Как быстро вы отвечаете на заявки?',
      answer: 'Мы отвечаем на все заявки в течение 15 минут в рабочее время и в течение часа в выходные дни.'
    },
    {
      question: 'Можно ли получить консультацию по телефону?',
      answer: 'Да, наши специалисты готовы проконсультировать вас по телефону 24/7. Звоните по номеру +7 (861) 123-45-67.'
    },
    {
      question: 'Есть ли у вас техническая поддержка?',
      answer: 'Да, у нас есть служба технической поддержки, которая поможет с любыми вопросами по использованию инструмента.'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы всегда готовы помочь!
          </p>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Позвоните нам</h3>
                <p className="text-2xl font-bold text-orange-600 mb-2">+7 (861) 123-45-67</p>
                <p className="text-gray-600">Работаем 24/7</p>
                <Button className="mt-4 bg-orange-600 hover:bg-orange-700">
                  <Icon name="Phone" size={16} className="mr-2" />
                  Позвонить
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" size={24} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Напишите в WhatsApp</h3>
                <p className="text-gray-600 mb-4">Быстрые ответы в мессенджере</p>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Написать
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Отправьте email</h3>
                <p className="text-gray-600 mb-2">info@instrumentburg.ru</p>
                <p className="text-sm text-gray-500 mb-4">Ответим в течение часа</p>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Icon name="Mail" size={16} className="mr-2" />
                  Написать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Отправить сообщение</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Имя *</Label>
                        <Input 
                          id="name" 
                          placeholder="Ваше имя"
                          value={contactForm.name}
                          onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Телефон *</Label>
                        <Input 
                          id="phone" 
                          placeholder="+7 (999) 123-45-67"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm(prev => ({ ...prev, phone: e.target.value }))}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email"
                        placeholder="your@email.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>

                    <div>
                      <Label>Тема обращения</Label>
                      <Select value={contactForm.subject} onValueChange={(value) => setContactForm(prev => ({ ...prev, subject: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тему" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rental">Аренда инструмента</SelectItem>
                          <SelectItem value="delivery">Доставка</SelectItem>
                          <SelectItem value="repair">Ремонт</SelectItem>
                          <SelectItem value="complaint">Жалоба</SelectItem>
                          <SelectItem value="suggestion">Предложение</SelectItem>
                          <SelectItem value="other">Другое</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Сообщение *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Опишите ваш вопрос или пожелание..."
                        rows={5}
                        value={contactForm.message}
                        onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                      />
                    </div>

                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      <Icon name="Send" size={16} className="mr-2" />
                      Отправить сообщение
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Наши офисы</h2>
              <div className="space-y-6">
                {contacts.map((contact, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{contact.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <Icon name="MapPin" size={16} className="text-gray-500 mt-1" />
                          <span className="text-sm">{contact.address}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Icon name="Phone" size={16} className="text-gray-500" />
                          <span className="text-sm font-semibold">{contact.phone}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Icon name="Mail" size={16} className="text-gray-500" />
                          <span className="text-sm">{contact.email}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Icon name="Clock" size={16} className="text-gray-500" />
                          <span className="text-sm">{contact.hours}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Мы в социальных сетях</h2>
            <p className="text-gray-600">Следите за новостями и акциями</p>
          </div>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 rounded-lg hover:bg-white hover:shadow-lg transition-all"
              >
                <div className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2 ${social.color}`}>
                  <Icon name={social.icon as any} size={24} />
                </div>
                <span className="text-sm font-medium">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Как нас найти</h2>
          </div>
          
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <Icon name="MapPin" size={48} className="text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Интерактивная карта</p>
              <p className="text-sm text-gray-500">г. Краснодар, ул. Строительная, 123</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;