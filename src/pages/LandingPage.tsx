import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Coffee, 
  ShoppingCart, 
  Star, 
  Truck, 
  Shield, 
  Award,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Twitter,
  Facebook,
  ChevronLeft,
  Sparkles,
  Heart,
  Clock,
  Plus
} from 'lucide-react'

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const products = [
    {
      id: 1,
      name: 'Corner Classic',
      description: 'قهوة عربية أصيلة بنكهة غنية ومميزة',
      price: 89,
      badge: 'الأكثر مبيعاً',
      emoji: '☕'
    },
    {
      id: 2,
      name: 'Corner Gold',
      description: 'مزيج فاخر من أجود حبوب البن الكولومبي',
      price: 129,
      badge: 'جديد',
      emoji: '✨'
    },
    {
      id: 3,
      name: 'Corner Espresso',
      description: 'قوة مضاعفة لعشاق الإسبريسو الأصيل',
      price: 99,
      badge: null,
      emoji: '🔥'
    },
    {
      id: 4,
      name: 'Corner Cappuccino',
      description: 'كريمي وناعم مع رغوة حليب مثالية',
      price: 109,
      badge: 'مميز',
      emoji: '🥛'
    }
  ]

  const features = [
    {
      icon: <Award size={32} />,
      title: 'جودة عالية',
      description: 'نختار أجود حبوب البن من أفضل المزارع حول العالم'
    },
    {
      icon: <Truck size={32} />,
      title: 'توصيل سريع',
      description: 'توصيل مجاني لجميع أنحاء المملكة خلال 24 ساعة'
    },
    {
      icon: <Shield size={32} />,
      title: 'ضمان الجودة',
      description: 'نضمن لك رضاك التام أو استرداد كامل المبلغ'
    },
    {
      icon: <Clock size={32} />,
      title: 'طازج دائماً',
      description: 'تحميص طازج يومياً لضمان أفضل نكهة'
    }
  ]

  const testimonials = [
    {
      name: 'أحمد محمد',
      role: 'عاشق قهوة',
      content: 'Coffee Corner غيرت مفهومي عن القهوة المختصة. نكهة استثنائية وجودة لا مثيل لها!',
      rating: 5,
      avatar: 'أ'
    },
    {
      name: 'سارة العلي',
      role: 'مدونة طعام',
      content: 'أفضل قهوة جربتها في حياتي. التوصيل سريع والتغليف فاخر جداً. أنصح الجميع بتجربتها!',
      rating: 5,
      avatar: 'س'
    },
    {
      name: 'خالد الحربي',
      role: 'رائد أعمال',
      content: 'صباحي لا يكتمل بدون فنجان Coffee Corner. قهوة تعطيك الطاقة والتركيز طوال اليوم.',
      rating: 5,
      avatar: 'خ'
    }
  ]

  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="logo">
            <div className="logo-icon">
              <Coffee size={24} />
            </div>
            <span>Coffee Corner</span>
          </div>
          
          <ul className="nav-links">
            <li><a href="#home">الرئيسية</a></li>
            <li><a href="#products">منتجاتنا</a></li>
            <li><a href="#features">مميزاتنا</a></li>
            <li><a href="#testimonials">آراء العملاء</a></li>
            <li><a href="#contact">تواصل معنا</a></li>
          </ul>
          
          <div className="nav-buttons">
            <Link to="/dashboard" className="btn btn-secondary">
              لوحة التحكم
            </Link>
            <button className="btn btn-primary">
              <ShoppingCart size={18} />
              اطلب الآن
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>قهوة مختصة فاخرة</span>
            </div>
            <h1 className="hero-title">
              اكتشف متعة
              <br />
              <span>القهوة الحقيقية</span>
            </h1>
            <p className="hero-description">
              نقدم لك أجود أنواع القهوة المختصة المحمصة بعناية فائقة، لتستمتع بتجربة قهوة استثنائية في كل رشفة
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">
                <ShoppingCart size={18} />
                تسوق الآن
              </button>
              <button className="btn btn-secondary">
                اكتشف المزيد
                <ChevronLeft size={18} />
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">50K+</div>
                <div className="stat-label">عميل سعيد</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">نوع قهوة</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4.9</div>
                <div className="stat-label">تقييم العملاء</div>
              </div>
            </div>
          </div>
          
          <div className="hero-image">
            <div style={{ 
              fontSize: '15rem', 
              textAlign: 'center',
              filter: 'drop-shadow(0 25px 50px rgba(139, 69, 19, 0.3))'
            }}>
              ☕
            </div>
            <div className="floating-card top" style={{ animation: 'float 3s ease-in-out infinite' }}>
              <Star size={20} color="#DAA520" fill="#DAA520" />
              <span style={{ fontWeight: 700 }}>4.9</span>
              <span style={{ color: '#6B7280', fontSize: '0.9rem' }}>تقييم</span>
            </div>
            <div className="floating-card bottom" style={{ animation: 'float 3s ease-in-out infinite 0.5s' }}>
              <Heart size={20} color="#EF4444" fill="#EF4444" />
              <span style={{ fontWeight: 700 }}>50K</span>
              <span style={{ color: '#6B7280', fontSize: '0.9rem' }}>إعجاب</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section">
        <div className="section-header">
          <h2 className="section-title">منتجاتنا المميزة</h2>
          <p className="section-subtitle">اختر من مجموعتنا الفاخرة من القهوة المختصة</p>
        </div>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              {product.badge && <div className="product-badge">{product.badge}</div>}
              <div className="product-image">{product.emoji}</div>
              <div className="product-content">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <div className="product-price">
                    {product.price} <span>ر.س</span>
                  </div>
                  <button className="add-to-cart">
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-header">
          <h2 className="section-title">لماذا تختار Coffee Corner؟</h2>
          <p className="section-subtitle">نسعى دائماً لتقديم أفضل تجربة قهوة لعملائنا</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <div className="section-header">
          <h2 className="section-title">ماذا يقول عملاؤنا</h2>
          <p className="section-subtitle">آراء حقيقية من عملاء سعداء</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-content">{testimonial.content}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
                <div className="rating" style={{ marginRight: 'auto' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#DAA520" color="#DAA520" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">جاهز لتجربة قهوة استثنائية؟</h2>
          <p className="cta-description">
            انضم إلى آلاف العملاء السعداء واستمتع بأفضل قهوة مختصة في المملكة
          </p>
          <div className="cta-buttons">
            <button className="btn btn-white">
              <ShoppingCart size={18} />
              اطلب الآن
            </button>
            <button className="btn btn-outline-white">
              تواصل معنا
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h3>☕ Coffee Corner</h3>
            <p>
              نقدم لكم أجود أنواع القهوة المختصة، محمصة بعناية فائقة من أفضل حبوب البن حول العالم. نسعى لتقديم تجربة قهوة استثنائية في كل فنجان.
            </p>
          </div>
          <div className="footer-column">
            <h4>روابط سريعة</h4>
            <ul>
              <li><a href="#home">الرئيسية</a></li>
              <li><a href="#products">منتجاتنا</a></li>
              <li><a href="#features">مميزاتنا</a></li>
              <li><a href="#testimonials">آراء العملاء</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>خدمة العملاء</h4>
            <ul>
              <li><a href="#">الأسئلة الشائعة</a></li>
              <li><a href="#">سياسة الشحن</a></li>
              <li><a href="#">سياسة الإرجاع</a></li>
              <li><a href="#">تتبع الطلب</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>تواصل معنا</h4>
            <ul>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} />
                <span>920012345</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} />
                <span>info@coffeecorner.sa</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={16} />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Coffee Corner. جميع الحقوق محفوظة</p>
          <div className="social-links">
            <a href="#"><Instagram size={18} /></a>
            <a href="#"><Twitter size={18} /></a>
            <a href="#"><Facebook size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
