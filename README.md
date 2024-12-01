# Проект для кукифеста

## Стек

- React + библиотеки
- Python, FastApi, sqlite3

## установка и запуск бекенда
1. **Установка зависимостей**
   Установите зависимости командой `pip install -r back/requirements.txt`.

2. **Запуск**
   Для запуска введите команду  `uvicorn --port 8080 back.main:app`
   Для подключения удаленно захостить на сервере или с помощью ngrok, командой `ngrok http localhost:8080`

## Установка и запуск фронта

1. **Установка зависимостей**

   После клонирования репозитория, выполните команду `npm install`, чтобы установить все необходимые зависимости проекта.

2. **Запуск в режиме разработки**

   Для запуска проекта в режиме разработки используйте команду:

   ```bash
   npm run dev
   ```

3. **Запуск сборки**

   ```bash
   npm build
   ```

4. **Docker**
   Сборка Docker-образа Для сборки Docker-образа выполните следующую команду:
   ```bash
   docker build -t имя_вашего_образа .
   ```
   Запуск контейнера После сборки образа, вы можете запустить контейнер с помощью команды:
   ```bash
    docker run -p 3000:3000 имя_вашего_образа
    ```
