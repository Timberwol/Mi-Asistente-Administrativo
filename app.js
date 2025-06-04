const Header = () => {
  const [isDark, setIsDark] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  const toggleTheme = () => {
    document.getElementById('body').classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <header className="glass-effect text-white py-6 sticky top-0 z-50 shadow-xl">
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-12">
        <div className="flex items-center">
          <h1 className="text-3xl font-display font-bold tracking-tighter">
            <span className="text-gradient">MIA</span>
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            <li><a href="#home" className="nav-link font-medium hover:text-white transition">Inicio</a></li>
            <li><a href="#features" className="nav-link font-medium hover:text-white transition">Características</a></li>
            <li><a href="#transactions" className="nav-link font-medium hover:text-white transition">Transacciones</a></li>
            <li><a href="#calendar" className="nav-link font-medium hover:text-white transition">Calendario</a></li>
            <li><a href="#contact" className="nav-link font-medium hover:text-white transition">Contacto</a></li>
          </ul>
          
          <div className="flex items-center space-x-4 ml-6">
            <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition">
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            <button className="btn-primary font-medium py-2 px-6 rounded-full">Iniciar Sesión</button>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg bg-gray-800 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 dark:bg-gray-900 px-6 py-4">
          <ul className="space-y-4">
            <li><a href="#home" className="block font-medium hover:text-blue-400 transition" onClick={() => setMobileMenuOpen(false)}>Inicio</a></li>
            <li><a href="#features" className="block font-medium hover:text-blue-400 transition" onClick={() => setMobileMenuOpen(false)}>Características</a></li>
            <li><a href="#transactions" className="block font-medium hover:text-blue-400 transition" onClick={() => setMobileMenuOpen(false)}>Transacciones</a></li>
            <li><a href="#calendar" className="block font-medium hover:text-blue-400 transition" onClick={() => setMobileMenuOpen(false)}>Calendario</a></li>
            <li><a href="#contact" className="block font-medium hover:text-blue-400 transition" onClick={() => setMobileMenuOpen(false)}>Contacto</a></li>
          </ul>
          <div className="mt-6 pt-6 border-t border-gray-700 flex justify-between items-center">
            <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition">
              {isDark ? '☀️' : '🌙'}
            </button>
            <button className="btn-primary font-medium py-2 px-6 rounded-full">Iniciar Sesión</button>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section id="home" className="hero-gradient text-white py-32 animate-gradient">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-16 lg:mb-0 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            Transforma tu <span className="text-gradient">gestión financiera</span> con MIA
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl opacity-90">
            La plataforma más elegante y segura para administrar tus transacciones con estilo y precisión.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="btn-primary font-semibold py-4 px-8 rounded-full shadow-xl">¡Comienza Ahora!</button>
            <button className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white font-semibold py-4 px-8 rounded-full border border-white border-opacity-20 transition shadow-xl">Ver Demo</button>
          </div>
          <div className="mt-12 flex items-center space-x-6">
            <div className="flex -space-x-2">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
              <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
              <img src="https://randomuser.me/api/portraits/women/68.jpg" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
            </div>
            <div>
              <p className="text-sm opacity-80">Únete a más de 50,000 usuarios</p>
              <div className="flex items-center mt-1">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 1.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921 -.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.950.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-2 text-sm">4.9/5 (2,500+ reseñas)</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="lg:w-1/2 flex justify-center animate-float">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-20 -right-10 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          
          <div className="relative glass-effect p-6 rounded-3xl shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="MIA App Preview" 
              className="rounded-2xl border border-white border-opacity-20 shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl">
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">Transferencia</div>
              <div className="text-2xl font-bold text-gray-800 dark:text-white">+$1,250.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    { 
      title: "Pagos Instantáneos", 
      desc: "Transfiere dinero en tiempo real con nuestra interfaz ultraveloz y fluida. Sin esperas, sin complicaciones.", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
    },
    { 
      title: "Seguridad de Élite", 
      desc: "Protegemos tus fondos con encriptación bancaria y autenticación biométrica multicapa.", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      color: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300"
    },
    { 
      title: "Análisis Financiero", 
      desc: "Reportes detallados y predicciones inteligentes para optimizar cada aspecto de tus finanzas.", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300"
    },
    { 
      title: "Sincronización Total", 
      desc: "Accede desde cualquier dispositivo con sincronización en tiempo real y notificaciones instantáneas.", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      color: "bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300"
    },
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <span className="text-sm font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">Potencia tus finanzas</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 text-gray-900 dark:text-white">
            Características <span className="text-gradient">Premium</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Descubre todo lo que MIA puede hacer para simplificar y elevar tu experiencia financiera.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl ${feature.color}`}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full ${feature.color.split(' ')[0]} ${feature.color.split(' ')[1]}`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">¿Listo para transformar tu forma de manejar dinero?</h3>
              <p className="text-blue-100 max-w-2xl">Únete a miles de usuarios que ya están disfrutando de la plataforma financiera más elegante del mercado.</p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <button className="btn-primary font-semibold py-4 px-8 rounded-full shadow-xl">Registrarse Gratis</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Transactions = () => {
  const transactions = [
    { id: 1, date: "2025-05-22", type: "Pago", amount: 150.00, status: "Completado", icon: "🛒" },
    { id: 2, date: "2025-05-21", type: "Transferencia", amount: 300.00, status: "Pendiente", icon: "💸" },
    { id: 3, date: "2025-05-20", type: "Depósito", amount: 500.00, status: "Completado", icon: "💰" },
    { id: 4, date: "2025-05-19", type: "Retiro", amount: 200.00, status: "Completado", icon: "🏧" },
    { id: 5, date: "2025-05-18", type: "Suscripción", amount: 9.99, status: "Completado", icon: "🔄" },
  ];

  return (
    <section id="transactions" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">Transparencia total</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 text-gray-900 dark:text-white">
            Historial de <span className="text-gradient">Transacciones</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">Todas tus operaciones organizadas y accesibles en un solo lugar.</p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden animate-fadeInUp">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Últimas transacciones</h3>
            <button className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">Ver todas</button>
          </div>
          
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {transactions.map((tx) => (
              <div key={tx.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition flex items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-xl">
                  {tx.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">{tx.type}</h4>
                    <span className={`text-lg font-semibold ${tx.amount > 0 ? 'text-green-600 dark:text-green-400' : ' text-gray-800 dark:text-white'}`}>
                      {tx.amount > 0 ? '+' : ''}${tx.amount.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{tx.date}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${tx.status === 'Completado' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'}`}>
                      {tx.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-6 bg-gray-50 dark:bg-gray-700 text-center">
            <button className="btn-primary font-medium py-3 px-8 rounded-full">Exportar Reporte</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Calendar = () => {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [activities, setActivities] = React.useState({});
  const [showModal, setShowModal] = React.useState(false);
  const [formData, setFormData] = React.useState({
    title: '',
    description: '',
    amount: '',
    type: 'expense'
  });
  const [errors, setErrors] = React.useState({
    title: '',
    amount: ''
  });

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getMonth();
  };

  const firstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getMonthDay();
  };

  const generateCalendar = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const days = daysInMonth(month, year);
    const firstDay = firstDayOfMonth(month, year);
    const weeks = [];

    let week = Array(firstDay).fill(null);
    for (let day = 1; day <= days; day++) {
      week.push(day);
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    }
    if (week.length > 0) {
      while (week.length < 7) {
        week.push(null);
      }
      weeks.push(week);
    }

    return weeks;
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDayClick = (day) => {
    if (day) {
      setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { title: '', amount: '' };

    if (!formData.title || formData.title.length < 3) {
      newErrors.title = 'El título debe tener al menos 3 caracteres';
      valid = false;
    }
    
    if (!formData.amount || isNaN(formData.amount) || formData.amount <= 0) {
      newErrors.amount = 'Ingresa un monto válido';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleAddActivity = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const dateKey = selectedDate.toISOString().split('T')[0];
      const newActivity = {
        id: Date.now(),
        title: formData.title,
        description: formData.description,
        amount: parseFloat(formData.amount),
        type: formData.type
      };
      
      setActivities(prev => ({
        ...prev,
        [dateKey]: [...(prev[dateKey] || []), newActivity]
      }));
      
      setShowModal(false);
      setFormData({ title: '', description: '', amount: '', type: 'expense' });
      setErrors({ title: '', amount: '' });
    }
  };

  const handleDeleteActivity = (dateKey, activityId) => {
    setActivities(prev => ({
      ...prev,
      [dateKey]: prev[dateKey].filter(activity => activity.id !== activityId)
    }));
  };

  const getDaySummary = (dateKey) => {
    const dayActivities = activities[dateKey] || [];
    const totalIncome = dayActivities
      .filter(activity => activity.type === 'income')
      .reduce((sum, activity) => sum + activity.amount, 0);
    const totalExpenses = dayActivities
      .filter(activity => activity.type === 'expense')
      .reduce((sum, activity) => sum + activity.amount, 0);
    return { totalIncome, totalExpenses };
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="calendar-confirm" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">Organiza tus finanzas</span>
          <h2 className="text-4xl md-text-5xl font-display font-bold mt-2 text-gray-900 dark:text-white">
            Calendario <span className="text-gradient">Financiero</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">Planifica tus actividades financieras y mantén el control de tus recursos con facilidad.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden animate-fadeInUp">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {currentDate.toLocaleString('es', { month: 'long', year: 'numeric' })}
            </h3>
            <div className="flex space-x-4">
              <button onClick={prevMonth} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke="round" stroke-linecap="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                </button>
              <button onClick={nextMonth} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-7 gap-2 text-center text-gray-800 dark:text-white">
              {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
                <div key={day} className="font-medium text-sm">{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2 mt-4">
              {generateCalendar().map((week, weekIndex) => (
                <React.Fragment key={weekIndex}>
                  {week.map((day, dayIndex) => {
                    const dateKey = day ? new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toISOString().split('T')[0] : null;
                    const summary = dateKey ? getDaySummary(dateKey) : null;
                    return (
                      <div
                        key={`${weekIndex}-${day}`}
                        className="border border-gray-200 dark:border-gray-700 border-b p-2 h-24 rounded-lg cursor-pointer text-center relative ${day ? 'hover:bg-blue-100 dark:hover:bg-blue-900' : ''} ${selectedDate && day && selectedDate.getDay() === day && selectedDate.getMonth() === currentDate.getMonth() && selectedDate.getFullYear() === currentDate.getFullYear() ? 'active' : ''}"
                        onClick={() => handleDayClick(day)}
                      >
                        {day && (
                          <>
                            <span className="text-lg font-medium">{day}</span>
                            {summary && (summary.totalIncome > 0 || summary.totalExpense > 0) && (
                              <div className="text-xs mt-1">
                                {summary.totalIncome > 0 && (
                                  <span className="text-green-600 dark:text-green-400 block">+${summary.totalIncome.toFixed(2)}</span>
                                )}
                                {summary.totalExpenses > 0 && (
                                  <span className="text-red-600 dark:text-red-400 block">-${summary.totalExpenses.toFixed(2)}</span>
                                )}
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
          </div>

          {selectedDate && (
            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Actividades para {selectedDate.toLocaleString('es')}
                </h3>
                <button
                  onClick={() => setShowModal(true)}
                  className="btn-primary font-medium py-2 px-4 rounded-full"
                >
                  Agregar Actividad
                </button>
              </div>
              <div className="space-y-4">
                {(activities[selectedDate.toISOString().split('T')[0]] || []).map(activity => (
                  <div key={activity.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg flex justify-between items-center">
                    <div>
                      <h4 className="text-md font-medium text-gray-800 dark:text-white">{activity.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{activity.description}</p>
                      <p className={`text-sm font-semibold ${activity.type === 'income' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                        {activity.type === 'income' ? '+' : '-'}${activity.amount.toFixed(2)}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDeleteActivity(selectedDate.toISOString().split('T')[0], activity.id)}
                      className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke="M6 18L18 6M6 6L18" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                      </svg>
                    </button>
                  </div>
                ))}
                {!(activities[selectedDate.toISOString().split('T')[0]] && activities[selectedDate.toISOString().split('T')[0]].length > 0) && (
                  <p className="text-gray-600 dark:text-gray-300 text-center">No hay actividades para este día.</p>
                )}
              </div>
            </div>
          )}
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 modal-overlay flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-md w-full animate-modalPop">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Nueva Actividad</h3>
              <form onSubmit={handleAddActivity}>
                <div className="mb-6">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Título
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.title ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600`}
                    placeholder="Ej. Pago de factura"
                  />
                  {errors.title && <p className="mt-2 text-sm text-red-600">{errors.title}</p>}
                </div>
                <div className="mb-6">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Descripción (Opcional)
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="3"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    placeholder="Detalles de la actividad"
                  ></textarea>
                </div>
                <div className="mb-6">
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Monto
                  </label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.amount ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600`}
                    placeholder="0.00"
                    step="0.01"
                  />
                  {errors.amount && <p className="mt-2 text-sm text-red-600">{errors.amount}</p>}
                </div>
                <div className="mb-6">
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tipo
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  >
                    <option value="expense">Gasto</option>
                    <option value="income">Ingreso</option>
                  </select>
                </div>
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="w-full btn-primary font-medium py-3 rounded-lg"
                  >
                    Guardar
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-medium py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = React.useState({ name: '', email: '', message: '' });
  const [showModal, setShowModal] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name || formData.name.length < 3) {
      newErrors.name = 'El nombre debe tener al menos 3 caracteres';
      valid = false;
    }
    
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un correo electrónico válido';
      valid = false;
    }
    
    if (!formData.message || formData.message.length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
      valid = false;
    }
    
    if (formData.message.length > 500) {
      newErrors.message = 'El mensaje no puede exceder los 500 caracteres';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setShowModal(true);
        setIsSubmitting(false);
      }, 1500);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({ name: '', email: '', message: '' });
    setErrors({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">Estamos aquí para ayudarte</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 text-gray-900 dark:text-white">
            Contácta a nuestro <span className="text-gradient">equipo</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">¿Tienes preguntas? Escríbenos y te responderemos en menos de 24 horas.</p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-xl animate-fadeInUp">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Información de contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 p-3 rounded-lg text-blue-600 dark:text-blue-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a1.042.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white">Teléfono</h4>
                  <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900 p-3 rounded-lg text-purple-600 dark:text-purple-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-width="round" stroke="currentColor" strokeWidth={2}/>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">soporte@miafinance.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 dark:bg-green-900 p-3 rounded-lg text-green-600 dark:text-green-300">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2-2.827 0l-4.244-4.243a8 8 0 11111.314 0z" stroke-linecap="round" stroke-width="round" stroke="currentColor" strokeWidth={2}/>
                    <path stroke="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-width="round" stroke="currentColor" strokeWidth={2}/>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white">Oficina</h4>
                  <p className="text-gray-600 dark:text-gray-300">Av. Principal 1234, Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4 text-gray-800 dark:text-white">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-300 transition">
                  <svg className="h-5 w-5" fill="0 0" viewBox="24 24" fill="currentColor">
                    <path d="M24 4.557 3.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.523-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.179 1.397 4.768 2.212 7.548 2.307 14.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
    </svg>
                </a>
                <a href="#" className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-300 transition">
                  <svg class="h-5 w-5" fill="0 0" viewBox="24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-4.849 .849-.149-3.26-.149-4.771-1.699-4.919-4.919-.058-.059icksal-1.265-.07-1.644-.1-.0 4-.05 0-3-.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z.0-2.163 3.259z 0-3.667.014-4.947.072-4.358.2-6.78 2.618 6.98.2.059 1.281-.073 1.689-.0 073 4.948 0 3.259.014 3.668.072 4.948 4.354.2 6.782 2.618 6.979 6.979.059-.0.28 0.073 3.948 0 3.259-.014-3.667-.072-4.947-.0.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-.0 1.69-.0 73-4.949-.0 73z.0 5.838c-3.403 0-6.162 2.759-6.162 6.162-2.759 6.163 162 6.162.6.162-6.162-6.162z.0 10.162-6.209 0-4-1.79-4-4 c0-2.209 1.791-4 4s0 4-4c0 2.21-1.791 4-4-4z4.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
                </a>
                <a href="#" className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-300 transition">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl animate-fadeInUp">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600`}
                  placeholder="Tu nombre"
                />
                {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600`}
                  placeholder="tu@email.com"
                />
                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600`}
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
                {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary font-medium py-4 rounded-lg shadow-xl flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>
        
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 modal-overlay flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-md w-full animate-modalPop">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 mb-4">
                  <svg className="h-6 w-6 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">¡Mensaje Enviado!</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Gracias por contactarnos, <span className="font-semibold">{formData.name}</span>. Hemos recibido tu mensaje y te responderemos pronto a <span className="font-semibold">{formData.email}</span>.
                </p>
                <button
                  onClick={closeModal}
                  className="w-full btn-primary font-medium py-3 rounded-lg"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

