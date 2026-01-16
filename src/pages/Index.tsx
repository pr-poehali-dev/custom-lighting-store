import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
  };

  const catalogItems = [
    {
      id: 1,
      title: 'Кристальная люстра Aurora',
      category: 'Индивидуальное изготовление',
      image: 'https://cdn.poehali.dev/projects/87b89107-437d-45af-b277-9fd4aca14442/files/9d3ac888-333c-4af2-8e83-76b4a8b08594.jpg',
      price: 'По запросу'
    },
    {
      id: 2,
      title: 'Настенный светильник Brass',
      category: 'Известные марки',
      image: 'https://cdn.poehali.dev/projects/87b89107-437d-45af-b277-9fd4aca14442/files/9abe3754-0bc8-4b18-b17b-d00a3122c5e4.jpg',
      price: 'от 25 000 ₽'
    },
    {
      id: 3,
      title: 'Торшер Geometric Modern',
      category: 'Известные марки',
      image: 'https://cdn.poehali.dev/projects/87b89107-437d-45af-b277-9fd4aca14442/files/f3389440-fa2a-43c2-a368-b5bde598d6b1.jpg',
      price: 'от 35 000 ₽'
    }
  ];

  const portfolio = [
    { id: 1, title: 'Отель "Империал"', description: 'Комплексное освещение лобби и номеров класса люкс', image: catalogItems[0].image },
    { id: 2, title: 'Ресторан "Lumière"', description: 'Дизайнерские светильники для премиум интерьера', image: catalogItems[1].image },
    { id: 3, title: 'Частная резиденция', description: 'Индивидуальная коллекция авторских светильников', image: catalogItems[2].image }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold text-primary">LUMIÈRE</h1>
          <div className="hidden md:flex gap-8">
            <a href="#catalog" className="text-sm hover:text-accent transition-colors">Каталог</a>
            <a href="#wholesale" className="text-sm hover:text-accent transition-colors">Оптовые предложения</a>
            <a href="#portfolio" className="text-sm hover:text-accent transition-colors">Портфолио</a>
            <a href="#delivery" className="text-sm hover:text-accent transition-colors">Доставка</a>
            <a href="#contacts" className="text-sm hover:text-accent transition-colors">Контакты</a>
          </div>
          <Button variant="outline" size="sm" className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-primary">
            Свет создаёт атмосферу
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Индивидуальное изготовление светильников премиум-класса и оптовые поставки ведущих мировых брендов
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
              <Icon name="Sparkles" size={20} className="mr-2" />
              Заказать консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
              Смотреть каталог
            </Button>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">Каталог</h3>
            <p className="text-lg text-muted-foreground">Эксклюзивные светильники и проверенные бренды</p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="custom">Индивидуальные</TabsTrigger>
              <TabsTrigger value="brands">Бренды</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {catalogItems.map((item) => (
                  <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative overflow-hidden aspect-square">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-accent text-accent-foreground px-3 py-1 text-xs font-medium rounded-full">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-serif font-semibold mb-2">{item.title}</h4>
                      <p className="text-2xl font-bold text-accent mb-4">{item.price}</p>
                      <Button className="w-full" variant="outline">
                        <Icon name="Info" size={16} className="mr-2" />
                        Подробнее
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="custom" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {catalogItems.filter(item => item.category === 'Индивидуальное изготовление').map((item) => (
                  <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative overflow-hidden aspect-square">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-serif font-semibold mb-2">{item.title}</h4>
                      <p className="text-2xl font-bold text-accent mb-4">{item.price}</p>
                      <Button className="w-full" variant="outline">Подробнее</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="brands" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {catalogItems.filter(item => item.category === 'Известные марки').map((item) => (
                  <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative overflow-hidden aspect-square">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-serif font-semibold mb-2">{item.title}</h4>
                      <p className="text-2xl font-bold text-accent mb-4">{item.price}</p>
                      <Button className="w-full" variant="outline">Подробнее</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="wholesale" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Icon name="Package" size={64} className="mx-auto mb-6 text-accent" />
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">Оптовые предложения</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Специальные условия для дизайнеров интерьера, архитекторов и застройщиков. 
              Гибкая система скидок, индивидуальный подход, быстрая доставка по всей России.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6">
                <Icon name="TrendingDown" size={32} className="mx-auto mb-3 text-accent" />
                <h4 className="font-semibold mb-2">Скидки до 40%</h4>
                <p className="text-sm text-muted-foreground">При заказе от 10 единиц</p>
              </Card>
              <Card className="p-6">
                <Icon name="Truck" size={32} className="mx-auto mb-3 text-accent" />
                <h4 className="font-semibold mb-2">Бесплатная доставка</h4>
                <p className="text-sm text-muted-foreground">По Москве от 100 000 ₽</p>
              </Card>
              <Card className="p-6">
                <Icon name="Clock" size={32} className="mx-auto mb-3 text-accent" />
                <h4 className="font-semibold mb-2">Быстрое производство</h4>
                <p className="text-sm text-muted-foreground">От 14 рабочих дней</p>
              </Card>
            </div>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Icon name="FileText" size={20} className="mr-2" />
              Скачать прайс-лист
            </Button>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">Портфолио проектов</h3>
            <p className="text-lg text-muted-foreground">Реализованные проекты для премиум сегмента</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <h4 className="text-xl font-serif font-bold mb-1">{project.title}</h4>
                      <p className="text-sm">{project.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="consultation" className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Icon name="MessageSquare" size={64} className="mx-auto mb-6 text-accent" />
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4">Профессиональная консультация</h3>
            <p className="text-lg opacity-90">
              Наши специалисты помогут подобрать идеальное освещение для вашего проекта
            </p>
          </div>
          <Card className="bg-white p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Ваше имя *</label>
                  <Input 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Иван Петров"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Телефон *</label>
                  <Input 
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+7 (999) 123-45-67"
                    className="bg-background"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                <Input 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your@email.com"
                  className="bg-background"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Описание проекта</label>
                <Textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Расскажите о вашем проекте: тип помещения, площадь, предпочтения по стилю..."
                  rows={5}
                  className="bg-background"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить запрос
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </Card>
        </div>
      </section>

      <section id="delivery" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center text-primary">Доставка и оплата</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <Icon name="Truck" size={32} className="text-accent flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Доставка</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• По Москве и МО — от 1 дня</li>
                    <li>• По России — транспортными компаниями</li>
                    <li>• Международная доставка — по согласованию</li>
                    <li>• Профессиональная упаковка</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Shield" size={32} className="text-accent flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Гарантии</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Гарантия на светильники — до 5 лет</li>
                    <li>• Страхование при доставке</li>
                    <li>• Возврат в течение 14 дней</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start gap-4 mb-6">
                <Icon name="CreditCard" size={32} className="text-accent flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Способы оплаты</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Банковский перевод для юр. лиц</li>
                    <li>• Онлайн-оплата картой</li>
                    <li>• Наличные в шоу-руме</li>
                    <li>• Рассрочка до 12 месяцев</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="MapPin" size={32} className="text-accent flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Самовывоз</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Шоу-рум: Москва, ул. Примерная, д. 10</li>
                    <li>• Режим работы: Пн-Пт 10:00-20:00</li>
                    <li>• Сб-Вс 11:00-18:00</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-primary">Контакты</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6">
              <Icon name="Phone" size={32} className="mx-auto mb-3 text-accent" />
              <h4 className="font-semibold mb-2">Телефон</h4>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              <p className="text-sm text-muted-foreground mt-1">Ежедневно 9:00-21:00</p>
            </Card>
            <Card className="p-6">
              <Icon name="Mail" size={32} className="mx-auto mb-3 text-accent" />
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-muted-foreground">info@lumiere-light.ru</p>
              <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
            </Card>
            <Card className="p-6">
              <Icon name="MapPin" size={32} className="mx-auto mb-3 text-accent" />
              <h4 className="font-semibold mb-2">Адрес</h4>
              <p className="text-muted-foreground">Москва, ул. Примерная, 10</p>
              <p className="text-sm text-muted-foreground mt-1">Метро Парк Культуры</p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">LUMIÈRE</h2>
          <p className="text-sm opacity-80 mb-6">Премиум светильники и индивидуальные решения с 2010 года</p>
          <div className="flex justify-center gap-6 mb-6">
            <Button variant="ghost" size="sm" className="text-white hover:text-accent">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-accent">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-accent">
              <Icon name="Mail" size={20} />
            </Button>
          </div>
          <p className="text-xs opacity-60">© 2024 LUMIÈRE. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
