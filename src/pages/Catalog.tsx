import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const tools = [
    { id: 1, name: 'Перфоратор Bosch GBH 2-28', price: 500, category: 'Электроинструмент', brand: 'Bosch', image: '/img/abfaf011-d040-498c-b83d-ee538aa52793.jpg', available: true },
    { id: 2, name: 'Болгарка Makita GA9020', price: 400, category: 'Электроинструмент', brand: 'Makita', image: '/img/61ab0642-baac-4024-bde5-2a23eb96c09d.jpg', available: true },
    { id: 3, name: 'Дрель ударная DeWalt DWD024', price: 300, category: 'Электроинструмент', brand: 'DeWalt', image: '/img/a9332a6b-c23a-4b4e-ab87-9aa39ea79024.jpg', available: false },
    { id: 4, name: 'Шуруповёрт Bosch GSR 120-LI', price: 250, category: 'Электроинструмент', brand: 'Bosch', image: '/img/a9332a6b-c23a-4b4e-ab87-9aa39ea79024.jpg', available: true },
    { id: 5, name: 'Лобзик Makita JV0600K', price: 350, category: 'Электроинструмент', brand: 'Makita', image: '/img/61ab0642-baac-4024-bde5-2a23eb96c09d.jpg', available: true },
    { id: 6, name: 'Строительный миксер', price: 450, category: 'Строительное оборудование', brand: 'Интерскол', image: '/img/abfaf011-d040-498c-b83d-ee538aa52793.jpg', available: true },
    { id: 7, name: 'Бетономешалка 120л', price: 800, category: 'Строительное оборудование', brand: 'Калибр', image: '/img/abfaf011-d040-498c-b83d-ee538aa52793.jpg', available: true },
    { id: 8, name: 'Газонокосилка Husqvarna', price: 600, category: 'Садовая техника', brand: 'Husqvarna', image: '/img/61ab0642-baac-4024-bde5-2a23eb96c09d.jpg', available: true },
    { id: 9, name: 'Триммер STIHL FS 55', price: 400, category: 'Садовая техника', brand: 'STIHL', image: '/img/a9332a6b-c23a-4b4e-ab87-9aa39ea79024.jpg', available: true },
  ];

  const categories = ['Все', 'Электроинструмент', 'Строительное оборудование', 'Садовая техника'];
  const brands = ['Все', 'Bosch', 'Makita', 'DeWalt', 'Husqvarna', 'STIHL', 'Интерскол', 'Калибр'];

  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedBrand, setSelectedBrand] = useState('Все');

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Все' || tool.category === selectedCategory;
    const matchesBrand = selectedBrand === 'Все' || tool.brand === selectedBrand;
    return matchesSearch && matchesCategory && matchesBrand;
  });

  const sortedTools = [...filteredTools].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Каталог инструментов</h1>
            <p className="text-gray-600 text-lg">Профессиональный инструмент ведущих брендов</p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1">
              <Input
                placeholder="Поиск инструмента..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-md"
              />
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Категория" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Бренд" />
                </SelectTrigger>
                <SelectContent>
                  {brands.map(brand => (
                    <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">По названию</SelectItem>
                  <SelectItem value="price-low">Цена: по возрастанию</SelectItem>
                  <SelectItem value="price-high">Цена: по убыванию</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="grid" className="w-full">
            <div className="flex justify-between items-center mb-8">
              <p className="text-gray-600">
                Найдено инструментов: <span className="font-semibold">{sortedTools.length}</span>
              </p>
              <TabsList>
                <TabsTrigger value="grid">
                  <Icon name="Grid3X3" size={16} />
                </TabsTrigger>
                <TabsTrigger value="list">
                  <Icon name="List" size={16} />
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="grid">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedTools.map((tool) => (
                  <Card key={tool.id} className="group hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center overflow-hidden relative">
                        <img src={tool.image} alt={tool.name} className="w-full h-full object-cover" />
                        {!tool.available && (
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <Badge variant="destructive">Недоступно</Badge>
                          </div>
                        )}
                      </div>
                      <CardTitle className="text-lg">{tool.name}</CardTitle>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">{tool.category}</Badge>
                        <span className="text-sm text-gray-500">{tool.brand}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-orange-600">{tool.price}₽/день</span>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Link to={`/catalog/${tool.id}`} className="flex-1">
                          <Button 
                            className="w-full bg-orange-600 hover:bg-orange-700" 
                            disabled={!tool.available}
                          >
                            <Icon name="Eye" size={16} className="mr-2" />
                            Подробнее
                          </Button>
                        </Link>
                        {tool.available && (
                          <Button variant="outline" size="icon">
                            <Icon name="Heart" size={16} />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="list">
              <div className="space-y-4">
                {sortedTools.map((tool) => (
                  <Card key={tool.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden relative">
                          <img src={tool.image} alt={tool.name} className="w-full h-full object-cover" />
                          {!tool.available && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                              <Badge variant="destructive">Недоступно</Badge>
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="secondary">{tool.category}</Badge>
                                <span className="text-sm text-gray-500">{tool.brand}</span>
                              </div>
                              <div className="flex items-center space-x-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                  <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                                ))}
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="text-3xl font-bold text-orange-600">{tool.price}₽/день</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Link to={`/catalog/${tool.id}`}>
                              <Button 
                                className="bg-orange-600 hover:bg-orange-700" 
                                disabled={!tool.available}
                              >
                                <Icon name="Eye" size={16} className="mr-2" />
                                Подробнее
                              </Button>
                            </Link>
                            {tool.available && (
                              <Button variant="outline">
                                <Icon name="Heart" size={16} className="mr-2" />
                                В избранное
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {sortedTools.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" size={48} className="text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Инструменты не найдены</h3>
              <p className="text-gray-500">Попробуйте изменить параметры поиска</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Catalog;