import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Index = () => {
  const features = [
    {
      icon: "Zap",
      title: "Мгновенная активация",
      description:
        "eSIM активируется сразу после оплаты. Никаких ожиданий и задержек.",
    },
    {
      icon: "Globe",
      title: "Покрытие по всему миру",
      description: "Более 190 стран с высококачественной мобильной связью.",
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Защищённые транзакции и конфиденциальность ваших данных.",
    },
    {
      icon: "Smartphone",
      title: "Поддержка устройств",
      description:
        "Совместимость с iPhone, Android и другими eSIM устройствами.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Выберите страну",
      description: "Найдите нужную страну в каталоге",
    },
    {
      number: "02",
      title: "Оплатите",
      description: "Безопасная оплата картой или криптовалютой",
    },
    {
      number: "03",
      title: "Получите eSIM",
      description: "QR-код придёт на почту мгновенно",
    },
    {
      number: "04",
      title: "Активируйте",
      description: "Отсканируйте QR-код в настройках телефона",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              eSIM для путешествий
              <span className="text-blue-600 block">по всему миру</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Мгновенная активация после оплаты. Никаких физических SIM-карт,
              очередей и ожиданий. Технологично и просто.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link to="/catalog">
                  <Icon name="Search" size={20} />
                  Выбрать eSIM
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6"
              >
                <Link to="/how-it-works">
                  <Icon name="Play" size={20} />
                  Как это работает
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Современные технологии для комфортных путешествий
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={feature.icon as any}
                      className="text-blue-600"
                      size={24}
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Как это работает
            </h2>
            <p className="text-gray-600 text-lg">
              Всего 4 простых шага до активации
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/how-it-works">Подробная инструкция</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Готовы к путешествию?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Выберите eSIM для вашей страны назначения и получите мгновенный
            доступ к мобильной связи
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-6"
          >
            <Link to="/catalog">
              <Icon name="ArrowRight" size={20} />
              Начать сейчас
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
