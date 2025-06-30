import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icon name="Smartphone" className="text-blue-600" size={24} />
              <span className="text-xl font-bold text-gray-900">
                eSIM Store
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              Мгновенная активация eSIM для путешествий по всему миру. Быстро,
              надёжно, технологично.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Продукты</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/catalog"
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  Каталог eSIM
                </Link>
              </li>
              <li>
                <Link
                  to="/catalog?region=europe"
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  Европа
                </Link>
              </li>
              <li>
                <Link
                  to="/catalog?region=asia"
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  Азия
                </Link>
              </li>
              <li>
                <Link
                  to="/catalog?region=america"
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  Америка
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/how-it-works"
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  Как это работает
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  Техподдержка
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  Совместимые устройства
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} className="text-gray-400" />
                <span className="text-gray-600 text-sm">
                  help@esim-store.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon
                  name="MessageCircle"
                  size={16}
                  className="text-gray-400"
                />
                <span className="text-gray-600 text-sm">
                  24/7 Чат поддержки
                </span>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-blue-600">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600">
                  <Icon name="Instagram" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © 2024 eSIM Store. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
