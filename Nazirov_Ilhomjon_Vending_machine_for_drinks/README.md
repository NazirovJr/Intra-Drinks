# Intra-Drinks

## Вступление
Используя React, Node.js, Express и MongoDB, я создаю приложение Intra-Drinks Full Stack - от начала до конца. Приложение называется «Intra-Drinks» и представляет собой простое приложение дляпокупки напитков, которое позволяет пользователям пополнить счет, покупать напитки и получить остаток от покупки.

## Как использовать
Я в письме закрепил видео там подробно показано как использовать сайт. Сейчас я коротко расскажу как использовать сайт есть два режима пользовательский и админский режим. Если просто зайти мы попадём в пользовательский режим там можно пополнить счет, делать покупки и получить остаток от покупок перед получением остатков можно несколько раз купить напитков. Вовремя пополнение счета есть блокирование монеты которых машина не принимает. На сайте для визуализации  я сделал их  немного прозрачным.  
Для того чтобы совершить покупку нужно нажать на карточку с напитком. Для перехода в админский режим нужно в url добавить: '/intravision' это секретный код который храниться в environment variable и можно по желанью изменить секретный код. В админском режиме есть форма там можно изменить количество монет в машине, и пожеланью заблокировать получение некоторых монет. Можно добавить новые посты. Можно изменить данные старых постов или удалить их.

## Используемые технологии
- JavaScript
- React 
- Redux
- React-Redux
- Redux thunk
- React Router
- Axios
- @material-ui
- Moment
- Mongoose
- Express
- Cors
- Body Parser

##   Настраивать:
- запустите yarn (or npm) install && yarn (or npm) start как на стороне клиента, так и на стороне сервера, чтобы запустить приложение