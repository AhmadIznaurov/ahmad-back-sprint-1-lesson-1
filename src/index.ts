import express from 'express';
import { setupApp } from './setup-app';

// создание app приложения
const app = express();
setupApp(app);
// process — это глобальный объект
const PORT = process.env.PORT || 5001;
// process.env — это объект, содержащий все переменные данного окружения,
// listen - запускает сервер и начинает слушать входящие запросы по указанному порту.
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});