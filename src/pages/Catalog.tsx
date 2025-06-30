import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

interface ESIMPlan {
  id: string;
  country: string;
  countryCode: string;
  region: string;
  flag: string;
  plans: {
    id: string;
    data: string;
    duration: string;
    price: number;
    popular?: boolean;
  }[];
}

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");

  const esimPlans: ESIMPlan[] = [
    {
      id: "usa",
      country: "США",
      countryCode: "US",
      region: "america",
      flag: "🇺🇸",
      plans: [
        {
          id: "usa-1",
          data: "5 ГБ",
          duration: "7 дней",
          price: 12,
          popular: true,
        },
        { id: "usa-2", data: "10 ГБ", duration: "15 дней", price: 24 },
        { id: "usa-3", data: "20 ГБ", duration: "30 дней", price: 45 },
      ],
    },
    {
      id: "germany",
      country: "Германия",
      countryCode: "DE",
      region: "europe",
      flag: "🇩🇪",
      plans: [
        { id: "de-1", data: "3 ГБ", duration: "7 дней", price: 8 },
        {
          id: "de-2",
          data: "8 ГБ",
          duration: "15 дней",
          price: 18,
          popular: true,
        },
        { id: "de-3", data: "15 ГБ", duration: "30 дней", price: 32 },
      ],
    },
    {
      id: "japan",
      country: "Япония",
      countryCode: "JP",
      region: "asia",
      flag: "🇯🇵",
      plans: [
        { id: "jp-1", data: "5 ГБ", duration: "7 дней", price: 15 },
        {
          id: "jp-2",
          data: "10 ГБ",
          duration: "15 дней",
          price: 28,
          popular: true,
        },
        { id: "jp-3", data: "25 ГБ", duration: "30 дней", price: 55 },
      ],
    },
    {
      id: "france",
      country: "Франция",
      countryCode: "FR",
      region: "europe",
      flag: "🇫🇷",
      plans: [
        { id: "fr-1", data: "3 ГБ", duration: "7 дней", price: 9 },
        { id: "fr-2", data: "8 ГБ", duration: "15 дней", price: 19 },
        {
          id: "fr-3",
          data: "15 ГБ",
          duration: "30 дней",
          price: 34,
          popular: true,
        },
      ],
    },
    {
      id: "thailand",
      country: "Таиланд",
      countryCode: "TH",
      region: "asia",
      flag: "🇹🇭",
      plans: [
        { id: "th-1", data: "5 ГБ", duration: "7 дней", price: 11 },
        {
          id: "th-2",
          data: "12 ГБ",
          duration: "15 дней",
          price: 22,
          popular: true,
        },
        { id: "th-3", data: "20 ГБ", duration: "30 дней", price: 38 },
      ],
    },
    {
      id: "uk",
      country: "Великобритания",
      countryCode: "GB",
      region: "europe",
      flag: "🇬🇧",
      plans: [
        { id: "uk-1", data: "4 ГБ", duration: "7 дней", price: 10 },
        {
          id: "uk-2",
          data: "10 ГБ",
          duration: "15 дней",
          price: 21,
          popular: true,
        },
        { id: "uk-3", data: "18 ГБ", duration: "30 дней", price: 39 },
      ],
    },
  ];

  const regions = [
    { id: "all", name: "Все регионы", icon: "Globe" },
    { id: "europe", name: "Европа", icon: "MapPin" },
    { id: "asia", name: "Азия", icon: "MapPin" },
    { id: "america", name: "Америка", icon: "MapPin" },
  ];

  const filteredPlans = esimPlans.filter((plan) => {
    const matchesSearch = plan.country
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesRegion =
      selectedRegion === "all" || plan.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  const handlePurchase = (planId: string, countryName: string) => {
    alert(
      `Покупка eSIM для ${countryName} (ID: ${planId})\n\nВ реальном приложении здесь будет процесс оплаты с мгновенной активацией!`,
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Каталог eSIM
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Выберите страну и тарифный план. Активация происходит мгновенно
            после оплаты.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="flex-1">
              <div className="relative">
                <Icon
                  name="Search"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <Input
                  placeholder="Поиск по стране..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <Button
                  key={region.id}
                  variant={selectedRegion === region.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedRegion(region.id)}
                  className="flex items-center gap-2"
                >
                  <Icon name={region.icon as any} size={16} />
                  {region.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredPlans.map((country) => (
            <Card
              key={country.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <span className="text-2xl">{country.flag}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{country.country}</h3>
                    <p className="text-sm text-gray-500 font-normal">
                      {country.countryCode}
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {country.plans.map((plan) => (
                  <div
                    key={plan.id}
                    className="relative border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                  >
                    {plan.popular && (
                      <Badge className="absolute -top-2 left-4 bg-blue-600">
                        Популярный
                      </Badge>
                    )}
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="font-semibold text-gray-900">
                          {plan.data}
                        </div>
                        <div className="text-sm text-gray-600">
                          {plan.duration}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">
                          ${plan.price}
                        </div>
                      </div>
                    </div>
                    <Button
                      className="w-full"
                      size="sm"
                      onClick={() => handlePurchase(plan.id, country.country)}
                    >
                      <Icon name="Zap" size={16} />
                      Купить мгновенно
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPlans.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="Search"
              className="mx-auto text-gray-400 mb-4"
              size={48}
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Ничего не найдено
            </h3>
            <p className="text-gray-600">
              Попробуйте изменить параметры поиска
            </p>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <Icon
              name="Info"
              className="text-blue-600 flex-shrink-0 mt-1"
              size={20}
            />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Важная информация
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  • eSIM активируется автоматически в течение 1 минуты после
                  оплаты
                </li>
                <li>
                  • QR-код для активации приходит на указанную при покупке почту
                </li>
                <li>
                  • Поддерживаются устройства iPhone XS/XR и новее, Google Pixel
                  3 и новее
                </li>
                <li>
                  • Интернет работает сразу по прилёту в страну назначения
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Catalog;
