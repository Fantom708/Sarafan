9. Стилизуем приложение с Vuetify (Material design). Spring Boot REST
https://vuetifyjs.com/
https://vue-loader.vuejs.org/ru/guide/
https://material.io/resources/icons/?icon=exit_to_app&style=baseline

8. Подключаем WebSocket (SockJS + Stomp). Spring Boot REST
https://spring.io/guides/gs/messaging-stomp-websocket/
https://stomp-js.github.io/stomp-websocket/codo/extra/docs-src/Usage.md.html
https://github.com/sockjs/sockjs-client

7. Настраиваем Webpack и разбиваем фронт на модули. Spring Boot REST
https://classic.yarnpkg.com/en/docs/install#debian-stable
https://nodejs.org
https://github.com/vuejs/vue-devtools

6. Настраиваем Spring Security и oAuth2 в Vue.js. Spring Boot REST
www.thymeleaf.org

5. Подключаем Spring Security и oAuth2. Spring Boot REST
https://spring.io/guides/tutorials/spring-boot-oauth2/
https://console.cloud.google.com/apis/credentials?pli=1

4. Подключаем базу данных, настраиваем Jackson. Spring Boot REST
Lombok, Jackson (JsonView)

3. Vue.js - отображение и изменение данных с сервера (часть 2). Spring Boot REST
https://caniuse.com/

2. Vue.js - базовый JavaScript интерфейс для REST приложения (часть 1). Spring Boot REST
https://github.com/pagekit/vue-resource
https://ru.vuejs.org/index.html

1. Делаем простое REST приложение с нуля. Spring Boot REST
https://learn.javascript.ru/fetch
https://learn.javascript.ru/promise
https://spring.io/guides/gs/rest-service/
https://start.spring.io/

fetch ('/message/').then(result => result.json().then(console.log()))
fetch ('/message/2').then(result => result.json().then(console.log()))
fetch ('/message', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ text: 'Fourth message' })}).then(result => console.log(result))
fetch ('/message/4', {method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({text: 'NEW'})}).then(result => console.log(result))
fetch ('/message/4', { method: 'DELETE'}).then(result => console.log(result))