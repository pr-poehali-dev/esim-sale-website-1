import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Выберите страну и тариф",
      description:
        "В каталоге найдите нужную страну и выберите подходящий тарифный план по объёму данных и длительности.",
      icon: "Search",
      details: [
        "Более 190 стран доступны для покупки",
        "Различные тарифы от 3 до 25 ГБ",
        "Периоды от 7 до 30 дней",
        "Прозрачные цены без скрытых комиссий",
      ],
    },
    {
      number: "02",
      title: "Безопасная оплата",
      description:
        "Оплатите выбранный тариф банковской картой или криптовалютой. Все транзакции защищены.",
      icon: "CreditCard",
      details: [
        "Принимаем Visa, Mastercard, МИР",
        "Поддержка криптовалют (BTC, ETH, USDT)",
        "SSL-шифрование всех платежей",
        "Мгновенное подтверждение оплаты",
      ],
    },
    {
      number: "03",
      title: "Получите QR-код",
      description:
        "Сразу после оплаты на вашу почту придёт QR-код для активации eSIM. Обычно это занимает меньше минуты.",
      icon: "QrCode",
      details: [
        "QR-код приходит в течение 1 минуты",
        "Дублируется SMS на указанный номер",
        "Инструкции по активации в письме",
        "Техподдержка 24/7 при возникновении проблем",
      ],
    },
    {
      number: "04",
      title: "Активируйте eSIM",
      description:
        "Отсканируйте QR-код в настройках вашего телефона. eSIM активируется автоматически при въезде в страну.",
      icon: "Smartphone",
      details: [
        "Простая активация через камеру телефона",
        "Автоматическое подключение к сети",
        "Работает параллельно с основной SIM",
        "Высокоскоростной интернет с первой минуты",
      ],
    },
  ];

  const devices = [
    {
      name: "iPhone",
      models: "XS, XR, 11, 12, 13, 14, 15 и новее",
      icon: "Smartphone",
    },
    {
      name: "Samsung",
      models: "Galaxy S20, S21, S22, S23, Note20 и новее",
      icon: "Smartphone",
    },
    {
      name: "Google Pixel",
      models: "3, 4, 5, 6, 7, 8 и новее",
      icon: "Smartphone",
    },
    {
      name: "Другие",
      models: "OnePlus, Huawei, Xiaomi с поддержкой eSIM",
      icon: "Smartphone",
    },
  ];

  const faqs = [
    {
      question: "Что такое eSIM?",
      answer:
        "eSIM (embedded SIM) — это встроенная SIM-карта, которая программируется удалённо. Она позволяет подключаться к мобильным сетям без физической SIM-карты.",
    },
    {
      question: "Как быстро активируется eSIM?",
      answer:
        "После оплаты QR-код приходит на почту в течение 1 минуты. Активация eSIM на устройстве занимает 2-3 минуты. Интернет начинает работать сразу в стране назначения.",
    },
    {
      question: "Могу ли я использовать eSIM вместе с основной SIM?",
      answer:
        "Да, eSIM работает параллельно с вашей основной SIM-картой. Вы можете принимать звонки на основной номер и пользоваться интернетом через eSIM.",
    },
    {
      question: "Что делать, если eSIM не активировалась?",
      answer:
        "Сначала проверьте, что ваше устройство поддерживает eSIM и вы находитесь в зоне покрытия. Если проблема остаётся, обратитесь в техподдержку 24/7.",
    },
    {
      question: "Можно ли использовать один eSIM в нескольких странах?",
      answer:
        "Это зависит от тарифа. Некоторые планы работают в нескольких странах региона (например, по всей Европе), другие — только в конкретной стране.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Как это работает
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Всего 4 простых шага от выбора тарифа до активации интернета в любой
            точке мира. Технология eSIM делает подключение мгновенным и удобным.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12 mb-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {step.title}
                  </h2>
                </div>
                <p className="text-gray-600 text-lg mb-6">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-3">
                      <Icon
                        name="Check"
                        className="text-green-600 flex-shrink-0"
                        size={16}
                      />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 max-w-md">
                <Card className="border-2 border-blue-100 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon
                        name={step.icon as any}
                        className="text-blue-600"
                        size={32}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Supported Devices */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Поддерживаемые устройства
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {devices.map((device, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={device.icon as any}
                      className="text-gray-600"
                      size={24}
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {device.name}
                  </h3>
                  <p className="text-sm text-gray-600">{device.models}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Не уверены, поддерживает ли ваше устройство eSIM?
            </p>
            <Button variant="outline" asChild>
              <Link to="/support">Проверить совместимость</Link>
            </Button>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Часто задаваемые вопросы
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-0">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Готовы попробовать?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Выберите eSIM для вашей поездки и получите мгновенный доступ к
            интернету по всему миру
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link to="/catalog">
              <Icon name="ArrowRight" size={20} />
              Выбрать eSIM
            </Link>
          </Button>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default HowItWorks;
