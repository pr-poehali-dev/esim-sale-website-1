import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const supportOptions = [
    {
      icon: "MessageCircle",
      title: "Онлайн чат",
      description: "24/7 поддержка в реальном времени",
      action: "Начать чат",
      available: true,
    },
    {
      icon: "Mail",
      title: "Email поддержка",
      description: "Ответ в течение 2-4 часов",
      action: "Написать письмо",
      available: true,
    },
    {
      icon: "Phone",
      title: "Телефон",
      description: "Горячая линия для срочных вопросов",
      action: "+7 (800) 123-45-67",
      available: false,
    },
    {
      icon: "FileText",
      title: "База знаний",
      description: "Инструкции и ответы на частые вопросы",
      action: "Перейти к FAQ",
      available: true,
    },
  ];

  const commonIssues = [
    {
      icon: "Smartphone",
      title: "Проблемы с активацией",
      description: "eSIM не активируется или не подключается к сети",
      steps: [
        "Убедитесь, что ваше устройство поддерживает eSIM",
        "Проверьте, что вы находитесь в зоне покрытия сети",
        "Перезагрузите устройство",
        "Попробуйте активировать eSIM заново",
      ],
    },
    {
      icon: "Wifi",
      title: "Медленный интернет",
      description: "Низкая скорость соединения или прерывания",
      steps: [
        "Проверьте уровень сигнала сети",
        "Попробуйте переключиться между 4G и 5G",
        "Очистите кэш сетевых настроек",
        "Проверьте остаток трафика в тарифе",
      ],
    },
    {
      icon: "CreditCard",
      title: "Проблемы с оплатой",
      description: "Ошибки при покупке или возврат средств",
      steps: [
        "Проверьте корректность данных карты",
        "Убедитесь, что на карте достаточно средств",
        "Попробуйте другой способ оплаты",
        "Обратитесь в службу поддержки банка",
      ],
    },
  ];

  const faqs = [
    {
      question: "Какие устройства поддерживают eSIM?",
      answer:
        "eSIM поддерживают iPhone XS/XR и новее, Samsung Galaxy S20 и новее, Google Pixel 3 и новее, а также многие другие современные смартфоны. Полный список совместимых устройств можно найти в базе знаний.",
    },
    {
      question: "Можно ли использовать eSIM без WiFi?",
      answer:
        "Для первоначальной активации eSIM требуется подключение к интернету (WiFi или мобильные данные). После активации eSIM работает независимо.",
    },
    {
      question: "Что делать, если QR-код не сканируется?",
      answer:
        "Попробуйте увеличить яркость экрана, очистить камеру телефона, или ввести данные eSIM вручную. Инструкции для ручного ввода приходят вместе с QR-кодом.",
    },
    {
      question: "Можно ли отменить заказ eSIM?",
      answer:
        "Отмена возможна в течение 1 часа после покупки, если eSIM ещё не была активирована. После активации возврат средств невозможен согласно условиям использования.",
    },
    {
      question: "Работает ли eSIM в роуминге?",
      answer:
        "eSIM работает только в той стране или регионе, для которой была приобретена. Для путешествий в другие страны необходимо купить соответствующий тариф.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Спасибо за обращение, ${formData.name}!\n\nВаше сообщение отправлено в службу поддержки. Мы ответим на ${formData.email} в ближайшее время.`,
    );
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Поддержка и помощь
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы здесь, чтобы помочь вам с любыми вопросами по eSIM. Наша команда
            поддержки работает 24/7.
          </p>
        </div>

        {/* Support Options */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Способы связи
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-md transition-shadow ${!option.available ? "opacity-60" : ""}`}
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                      option.available ? "bg-blue-100" : "bg-gray-100"
                    }`}
                  >
                    <Icon
                      name={option.icon as any}
                      className={
                        option.available ? "text-blue-600" : "text-gray-400"
                      }
                      size={24}
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {option.description}
                  </p>
                  <Button
                    variant={option.available ? "default" : "outline"}
                    size="sm"
                    disabled={!option.available}
                    className="w-full"
                  >
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Common Issues */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Решение частых проблем
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {commonIssues.map((issue, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <Icon
                        name={issue.icon as any}
                        className="text-red-600"
                        size={20}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg">{issue.title}</h3>
                      <p className="text-sm text-gray-600 font-normal">
                        {issue.description}
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2">
                    {issue.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          {stepIndex + 1}
                        </span>
                        <span className="text-sm text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Mail" className="text-blue-600" size={24} />
                  Написать в поддержку
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Имя
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Тема обращения
                    </label>
                    <Input
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        handleInputChange("subject", e.target.value)
                      }
                      placeholder="Кратко опишите проблему"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Сообщение
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="Подробно опишите вашу проблему или вопрос..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Icon name="Send" size={16} />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Часто задаваемые вопросы
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-lg px-4 bg-white"
                >
                  <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-0">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>

        {/* Emergency Contact */}
        <section className="mt-16 bg-orange-50 rounded-lg p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="AlertTriangle" className="text-orange-600" size={24} />
            <h2 className="text-xl font-bold text-gray-900">
              Экстренная поддержка
            </h2>
          </div>
          <p className="text-gray-600 mb-4">
            Если у вас критическая проблема с подключением в поездке,
            используйте приоритетный канал поддержки
          </p>
          <Button
            variant="outline"
            className="border-orange-300 text-orange-700 hover:bg-orange-100"
          >
            <Icon name="Phone" size={16} />
            Экстренная связь
          </Button>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Support;
