import { useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { 
  Coffee, 
  LayoutDashboard, 
  Package, 
  ShoppingBag, 
  Users, 
  Settings,
  Bell,
  Search,
  TrendingUp,
  TrendingDown,
  Plus,
  Edit2,
  Trash2,
  X,
  DollarSign,
  ShoppingCart,
  UserCheck,
  BarChart3,
  Eye,
  LogOut
} from 'lucide-react'

// Types
interface Product {
  id: number
  name: string
  description: string
  price: number
  category: string
  stock: number
  image: string
}

interface Order {
  id: string
  customer: string
  products: string
  total: number
  status: 'completed' | 'pending' | 'cancelled'
  date: string
}

interface Customer {
  id: number
  name: string
  email: string
  phone: string
  orders: number
  totalSpent: number
}

// Dashboard Component
const Dashboard = () => {
  const location = useLocation()
  
  const menuItems = [
    { path: '/dashboard', icon: <LayoutDashboard size={20} />, label: 'لوحة التحكم' },
    { path: '/dashboard/products', icon: <Package size={20} />, label: 'المنتجات' },
    { path: '/dashboard/orders', icon: <ShoppingBag size={20} />, label: 'الطلبات' },
    { path: '/dashboard/customers', icon: <Users size={20} />, label: 'العملاء' },
    { path: '/dashboard/settings', icon: <Settings size={20} />, label: 'الإعدادات' },
  ]

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <Coffee size={24} />
            <span>Coffee Corner</span>
          </div>
        </div>
        <ul className="sidebar-nav">
          {menuItems.map(item => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: 'auto', padding: '1.5rem' }}>
          <Link to="/" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
            <LogOut size={18} />
            <span>العودة للموقع</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="dashboard-header">
          <div className="search-bar">
            <Search size={20} color="#9CA3AF" />
            <input type="text" placeholder="ابحث هنا..." />
          </div>
          <div className="user-menu">
            <button className="notification-btn">
              <Bell size={20} />
              <span className="notification-badge">3</span>
            </button>
            <div className="user-avatar">م</div>
          </div>
        </header>

        {/* Content */}
        <div className="dashboard-content">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/customers" element={<CustomersPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

// Dashboard Home
const DashboardHome = () => {
  const stats = [
    { 
      label: 'إجمالي المبيعات', 
      value: '45,230 ر.س', 
      change: '+12.5%', 
      positive: true,
      icon: <DollarSign size={24} />,
      color: 'blue'
    },
    { 
      label: 'الطلبات الجديدة', 
      value: '156', 
      change: '+8.2%', 
      positive: true,
      icon: <ShoppingCart size={24} />,
      color: 'green'
    },
    { 
      label: 'العملاء الجدد', 
      value: '48', 
      change: '+15.3%', 
      positive: true,
      icon: <UserCheck size={24} />,
      color: 'orange'
    },
    { 
      label: 'معدل التحويل', 
      value: '3.2%', 
      change: '-2.1%', 
      positive: false,
      icon: <BarChart3 size={24} />,
      color: 'purple'
    },
  ]

  const recentOrders: Order[] = [
    { id: '#1234', customer: 'أحمد محمد', products: 'Corner Classic × 2', total: 178, status: 'completed', date: '2026/01/02' },
    { id: '#1233', customer: 'سارة العلي', products: 'Corner Gold × 1', total: 129, status: 'pending', date: '2026/01/02' },
    { id: '#1232', customer: 'خالد الحربي', products: 'Corner Espresso × 3', total: 297, status: 'completed', date: '2026/01/01' },
    { id: '#1231', customer: 'نورة السالم', products: 'Corner Cappuccino × 1', total: 109, status: 'cancelled', date: '2026/01/01' },
  ]

  return (
    <>
      <h1 className="page-title">لوحة التحكم</h1>
      
      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-card-header">
              <div className={`stat-card-icon ${stat.color}`}>
                {stat.icon}
              </div>
              <div className={`stat-card-change ${stat.positive ? 'positive' : 'negative'}`}>
                {stat.positive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                {stat.change}
              </div>
            </div>
            <div className="stat-card-value">{stat.value}</div>
            <div className="stat-card-label">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="data-table-container">
        <div className="table-header">
          <h3>أحدث الطلبات</h3>
          <Link to="/dashboard/orders" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
            عرض الكل
          </Link>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>رقم الطلب</th>
              <th>العميل</th>
              <th>المنتجات</th>
              <th>الإجمالي</th>
              <th>الحالة</th>
              <th>التاريخ</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map(order => (
              <tr key={order.id}>
                <td style={{ fontWeight: 600 }}>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.products}</td>
                <td style={{ fontWeight: 600 }}>{order.total} ر.س</td>
                <td>
                  <span className={`status-badge ${order.status}`}>
                    {order.status === 'completed' ? 'مكتمل' : order.status === 'pending' ? 'قيد الانتظار' : 'ملغي'}
                  </span>
                </td>
                <td style={{ color: '#6B7280' }}>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

// Products Page
const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Corner Classic', description: 'قهوة عربية أصيلة', price: 89, category: 'قهوة عربية', stock: 150, image: '☕' },
    { id: 2, name: 'Corner Gold', description: 'مزيج فاخر كولومبي', price: 129, category: 'قهوة مختصة', stock: 85, image: '✨' },
    { id: 3, name: 'Corner Espresso', description: 'قوة مضاعفة', price: 99, category: 'إسبريسو', stock: 120, image: '🔥' },
    { id: 4, name: 'Corner Cappuccino', description: 'كريمي وناعم', price: 109, category: 'كابتشينو', stock: 95, image: '🥛' },
  ])
  const [showModal, setShowModal] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [formData, setFormData] = useState({ name: '', description: '', price: '', category: '', stock: '' })

  const handleAddProduct = () => {
    setEditingProduct(null)
    setFormData({ name: '', description: '', price: '', category: '', stock: '' })
    setShowModal(true)
  }

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product)
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      category: product.category,
      stock: product.stock.toString()
    })
    setShowModal(true)
  }

  const handleDeleteProduct = (id: number) => {
    if (confirm('هل أنت متأكد من حذف هذا المنتج؟')) {
      setProducts(products.filter(p => p.id !== id))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingProduct) {
      setProducts(products.map(p => 
        p.id === editingProduct.id 
          ? { ...p, ...formData, price: Number(formData.price), stock: Number(formData.stock) }
          : p
      ))
    } else {
      const newProduct: Product = {
        id: Date.now(),
        name: formData.name,
        description: formData.description,
        price: Number(formData.price),
        category: formData.category,
        stock: Number(formData.stock),
        image: '☕'
      }
      setProducts([...products, newProduct])
    }
    setShowModal(false)
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 className="page-title" style={{ marginBottom: 0 }}>المنتجات</h1>
        <button className="btn btn-primary" onClick={handleAddProduct}>
          <Plus size={18} />
          إضافة منتج
        </button>
      </div>

      <div className="data-table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>المنتج</th>
              <th>الوصف</th>
              <th>الفئة</th>
              <th>السعر</th>
              <th>المخزون</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>{product.image}</span>
                    <span style={{ fontWeight: 600 }}>{product.name}</span>
                  </div>
                </td>
                <td style={{ color: '#6B7280' }}>{product.description}</td>
                <td>{product.category}</td>
                <td style={{ fontWeight: 600 }}>{product.price} ر.س</td>
                <td>
                  <span style={{ 
                    color: product.stock < 100 ? '#F97316' : '#22C55E',
                    fontWeight: 600
                  }}>
                    {product.stock}
                  </span>
                </td>
                <td>
                  <button className="action-btn edit" onClick={() => handleEditProduct(product)}>
                    <Edit2 size={16} />
                  </button>
                  <button className="action-btn delete" onClick={() => handleDeleteProduct(product.id)}>
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{editingProduct ? 'تعديل المنتج' : 'إضافة منتج جديد'}</h3>
              <button className="modal-close" onClick={() => setShowModal(false)}>
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label>اسم المنتج</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>الوصف</label>
                  <textarea 
                    value={formData.description}
                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>الفئة</label>
                  <select 
                    value={formData.category}
                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                    required
                  >
                    <option value="">اختر الفئة</option>
                    <option value="قهوة عربية">قهوة عربية</option>
                    <option value="قهوة مختصة">قهوة مختصة</option>
                    <option value="إسبريسو">إسبريسو</option>
                    <option value="كابتشينو">كابتشينو</option>
                  </select>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label>السعر (ر.س)</label>
                    <input 
                      type="number" 
                      value={formData.price}
                      onChange={e => setFormData({ ...formData, price: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>المخزون</label>
                    <input 
                      type="number" 
                      value={formData.stock}
                      onChange={e => setFormData({ ...formData, stock: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  إلغاء
                </button>
                <button type="submit" className="btn btn-primary">
                  {editingProduct ? 'حفظ التغييرات' : 'إضافة المنتج'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

// Orders Page
const OrdersPage = () => {
  const orders: Order[] = [
    { id: '#1234', customer: 'أحمد محمد', products: 'Corner Classic × 2', total: 178, status: 'completed', date: '2026/01/02' },
    { id: '#1233', customer: 'سارة العلي', products: 'Corner Gold × 1', total: 129, status: 'pending', date: '2026/01/02' },
    { id: '#1232', customer: 'خالد الحربي', products: 'Corner Espresso × 3', total: 297, status: 'completed', date: '2026/01/01' },
    { id: '#1231', customer: 'نورة السالم', products: 'Corner Cappuccino × 1', total: 109, status: 'cancelled', date: '2026/01/01' },
    { id: '#1230', customer: 'فهد العتيبي', products: 'Corner Gold × 2', total: 258, status: 'completed', date: '2025/12/31' },
    { id: '#1229', customer: 'مريم الشمري', products: 'Corner Classic × 1', total: 89, status: 'pending', date: '2025/12/31' },
  ]

  return (
    <>
      <h1 className="page-title">الطلبات</h1>
      
      <div className="data-table-container">
        <div className="table-header">
          <h3>جميع الطلبات</h3>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <select style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
              <option>جميع الحالات</option>
              <option>مكتمل</option>
              <option>قيد الانتظار</option>
              <option>ملغي</option>
            </select>
          </div>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>رقم الطلب</th>
              <th>العميل</th>
              <th>المنتجات</th>
              <th>الإجمالي</th>
              <th>الحالة</th>
              <th>التاريخ</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td style={{ fontWeight: 600 }}>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.products}</td>
                <td style={{ fontWeight: 600 }}>{order.total} ر.س</td>
                <td>
                  <span className={`status-badge ${order.status}`}>
                    {order.status === 'completed' ? 'مكتمل' : order.status === 'pending' ? 'قيد الانتظار' : 'ملغي'}
                  </span>
                </td>
                <td style={{ color: '#6B7280' }}>{order.date}</td>
                <td>
                  <button className="action-btn edit">
                    <Eye size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

// Customers Page
const CustomersPage = () => {
  const customers: Customer[] = [
    { id: 1, name: 'أحمد محمد', email: 'ahmed@email.com', phone: '0501234567', orders: 12, totalSpent: 1560 },
    { id: 2, name: 'سارة العلي', email: 'sara@email.com', phone: '0559876543', orders: 8, totalSpent: 980 },
    { id: 3, name: 'خالد الحربي', email: 'khaled@email.com', phone: '0541112233', orders: 15, totalSpent: 2340 },
    { id: 4, name: 'نورة السالم', email: 'nora@email.com', phone: '0533344556', orders: 5, totalSpent: 450 },
    { id: 5, name: 'فهد العتيبي', email: 'fahad@email.com', phone: '0566778899', orders: 20, totalSpent: 3200 },
  ]

  return (
    <>
      <h1 className="page-title">العملاء</h1>
      
      <div className="data-table-container">
        <div className="table-header">
          <h3>جميع العملاء ({customers.length})</h3>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>العميل</th>
              <th>البريد الإلكتروني</th>
              <th>رقم الجوال</th>
              <th>عدد الطلبات</th>
              <th>إجمالي المشتريات</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(customer => (
              <tr key={customer.id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #8B4513, #D2691E)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 700
                    }}>
                      {customer.name.charAt(0)}
                    </div>
                    <span style={{ fontWeight: 600 }}>{customer.name}</span>
                  </div>
                </td>
                <td style={{ color: '#6B7280' }}>{customer.email}</td>
                <td>{customer.phone}</td>
                <td style={{ fontWeight: 600 }}>{customer.orders}</td>
                <td style={{ fontWeight: 600, color: '#22C55E' }}>{customer.totalSpent} ر.س</td>
                <td>
                  <button className="action-btn edit">
                    <Eye size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

// Settings Page
const SettingsPage = () => {
  return (
    <>
      <h1 className="page-title">الإعدادات</h1>
      
      <div className="data-table-container" style={{ padding: '2rem' }}>
        <h3 style={{ marginBottom: '2rem' }}>إعدادات المتجر</h3>
        
        <form>
          <div className="form-group">
            <label>اسم المتجر</label>
            <input type="text" defaultValue="Coffee Corner" />
          </div>
          <div className="form-group">
            <label>البريد الإلكتروني</label>
            <input type="email" defaultValue="info@coffeecorner.sa" />
          </div>
          <div className="form-group">
            <label>رقم الهاتف</label>
            <input type="tel" defaultValue="920012345" />
          </div>
          <div className="form-group">
            <label>العنوان</label>
            <textarea defaultValue="الرياض، المملكة العربية السعودية" />
          </div>
          <div className="form-group">
            <label>وصف المتجر</label>
            <textarea defaultValue="نقدم لكم أجود أنواع القهوة المختصة" />
          </div>
          <button type="submit" className="btn btn-primary">
            حفظ التغييرات
          </button>
        </form>
      </div>
    </>
  )
}

export default Dashboard
