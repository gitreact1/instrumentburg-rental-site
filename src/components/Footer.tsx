import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Wrench" className="text-orange-600" size={24} />
              <span className="text-xl font-bold">ИнструментБург</span>
            </div>
            <p className="text-gray-400 mb-4">
              Профессиональный прокат строительного инструмента в Краснодаре
            </p>
            <div className="flex space-x-4">
              <Icon name="Facebook" size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              <Icon name="Instagram" size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              <Icon name="MessageCircle" size={20} className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li><Link to="/catalog" className="text-gray-400 hover:text-white">Каталог</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Услуги</Link></li>
              <li><Link to="/delivery" className="text-gray-400 hover:text-white">Доставка</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">О нас</Link></li>
              <li><Link to="/reviews" className="text-gray-400 hover:text-white">Отзывы</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><Link to="/catalog/electric" className="text-gray-400 hover:text-white">Электроинструмент</Link></li>
              <li><Link to="/catalog/construction" className="text-gray-400 hover:text-white">Строительное оборудование</Link></li>
              <li><Link to="/catalog/garden" className="text-gray-400 hover:text-white">Садовая техника</Link></li>
              <li><Link to="/services/repair" className="text-gray-400 hover:text-white">Ремонт инструмента</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} className="text-orange-600" />
                <span className="text-gray-400">+7 (861) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} className="text-orange-600" />
                <span className="text-gray-400">info@instrumentburg.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} className="text-orange-600" />
                <span className="text-gray-400">г. Краснодар, ул. Строительная, 123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-orange-600" />
                <span className="text-gray-400">Работаем 24/7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 ИнструментБург. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;