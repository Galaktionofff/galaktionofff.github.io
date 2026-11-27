/**
 * ШАБЛОН ДАННЫХ ПОРТФОЛИО UGC-КРЕАТОРА
 * --------------------------------------------------------------------------
 * Заполните поля ниже своими текстами, ссылками и путями к фото/видео
 * (например, положите файлы в папку ./assets/ и укажите "./assets/hero.jpg").
 * Если оставить photoUrl / videoUrl пустыми, отобразятся аккуратные плейсхолдеры.
 */

window.PORTFOLIO_DATA = {
  // Общие настройки шапки, Hero и подвала
  meta: {
    pageTitle: "ANNET.KALIFE — UGC & Content Creator",
    brandName: "ANNET.KALIFE",
    heroBadge: "UGC-КРЕАТОР | CONTENT CREATOR",
    heroLocation: "Екатеринбург / Работаю удалённо",
    heroTitle: "Я Аня — UGC-креатор и блогер с опытом работы более 2-х лет",
    heroSubtitle:
      "Создаю живой, эстетичный и вовлекающий контент для брендов. Снимаю распаковки, обзоры, GRWM, туториалы, разговорные и креативные видео. Люблю превращать обычные продукты в интересные истории, которые органично вписываются в ленту и вызывают желание узнать о бренде больше.",
    heroAvailability: "От идеи и сценария до готового видео",
    heroNiches: "Beauty • Fashion • Lifestyle • Reviews • Unboxing",
    heroPhotoUrl: "./assets/hero.webp", // Главное фото креатора

    aboutPhotoUrl: "./assets/about.webp", // Фото блока «Обо мне»
    aboutSignature: "— Аня Иванова (@annet.kalife)",

    contactPhotoUrl: "./assets/contact.webp", // Атмосферное фото для финала
    contactTitle: "Поговорим о проекте",
    contactSubtitle:
      "[Расскажите о продукте, сроках и цели кампании. Отвечу в течение дня с идеями и оценкой стоимости.]",
    primaryHandle: "@username_ugc",
    footerMeta: "UGC-креатор / Екатеринбург / 2026"
  },

  // Секция «Обо мне»
  aboutParagraphs: [
    "Меня зовут Аня Иванова, я UGC-креатор и автор блога @annet.kalife.",
    "Создаю контент, который выглядит естественно, привлекает внимание и помогает брендам выстраивать коммуникацию с аудиторией.",
    "В своих видео делаю ставку на живую подачу, искренние эмоции, интересные идеи и визуальную эстетику. Мне нравится показывать продукты через реальные ситуации, личный опыт и понятные зрителю истории.",
    "У меня есть опыт создания контента для брендов Jelai, President, Jordi и Avinioni.",
    "Работаю с разными форматами: от эстетичных распаковок и обзоров до разговорных роликов, GRWM, туториалов, влогов и fashion-видео.",
    "Могу адаптировать подачу под характер бренда: сделать видео динамичным и трендовым, спокойным и эстетичным или максимально естественным, будто это рекомендация подруги."
  ],

  // 4 карточки статистики в блоке «Обо мне»
  stats: [
    { value: "2+ лет", label: "В создании контента UGC", tone: "wine" },
    { value: "7+", label: "проектов", tone: "blue" },
    { value: "1500+", label: "созданных видео", tone: "default" },
    { value: "Екатеринбург", label: "", tone: "default" }
  ],

  // Подзаголовки секций
  sections: {
    videosSubtitle:
      "Подборка вертикальных роликов 9:16 по направлениям — нажмите на карточку, чтобы открыть Reel в Instagram.",
    resultsSubtitle:
      "[Реальные показатели охватов, вовлечённости и удержания по категориям Reels и фото-постов.]",
    formatsSubtitle:
      "[8 форматов контента под разные этапы воронки — от первого касания до прогрева и перформанс-рекламы.]",
    servicesSubtitle:
      "Базовые форматы и стоимость сотрудничества. Итоговая смета рассчитывается индивидуально под задачи бренда.",
    ctaBannerTitle: "Нужен индивидуальный пакет или контент на регулярной основе?",
    ctaBannerSubtitle:
      "Разработаю предложение под задачи вашего бренда: от единичных креативных видео до регулярного создания контента для социальных сетей. Стоимость рассчитывается индивидуально с учётом формата, объёма работы, сроков и условий использования материалов."
  },

  // Категории фильтра видео
  videoCategories: [
    "Все",
    "Нативные интеграции и GRWM",
    "Экспертный и образовательный UGC",
    "Beauty UGC и демонстрация продукта",
    "Трендовый и развлекательный UGC",
    "АСМР распаковки"
  ],

  // Карточки видео-портфолио (#videos)
  videos: [
    {
      id: "vid-1",
      category: "Нативные интеграции и GRWM",
      title: "Reel #1 • Нативная интеграция / GRWM",
      brand: "Instagram Reels",
      duration: "Reels",
      goal: "Открыть ролик в Instagram →",
      coverUrl: "",
      videoUrl: "",
      externalUrl: "https://www.instagram.com/reel/DbBVeoloINa/?obrf=eWYwcHo0NW9qMmNi"
    },
    {
      id: "vid-2",
      category: "Нативные интеграции и GRWM",
      title: "Reel #2 • Нативная интеграция / GRWM",
      brand: "Instagram Reels",
      duration: "Reels",
      goal: "Открыть ролик в Instagram →",
      coverUrl: "",
      videoUrl: "",
      externalUrl: "https://www.instagram.com/reel/Dcv5VLAolqX/?dlrf=Yng2ZmxrOTU0MWFi"
    },
    {
      id: "vid-3",
      category: "Экспертный и образовательный UGC",
      title: "Reel #1 • Экспертный UGC",
      brand: "Instagram Reels",
      duration: "Reels",
      goal: "Открыть ролик в Instagram →",
      coverUrl: "",
      videoUrl: "",
      externalUrl: "https://www.instagram.com/reel/DeGq2_xosS9/?xtok=Y2ppZ2gzaTNmZ28x"
    },
    {
      id: "vid-4",
      category: "Экспертный и образовательный UGC",
      title: "Reel #2 • Экспертный UGC",
      brand: "Instagram Reels",
      duration: "Reels",
      goal: "Открыть ролик в Instagram →",
      coverUrl: "",
      videoUrl: "",
      externalUrl: "https://www.instagram.com/reel/Dfwhs-aR1dE/?dlrf=dm5reW1weGE3cjM3"
    },
    {
      id: "vid-5",
      category: "Экспертный и образовательный UGC",
      title: "Reel #3 • Образовательный UGC",
      brand: "Instagram Reels",
      duration: "Reels",
      goal: "Открыть ролик в Instagram →",
      coverUrl: "",
      videoUrl: "",
      externalUrl: "https://www.instagram.com/reel/DdboBKNIzz4/?vrfl=MTRza2c4MG02ZXY1cg=="
    },
    {
      id: "vid-6",
      category: "Экспертный и образовательный UGC",
      title: "Reel #4 • Образовательный UGC",
      brand: "Instagram Reels",
      duration: "Reels",
      goal: "Открыть ролик в Instagram →",
      coverUrl: "",
      videoUrl: "",
      externalUrl: "https://www.instagram.com/reel/Ddg_9vAI-Kg/?srtk=dnIwNWtkb2VmeGdy"
    },
    {
      id: "vid-7",
      category: "Beauty UGC и демонстрация продукта",
      title: "Reel #1 • Beauty UGC",
      brand: "Instagram Reels",
      duration: "Reels",
      goal: "Открыть ролик в Instagram →",
      coverUrl: "",
      videoUrl: "",
      externalUrl: "https://www.instagram.com/reel/DbUdiezqQcz/?srtk=MXVtaWloYXE0c3Jo"
    },
    {
      id: "vid-8",
      category: "Beauty UGC и демонстрация продукта",
      title: "Reel #2 • Демонстрация продукта",
      brand: "Instagram Reels",
      duration: "Reels",
      goal: "Открыть ролик в Instagram →",
      coverUrl: "",
      videoUrl: "",
      externalUrl: "https://www.instagram.com/reel/DXd_tnuiK4D/?exln=MW9peWdrZTgxNTF4bg=="
    },
    {
      id: "vid-9",
      category: "Трендовый и развлекательный UGC",
      title: "Reel #1 • Трендовый UGC",
      brand: "Instagram Reels",
      duration: "Reels",
      goal: "Открыть ролик в Instagram →",
      coverUrl: "",
      videoUrl: "",
      externalUrl: "https://www.instagram.com/reel/DfEb2sIx7L3/?vrfl=eWU5a2g2cGxjb2Zy"
    },
    {
      id: "vid-10",
      category: "Трендовый и развлекательный UGC",
      title: "Reel #2 • Развлекательный UGC",
      brand: "Instagram Reels",
      duration: "Reels",
      goal: "Открыть ролик в Instagram →",
      coverUrl: "",
      videoUrl: "",
      externalUrl: "https://www.instagram.com/reel/Deyhl1nIv7a/?dlrf=d3gyeGFzZHY4dXlx"
    },
    {
      id: "vid-11",
      category: "АСМР распаковки",
      title: "Reel #1 • АСМР распаковка",
      brand: "Instagram Reels",
      duration: "Reels",
      goal: "Открыть ролик в Instagram →",
      coverUrl: "",
      videoUrl: "",
      externalUrl: "https://www.instagram.com/reel/DejBESRxgw3/?exln=ZWtpZjVmNjRpbGto"
    }
  ],

  // Результаты и скриншоты статистики (#results)
  results: {
    reels: [
      {
        metric: "77 243",
        label: "просмотров",
        note: "77 243 просмотров • 55 765 зрителей • 1,1 тыс. репостов",
        screenshotUrl: "./assets/result-1.webp"
      },
      {
        metric: "755 645",
        label: "просмотров",
        note: "755 645 просмотров • 477 988 зрителей • 23 тыс. репостов",
        screenshotUrl: "./assets/result-2.webp"
      },
      {
        metric: "217 367",
        label: "просмотров",
        note: "217 367 просмотров • 159 570 зрителей • 1,9 тыс. сохранений",
        screenshotUrl: "./assets/result-3.webp"
      },
      {
        metric: "628 639",
        label: "просмотров",
        note: "628 639 просмотров • 299 460 зрителей • 5,7 тыс. сохранений",
        screenshotUrl: "./assets/result-4.webp"
      }
    ],
    posts: [
      {
        metric: "[XX XXX]",
        label: "взаимодействий",
        note: "[Фото-карусель #1 — высокий досмотр слайдов]",
        screenshotUrl: ""
      },
      {
        metric: "[X XXX]",
        label: "сохранений",
        note: "[Фото-карусель #2 — подборка образов]",
        screenshotUrl: ""
      },
      {
        metric: "[X XXX]",
        label: "охватов",
        note: "[Фото-пост #3 — обзор для ленты бренда]",
        screenshotUrl: ""
      },
      {
        metric: "[X XXX]",
        label: "переходов",
        note: "[Фото-пост #4 — интеграция со ссылкой]",
        screenshotUrl: ""
      }
    ]
  },

  // 8 форматов контента («Что я создаю»)
  formats: [
    { num: "01", title: "Reels-распаковки", desc: "[Живая первая реакция, детали упаковки и эмоции от открытия.]" },
    { num: "02", title: "Reels-обзоры", desc: "[Нативный разбор преимуществ без ощущения прямой рекламы.]" },
    { num: "03", title: "Reels GRWM", desc: "[Утренние и вечерние сборы с органичной интеграцией бренда.]" },
    { num: "04", title: "Креативные Reels", desc: "[Нестандартный сценарий, переходы и динамичный монтаж.]" },
    { num: "05", title: "Разговорные видео", desc: "[Сторителлинг и личный опыт с мягким переходом к продукту.]" },
    { num: "06", title: "Туториалы", desc: "[Пошаговая демонстрация: как использовать продукт в жизни.]" },
    { num: "07", title: "Влоги и lifestyle", desc: "[День с брендом в формате живого визуального дневника.]" },
    { num: "08", title: "Fashion-контент", desc: "[Образы, луки, стилизация и движение одежды в кадре.]" }
  ],

  // Модульный блок «Принципы работы» (вдохновлён бордовой сеткой из 2-го скрина)
  approachItems: [
    { title: "Живая нативность", desc: "[Без шаблонных рекламных фраз и неестественной игры]" },
    { title: "Хук в 2 секунды", desc: "[Продумываю визуальный и смысловой зацеп с первого кадра]" },
    { title: "Под задачу бренда", desc: "[Опираюсь на боли ЦА и позиционирование продукта]" },
    { title: "Чистый свет и звук", desc: "[Съёмка на актуальный смартфон, петличка и цветокоррекция]" },
    { title: "Вариативность хуков", desc: "[Могу снять 2–3 начала ролика под A/B-тесты в таргете]" },
    { title: "Исходники по запросу", desc: "[Передаю материалы в нужном формате, с субтитрами и без]" }
  ],

  // Услуги и прайс (#services)
  services: [
    {
      num: "01/",
      title: "UGC-видео (Reels / Shorts/TikTok)",
      desc: "Полный цикл создания вертикального видео: разработка идеи, написание сценария, съёмка, монтаж, цветокоррекция и работа со звуком.",
      bullets: [
        "Длительность: 15–60 секунд.",
        "1 раунд правок по монтажу включён.",
        "Передача готового видео в высоком качестве.",
        "Форматы: обзоры, распаковки, GRWM, туториалы, разговорные и креативные видео."
      ],
      prices: [
        { label: "Для аккаунта бренда", value: "от 3 500 ₽" },
        { label: "С публикацией в моём аккаунте", value: "от 5 000 ₽" }
      ],
      note: "Вторая цена включает создание видео и одну публикацию в Instagram. Для сложных креативных роликов, требующих покадровой съёмки, нескольких образов или нестандартного монтажа — отдельная стоимость от 5 000 ₽.",
      ctaLabel: "Выбрать формат"
    },
    {
      num: "02/",
      title: "Пакет роликов для тестов",
      desc: "Серия UGC-видео для тестирования разных рекламных идей, регулярного наполнения социальных сетей и продвижения продуктов.",
      bullets: [
        "Разработка индивидуальных идей и сценариев.",
        "Съёмка и монтаж каждого ролика.",
        "Разные форматы и рекламные подходы.",
        "1 раунд правок на каждый ролик.",
        "Срок производства: от 5 рабочих дней после согласования сценариев и получения товаров."
      ],
      prices: [
        { label: "Пакет 3 видео", value: "от 9 500 ₽" },
        { label: "Пакет 5 видео", value: "от 15 000 ₽" }
      ],
      ctaLabel: "Выбрать пакет"
    },
    {
      num: "03/",
      title: "Пост-карусель (фото + текст)",
      desc: "Создание эстетичных фотокаруселей для социальных сетей с акцентом на продукт и визуальный стиль бренда.",
      bullets: [
        "От 5 до 8 обработанных фотографий.",
        "Разработка идеи и подбор визуальной концепции.",
        "Съёмка и цветокоррекция в едином стиле.",
        "Добавление текста и оформление слайдов по запросу.",
        "Адаптация под визуальный стиль бренда."
      ],
      prices: [
        { label: "В аккаунте бренда", value: "от 2 500 ₽" },
        { label: "В моём аккаунте", value: "от 3 500 ₽" }
      ],
      ctaLabel: "Выбрать карусель"
    }
  ],

  // Кнопки контактов в футере (вдохновлено прямоугольными кнопками из 1-го скрина)
  contacts: [
    { label: "Telegram", value: "@username_ugc", url: "https://t.me/username_ugc" },
    { label: "WhatsApp", value: "Написать в WA", url: "#" },
    { label: "Instagram", value: "@username_ugc", url: "#" },
    { label: "TikTok / YouTube", value: "Портфолио", url: "#" }
  ]
};
