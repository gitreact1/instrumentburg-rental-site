import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { number: '5+', label: 'лет на рынке' },
    { number: '500+', label: 'единиц техники' },
    { number: '1000+', label: 'довольных клиентов' },
    { number: '24/7', label: 'поддержка' }
  ];

  const team = [
    {
      name: 'Алексей Петров',
      position: 'Директор',
      experience: '10 лет в строительстве',
      photo: '/img/team-1.jpg'
    },
    {
      name: 'Мария Сидорова',
      position: 'Менеджер по работе с клиентами',
      experience: '5 лет в сфере услуг',
      photo: '/img/team-2.jpg'
    },
    {
      name: 'Дмитрий Козлов',
      position: 'Технический специалист',
      experience: '8 лет работы с инструментом',
      photo: '/img/team-3.jpg'
    }
  ];

  const values = [
    {
      icon: 'Shield',
      title: 'Надежность',
      description: 'Весь инструмент проходит тщательную проверку перед выдачей'
    },
    {
      icon: 'Users',
      title: 'Клиентоориентированность',
      description: 'Индивидуальный подход к каждому клиенту и его потребностям'
    },
    {
      icon: 'Award',
      title: 'Качество',
      description: 'Работаем только с проверенными брендами и поставщиками'
    },
    {
      icon: 'Clock',
      title: 'Оперативность',
      description: 'Быстрое решение вопросов и своевременная доставка'
    }
  ];

  const achievements = [
    '2019 - Основание компании',
    '2020 - Запуск службы доставки',
    '2021 - Открытие второго склада',
    '2022 - Расширение ассортимента до 500+ позиций',
    '2023 - Запуск онлайн-платформы',
    '2024 - Получение сертификата качества ISO 9001'
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">О компании ИнструментБург</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Мы — команда профессионалов, которая уже более 5 лет помогает строителям, 
            ремонтникам и мастерам находить качественный инструмент для любых задач
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша история</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  ИнструментБург был основан в 2019 году группой энтузиастов, которые понимали, 
                  как важно иметь доступ к качественному инструменту без необходимости его покупки.
                </p>
                <p>
                  Начав с небольшого склада и 50 единиц техники, мы постепенно расширяли ассортимент, 
                  улучшали сервис и развивали географию присутствия.
                </p>
                <p>
                  Сегодня мы гордимся тем, что стали надежным партнером для сотен строительных 
                  компаний и частных мастеров по всему Краснодарскому краю.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Ключевые достижения</h3>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="Check" size={16} className="text-green-600 mt-1" />
                    <span className="text-sm text-gray-600">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши ценности</h2>
            <p className="text-gray-600 text-lg">Принципы, которыми мы руководствуемся в работе</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={value.icon as any} size={24} className="text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наша команда</h2>
            <p className="text-gray-600 text-lg">Профессионалы, которые делают нашу работу возможной</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={32} className="text-gray-500" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="secondary">{member.position}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
            Сделать профессиональный инструмент доступным для каждого, кто в нем нуждается, 
            обеспечивая высокое качество сервиса и справедливые цены
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                <Icon name="Search" size={20} className="mr-2" />
                Посмотреть каталог
              </Button>
            </Link>
            <Link to="/contacts">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Сертификаты и лицензии</h2>
            <p className="text-gray-600 text-lg">Подтверждение нашей надежности и профессионализма</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={24} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">ISO 9001:2015</h3>
                <p className="text-gray-600">Сертификат системы менеджмента качества</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={24} className="text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Лицензия на аренду</h3>
                <p className="text-gray-600">Официальное разрешение на предоставление услуг аренды</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="FileCheck" size={24} className="text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Страхование</h3>
                <p className="text-gray-600">Полное страхование ответственности и имущества</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;