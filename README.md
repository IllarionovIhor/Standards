# Standards – Frontend & API

## Авторство

- Автор: Ілларіонов Ігор ВТ-22-2

Проєкт складається з двох частин:

- **`standards_api`** – Express API (надсилання email, погода, Swagger).
- **`standards_front`** – React/PrimeReact фронтенд + Storybook + JSDoc.

## Базові команди

### API (`standards_api`)

```bash
cd standards_api
npm install          # встановити залежності
node servingRn.js    # запустити API (порт 3000)
```

- **Swagger UI**: `http://localhost:3000/api-docs`
- **Ендпоінти**:
  - `GET /weather?city=Zhytomyr` – поточна погода (місто за замовчуванням Zhytomyr).
  - `POST /send` – надсилання email за допомогою SMTP.

### Frontend (`standards_front`)

```bash
cd standards_front
npm install          # встановити залежності
npm run dev          # запустити Vite dev-сервер (порт 5173 за замовчуванням)
npm run storybook    # запустити Storybook (порт 6006)
npm run jsdoc        # згенерувати JSDoc-документацію (папка out/)
```

## Конфігурації

- **API ключ погоди та місто**:
  - Файл: `standards_api/servingRn.js`
  - Змінні: `key`, `city`
- **Swagger/OpenAPI**:
  - Вмикається в `servingRn.js`, UI за адресою `/api-docs`.
- **JSDoc**:
  - API: генерується у `standards_api/out/`.
  - Frontend: конфіг `standards_front/jsdoc.json`, вихід у `standards_front/out/`.

## Ліцензія

Проєкт ліцензовано за **GNU GPL v3.0 або пізнішою**.
бо опен соурс це круто B)

Деталі дивіться у файлі [`LICENSE`](./LICENSE).



