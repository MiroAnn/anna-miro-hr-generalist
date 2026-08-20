const experience = [
  {
    icon: "A+",
    role: "CEO двух онлайн-школ",
    period: "2021–наст. время",
    text: "Работаю с двумя философами — преподавателями вузов. Выстроила маркетинговые и операционные процессы для оборота 1 млн ₽ в месяц.",
    hire: "Наняла 2 помощников",
    tone: "calm-blue",
  },
  {
    icon: "◎",
    role: "Рекрутер",
    period: "2026",
    text: "Закрыла четыре вакансии для вилл Masbro на Бали по своему методу быстрого найма.",
    hire: "Наняла 4 сотрудников",
    tone: "pink",
  },
  {
    icon: "↗",
    role: "Рекрутер",
    period: "2025",
    text: "Помогла 100+ командам ускориться на пути к деньгам. Для стартапа Rejoin закрыла ключевые позиции для быстрого роста.",
    hire: "Наняла продакта, дизайнера и сейлза",
    tone: "orange",
  },
  {
    icon: "↯",
    role: "Основатель и CEO стартапа",
    period: "2020–2023",
    text: "Запустила платформу для создания терапевтических ботов и продала созданный на ней проект Газпром нефти.",
    hire: "Собрала команду из 5 человек",
    tone: "violet",
  },
  {
    icon: "▦",
    role: "Product manager",
    period: "2020",
    text: "Запустила «Манго Страхование» с нуля за 9 месяцев — самый быстрый запуск страховой компании в мире на тот момент.",
    hire: "Нанимала junior PM",
    tone: "yellow",
  },
  {
    icon: "</>",
    role: "Трекер и коуч",
    period: "2018–наст. время",
    text: "Помогла 100+ командам ускориться на пути к деньгам, а также нанять около 5 сотрудников.",
    hire: "Выстраивали процессы найма и наняли около 5 сотрудников",
    tone: "mint",
  },
];

const funnel = [
  ["01", "Понимаю культуру", "Говорю с несколькими сотрудниками, изучаю документы и понимаю реальную среду компании."],
  ["02", "Определяю профиль", "Вместе с нанимающим менеджером определяю задачи, необходимые качества и психологический портрет."],
  ["03", "Проектирую воронку", "В воронке чаще всего предварительные короткие испытания, которые проверяют на базовом уровне необходимые качества (определили выше) и вайб. Это чаще всего анкета и видео — кружочек в Telegram, например."],
  ["04", "Отбираю по качествам", "При необходимости провожу 15–20 минутное интервью, записываю его и передаю менеджеру."],
  ["05", "Знакомлю с командой", "Лучшие кандидаты проходят короткое интервью с нанимающим менеджером. По опыту их проводят максимум максимум 3–4, чтобы закрыть вакансию."],
  ["06", "Проверяю в деле", "1–2 финалиста выполняют реальное, чаще всего оплачиваемое (я за справедливость), тестовое задание."],
  ["07", "Делаем офер", "Проводим финальную встречу с командой, сверяем ожидания и делаем офер."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav wrap" aria-label="Основная навигация">
        <a className="wordmark" href="#top">HR</a>
        <div className="nav-links">
          <a href="#experience">Опыт</a>
          <a href="#process">Процесс</a>
          <a href="#about">Обо мне</a>
        </div>
        <a className="nav-cta" href="https://t.me/ann_miro" target="_blank" rel="noreferrer">Написать ↗</a>
      </nav>

      <section className="hero wrap" id="top">
        <div className="hero-copy">
          <span className="eyebrow">HR GENERALIST · ОТКРЫТА К ПРОЕКТАМ</span>
          <h1>Анна <em>Миро</em></h1>
          <p className="lede">HR generalist с психологическим образованием, IT-бэкграундом и предпринимательским опытом.</p>
          <div className="hero-actions">
            <a className="button primary" href="https://t.me/ann_miro" target="_blank" rel="noreferrer">Обсудить задачу <span>↗</span></a>
            <a className="button ghost" href="#why">Почему я? ↓</a>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-sun" aria-hidden="true"></div>
          <img className="portrait" src="/anna-miro-hero.jpg" alt="Анна Миро — HR generalist" />
          <div className="portrait-note">Психология <span>×</span><br />продукт <span>×</span> бизнес</div>
          <div className="portrait-sticker">20 лет<br />практики</div>
        </div>
      </section>

      <section className="stats" aria-label="Ключевые показатели">
        <div className="wrap stats-single"><strong>Закрыла около 20 вакансий</strong></div>
      </section>

      <section className="why wrap section-pad" id="why">
        <div className="section-kicker">ПОЧЕМУ Я</div>
        <div className="why-heading">
          <h2>Понимаю и человека, и бизнес</h2>
          <p>Мой нетипичный путь — главное преимущество. Я была по обе стороны найма: строила продукты, нанимала команды и отвечала за деньги.</p>
        </div>
        <div className="why-grid">
          <article><span className="why-icon" aria-hidden="true">Ψ</span><h3>Психологическое образование</h3><p>Быстро понимаю, кто передо мной, что человеком движет и совпадёт ли он с культурой команды.</p></article>
          <article><span className="why-icon" aria-hidden="true">↻</span><h3>Продуктовый подход</h3><p>Смотрю на найм как на систему: исследую, формулирую гипотезы, измеряю и действую итерациями.</p></article>
          <article><span className="why-icon" aria-hidden="true">↗</span><h3>Предпринимательский драйв</h3><p>Не занимаюсь процессом ради процесса. Ищу путь, который быстрее приводит бизнес к результату.</p></article>
          <article><span className="why-icon" aria-hidden="true">AI</span><h3>AI по умолчанию</h3><p>Оптимизирую рутину с Codex и Claude, чтобы больше времени оставалось на общение с людьми и принятие решений.</p></article>
        </div>
      </section>

      <section className="experience section-pad" id="experience">
        <div className="wrap">
          <div className="section-kicker light">ОПЫТ · 2006—2026</div>
          <div className="experience-title"><h2>Играла разные роли, развивая навык — <em>зарабатывать</em></h2><p>В некоторых проектах я напрямую занималась наймом. Во всех — выстраивала процессы.</p></div>
          <div className="experience-grid">
            {experience.map((item) => (
              <article className={`experience-card ${item.tone}`} key={item.role}>
                <div className="card-top">
                  <span className="card-icon" aria-hidden="true">{item.icon}</span>
                  {"period" in item && item.period && <span className="card-period">{item.period}</span>}
                </div>
                <h3>{item.role}</h3>
                <p>{item.text}</p>
                <div className="hire">↳ {item.hire}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process wrap section-pad" id="process">
        <div className="process-intro">
          <div>
            <div className="section-kicker">МОЙ ПРОЦЕСС</div>
            <h2>Нанимаю быстро</h2>
          </div>
          <blockquote>«Меньше усталости в команде. Выше скорость найма.»</blockquote>
        </div>
        <div className="funnel">
          {funnel.map(([number, title, text]) => (
            <article className="funnel-step" key={number}>
              <span className="step-number">{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="process-note"><strong>Вместо первых двух собеседований: с HR и с нанимающим — анкета и короткое видео.</strong><span>По ним очень много чего понятно и помогает не тратить время на собесы неподходящих людей. Экономим часы времени.</span></div>
      </section>

      <section className="about section-pad" id="about">
        <div className="wrap about-grid">
          <div className="about-portrait">
            <img src="/anna-miro-about.jpg" alt="Анна Миро в горах" />
            <div className="scribble">Суперсила — любопытство</div>
          </div>
          <div className="about-copy">
            <div className="section-kicker light">ОБО МНЕ — ОБРАЗОВАНИЕ</div>
            <h2>Училась понимать <em>людей и бизнес</em></h2>
            <div className="education">
              <div><span>2012</span><p><strong>Алтайский государственный университет</strong><br />Журналистика, специалитет</p></div>
              <div><span>2023</span><p><strong>НИУ ВШЭ</strong><br />Психоанализ и психоаналитическое бизнес-консультирование, магистратура</p></div>
              <div><span>∞</span><p><strong>Постоянная практика</strong><br />Два 10-дневных цикла випассаны и 10+ курсов по продукту, маркетингу, философии и дизайну</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap cta-inner">
          <span className="cta-star">✦</span>
          <h2>Ищете человека, который соберет <em>команду под вас?</em></h2>
          <a className="button primary big" href="https://t.me/ann_miro" target="_blank" rel="noreferrer">Напишите мне в Telegram <span>↗</span></a>
        </div>
      </section>

      <footer className="footer wrap">
        <span>© 2026 АННА МИРО</span>
        <a href="#top">НАВЕРХ ↑</a>
      </footer>
    </main>
  );
}
