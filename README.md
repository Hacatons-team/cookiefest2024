# Проект для кукифеста

## Стек

- React + библиотеки

## Установка и запуск

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
