import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    participantsCount: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', company: '', email: '', phone: '', eventType: '', eventDate: '', participantsCount: '', budget: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              EventPro
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'О мне', 'Услуги', 'Мероприятия', 'Блог', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('контакты')} className="hidden md:flex">
              Связаться
            </Button>
          </div>
        </nav>
      </header>

      <section id="главная" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 animate-pulse-glow" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}} />
        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <Badge className="bg-secondary/20 text-secondary border-secondary/30 hover:bg-secondary/30 animate-bounce-subtle">
                PR/GR Специалист
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Создаём события, которые{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  запоминаются
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Организация бизнес-форумов, конференций, фестивалей и круглых столов на высшем уровне
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button size="lg" onClick={() => scrollToSection('контакты')} className="group">
                  Начать проект
                  <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('мероприятия')}>
                  Портфолио
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl animate-pulse-glow" />
              <div className="relative bg-card rounded-3xl p-8 shadow-2xl border">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: 'Users', label: 'Участников', value: '10K+' },
                    { icon: 'CalendarDays', label: 'Мероприятий', value: '150+' },
                    { icon: 'Trophy', label: 'Наград', value: '25+' },
                    { icon: 'Star', label: 'Рейтинг', value: '5.0' }
                  ].map((stat, i) => (
                    <div key={i} className="text-center space-y-2 animate-fade-in" style={{animationDelay: `${i * 0.1}s`}}>
                      <div className="w-12 h-12 mx-auto bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <Icon name={stat.icon} className="text-white" size={24} />
                      </div>
                      <div className="text-3xl font-bold">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="о-мне" className="py-20 px-4 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-spin-slow" />
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <Badge variant="outline" className="text-primary border-primary">
              Обо мне
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Профессиональный подход к каждому событию
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              С 2015 года успешно реализую проекты в сфере event-менеджмента. Специализируюсь на организации
              масштабных бизнес-мероприятий, где каждая деталь продумана до мелочей. Работала с крупнейшими
              корпорациями и государственными структурами, создавая события федерального масштаба.
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              {[
                { icon: 'Sparkles', title: 'Креативность', text: 'Уникальные концепции для каждого проекта' },
                { icon: 'Target', title: 'Точность', text: 'Выполнение в срок без компромиссов' },
                { icon: 'Heart', title: 'Вовлечённость', text: 'Глубокое погружение в каждый проект' }
              ].map((item, i) => (
                <Card key={i} className="border-2 hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{animationDelay: `${i * 0.2}s`}}>
                  <CardContent className="pt-6 text-center space-y-3">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center hover:rotate-12 transition-transform duration-300">
                      <Icon name={item.icon} className="text-white" size={28} />
                    </div>
                    <h3 className="font-semibold text-xl">{item.title}</h3>
                    <p className="text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <Badge variant="outline" className="text-secondary border-secondary">
              Услуги
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">Что я предлагаю</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по организации и проведению мероприятий любого формата
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'Briefcase',
                title: 'Бизнес-форумы',
                description: 'Организация масштабных форумов с международными спикерами',
                gradient: 'from-primary to-primary/60'
              },
              {
                icon: 'Presentation',
                title: 'Конференции',
                description: 'Профессиональные конференции с full-service сопровождением',
                gradient: 'from-secondary to-secondary/60'
              },
              {
                icon: 'Music',
                title: 'Фестивали',
                description: 'Креативные фестивали с уникальной атмосферой',
                gradient: 'from-accent to-accent/60'
              },
              {
                icon: 'MessageCircle',
                title: 'Круглые столы',
                description: 'Камерные дискуссии с экспертами отрасли',
                gradient: 'from-primary to-secondary'
              }
            ].map((service, i) => (
              <Card key={i} className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 hover:border-primary overflow-hidden animate-fade-in" style={{animationDelay: `${i * 0.15}s`}}>
                <CardHeader>
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <Icon name={service.icon} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Узнать больше
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="мероприятия" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <Badge variant="outline" className="text-accent border-accent">
              Портфолио
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">Реализованные проекты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры успешно проведённых мероприятий
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Tech Summit 2024', type: 'Конференция', attendees: '2500', date: 'Март 2024' },
              { title: 'Creative Fest', type: 'Фестиваль', attendees: '5000', date: 'Июнь 2024' },
              { title: 'Business Forum', type: 'Форум', attendees: '1200', date: 'Сентябрь 2024' },
              { title: 'Innovation Day', type: 'Круглый стол', attendees: '150', date: 'Октябрь 2024' },
              { title: 'Digital Conference', type: 'Конференция', attendees: '3000', date: 'Ноябрь 2024' },
              { title: 'Culture Week', type: 'Фестиваль', attendees: '8000', date: 'Декабрь 2024' }
            ].map((event, i) => (
              <Card key={i} className="group overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-scale-in" style={{animationDelay: `${i * 0.1}s`}}>
                <div className="h-48 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5 group-hover:to-white/10 transition-all" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-white/90 text-foreground hover:bg-white mb-2">{event.type}</Badge>
                  </div>
                </div>
                <CardContent className="pt-6 space-y-3">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Users" size={16} />
                      <span>{event.attendees}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Calendar" size={16} />
                      <span>{event.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="блог" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <Badge variant="outline" className="text-primary border-primary">
              Блог
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">Последние статьи</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Тренды event-индустрии 2024',
                excerpt: 'Какие форматы мероприятий будут популярны в следующем году',
                date: '15 декабря 2024',
                readTime: '5 мин'
              },
              {
                title: 'Как выбрать площадку для форума',
                excerpt: 'Чек-лист из 10 критериев для идеального выбора локации',
                date: '10 декабря 2024',
                readTime: '7 мин'
              },
              {
                title: 'Гибридные форматы мероприятий',
                excerpt: 'Преимущества совмещения офлайн и онлайн событий',
                date: '5 декабря 2024',
                readTime: '6 мин'
              }
            ].map((post, i) => (
              <Card key={i} className="hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group cursor-pointer animate-fade-in-up" style={{animationDelay: `${i * 0.15}s`}}>
                <div className="h-40 bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <CardContent className="pt-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-1" size={14} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" />
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <Badge variant="outline" className="text-secondary border-secondary">
              Заказ мероприятия
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">Закажите организацию мероприятия</h2>
            <p className="text-lg text-muted-foreground">
              Расскажите о вашем проекте, и мы подготовим индивидуальное предложение
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="shadow-2xl animate-fade-in-left">
              <CardHeader>
                <CardTitle className="text-2xl">Заказать мероприятие</CardTitle>
                <CardDescription>Заполните форму, и мы свяжемся с вами в течение 24 часов</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Контактное лицо *</Label>
                      <Input
                        id="name"
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Компания</Label>
                      <Input
                        id="company"
                        placeholder="ООО &quot;Компания&quot;"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ivan@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="eventType">Тип мероприятия *</Label>
                      <Input
                        id="eventType"
                        placeholder="Конференция, форум, фестиваль..."
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventDate">Желаемая дата</Label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="participantsCount">Количество участников</Label>
                      <Input
                        id="participantsCount"
                        type="number"
                        placeholder="100"
                        value={formData.participantsCount}
                        onChange={(e) => setFormData({ ...formData, participantsCount: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Бюджет (руб.)</Label>
                      <Input
                        id="budget"
                        placeholder="500 000"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Описание мероприятия</Label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите подробнее о целях, формате, ожидаемых результатах..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Отправить запрос
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8 animate-fade-in-right">
              <Card>
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { icon: 'Mail', label: 'Email', value: 'info@eventpro.ru' },
                    { icon: 'Phone', label: 'Телефон', value: '+7 (495) 123-45-67' },
                    { icon: 'MapPin', label: 'Адрес', value: 'Москва, ул. Примерная, 1' }
                  ].map((contact, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={contact.icon} className="text-primary" size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{contact.label}</div>
                        <div className="font-medium">{contact.value}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Социальные сети</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {['Linkedin', 'Instagram', 'Facebook', 'Twitter'].map((social, i) => (
                      <button
                        key={i}
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-300 animate-bounce-subtle"
                        style={{animationDelay: `${i * 0.2}s`}}
                      >
                        <Icon name={social} className="text-white" size={20} />
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary to-secondary text-white border-0 hover:scale-105 transition-transform duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Sparkles" size={32} className="flex-shrink-0" />
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg">Эксклюзивное предложение</h3>
                      <p className="text-white/90 text-sm">
                        Зарегистрируйтесь на ближайшее мероприятие и получите скидку 20% на дополнительные услуги
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold">EventPro</div>
              <p className="text-sm text-background/80">
                Профессиональная организация мероприятий любого масштаба
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <div className="space-y-2 text-sm">
                {['Главная', 'О мне', 'Услуги', 'Мероприятия'].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="block hover:text-primary transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <div className="space-y-2 text-sm text-background/80">
                <div>Бизнес-форумы</div>
                <div>Конференции</div>
                <div>Фестивали</div>
                <div>Круглые столы</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-background/80">
                <div>info@eventpro.ru</div>
                <div>+7 (495) 123-45-67</div>
                <div>Москва, ул. Примерная, 1</div>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
            © 2024 EventPro. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;