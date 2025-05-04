
### 1. Склонировать репозиторий  
```bash
git clone https://github.com/kol4id/sovatest
cd sovatest
```
### 2. Установить зависимости
```bash
npm install 
```
### 3. Запустить сервер
```bash
npm run dev
```
### 4. Открыть

приложение доступно по адресу:
```bash
http://localhost:5173
```

### Используя Docker

### 1. Собрать
```bash
docker build -t sovatest .
```

### 2. Запустить
```bash
docker run -p 4173:4173 sovatest
```
