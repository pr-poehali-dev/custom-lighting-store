import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  title: string;
  category: string;
  style: string;
  room: string;
  image: string;
  price: number;
  oldPrice?: number;
  inStock: boolean;
}

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
  const [showCatalogMenu, setShowCatalogMenu] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      title: 'Подвесной светильник Minimal',
      category: 'Подвесные светильники',
      style: 'Скандинавский',
      room: 'Гостиная',
      image: 'https://cdn.poehali.dev/projects/87b89107-437d-45af-b277-9fd4aca14442/files/33f61662-7a1d-48e4-96d6-22c1c11436e4.jpg',
      price: 24900,
      oldPrice: 32000,
      inStock: true
    },
    {
      id: 2,
      title: 'Торшер Arc Contemporary',
      category: 'Торшеры',
      style: 'Современный',
      room: 'Гостиная',
      image: 'https://cdn.poehali.dev/projects/87b89107-437d-45af-b277-9fd4aca14442/files/f17eee7f-dbc7-4d12-b379-a78d55d30258.jpg',
      price: 28000,
      inStock: true
    },
    {
      id: 3,
      title: 'Настольная лампа Geometric',
      category: 'Настольные лампы',
      style: 'Loft',
      room: 'Кабинет',
      image: 'https://cdn.poehali.dev/projects/87b89107-437d-45af-b277-9fd4aca14442/files/45c56846-3f2d-4e6d-99a9-697fa64153ef.jpg',
      price: 18000,
      inStock: true
    }
  ];

  const categories = [
    { name: 'Люстры', icon: 'Sparkles', count: 1250 },
    { name: 'Подвесные светильники', icon: 'Lightbulb', count: 850 },
    { name: 'Потолочные светильники', icon: 'Circle', count: 620 },
    { name: 'Торшеры', icon: 'Lamp', count: 340 },
    { name: 'Настольные лампы', icon: 'LampDesk', count: 280 },
    { name: 'Бра', icon: 'LampWallDown', count: 450 }
  ];

  const styles = ['Скандинавский', 'Loft', 'Современный', 'Минимализм', 'Классический', 'Хай-тек'];
  const rooms = ['Гостиная', 'Спальня', 'Кухня', 'Кабинет', 'Детская', 'Прихожая'];

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(f => f !== id));
      setFavoritesCount(favoritesCount - 1);
    } else {
      setFavorites([...favorites, id]);
      setFavoritesCount(favoritesCount + 1);
    }
  };

  const addToCart = (id: number) => {
    if (!cart.includes(id)) {
      setCart([...cart, id]);
      setCartCount(cartCount + 1);
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesStyle = selectedStyles.length === 0 || selectedStyles.includes(product.style);
    const matchesRoom = selectedRooms.length === 0 || selectedRooms.includes(product.room);
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPrice && matchesStyle && matchesRoom && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="bg-primary text-white py-2">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <span className="font-medium">Салоны света по всей России</span>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-80 transition-opacity">Магазины</a>
              <a href="#" className="hover:opacity-80 transition-opacity">Доставка</a>
              <a href="#" className="hover:opacity-80 transition-opacity flex items-center gap-1">
                <Icon name="Phone" size={14} />
                8 800 222 0000
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl font-bold tracking-tight">LUMIÈRE</h1>

            <div 
              className="relative"
              onMouseEnter={() => setShowCatalogMenu(true)}
              onMouseLeave={() => setShowCatalogMenu(false)}
            >
              <Button variant="outline" className="gap-2">
                <Icon name="Menu" size={20} />
                Каталог
              </Button>
              
              {showCatalogMenu && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-border rounded-lg shadow-xl p-6 w-[600px] animate-fade-in">
                  <div className="grid grid-cols-2 gap-4">
                    {categories.map((cat, idx) => (
                      <a 
                        key={idx}
                        href="#catalog"
                        className="flex items-center gap-3 p-3 hover:bg-muted rounded-lg transition-colors group"
                      >
                        <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                          <Icon name={cat.icon as any} size={20} />
                        </div>
                        <div>
                          <div className="font-medium">{cat.name}</div>
                          <div className="text-xs text-muted-foreground">{cat.count} товаров</div>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="text-sm font-medium mb-2">По стилю:</div>
                    <div className="flex flex-wrap gap-2">
                      {styles.map((style, idx) => (
                        <Badge key={idx} variant="outline" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
                          {style}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Input
                  placeholder="Поиск светильников..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10"
                />
                <Icon name="Search" size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="User" size={20} />
              </Button>
              
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="Heart" size={20} />
                {favoritesCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {favoritesCount}
                  </span>
                )}
              </Button>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Icon name="ShoppingCart" size={20} />
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Корзина ({cartCount})</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    {cart.length === 0 ? (
                      <div className="text-center py-12 text-muted-foreground">
                        <Icon name="ShoppingCart" size={48} className="mx-auto mb-3 opacity-50" />
                        <p>Корзина пуста</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {cart.map(id => {
                          const product = products.find(p => p.id === id);
                          return product ? (
                            <div key={id} className="flex gap-3 p-3 border border-border rounded-lg">
                              <img src={product.image} alt={product.title} className="w-20 h-20 object-cover rounded" />
                              <div className="flex-1">
                                <div className="font-medium text-sm">{product.title}</div>
                                <div className="text-lg font-bold mt-1">{product.price.toLocaleString()} ₽</div>
                              </div>
                            </div>
                          ) : null;
                        })}
                        <div className="pt-4 border-t border-border">
                          <div className="flex justify-between mb-4">
                            <span className="font-medium">Итого:</span>
                            <span className="text-2xl font-bold">
                              {cart.reduce((sum, id) => {
                                const product = products.find(p => p.id === id);
                                return sum + (product?.price || 0);
                              }, 0).toLocaleString()} ₽
                            </span>
                          </div>
                          <Button className="w-full" size="lg">
                            Оформить заказ
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Светильники для вашего дома
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Более 3000 моделей от ведущих производителей
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              <Icon name="Sparkles" size={20} className="mr-2" />
              Смотреть новинки
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="TrendingDown" size={20} className="mr-2" />
              Распродажа
            </Button>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex gap-8">
            <aside className="w-72 flex-shrink-0">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <Icon name="SlidersHorizontal" size={18} />
                        Фильтры
                      </h3>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-muted-foreground"
                        onClick={() => {
                          setPriceRange([0, 100000]);
                          setSelectedStyles([]);
                          setSelectedRooms([]);
                        }}
                      >
                        Сбросить всё
                      </Button>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-3 block">
                        Цена: {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} ₽
                      </label>
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        min={0}
                        max={100000}
                        step={1000}
                        className="mb-2"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-3 block">Стиль</label>
                      <div className="space-y-2">
                        {styles.map((style, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Checkbox
                              id={`style-${idx}`}
                              checked={selectedStyles.includes(style)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setSelectedStyles([...selectedStyles, style]);
                                } else {
                                  setSelectedStyles(selectedStyles.filter(s => s !== style));
                                }
                              }}
                            />
                            <label htmlFor={`style-${idx}`} className="text-sm cursor-pointer">
                              {style}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-3 block">Помещение</label>
                      <div className="space-y-2">
                        {rooms.map((room, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Checkbox
                              id={`room-${idx}`}
                              checked={selectedRooms.includes(room)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setSelectedRooms([...selectedRooms, room]);
                                } else {
                                  setSelectedRooms(selectedRooms.filter(r => r !== room));
                                }
                              }}
                            />
                            <label htmlFor={`room-${idx}`} className="text-sm cursor-pointer">
                              {room}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>

            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">
                  Найдено: {filteredProducts.length} {filteredProducts.length === 1 ? 'товар' : 'товара'}
                </h3>
                <select className="border border-border rounded-lg px-4 py-2 text-sm">
                  <option>По популярности</option>
                  <option>Сначала дешевые</option>
                  <option>Сначала дорогие</option>
                  <option>По новизне</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative overflow-hidden aspect-square">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {product.oldPrice && (
                        <Badge className="absolute top-3 left-3 bg-red-500">
                          Скидка {Math.round((1 - product.price / product.oldPrice) * 100)}%
                        </Badge>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-3 right-3 bg-white hover:bg-white hover:text-red-500"
                        onClick={() => toggleFavorite(product.id)}
                      >
                        <Icon 
                          name="Heart" 
                          size={20}
                          className={favorites.includes(product.id) ? 'fill-red-500 text-red-500' : ''}
                        />
                      </Button>
                      {product.inStock && (
                        <div className="absolute bottom-3 left-3">
                          <Badge variant="outline" className="bg-white">
                            <Icon name="Check" size={14} className="mr-1" />
                            В наличии
                          </Badge>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <div className="text-xs text-muted-foreground mb-1">{product.category}</div>
                      <h4 className="font-semibold mb-2 line-clamp-2">{product.title}</h4>
                      <div className="flex gap-2 mb-3">
                        <Badge variant="outline" className="text-xs">{product.style}</Badge>
                        <Badge variant="outline" className="text-xs">{product.room}</Badge>
                      </div>
                      <div className="flex items-end gap-2 mb-3">
                        <div className="text-2xl font-bold">{product.price.toLocaleString()} ₽</div>
                        {product.oldPrice && (
                          <div className="text-sm text-muted-foreground line-through">
                            {product.oldPrice.toLocaleString()} ₽
                          </div>
                        )}
                      </div>
                      <Button 
                        className="w-full" 
                        onClick={() => addToCart(product.id)}
                        disabled={cart.includes(product.id)}
                      >
                        {cart.includes(product.id) ? (
                          <>
                            <Icon name="Check" size={16} className="mr-2" />
                            В корзине
                          </>
                        ) : (
                          <>
                            <Icon name="ShoppingCart" size={16} className="mr-2" />
                            В корзину
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-20">
                  <Icon name="SearchX" size={64} className="mx-auto mb-4 text-muted-foreground opacity-50" />
                  <h3 className="text-xl font-semibold mb-2">Ничего не найдено</h3>
                  <p className="text-muted-foreground">Попробуйте изменить параметры фильтра</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-4 mt-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">LUMIÈRE</h3>
              <p className="text-sm opacity-80 mb-4">
                Салоны света и декора по всей России
              </p>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20">
                  <Icon name="Facebook" size={20} />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Покупателям</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100">Доставка и оплата</a></li>
                <li><a href="#" className="hover:opacity-100">Гарантии</a></li>
                <li><a href="#" className="hover:opacity-100">Возврат товара</a></li>
                <li><a href="#" className="hover:opacity-100">Политика конфиденциальности</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100">Люстры</a></li>
                <li><a href="#" className="hover:opacity-100">Светильники</a></li>
                <li><a href="#" className="hover:opacity-100">Торшеры</a></li>
                <li><a href="#" className="hover:opacity-100">Бра</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-3 text-sm opacity-80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  8 800 222 0000
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@lumiere.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  Ежедневно 9:00-21:00
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 text-center text-sm opacity-60">
            © 2024 LUMIÈRE. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
