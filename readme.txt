3. Vue.js - ����������� � ��������� ������ � ������� (����� 2). Spring Boot REST

https://caniuse.com/


2. Vue.js - ������� JavaScript ��������� ��� REST ���������� (����� 1). Spring Boot REST

https://github.com/pagekit/vue-resource
https://ru.vuejs.org/index.html


1. ������ ������� REST ���������� � ����. Spring Boot REST

https://learn.javascript.ru/fetch
https://learn.javascript.ru/promise
https://spring.io/guides/gs/rest-service/
https://start.spring.io/

fetch ('/message/').then(result => result.json().then(console.log()))
fetch ('/message/2').then(result => result.json().then(console.log()))
fetch ('/message', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ text: 'Fourth message' })}).then(result => console.log(result))
fetch ('/message/4', {method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({text: 'NEW'})}).then(result => console.log(result))
fetch ('/message/4', { method: 'DELETE'}).then(result => console.log(result))