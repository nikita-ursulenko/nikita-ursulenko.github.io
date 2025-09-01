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
                aboutText1: 'Привет! Я Никита Урсуленко, full-stack разработчик с более чем 3-летним опытом создания современных веб-приложений. Специализируюсь на Python/Django для backend-разработки и React/Next.js для frontend.',
                aboutText2: 'Мой опыт включает разработку корпоративных веб-сайтов на WordPress с использованием Advanced Custom Fields, создание REST API, интеграцию с внешними сервисами и разработку Telegram-ботов. Я стремлюсь к созданию качественного, масштабируемого кода и всегда изучаю новые технологии.',
                aboutText3: 'Когда не программирую, изучаю новые фреймворки, читаю техническую литературу или работаю над pet-проектами. Открыт для новых вызовов и интересных проектов!',
                keySkills: 'Ключевые навыки',
                
                // Experience Section
                experienceTitle: 'Опыт работы',
                responsibilities: 'Ключевые обязанности',
                
                // Experience Jobs
                job1Period: '2025',
                job1Title: 'Web-разработчик (Проектная работа)',
                job1Company: 'Blazar.io',
                job1Resp1: 'Самостоятельно разработал дизайн и полностью сверстал государственный сайт для Молдовы',
                job1Resp2: 'Создал сайт на WordPress с использованием Advanced Custom Fields (ACF)',
                job1Resp3: 'Реализовал возможность добавления новых кастомных блоков, что упрощает управление контентом',
                job1Resp4: 'Выполнил весь цикл работ: от установки WordPress и подключения базы данных до финальной настройки',
                
                job2Period: '2024 - 2025',
                job2Title: 'Full-Stack разработчик',
                job2Company: 'MoldExpo | Кишинёв, Молдова',
                job2Resp1: 'Разработано веб-приложение «Меню ресторана» с использованием Angular и TypeScript',
                job2Resp2: 'Разработал архитектуру приложения, работая с компонентами и модулями',
                job2Resp3: 'Интегрирован с базой данных и REST API',
                job2Resp4: 'Реализован адаптивный макет, оптимизация производительности и улучшения UX/UI',
                
                job3Period: '2023',
                job3Title: 'Full-Stack разработчик',
                job3Company: 'TechNova Solutions | Москва',
                job3Resp1: 'Разработаны веб-приложения с использованием React (Next.js), Angular и TypeScript',
                job3Resp2: 'Построенные серверные решения с Django, FastAPI и REST API',
                job3Resp3: 'Интегрированные стратегии торговли криптовалютой и автоматизация',
                job3Resp4: 'Оптимизированный UI/UX, реализованный адаптивный дизайн и повышенная производительность',
                job3Resp5: 'Разработаны мобильные приложения с использованием React Native и Expo',
                
                job4Period: '2022 - 2023',
                job4Title: 'Frontend разработчик',
                job4Company: 'DigitalWave Agency | Минск',
                job4Resp1: 'Разработаны интерфейсы для целевых страниц и маркетинговых платформ с использованием React и Tailwind CSS',
                job4Resp2: 'Оптимизированный SEO и UX/UI, повышение скорости загрузки страницы',
                job4Resp3: 'Интегрированные API, настроенные анимации и интерактивные компоненты',
                
                job5Period: '2021 - 2022',
                job5Title: 'Web-разработчик',
                job5Company: 'WebCore Technologies | Новосибирск',
                job5Resp1: 'Разработанные и поддерживаемые веб-сайты на WordPress (PHP, SCSS, SEO)',
                job5Resp2: 'Оптимизированная скорость загрузки и реализованный адаптивный дизайн для всех устройств',
                job5Resp3: 'Индивидуальные темы и плагины, разработка уникальной функциональности',
                
                job6Period: '2021',
                job6Title: 'Backend разработчик',
                job6Company: 'DataFlow Systems | Москва',
                job6Resp1: 'Разработаны парсеры Telegram, боты и автоматизацию с использованием Python (Selenium, BeautifulSoup, Scrapy)',
                job6Resp2: 'Интегрированные API, работа с PostgreSQL и MySQL и обработанные данные',
                job6Resp3: 'Построены финансовые системы и платформы для криптовалютного арбитража',
                
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
                aboutText1: 'Hello! I\'m Nikita Ursulenco, a full-stack developer with over 3 years of experience creating modern web applications. I specialize in Python/Django for backend development and React/Next.js for frontend.',
                aboutText2: 'My experience includes developing corporate websites on WordPress using Advanced Custom Fields, creating REST APIs, integrating with external services, and developing Telegram bots. I strive to create quality, scalable code and am always learning new technologies.',
                aboutText3: 'When I\'m not coding, I study new frameworks, read technical literature, or work on pet projects. I\'m open to new challenges and interesting projects!',
                keySkills: 'Key Skills',
                
                // Experience Section
                experienceTitle: 'Work Experience',
                responsibilities: 'Key Responsibilities',
                
                // Experience Jobs
                job1Period: '2025',
                job1Title: 'Web Developer (Project Work)',
                job1Company: 'Blazar.io',
                job1Resp1: 'Independently designed and fully developed a government website for Moldova',
                job1Resp2: 'Created a WordPress site using Advanced Custom Fields (ACF)',
                job1Resp3: 'Implemented the ability to add new custom blocks, simplifying content management',
                job1Resp4: 'Completed the full development cycle: from WordPress installation and database connection to final configuration',
                
                job2Period: '2024 - 2025',
                job2Title: 'Full-Stack Developer',
                job2Company: 'MoldExpo | Chișinău, Moldova',
                job2Resp1: 'Developed a "Restaurant Menu" web application using Angular and TypeScript',
                job2Resp2: 'Designed application architecture, working with components and modules',
                job2Resp3: 'Integrated with database and REST API',
                job2Resp4: 'Implemented responsive layout, performance optimization and UX/UI improvements',
                
                job3Period: '2023',
                job3Title: 'Full-Stack Developer',
                job3Company: 'TechNova Solutions | Moscow',
                job3Resp1: 'Developed web applications using React (Next.js), Angular and TypeScript',
                job3Resp2: 'Built server-side solutions with Django, FastAPI and REST API',
                job3Resp3: 'Integrated cryptocurrency trading strategies and automation',
                job3Resp4: 'Optimized UI/UX, implemented responsive design and enhanced performance',
                job3Resp5: 'Developed mobile applications using React Native and Expo',
                
                job4Period: '2022 - 2023',
                job4Title: 'Frontend Developer',
                job4Company: 'DigitalWave Agency | Minsk',
                job4Resp1: 'Developed interfaces for landing pages and marketing platforms using React and Tailwind CSS',
                job4Resp2: 'Optimized SEO and UX/UI, improved page loading speed',
                job4Resp3: 'Integrated APIs, configured animations and interactive components',
                
                job5Period: '2021 - 2022',
                job5Title: 'Web Developer',
                job5Company: 'WebCore Technologies | Novosibirsk',
                job5Resp1: 'Developed and maintained WordPress websites (PHP, SCSS, SEO)',
                job5Resp2: 'Optimized loading speed and implemented responsive design for all devices',
                job5Resp3: 'Custom themes and plugins, developed unique functionality',
                
                job6Period: '2021',
                job6Title: 'Backend Developer',
                job6Company: 'DataFlow Systems | Moscow',
                job6Resp1: 'Developed Telegram parsers, bots and automation using Python (Selenium, BeautifulSoup, Scrapy)',
                job6Resp2: 'Integrated APIs, worked with PostgreSQL and MySQL and processed data',
                job6Resp3: 'Built financial systems and platforms for cryptocurrency arbitrage',
                
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
                
                // Tech Stack Section
                techStackTitle: 'Tech Stack',
                


                preview10Title: "Website Previews",
                preview10Desc: "State portal of the Ministry of Economic Development of Moldova",
                preview10OverlayText: "View Preview",
                // Education Section
                educationTitle: 'Education & Certifications',
                
                // Contact Section
                contactTitle: 'Get in Touch',
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
            
            // Update navigation
            document.querySelectorAll('a[href="#home"]').forEach(el => el.textContent = t.home);
            document.querySelectorAll('a[href="#about"]').forEach(el => el.textContent = t.about);
            document.querySelectorAll('a[href="#experience"]').forEach(el => el.textContent = t.experience);
            document.querySelectorAll('a[href="#projects"]').forEach(el => el.textContent = t.projects);
            document.querySelectorAll('a[href="#previews"]').forEach(el => el.textContent = t.preview);
            document.querySelectorAll('a[href="#skills"]').forEach(el => el.textContent = t.skills);
            document.querySelectorAll('a[href="#education"]').forEach(el => el.textContent = t.education);
            document.querySelectorAll('a[href="#contact"]').forEach(el => el.textContent = t.contact);
            
            // Update hero section
            document.querySelector('.hero-text h2').textContent = t.heroTitle;
            document.querySelector('.hero-text p').textContent = t.heroSubtitle;
            document.querySelector('.btn-primary').textContent = t.viewProjects;
            document.querySelector('.btn-secondary').textContent = t.downloadCV;
            const downloadCvBtn = document.querySelector('.btn-secondary'); // Или по id #downloadCvBtn

            // Обновляем текст и ссылку на кнопку скачивания CV
            if (downloadCvBtn) {
                downloadCvBtn.textContent = t.downloadCV;
                downloadCvBtn.href = t.cvPath;
                downloadCvBtn.setAttribute('download', 'Nikita_Ursulenco_CV.pdf'); // Это позволит браузеру сразу скачать файл, а не открывать его в новой вкладке. Имя файла можно задать тут.
            }    
            
            // Update section titles
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
            if (experienceItems.length >= 6) {
                // Job 1
                experienceItems[0].querySelector('.experience-period').textContent = t.job1Period;
                experienceItems[0].querySelector('.experience-title').textContent = t.job1Title;
                experienceItems[0].querySelector('.experience-company').textContent = t.job1Company;
                const job1Resps = experienceItems[0].querySelectorAll('.responsibilities-list li');
                if (job1Resps.length >= 4) {
                    job1Resps[0].textContent = t.job1Resp1;
                    job1Resps[1].textContent = t.job1Resp2;
                    job1Resps[2].textContent = t.job1Resp3;
                    job1Resps[3].textContent = t.job1Resp4;
                }
                
                // Job 2
                experienceItems[1].querySelector('.experience-period').textContent = t.job2Period;
                experienceItems[1].querySelector('.experience-title').textContent = t.job2Title;
                experienceItems[1].querySelector('.experience-company').textContent = t.job2Company;
                const job2Resps = experienceItems[1].querySelectorAll('.responsibilities-list li');
                if (job2Resps.length >= 4) {
                    job2Resps[0].textContent = t.job2Resp1;
                    job2Resps[1].textContent = t.job2Resp2;
                    job2Resps[2].textContent = t.job2Resp3;
                    job2Resps[3].textContent = t.job2Resp4;
                }
                
                // Job 3
                experienceItems[2].querySelector('.experience-period').textContent = t.job3Period;
                experienceItems[2].querySelector('.experience-title').textContent = t.job3Title;
                experienceItems[2].querySelector('.experience-company').textContent = t.job3Company;
                const job3Resps = experienceItems[2].querySelectorAll('.responsibilities-list li');
                if (job3Resps.length >= 5) {
                    job3Resps[0].textContent = t.job3Resp1;
                    job3Resps[1].textContent = t.job3Resp2;
                    job3Resps[2].textContent = t.job3Resp3;
                    job3Resps[3].textContent = t.job3Resp4;
                    job3Resps[4].textContent = t.job3Resp5;
                }
                
                // Job 4
                experienceItems[3].querySelector('.experience-period').textContent = t.job4Period;
                experienceItems[3].querySelector('.experience-title').textContent = t.job4Title;
                experienceItems[3].querySelector('.experience-company').textContent = t.job4Company;
                const job4Resps = experienceItems[3].querySelectorAll('.responsibilities-list li');
                if (job4Resps.length >= 3) {
                    job4Resps[0].textContent = t.job4Resp1;
                    job4Resps[1].textContent = t.job4Resp2;
                    job4Resps[2].textContent = t.job4Resp3;
                }
                
                // Job 5
                experienceItems[4].querySelector('.experience-period').textContent = t.job5Period;
                experienceItems[4].querySelector('.experience-title').textContent = t.job5Title;
                experienceItems[4].querySelector('.experience-company').textContent = t.job5Company;
                const job5Resps = experienceItems[4].querySelectorAll('.responsibilities-list li');
                if (job5Resps.length >= 3) {
                    job5Resps[0].textContent = t.job5Resp1;
                    job5Resps[1].textContent = t.job5Resp2;
                    job5Resps[2].textContent = t.job5Resp3;
                }
                
                // Job 6
                experienceItems[5].querySelector('.experience-period').textContent = t.job6Period;
                experienceItems[5].querySelector('.experience-title').textContent = t.job6Title;
                experienceItems[5].querySelector('.experience-company').textContent = t.job6Company;
                const job6Resps = experienceItems[5].querySelectorAll('.responsibilities-list li');
                if (job6Resps.length >= 3) {
                    job6Resps[0].textContent = t.job6Resp1;
                    job6Resps[1].textContent = t.job6Resp2;
                    job6Resps[2].textContent = t.job6Resp3;
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
            if (projectCards.length >= 9) {
                // Project 1 - MDED
                projectCards[0].querySelector('.project-title').lastChild.textContent = t.project1Title;
                projectCards[0].querySelector('.project-description').textContent = t.project1Desc;
                const project1Features = projectCards[0].querySelectorAll('.features-list li');
                if (project1Features.length >= 3) {
                    project1Features[0].textContent = t.project1Feature1;
                    project1Features[1].textContent = t.project1Feature2;
                    project1Features[2].textContent = t.project1Feature3;
                }
                
                // Project 2 - NomadsNews
                projectCards[1].querySelector('.project-title').lastChild.textContent = t.project2Title;
                projectCards[1].querySelector('.project-description').textContent = t.project2Desc;
                const project2Features = projectCards[1].querySelectorAll('.features-list li');
                if (project2Features.length >= 3) {
                    project2Features[0].textContent = t.project2Feature1;
                    project2Features[1].textContent = t.project2Feature2;
                    project2Features[2].textContent = t.project2Feature3;
                }
                
                // Project 3 - venvArbitrage
                projectCards[2].querySelector('.project-title').lastChild.textContent = t.project3Title;
                projectCards[2].querySelector('.project-description').textContent = t.project3Desc;
                const project3Features = projectCards[2].querySelectorAll('.features-list li');
                if (project3Features.length >= 3) {
                    project3Features[0].textContent = t.project3Feature1;
                    project3Features[1].textContent = t.project3Feature2;
                    project3Features[2].textContent = t.project3Feature3;
                }
                
                // Project 4 - Calendar Task
                projectCards[3].querySelector('.project-title').lastChild.textContent = t.project4Title;
                projectCards[3].querySelector('.project-description').textContent = t.project4Desc;
                const project4Features = projectCards[3].querySelectorAll('.features-list li');
                if (project4Features.length >= 3) {
                    project4Features[0].textContent = t.project4Feature1;
                    project4Features[1].textContent = t.project4Feature2;
                    project4Features[2].textContent = t.project4Feature3;
                }
                
                // Project 5 - KOTLIN-SaleOfApartments
                projectCards[4].querySelector('.project-title').lastChild.textContent = t.project5Title;
                projectCards[4].querySelector('.project-description').textContent = t.project5Desc;
                const project5Features = projectCards[4].querySelectorAll('.features-list li');
                if (project5Features.length >= 3) {
                    project5Features[0].textContent = t.project5Feature1;
                    project5Features[1].textContent = t.project5Feature2;
                    project5Features[2].textContent = t.project5Feature3;
                }
                
                // Project 6 - Python-Parser-Telegram
                projectCards[5].querySelector('.project-title').lastChild.textContent = t.project6Title;
                projectCards[5].querySelector('.project-description').textContent = t.project6Desc;
                const project6Features = projectCards[5].querySelectorAll('.features-list li');
                if (project6Features.length >= 3) {
                    project6Features[0].textContent = t.project6Feature1;
                    project6Features[1].textContent = t.project6Feature2;
                    project6Features[2].textContent = t.project6Feature3;
                }
                
                // Project 7 - Django-TikTok-SMM-Web
                projectCards[6].querySelector('.project-title').lastChild.textContent = t.project7Title;
                projectCards[6].querySelector('.project-description').textContent = t.project7Desc;
                const project7Features = projectCards[6].querySelectorAll('.features-list li');
                if (project7Features.length >= 3) {
                    project7Features[0].textContent = t.project7Feature1;
                    project7Features[1].textContent = t.project7Feature2;
                    project7Features[2].textContent = t.project7Feature3;
                }
                
                // Project 8 - React-MathNails
                projectCards[7].querySelector('.project-title').lastChild.textContent = t.project8Title;
                projectCards[7].querySelector('.project-description').textContent = t.project8Desc;
                const project8Features = projectCards[7].querySelectorAll('.features-list li');
                if (project8Features.length >= 3) {
                    project8Features[0].textContent = t.project8Feature1;
                    project8Features[1].textContent = t.project8Feature2;
                    project8Features[2].textContent = t.project8Feature3;
                }
                
                // Project 9 - MyPawsCharity
                projectCards[8].querySelector('.project-title').lastChild.textContent = t.project9Title;
                projectCards[8].querySelector('.project-description').textContent = t.project9Desc;
                const project9Features = projectCards[8].querySelectorAll('.features-list li');
                if (project9Features.length >= 3) {
                    project9Features[0].textContent = t.project9Feature1;
                    project9Features[1].textContent = t.project9Feature2;
                    project9Features[2].textContent = t.project9Feature3;
                }
            }
            const previewCards = document.querySelectorAll('.preview-card');

            if (previewCards.length > 0) {
                // Preview cards translate text
                previewCards[0].querySelector('.preview-title').textContent = previewData.mded.title[lang];
                previewCards[0].querySelector('.preview-description').textContent = t.preview10Desc;
                previewCards[1].querySelector('.preview-description').textContent = previewData.nomadsnews.description[lang];
                previewCards[2].querySelector('.preview-description').textContent = previewData.mypawscharity.description[lang];
                previewCards[3].querySelector('.preview-description').textContent = previewData.viktoriia.description[lang];
                previewCards[4].querySelector('.preview-description').textContent = previewData.atelier_md.description[lang];
                previewCards[5].querySelector('.preview-description').textContent = previewData.nailshop.description[lang];
            }
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

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
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
        
        // Многоязычные данные
        const previewData = {
            mded: {
                title: {
                    ru: 'MDED Портал Правительства',
                    en: 'MDED Government Portal'
                },
                description: {
                    ru: 'Государственный портал Министерства экономического развития Молдовы с современным дизайном и удобной навигацией',
                    en: 'Government portal of the Ministry of Economic Development of Moldova with modern design and user-friendly navigation'
                },
                images: [
                    'assets/images/site/mded/site.png',
                    'assets/images/site/mded/slide1.png',
                    'assets/images/site/mded/slide2.png',
                    'assets/images/site/mded/slide3.png',
                    'assets/images/site/mded/slide4.png',
                    'assets/images/site/mded/slide5.png',
                ]
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
                images: [
                    'assets/images/site/nomads/site.png',
                    'assets/images/site/nomads/slide2.png',
                    'assets/images/site/nomads/slide3.png',
                    'assets/images/site/nomads/slide4.png',
                    'assets/images/site/nomads/slide5.png',
                    'assets/images/site/nomads/slide6.png',
                    'assets/images/site/nomads/slide7.png',
                ]
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
                images: [
                    'assets/images/site/mypawscharity/slide1.png',
                    'assets/images/site/mypawscharity/slide2.png',
                    'assets/images/site/mypawscharity/slide3.png',
                    'assets/images/site/mypawscharity/slide4.png',
                    'assets/images/site/mypawscharity/slide5.png',
                ]
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
                images: [
                    'assets/images/site/viktoriia/slide1.png',
                    'assets/images/site/viktoriia/slide2.png',
                    'assets/images/site/viktoriia/slide3.png',
                    'assets/images/site/viktoriia/slide4.png',
                    'assets/images/site/viktoriia/slide5.png',
                    'assets/images/site/viktoriia/slide6.png',
                    'assets/images/site/viktoriia/slide7.png',
                    'assets/images/site/viktoriia/slide8.png',
                    'assets/images/site/viktoriia/slide9.png',
                    'assets/images/site/viktoriia/slide10.png'
                ]
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
                images: [
                     'assets/images/site/atelier_md/slide1.png',
                    'assets/images/site/atelier_md/slide2.png',
                    'assets/images/site/atelier_md/slide3.png',
                    'assets/images/site/atelier_md/slide4.png',
                    'assets/images/site/atelier_md/slide5.png',
                    'assets/images/site/atelier_md/slide6.png',
                    'assets/images/site/atelier_md/slide7.png'
                ]
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
                images: [
                    'assets/images/site/nailshop/slide1.png',
                    'assets/images/site/nailshop/slide2.png',
                    'assets/images/site/nailshop/slide3.png',
                    'assets/images/site/nailshop/slide4.png',
                    'assets/images/site/nailshop/slide5.png',
                    'assets/images/site/nailshop/slide6.png',
                    'assets/images/site/nailshop/slide7.png',
                    'assets/images/site/nailshop/slide8.png',
                    'assets/images/site/nailshop/slide9.png',
                    'assets/images/site/nailshop/slide10.png',
                ]
            },

        };


        function openPreviewModal(projectId) {
            const modal = document.getElementById('previewModal');
            const modalTitle = document.getElementById('modalTitle');
            const modalDescription = document.getElementById('modalDescription');
            const sliderWrapper = document.getElementById('sliderWrapper');
            const sliderDots = document.getElementById('sliderDots');
            
            const project = previewData[projectId];
            if (!project) return;
            
            modalTitle.textContent = project.title[currentLanguage];
            modalDescription.textContent = project.description[currentLanguage];
            
            // Clear existing slides and dots
            sliderWrapper.innerHTML = '';
            sliderDots.innerHTML = '';
            
            // Create slides
            project.images.forEach((image, index) => {
                const slide = document.createElement('div');
                slide.className = 'slide';
                slide.innerHTML = `<img src="${image}" 
                alt="${project.title[currentLanguage]} - Slide ${index + 1}" 
                onerror="this.src=''; this.style.display='none';" 
                style="padding:1%;">`;
                sliderWrapper.appendChild(slide);
                
                // Create dot
                const dot = document.createElement('div');
                dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
                dot.onclick = () => goToSlide(index);
                sliderDots.appendChild(dot);
            });
            
            totalSlides = project.images.length;
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
        }

document.addEventListener("DOMContentLoaded", () => {
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