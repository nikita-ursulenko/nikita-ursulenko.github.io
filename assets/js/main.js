// Language switching functionality
let currentLanguage = 'ru';

const translations = {
    ru: {
        // Navigation
        home: 'Главная',
        about: 'Обо мне',
        experience: 'Опыт',
        projects: 'Проекты',
        preview: 'Сайты',
        skills: 'Навыки',
        education: 'Образование',
        contact: 'Контакты',

        // Hero Section
        heroTitle: 'Привет, я Никита Урсуленко',
        heroSubtitle: 'Full-stack разработчик | Python, JS, Django, WordPress',
        viewProjects: 'Посмотреть проекты',
        downloadCV: 'Скачать резюме',
        cvPath: 'assets/docs/Nikita_Ursulenco_RU.pdf',

        // About Section
        aboutTitle: 'Обо мне',
        aboutText1: 'Привет! Я Никита Урсуленко, full-stack разработчик с более чем 4-летним опытом создания современных веб-приложений. Специализируюсь на Python/Django для backend-разработки и React/Next.js для frontend.',
        aboutText2: 'Мой опыт включает разработку корпоративных веб-сайтов на WordPress с использованием Advanced Custom Fields, создание REST API, интеграцию с внешними сервисами и разработку Telegram-ботов. Я стремлюсь к созданию качественного, масштабируемого кода и всегда изучаю новые технологии.',
        aboutText3: 'Когда не программирую, изучаю новые фреймворки, читаю техническую литературу или работаю над pet-проектами. Открыт для новых вызовов и интересных проектов!',
        keySkills: 'Ключевые навыки',

        // Experience Section
        experienceTitle: 'Опыт работы',
        responsibilities: 'Ключевые обязанности',

        // Experience Jobs
        job0Period: 'NOW',
        job0Title: 'Full Stack Engineer (Part-time / Remote)',
        job0Company: 'BlazarLabs | Chișinău, Moldova',
        job0Resp1: 'Поддержка и оптимизация: Доработка, багфиксинг и непрерывное улучшение функционала существующих мобильных и веб-приложений.',
        job0Resp2: 'Интеграция платежей: Внедрение и настройка систем онлайн-платежей (payment gateways) для обеспечения безопасных транзакций.',
        job0Resp3: 'Frontend и UI/UX: Разработка кроссплатформенных мобильных интерфейсов на React Native и JavaScript с упором на улучшение пользовательского опыта.',
        job0Resp4: 'Backend и работа с данными: Настройка серверной логики, работа с базами данных реального времени и API с использованием Firebase и JSON.',
        job0Resp5: 'Контроль версий: Управление кодом и контроль версий через GitHub.',
        job0Resp6: 'Tech Stack: React Native, JavaScript, JSON, Firebase, UX/UI, GitHub',


        job1Period: '2026',
        job1Title: 'Fullstack-разработчик (Frontend/Backend)',
        job1Company: 'SykorsMedia | Кишинёв, Молдова',
        job1Resp1: 'Улучшил и расширил возможности веб-платформы: обновил UI/UX и реализовал новый функционал',
        job1Resp2: 'Разработал backend-часть на PHP/Laravel (обработка данных, создание моделей, работа с API)',
        job1Resp3: 'Создал и интегрировал компоненты Vue.js с backend-логикой',
        job1Resp4: 'Работал с PostgreSQL и Docker в рамках ежедневного процесса разработки',

        job2Period: '2025',
        job2Title: 'Web-разработчик (Проектная работа)',
        job2Company: 'Blazar.io',
        job2Resp1: 'Самостоятельно разработал дизайн и полностью сверстал государственный сайт для Молдовы',
        job2Resp2: 'Создал сайт на WordPress с использованием Advanced Custom Fields (ACF)',
        job2Resp3: 'Реализовал возможность добавления новых кастомных блоков, что упрощает управление контентом',
        job2Resp4: 'Выполнил весь цикл работ: от установки WordPress и подключения базы данных до финальной настройки',

        job3Period: '2024 - 2025',
        job3Title: 'Full-Stack разработчик',
        job3Company: 'MoldExpo | Кишинёв, Молдова',
        job3Resp1: 'Разработано веб-приложение «Меню ресторана» с использованием Angular и TypeScript',
        job3Resp2: 'Разработал архитектуру приложения, работая с компонентами и модулями',
        job3Resp3: 'Интегрирован с базой данных и REST API',
        job3Resp4: 'Реализован адаптивный макет, оптимизация производительности и улучшения UX/UI',

        job4Period: '2023',
        job4Title: 'Full-Stack разработчик',
        job4Company: 'TechNova Solutions | Москва',
        job4Resp1: 'Разработаны веб-приложения с использованием React (Next.js), Angular и TypeScript',
        job4Resp2: 'Построенные серверные решения с Django, FastAPI и REST API',
        job4Resp3: 'Интегрированные стратегии торговли криптовалютой и автоматизация',
        job4Resp4: 'Оптимизированный UI/UX, реализованный адаптивный дизайн и повышенная производительность',
        job4Resp5: 'Разработаны мобильные приложения с использованием React Native и Expo',

        job5Period: '2022 - 2023',
        job5Title: 'Frontend разработчик',
        job5Company: 'DigitalWave Agency | Минск',
        job5Resp1: 'Разработаны интерфейсы для целевых страниц и маркетинговых платформ с использованием React и Tailwind CSS',
        job5Resp2: 'Оптимизированный SEO и UX/UI, повышение скорости загрузки страницы',
        job5Resp3: 'Интегрированные API, настроенные анимации и интерактивные компоненты',

        job6Period: '2021 - 2022',
        job6Title: 'Web-разработчик',
        job6Company: 'WebCore Technologies | Новосибирск',
        job6Resp1: 'Разработанные и поддерживаемые веб-сайты на WordPress (PHP, SCSS, SEO)',
        job6Resp2: 'Оптимизированная скорость загрузки и реализованный адаптивный дизайн для всех устройств',
        job6Resp3: 'Индивидуальные темы и плагины, разработка уникальной функциональности',

        job7Period: '2021',
        job7Title: 'Backend разработчик',
        job7Company: 'DataFlow Systems | Москва',
        job7Resp1: 'Разработаны парсеры Telegram, боты и автоматизацию с использованием Python (Selenium, BeautifulSoup, Scrapy)',
        job7Resp2: 'Интегрированные API, работа с PostgreSQL и MySQL и обработанные данные',
        job7Resp3: 'Построены финансовые системы и платформы для криптовалютного арбитража',

        // Projects Section
        projectsTitle: 'Мои проекты',
        technologies: 'Технологии',
        keyFeatures: 'Ключевые особенности',
        github: 'GitHub',

        // Project descriptions
        project1Title: 'MDED',
        project1Desc: 'Кастомная WordPress-тема с современной архитектурой. Использует Timber/Twig для чистого кода и Tailwind CSS для стилизации.',
        project1Feature1: 'Чистая архитектура с разделением логики',
        project1Feature2: 'Быстрая разработка с готовыми компонентами',
        project1Feature3: 'Полная адаптивность под все устройства',

        project2Title: 'Nomads',
        project2Desc: 'Адаптивный лендинг на WordPress с интерактивными формами и слайдерами. Оптимизирован для быстрой загрузки и SEO.',
        project2Feature1: 'Лёгкое редактирование контента через админку',
        project2Feature2: 'Адаптивный дизайн для всех экранов',
        project2Feature3: 'Интерактивные формы и слайдеры',

        project3Title: 'venvArbitrage',
        project3Desc: 'Python-бот для автоматического криптоарбитража между биржами. Анализирует спреды и выполняет прибыльные сделки.',
        project3Feature1: 'Асинхронная обработка данных с бирж',
        project3Feature2: 'Удобный GUI для мониторинга',
        project3Feature3: 'Автоматический учёт комиссий и спредов',

        project4Title: 'Calendar Task',
        project4Desc: 'Веб-календарь с системой авторизации и админ-панелью. Поддерживает различные виды отображения и управление задачами.',
        project4Feature1: 'Виды: день, неделя, месяц',
        project4Feature2: 'Система ролей пользователей',
        project4Feature3: 'Интерактивное управление событиями',

        project5Title: 'KOTLIN-SaleOfApartments',
        project5Desc: 'Android-приложение для продажи квартир с удобной системой поиска. Включает фильтрацию и управление заявками.',
        project5Feature1: 'Продвинутая фильтрация объектов',
        project5Feature2: 'Система управления заявками',
        project5Feature3: 'Интуитивный мобильный интерфейс',

        project6Title: 'Python-Parser-Telegram',
        project6Desc: 'Парсер участников Telegram-групп с возможностью сохранения данных. Удобный GUI для настройки и мониторинга процесса.',
        project6Feature1: 'Автоматическое сохранение данных',
        project6Feature2: 'Графический интерфейс для управления',
        project6Feature3: 'Экспорт результатов в различные форматы',

        project7Title: 'Django-TikTok-SMM-Web',
        project7Desc: 'Веб-платформа для продвижения TikTok видео через Django. Система заказов, API интеграции и приём платежей.',
        project7Feature1: 'Система заказа продвижения',
        project7Feature2: 'Интеграция с внешними API',
        project7Feature3: 'Встроенная система платежей',

        project8Title: 'React-MathNails',
        project8Desc: 'React-приложение для расчётов мастеров ногтевого сервиса. Помогает вести учёт материалов и рассчитывать стоимость услуг.',
        project8Feature1: 'Генерация детальных отчётов',
        project8Feature2: 'История всех операций',
        project8Feature3: 'Калькулятор стоимости услуг',

        project9Title: 'MyPawsCharity',
        project9Desc: 'Сайт приюта для животных с системой пожертвований. Адаптивный дизайн, форма доната и галерея питомцев.',
        project9Feature1: 'Полная адаптивность под все устройства',
        project9Feature2: 'Интегрированная форма пожертвований',
        project9Feature3: 'Интерактивная галерея животных',

        project10Title: 'MutUmzug',
        project10Desc: 'Веб-сайт для компании MUT Umzüge & Transport - профессиональные услуги переезда в Германии. Модульная архитектура с PHP компонентами и админ-панелью.',
        project10Feature1: 'Модульная архитектура с переиспользуемыми компонентами',
        project10Feature2: 'Админ-панель для управления конфигурацией',
        project10Feature3: 'SEO-оптимизация и адаптивный дизайн',

        project11Title: 'CVFlow Buddy',
        project11Desc: 'Автоматизированная система для отправки CV на вакансии. AI-анализ резюме, автоматическая авторизация и массовая отправка CV на IT вакансии с помощью Playwright и Groq AI.',
        project11Feature1: 'AI-анализ резюме с помощью Groq AI (Llama 3.3 70B)',
        project11Feature2: 'Автоматическая авторизация и отправка CV на вакансии',
        project11Feature3: 'Планировщик задач и статистика отправок',

        project12Title: 'Nail Mastery Hub',
        project12Desc: 'Онлайн-платформа для обучения маникюру и nail-дизайну. Полнофункциональная система управления курсами с интеграцией платежей Stripe, админ-панелью с dashboard и личным кабинетом для студентов.',
        project12Feature1: 'Система управления курсами с интеграцией платежей Stripe',
        project12Feature2: 'Полнофункциональная админ-панель с dashboard и статистикой',
        project12Feature3: 'Личный кабинет студентов с отслеживанием прогресса и сертификатами',

        project13Title: 'PHP Multilang Template',
        project13Desc: 'Простой PHP шаблон для создания многоязычных веб-сайтов с поддержкой SEO оптимизации. Автоматическая генерация мета-тегов, Open Graph, Twitter Cards и JSON-LD структурированных данных.',
        project13Feature1: 'Поддержка неограниченного количества языков с красивыми URL',
        project13Feature2: 'Автоматическая генерация SEO мета-тегов и структурированных данных',
        project13Feature3: 'Безопасный вывод данных с защитой от XSS атак',

        project14Title: 'Baumaster Frankfurt',
        project14Desc: 'Современный корпоративный сайт строительной компании с интегрированной админ-панелью для управления контентом. Многоязычность, SEO оптимизация и интеграции с внешними сервисами.',
        project14Feature1: 'Полнофункциональная админ-панель для управления контентом',
        project14Feature2: 'Многоязычность (русский, немецкий, английский) и SEO оптимизация',
        project14Feature3: 'Интеграции с Google Analytics, Maps и система тестирования',

        projectimage_flowTitle: 'ImageFlow',
        projectimage_flowDesc: 'Современное веб-приложение для конвертации, оптимизации и обработки изображений. Элегантное и мощное решение с красивым и интуитивным интерфейсом.',
        projectimage_flowFeature1: '🔄 Пакетная конвертация форматов (WebP, PNG, JPG/JPEG) и создание ZIP-архивов',
        projectimage_flowFeature2: '🎛️ Обработка: изменение размера, поворот (90°, 180°, 270°), оптимизация и сжатие',
        projectimage_flowFeature3: '💎 Современный интуитивный дизайн с Vanilla JS, Node.js и Sharp',


        // "Website Previews",
        preview10Title: "Превью сайтов",
        preview10Desc: "Государственный портал Министерства экономического развития Молдовы",
        preview10OverlayText: "Посмотреть превью",
        // Tech Stack Section
        techStackTitle: 'Технологический стек',

        // Education Section
        educationTitle: 'Образование и сертификаты',

        // Contact Section
        contactTitle: 'Связаться со мной',
        nameLabel: 'Имя',
        emailLabel: 'Email',
        messageLabel: 'Сообщение',
        sendMessage: 'Отправить сообщение',

        // Footer
        allRightsReserved: '© 2025 Никита Урсуленко — Все права защищены'
    },
    en: {
        // Navigation
        home: 'Home',
        about: 'About',
        experience: 'Experience',
        projects: 'Projects',
        preview: 'Sites',
        skills: 'Skills',
        education: 'Education',
        contact: 'Contact',

        // Hero Section
        heroTitle: 'Hi, I\'m Nikita Ursulenco',
        heroSubtitle: 'Full-stack Developer | Python, JS, Django, WordPress',
        viewProjects: 'View Projects',
        downloadCV: 'Download CV',
        cvPath: 'assets/docs/Nikita_Ursulenco_EN.pdf',

        // About Section
        aboutTitle: 'About Me',
        aboutText1: 'Hello! I\'m Nikita Ursulenco, a full-stack developer with over 4 years of experience creating modern web applications. I specialize in Python/Django for backend development and React/Next.js for frontend.',
        aboutText2: 'My experience includes developing corporate websites on WordPress using Advanced Custom Fields, creating REST APIs, integrating with external services, and developing Telegram bots. I strive to create quality, scalable code and am always learning new technologies.',
        aboutText3: 'When I\'m not coding, I study new frameworks, read technical literature, or work on pet projects. I\'m open to new challenges and interesting projects!',
        keySkills: 'Key Skills',

        // Experience Section
        experienceTitle: 'Work Experience',
        responsibilities: 'Key Responsibilities',

        // Experience Jobs
        job0Period: 'NOW',
        job0Title: 'Full Stack Engineer (Part-time / Remote)',
        job0Company: 'BlazarLabs | Chișinău, Moldova',
        job0Resp1: 'App Maintenance & Optimization: Maintained, debugged, and continuously improved mobile and web applications to ensure stable performance.',
        job0Resp2: 'Payment Integration: Successfully integrated secure online payment gateways for seamless and reliable user transactions.',
        job0Resp3: 'Frontend & UI/UX: Developed interactive and user-friendly mobile interfaces using React Native and JavaScript, focusing on UX/UI best practices.',
        job0Resp4: 'Backend & Data Integration: Managed backend services, real-time databases, and API integrations using Firebase and JSON data structures.',
        job0Resp5: 'Version Control: Utilized GitHub for efficient code management and collaborative development.',
        job0Resp6: 'Tech Stack: React Native, JavaScript, JSON, Firebase, UX/UI, GitHub',


        job1Period: '2026',
        job1Title: 'Frontend-Backend Developer',
        job1Company: 'SykorsMedia | Chişinău, Moldova',
        job1Resp1: 'Improved and extended web platforms: updated UI/UX and implemented new features',
        job1Resp2: 'Developed backend functionality with PHP/Laravel (data handling, models, APIs)',
        job1Resp3: 'Built and integrated Vue.js components with backend logic',
        job1Resp4: 'Worked with PostgreSQL and Docker as part of the daily development process',

        job2Period: '2025',
        job2Title: 'Web Developer (Project Work)',
        job2Company: 'Blazar.io',
        job2Resp1: 'Independently designed and fully developed a government website for Moldova',
        job2Resp2: 'Created a WordPress site using Advanced Custom Fields (ACF)',
        job2Resp3: 'Implemented the ability to add new custom blocks, simplifying content management',
        job2Resp4: 'Completed the full development cycle: from WordPress installation and database connection to final configuration',

        job3Period: '2024 - 2025',
        job3Title: 'Full-Stack Developer',
        job3Company: 'MoldExpo | Chișinău, Moldova',
        job3Resp1: 'Developed a "Restaurant Menu" web application using Angular and TypeScript',
        job3Resp2: 'Designed application architecture, working with components and modules',
        job3Resp3: 'Integrated with database and REST API',
        job3Resp4: 'Implemented responsive layout, performance optimization and UX/UI improvements',

        job4Period: '2023',
        job4Title: 'Full-Stack Developer',
        job4Company: 'TechNova Solutions | Moscow',
        job4Resp1: 'Developed web applications using React (Next.js), Angular and TypeScript',
        job4Resp2: 'Built server-side solutions with Django, FastAPI and REST API',
        job4Resp3: 'Integrated cryptocurrency trading strategies and automation',
        job4Resp4: 'Optimized UI/UX, implemented responsive design and enhanced performance',
        job4Resp5: 'Developed mobile applications using React Native and Expo',

        job5Period: '2022 - 2023',
        job5Title: 'Frontend Developer',
        job5Company: 'DigitalWave Agency | Minsk',
        job5Resp1: 'Developed interfaces for landing pages and marketing platforms using React and Tailwind CSS',
        job5Resp2: 'Optimized SEO and UX/UI, improved page loading speed',
        job5Resp3: 'Integrated APIs, configured animations and interactive components',

        job6Period: '2021 - 2022',
        job6Title: 'Web Developer',
        job6Company: 'WebCore Technologies | Novosibirsk',
        job6Resp1: 'Developed and maintained WordPress websites (PHP, SCSS, SEO)',
        job6Resp2: 'Optimized loading speed and implemented responsive design for all devices',
        job6Resp3: 'Custom themes and plugins, developed unique functionality',

        job7Period: '2021',
        job7Title: 'Backend Developer',
        job7Company: 'DataFlow Systems | Moscow',
        job7Resp1: 'Developed Telegram parsers, bots and automation using Python (Selenium, BeautifulSoup, Scrapy)',
        job7Resp2: 'Integrated APIs, worked with PostgreSQL and MySQL and processed data',
        job7Resp3: 'Built financial systems and platforms for cryptocurrency arbitrage',

        // Projects Section
        projectsTitle: 'My Projects',
        technologies: 'Technologies',
        keyFeatures: 'Key Features',
        github: 'GitHub',

        // Project descriptions
        project1Title: 'MDED',
        project1Desc: 'Custom WordPress theme with modern architecture. Uses Timber/Twig for clean code and Tailwind CSS for styling.',
        project1Feature1: 'Clean architecture with logic separation',
        project1Feature2: 'Fast development with ready-made components',
        project1Feature3: 'Full responsiveness for all devices',

        project2Title: 'Nomads',
        project2Desc: 'Responsive WordPress landing page with interactive forms and sliders. Optimized for fast loading and SEO.',
        project2Feature1: 'Easy content editing through admin panel',
        project2Feature2: 'Responsive design for all screens',
        project2Feature3: 'Interactive forms and sliders',

        project3Title: 'venvArbitrage',
        project3Desc: 'Python bot for automatic cryptocurrency arbitrage between exchanges. Analyzes spreads and executes profitable trades.',
        project3Feature1: 'Asynchronous data processing from exchanges',
        project3Feature2: 'Convenient GUI for monitoring',
        project3Feature3: 'Automatic accounting of fees and spreads',

        project4Title: 'Calendar Task',
        project4Desc: 'Web calendar with authorization system and admin panel. Supports different display views and task management.',
        project4Feature1: 'Views: day, week, month',
        project4Feature2: 'User role system',
        project4Feature3: 'Interactive event management',

        project5Title: 'KOTLIN-SaleOfApartments',
        project5Desc: 'Android application for apartment sales with convenient search system. Includes filtering and application management.',
        project5Feature1: 'Advanced object filtering',
        project5Feature2: 'Application management system',
        project5Feature3: 'Intuitive mobile interface',

        project6Title: 'Python-Parser-Telegram',
        project6Desc: 'Telegram group member parser with data saving capability. Convenient GUI for setup and process monitoring.',
        project6Feature1: 'Automatic data saving',
        project6Feature2: 'Graphical interface for management',
        project6Feature3: 'Export results to various formats',

        project7Title: 'Django-TikTok-SMM-Web',
        project7Desc: 'Web platform for TikTok video promotion via Django. Order system, API integrations and payment processing.',
        project7Feature1: 'Promotion order system',
        project7Feature2: 'Integration with external APIs',
        project7Feature3: 'Built-in payment system',

        project8Title: 'React-MathNails',
        project8Desc: 'React application for nail service master calculations. Helps track materials and calculate service costs.',
        project8Feature1: 'Detailed report generation',
        project8Feature2: 'History of all operations',
        project8Feature3: 'Service cost calculator',

        project9Title: 'MyPawsCharity',
        project9Desc: 'Animal shelter website with donation system. Responsive design, donation form and pet gallery.',
        project9Feature1: 'Full responsiveness for all devices',
        project9Feature2: 'Integrated donation form',
        project9Feature3: 'Interactive animal gallery',

        project10Title: 'MutUmzug',
        project10Desc: 'Website for MUT Umzüge & Transport company - professional moving services in Germany. Modular architecture with PHP components and admin panel.',
        project10Feature1: 'Modular architecture with reusable components',
        project10Feature2: 'Admin panel for configuration management',
        project10Feature3: 'SEO optimization and responsive design',

        project11Title: 'CVFlow Buddy',
        project11Desc: 'Automated system for CV submission on job vacancies. AI resume analysis, automatic authorization and bulk CV submission on IT vacancies using Playwright and Groq AI.',
        project11Feature1: 'AI resume analysis with Groq AI (Llama 3.3 70B)',
        project11Feature2: 'Automatic authorization and CV submission on vacancies',
        project11Feature3: 'Task scheduler and submission statistics',

        project12Title: 'Nail Mastery Hub',
        project12Desc: 'Online platform for nail and nail design training. Full-featured course management system with Stripe payment integration, admin panel with dashboard and personal account for students.',
        project12Feature1: 'Course management system with Stripe payment integration',
        project12Feature2: 'Full-featured admin panel with dashboard and statistics',
        project12Feature3: 'Personal account for students with progress tracking and certificates',

        project13Title: 'PHP Multilang Template',
        project13Desc: 'Simple PHP template for creating multi-language websites with SEO optimization support. Automatic generation of meta tags, Open Graph, Twitter Cards and JSON-LD structured data.',
        project13Feature1: 'Support for unlimited languages with beautiful URLs',
        project13Feature2: 'Automatic generation of SEO meta tags and structured data',
        project13Feature3: 'Secure data output with protection against XSS attacks',

        project14Title: 'Baumaster Frankfurt',
        project14Desc: 'Modern corporate website for a construction company with an integrated admin panel for content management. Multi-language support, SEO optimization and integration with external services.',
        project14Feature1: 'Full-featured admin panel for content management',
        project14Feature2: 'Multi-language (Russian, German, English) and SEO optimization',
        project14Feature3: 'Integrations with Google Analytics, Maps and testing system',

        projectimage_flowTitle: 'ImageFlow',
        projectimage_flowDesc: 'Modern web application for converting, optimizing, and processing images. Elegant and powerful solution with a beautiful and intuitive interface.',
        projectimage_flowFeature1: '🔄 Batch format conversion (WebP, PNG, JPG/JPEG) and ZIP archive creation',
        projectimage_flowFeature2: '🎛️ Processing tools: resizing, rotation (90°, 180°, 270°), optimization and compression',
        projectimage_flowFeature3: '💎 Modern intuitive interface with Vanilla JS, Node.js, and Sharp',


        // "Website Previews"
        preview10Title: "Website Previews",
        preview10Desc: "Government portal of the Ministry of Economic Development of Moldova",
        preview10OverlayText: "View Preview",
        // Tech Stack Section
        techStackTitle: 'Tech Stack',

        // Education Section
        educationTitle: 'Education and Certificates',

        // Contact Section
        contactTitle: 'Contact Me',
        nameLabel: 'Name',
        emailLabel: 'Email',
        messageLabel: 'Message',
        sendMessage: 'Send Message',

        // Footer
        allRightsReserved: '© 2025 Nikita Ursulenco — All Rights Reserved'
    }
};

function updateContent(lang) {
    const t = translations[lang];

    // Navigation
    document.querySelectorAll('a[href="#home"]').forEach(el => el.textContent = t.home);
    document.querySelectorAll('a[href="#about"]').forEach(el => el.textContent = t.about);
    document.querySelectorAll('a[href="#experience"]').forEach(el => el.textContent = t.experience);
    document.querySelectorAll('a[href="#projects"]').forEach(el => el.textContent = t.projects);
    document.querySelectorAll('a[href="#previews"]').forEach(el => el.textContent = t.preview);
    document.querySelectorAll('a[href="#skills"]').forEach(el => el.textContent = t.skills);
    document.querySelectorAll('a[href="#education"]').forEach(el => el.textContent = t.education);
    document.querySelectorAll('a[href="#contact"]').forEach(el => el.textContent = t.contact);

    // Hero section
    document.querySelector('.hero-content h1').textContent = t.heroTitle;
    document.querySelector('.hero-content p').textContent = t.heroSubtitle;
    document.querySelector('.btn-primary span').textContent = t.viewProjects;
    document.querySelector('.btn-secondary span').textContent = t.downloadCV;
    document.querySelector('.btn-secondary').href = t.cvPath;

    // Section titles
    document.querySelector('#about .section-title').textContent = t.aboutTitle;
    document.querySelector('#experience .section-title').textContent = t.experienceTitle;
    document.querySelector('#projects .section-title').textContent = t.projectsTitle;
    document.querySelector('#skills .section-title').textContent = t.techStackTitle;
    document.querySelector('#education .section-title').textContent = t.educationTitle;
    document.querySelector('#contact .section-title').textContent = t.contactTitle;
    document.querySelector('#previews .section-title').textContent = t.preview10Title;


    // Update about section
    const aboutTexts = document.querySelectorAll('.about-text p');
    if (aboutTexts.length >= 3) {
        aboutTexts[0].textContent = t.aboutText1;
        aboutTexts[1].textContent = t.aboutText2;
        aboutTexts[2].textContent = t.aboutText3;
    }

    const keySkillsTitle = document.querySelector('.skills-card h3');
    if (keySkillsTitle) keySkillsTitle.textContent = t.keySkills;

    // Update experience section
    document.querySelectorAll('.responsibilities-title').forEach(el => {
        el.textContent = t.responsibilities;
    });

    // Update experience jobs
    const experienceItems = document.querySelectorAll('.experience-item');
    if (experienceItems.length >= 8) {
        // Job 0 (BlazarLabs - newest)
        experienceItems[0].querySelector('.experience-period').textContent = t.job0Period;
        experienceItems[0].querySelector('.experience-title').textContent = t.job0Title;
        experienceItems[0].querySelector('.experience-company').textContent = t.job0Company;
        const job0Resps = experienceItems[0].querySelectorAll('.responsibilities-list li');
        if (job0Resps.length >= 6) {
            job0Resps[0].textContent = t.job0Resp1;
            job0Resps[1].textContent = t.job0Resp2;
            job0Resps[2].textContent = t.job0Resp3;
            job0Resps[3].textContent = t.job0Resp4;
            job0Resps[4].textContent = t.job0Resp5;
            job0Resps[5].textContent = t.job0Resp6;
        }


        // Job 1 (SykorsMedia)
        experienceItems[1].querySelector('.experience-period').textContent = t.job1Period;
        experienceItems[1].querySelector('.experience-title').textContent = t.job1Title;
        experienceItems[1].querySelector('.experience-company').textContent = t.job1Company;
        const job1Resps = experienceItems[1].querySelectorAll('.responsibilities-list li');
        if (job1Resps.length >= 4) {
            job1Resps[0].textContent = t.job1Resp1;
            job1Resps[1].textContent = t.job1Resp2;
            job1Resps[2].textContent = t.job1Resp3;
            job1Resps[3].textContent = t.job1Resp4;
        }

        // Job 2 (Blazar.io)
        experienceItems[2].querySelector('.experience-period').textContent = t.job2Period;
        experienceItems[2].querySelector('.experience-title').textContent = t.job2Title;
        experienceItems[2].querySelector('.experience-company').textContent = t.job2Company;
        const job2Resps = experienceItems[2].querySelectorAll('.responsibilities-list li');
        if (job2Resps.length >= 4) {
            job2Resps[0].textContent = t.job2Resp1;
            job2Resps[1].textContent = t.job2Resp2;
            job2Resps[2].textContent = t.job2Resp3;
            job2Resps[3].textContent = t.job2Resp4;
        }

        // Job 3 (MoldExpo)
        experienceItems[3].querySelector('.experience-period').textContent = t.job3Period;
        experienceItems[3].querySelector('.experience-title').textContent = t.job3Title;
        experienceItems[3].querySelector('.experience-company').textContent = t.job3Company;
        const job3Resps = experienceItems[3].querySelectorAll('.responsibilities-list li');
        if (job3Resps.length >= 4) {
            job3Resps[0].textContent = t.job3Resp1;
            job3Resps[1].textContent = t.job3Resp2;
            job3Resps[2].textContent = t.job3Resp3;
            job3Resps[3].textContent = t.job3Resp4;
        }

        // Job 4 (TechNova Solutions)
        experienceItems[4].querySelector('.experience-period').textContent = t.job4Period;
        experienceItems[4].querySelector('.experience-title').textContent = t.job4Title;
        experienceItems[4].querySelector('.experience-company').textContent = t.job4Company;
        const job4Resps = experienceItems[4].querySelectorAll('.responsibilities-list li');
        if (job4Resps.length >= 5) {
            job4Resps[0].textContent = t.job4Resp1;
            job4Resps[1].textContent = t.job4Resp2;
            job4Resps[2].textContent = t.job4Resp3;
            job4Resps[3].textContent = t.job4Resp4;
            job4Resps[4].textContent = t.job4Resp5;
        }

        // Job 5 (DigitalWave Agency)
        experienceItems[5].querySelector('.experience-period').textContent = t.job5Period;
        experienceItems[5].querySelector('.experience-title').textContent = t.job5Title;
        experienceItems[5].querySelector('.experience-company').textContent = t.job5Company;
        const job5Resps = experienceItems[5].querySelectorAll('.responsibilities-list li');
        if (job5Resps.length >= 3) {
            job5Resps[0].textContent = t.job5Resp1;
            job5Resps[1].textContent = t.job5Resp2;
            job5Resps[2].textContent = t.job5Resp3;
        }

        // Job 6 (WebCore Technologies)
        experienceItems[6].querySelector('.experience-period').textContent = t.job6Period;
        experienceItems[6].querySelector('.experience-title').textContent = t.job6Title;
        experienceItems[6].querySelector('.experience-company').textContent = t.job6Company;
        const job6Resps = experienceItems[6].querySelectorAll('.responsibilities-list li');
        if (job6Resps.length >= 3) {
            job6Resps[0].textContent = t.job6Resp1;
            job6Resps[1].textContent = t.job6Resp2;
            job6Resps[2].textContent = t.job6Resp3;
        }

        // Job 7 (DataFlow Systems)
        experienceItems[7].querySelector('.experience-period').textContent = t.job7Period;
        experienceItems[7].querySelector('.experience-title').textContent = t.job7Title;
        experienceItems[7].querySelector('.experience-company').textContent = t.job7Company;
        const job7Resps = experienceItems[7].querySelectorAll('.responsibilities-list li');
        if (job7Resps.length >= 3) {
            job7Resps[0].textContent = t.job7Resp1;
            job7Resps[1].textContent = t.job7Resp2;
            job7Resps[2].textContent = t.job7Resp3;
        }
    }

    // Update projects section
    document.querySelectorAll('.tech-title').forEach(el => {
        el.textContent = t.technologies;
    });

    document.querySelectorAll('.features-title').forEach(el => {
        el.textContent = t.keyFeatures;
    });

    document.querySelectorAll('.project-link').forEach(el => {
        const githubText = el.querySelector('span:not(.github-icon)');
        if (githubText) githubText.textContent = t.github;
    });

    // Update project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const id = card.getAttribute('data-project-id');
        if (id) {
            const titleStr = t[`project${id}Title`];
            if (titleStr) {
                const titleEl = card.querySelector('.project-title');
                if (titleEl && titleEl.lastChild) titleEl.lastChild.textContent = titleStr;
                const descEl = card.querySelector('.project-description');
                if (descEl) descEl.textContent = t[`project${id}Desc`];
                
                const features = card.querySelectorAll('.features-list li');
                if (features.length >= 3) {
                    features[0].textContent = t[`project${id}Feature1`];
                    features[1].textContent = t[`project${id}Feature2`];
                    features[2].textContent = t[`project${id}Feature3`];
                }
            }
        }
    });

    const previewCards = document.querySelectorAll('.preview-card');
    previewCards.forEach(card => {
        const id = card.getAttribute('data-preview-id');
        if (id && previewData[id]) {
            const pTitle = card.querySelector('.preview-title');
            const pDesc = card.querySelector('.preview-description');
            if (pTitle) pTitle.textContent = previewData[id].title[lang];
            
            if (pDesc) {
                if (id === 'mded' && t.preview10Desc) {
                    pDesc.textContent = t.preview10Desc;
                } else {
                    pDesc.textContent = previewData[id].description[lang];
                }
            }
        }
    });

    document.querySelectorAll('.preview-overlay-text').forEach((el, index) => {
        // Можно подставлять по индексу, если разные карточки имеют разные тексты
        if (lang === 'en') {
            el.textContent = translations.en[`preview${index + 1}OverlayText`] || "View Preview";
        } else {
            el.textContent = translations.ru[`preview${index + 1}OverlayText`] || "Посмотреть превью";
        }
    });

    // Update contact form
    const nameLabel = document.querySelector('label[for="name"]');
    const emailLabel = document.querySelector('label[for="email"]');
    const messageLabel = document.querySelector('label[for="message"]');
    const submitBtn = document.querySelector('button[type="submit"]');

    if (nameLabel) nameLabel.textContent = t.nameLabel;
    if (emailLabel) emailLabel.textContent = t.emailLabel;
    if (messageLabel) messageLabel.textContent = t.messageLabel;
    if (submitBtn) submitBtn.textContent = t.sendMessage;

    // Update footer
    const footerText = document.querySelector('.footer-content p');
    if (footerText) footerText.textContent = t.allRightsReserved;
}
function switchLanguage(lang) {
    currentLanguage = lang;

    // Update language buttons
    document.querySelectorAll('.lang-btn, .mobile-lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.querySelectorAll(`[onclick="switchLanguage('${lang}')"]`).forEach(btn => {
        btn.classList.add('active');
    });

    // Update content
    updateContent(lang);

    // Обновляем изображения в превью карточках после смены языка
    updatePreviewCardImages();
}
// Smooth scrolling for navigation links, with fixed header offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const header = document.querySelector('nav'); // Make sure this selector matches your header
            const headerHeight = header.offsetHeight; // Get the header's height

            // Calculate the new scroll position
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const scrollPosition = targetPosition - headerHeight;

            // Scroll to the new position
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Mobile project cards hover effect on scroll
const projectObserverOptions = {
    threshold: 0.6, // Trigger when 60% of the card is visible
    rootMargin: '0px'
};

const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('mobile-active');
        } else {
            entry.target.classList.remove('mobile-active');
        }
    });
}, projectObserverOptions);

// Mobile experience cards hover effect on scroll
const experienceObserverOptions = {
    threshold: 0.7, // Trigger when 70% of the card is visible
    rootMargin: '0px'
};

const experienceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('mobile-active');
        } else {
            entry.target.classList.remove('mobile-active');
        }
    });
}, experienceObserverOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Observe project cards for mobile hover effect
document.querySelectorAll('.project-card').forEach(card => {
    projectObserver.observe(card);
});

// Observe experience cards for mobile hover effect
document.querySelectorAll('.experience-card').forEach(card => {
    experienceObserver.observe(card);
});
// Observe experience cards for mobile hover effect
document.querySelectorAll('.education-card').forEach(card => {
    experienceObserver.observe(card);
});

// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileNavOverlay.classList.remove('active');
    // Restore body scroll after animation completes
    setTimeout(() => {
        if (!mobileNavOverlay.classList.contains('active')) {
            document.body.style.overflow = 'auto';
        }
    }, 400);
}

function openMobileMenu() {
    mobileMenu.classList.add('active');
    mobileNavOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

mobileMenu.addEventListener('click', () => {
    if (mobileNavOverlay.classList.contains('active')) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
});

// Close mobile menu when clicking on a link
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu();
    });
});

// Close mobile menu when clicking outside
mobileNavOverlay.addEventListener('click', (e) => {
    if (e.target === mobileNavOverlay) {
        closeMobileMenu();
    }
});

// Form submission
function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Simulate form submission
    alert(`Спасибо, ${name}! Ваше сообщение отправлено. Я свяжусь с вами в ближайшее время.`);
    event.target.reset();
}



// Navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(13, 17, 23, 0.98)';
    } else {
        nav.style.background = 'rgba(13, 17, 23, 0.95)';
    }
});

// Preview Modal functionality
let currentSlide = 0;
let totalSlides = 0;

// Загружаем список изображений автоматически
let imagesList = {};
let imagesListLoaded = false;

// Функция для загрузки списка изображений
async function loadImagesList() {
    if (imagesListLoaded) return imagesList;

    try {
        // Определяем базовый путь - для GitHub Pages это может быть пусто или имя репозитория
        // Для локальной разработки используем относительный путь
        const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.hostname === '';
        const pathParts = window.location.pathname.split('/').filter(p => p);
        const basePath = isLocal ? '' : (pathParts.length > 0 && pathParts[0] !== 'index.html' ? '/' + pathParts[0] : '');

        // Пробуем разные пути для JSON файла
        const paths = [
            basePath ? `${basePath}/assets/js/images-list.json` : '/assets/js/images-list.json',  // GitHub Pages с базовым путем
            '/assets/js/images-list.json',  // Абсолютный путь от корня
            './assets/js/images-list.json',  // Локальная разработка (относительный)
            'assets/js/images-list.json'    // Относительный путь от корня
        ];

        let loaded = false;
        for (const jsonPath of paths) {
            try {
                const response = await fetch(jsonPath);
                if (response.ok) {
                    imagesList = await response.json();
                    imagesListLoaded = true;
                    loaded = true;
                    return imagesList;
                }
            } catch (e) {
                // Пробуем следующий путь
                continue;
            }
        }

        if (!loaded) {
            throw new Error('Не удалось загрузить ни по одному из путей: ' + paths.join(', '));
        }

        return imagesList;
    } catch (error) {
        return {};
    }
}

// Многоязычные данные
const previewData = {
    link_flow: {
        title: {
            ru: 'LinkFlow',
            en: 'LinkFlow'
        },
        description: {
            ru: 'Персональная мультиссылка-визитка для ваших проектов. Удобный способ делиться контактами, продуктами и медиафайлами на одной странице.',
            en: 'Personal link-in-bio landing page for your projects. An easy way to share contacts, products, and media files on a single page.'
        },
        images: []
    },
    
    mded: {
        title: {
            ru: 'MDED Портал Правительства',
            en: 'MDED Government Portal'
        },
        description: {
            ru: 'Государственный портал Министерства экономического развития Молдовы с современным дизайном и удобной навигацией',
            en: 'Government portal of the Ministry of Economic Development of Moldova with modern design and user-friendly navigation'
        },
        images: [] // Автоматически из images-list.json
    },
    nomadsnews: {
        title: {
            ru: 'Nomads',
            en: 'Nomads'
        },
        description: {
            ru: 'Новостной портал с адаптивным дизайном и современным интерфейсом',
            en: 'News portal with responsive design, category system, and modern interface for reading articles'
        },
        images: [] // Автоматически из images-list.json (папка nomads)
    },
    mypawscharity: {
        title: {
            ru: 'MyPawsCharity',
            en: 'MyPawsCharity'
        },
        description: {
            ru: 'Сайт приюта для животных с системой пожертвований и галереей',
            en: 'Animal shelter website with pet gallery, donation system, and volunteer information'
        },
        images: [] // Автоматически из images-list.json
    },
    viktoriia: {
        title: {
            ru: 'Viktoriia Lakatosh Nails',
            en: 'Viktoriia Lakatosh Nails'
        },
        description: {
            ru: 'Сайт маникюра: услуги, галерея работ, контакты для записи онлайн.',
            en: 'Manicure website: services, portfolio gallery, contact page for booking.'
        },
        images: [] // Автоматически из images-list.json
    },
    atelier_md: {
        title: {
            ru: 'Atelier MD',
            en: 'Atelier MD'
        },
        description: {
            ru: 'Сайт ателье: услуги пошива, портфолио, контакты для заказов.',
            en: 'Atelier website: tailoring services, portfolio, contact page for orders.'
        },
        images: [] // Автоматически из images-list.json
    },
    nailshop: {
        title: {
            ru: 'Nail Shop',
            en: 'Nail Shop'
        },
        description: {
            ru: 'Сайт магазина ногтевых товаров: каталог, корзина, контактная страница.',
            en: 'Nail shop website: product catalog, shopping cart, contact page.'
        },
        images: [] // Автоматически из images-list.json
    },
    django_tiktok: {
        title: {
            ru: 'Django TikTok',
            en: 'Django TikTok'
        },
        description: {
            ru: 'Веб-приложение для продвижения в TikTok с оплатой и автоматизацией.',
            en: 'Web app for TikTok promotion with payments and automation.'
        },
        images: [] // Автоматически из images-list.json
    },
    calendar_task: {
        title: {
            ru: 'Calendar Task',
            en: 'Calendar Task'
        },
        description: {
            ru: 'Веб-приложение для создания и управления событиями с поддержкой календаря и системы пользователей.',
            en: 'A web application for creating and managing events with calendar support and a user system.'
        },
        images: [] // Автоматически из images-list.json
    },
    mutumzug: {
        title: {
            ru: 'MUT Umzüge & Transport',
            en: 'MUT Umzüge & Transport'
        },
        description: {
            ru: 'Веб-сайт для компании переездов в Германии с модульной архитектурой и админ-панелью.',
            en: 'Website for moving company in Germany with modular architecture and admin panel.'
        },
        images: [] // Будет заполнено автоматически из images-list.json
    },
    sv_send: {
        title: {
            ru: 'CVFlow Buddy',
            en: 'CVFlow Buddy'
        },
        description: {
            ru: 'Автоматизированная система для отправки CV на вакансии с AI-анализом резюме и автоматической авторизацией.',
            en: 'Automated system for CV submission on job vacancies with AI resume analysis and automatic authorization.'
        },
        images: [] // Автоматически из images-list.json
    },
    nails_course: {
        title: {
            ru: 'Nail Mastery Hub',
            en: 'Nail Mastery Hub'
        },
        description: {
            ru: 'Онлайн-платформа для обучения маникюру и nail-дизайну с системой управления курсами, интеграцией платежей и админ-панелью.',
            en: 'Online platform for nail art and nail design education with course management system, payment integration and admin panel.'
        },
        images: [] // Автоматически из images-list.json
    },
    template_translate: {
        title: {
            ru: 'PHP Multilang Template',
            en: 'PHP Multilang Template'
        },
        description: {
            ru: 'Простой PHP шаблон для создания многоязычных веб-сайтов с поддержкой SEO оптимизации и автоматической генерацией мета-тегов.',
            en: 'Simple PHP template for creating multilingual websites with SEO optimization support and automatic meta tag generation.'
        },
        images: [] // Автоматически из images-list.json
    },
    baumaster_frankfurt: {
        title: {
            ru: 'Baumaster Frankfurt',
            en: 'Baumaster Frankfurt'
        },
        description: {
            ru: 'Современный корпоративный сайт строительной компании с интегрированной админ-панелью для управления контентом. Многоязычность, SEO оптимизация и интеграции с внешними сервисами.',
            en: 'Modern corporate website for a construction company with integrated admin panel for content management. Multilingual support, SEO optimization and integrations with external services.'
        },
        images: [] // Автоматически из images-list.json (будет добавлено позже)
    },
    image_flow: {
        title: {
            ru: 'ImageFlow',
            en: 'ImageFlow'
        },
        description: {
            ru: 'Современное веб-приложение для конвертации, оптимизации и пакетной обработки изображений.',
            en: 'Modern web application for converting, optimizing, and batch processing images.'
        },
        images: []
    },
    restaurant_menu: {
        title: {
            ru: 'Restaurant Menu',
            en: 'Restaurant Menu'
        },
        description: {
            ru: 'Приложение меню ресторана на Angular.',
            en: 'Restaurant menu application built with Angular.'
        },
        images: []
    },


};

// Функция для получения изображений проекта (автоматически из JSON или из previewData)
function getProjectImages(projectId) {
    // Маппинг названий проектов на папки (если названия не совпадают)
    const folderMapping = {
        'nomadsnews': 'nomads', // nomadsnews в previewData, но папка называется nomads
        'baumaster_frankfurt': 'baumaster-frankfurt' // baumaster_frankfurt в previewData, но папка называется baumaster-frankfurt
    };

    const folderName = folderMapping[projectId] || projectId;

    // Если есть автоматически загруженный список, используем его
    if (imagesList && imagesList[folderName] && imagesList[folderName].length > 0) {
        return imagesList[folderName];
    }

    // Иначе используем встроенные данные из previewData (fallback)
    if (previewData[projectId] && previewData[projectId].images && previewData[projectId].images.length > 0) {
        return previewData[projectId].images;
    }

    return [];
}


async function openPreviewModal(projectId) {
    // Загружаем список изображений, если еще не загружен
    await loadImagesList();

    const modal = document.getElementById('previewModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const sliderWrapper = document.getElementById('sliderWrapper');
    const sliderDots = document.getElementById('sliderDots');

    const project = previewData[projectId];
    if (!project) {
        console.error(`Проект ${projectId} не найден в previewData`);
        return;
    }

    modalTitle.textContent = project.title[currentLanguage];
    modalDescription.textContent = project.description[currentLanguage];

    // Получаем изображения автоматически
    const images = getProjectImages(projectId);

    if (images.length === 0) {
        console.error(`Нет изображений для проекта: ${projectId}`);
        return;
    }

    // Clear existing slides and dots
    sliderWrapper.innerHTML = '';
    sliderDots.innerHTML = '';

    // Create slides
    images.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.innerHTML = `<img src="${image}" 
        alt="${project.title[currentLanguage]} - Slide ${index + 1}" 
        onerror="this.src=''; this.style.display='none';" 
        style="padding:1%;" loading="lazy">`;
        sliderWrapper.appendChild(slide);

        // Create dot
        const dot = document.createElement('div');
        dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
        dot.onclick = () => goToSlide(index);
        sliderDots.appendChild(dot);
    });

    totalSlides = images.length;
    currentSlide = 0;
    updateSlider();

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('previewModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
    }
}

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlider();
    }
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

function updateSlider() {
    const sliderWrapper = document.getElementById('sliderWrapper');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });

    // Update navigation buttons
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === totalSlides - 1;
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Close modal when clicking outside
document.getElementById('previewModal').addEventListener('click', (e) => {
    if (e.target.id === 'previewModal') {
        closeModal();
    }
});




// Функция для обновления изображений в превью карточках
function updatePreviewCardImages() {
    const previewCards = document.querySelectorAll(".preview-card");
    if (previewCards.length === 0) return;

    previewCards.forEach(card => {
        const id = card.getAttribute('data-preview-id');
        if (id) {
            const images = getProjectImages(id);
            if (images.length > 0) {
                const img = card.querySelector('.preview-image img');
                if (img) {
                    img.src = images[0];
                    const project = previewData[id];
                    if (project) {
                        img.alt = `${project.title[currentLanguage]} - Website preview`;
                    }
                }
            }
        }
    });
}

// Загружаем список изображений при загрузке страницы
document.addEventListener("DOMContentLoaded", async () => {
    // Предзагружаем список изображений
    const loaded = await loadImagesList();

    // Обновляем изображения в превью карточках после загрузки
    if (loaded && Object.keys(imagesList).length > 0) {
        updatePreviewCardImages();
    }

    const previewCards = document.querySelectorAll(".preview-card");

    const updateHoverActive = () => {
        if (window.innerWidth > 769) {
            // Для экранов меньше 769px сбрасываем hover
            previewCards.forEach(card => card.classList.remove("hover-active"));
            return;
        }

        // Получаем все карточки, которые видны >= 70%
        const visibleCards = Array.from(previewCards).filter(card => {
            const rect = card.getBoundingClientRect();
            const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
            return visibleHeight / rect.height >= 0.7;
        });

        // Сбрасываем hover у всех
        previewCards.forEach(card => card.classList.remove("hover-active"));

        // Если есть видимые, активируем последнюю (нижнюю) карточку
        if (visibleCards.length > 0) {
            const lastCard = visibleCards[visibleCards.length - 1];
            lastCard.classList.add("hover-active");
        }
    };

    const observer = new IntersectionObserver(() => {
        updateHoverActive();
    }, { threshold: [0.7] });

    previewCards.forEach(card => observer.observe(card));

    window.addEventListener("scroll", updateHoverActive);
    window.addEventListener("resize", updateHoverActive);
});


function initMatrix(canvasId) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        const section = canvas.closest('section');
        if (section) {
            const rect = section.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
        } else {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    }
    resizeCanvas();

    const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 16;
    let columns = Math.floor(canvas.width / fontSize);
    const drops = [];
    const colors = ['#1f6feb', '#3574fc', '#4b82fd', '#6190fe', '#779eff', '#8dacff', '#a3baff', '#b9c8ff', '#cfd6ff', '#e5e4ff', '#a371f7'];

    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * canvas.height / fontSize;
    }

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
            const x = i * fontSize;
            const y = drops[i] * fontSize;
            const colorIndex = Math.floor(Math.random() * colors.length);
            ctx.fillStyle = colors[colorIndex];
            ctx.fillText(text, x, y);
            if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }

    setInterval(drawMatrix, 50);

    window.addEventListener('resize', () => {
        resizeCanvas();
        columns = Math.floor(canvas.width / fontSize);
        drops.length = columns;
        for (let i = 0; i < columns; i++) {
            if (drops[i] === undefined) {
                drops[i] = Math.random() * canvas.height / fontSize;
            }
        }
    });
}

// Запускаем для двух канвасов
initMatrix('matrixCanvas1');
initMatrix('matrixCanvas2');




// Дублируем элементы для бесшовной анимации
document.addEventListener('DOMContentLoaded', function () {
    const track = document.getElementById('techTrack');
    const items = track.innerHTML;

    // Добавляем копию элементов для бесшовной анимации
    track.innerHTML = items + items;
});

// Пауза анимации при наведении
const slider = document.querySelector('.tech-slider');
const track = document.querySelector('.tech-track');

slider.addEventListener('mouseenter', () => {
    track.style.animationPlayState = 'paused';
});

slider.addEventListener('mouseleave', () => {
    track.style.animationPlayState = 'running';
});



document.querySelectorAll('.verify-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const certUrl = link.dataset.certificate;
        const modal = document.getElementById('certificateModal');
        const frame = document.getElementById('certificateFrame');
        frame.src = certUrl;
        modal.style.display = 'flex';
    });
});

// закрытие
document.querySelector('#certificateModal .close').onclick = () => {
    document.getElementById('certificateModal').style.display = 'none';
    document.getElementById('certificateFrame').src = '';
};
window.onclick = e => {
    if (e.target.id === 'certificateModal') {
        document.getElementById('certificateModal').style.display = 'none';
        document.getElementById('certificateFrame').src = '';
    }
};