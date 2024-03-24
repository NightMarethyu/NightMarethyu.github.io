document.addEventListener('DOMContentLoaded', function() {
  let greetings = ['Hello', 'Kamusta', 'Bonjour', 'こんにちは！', '안녕하세요', 'Hola', '你好', 'Hallo', 'Ciao', 'Olá', 'Привет', 'Merhaba', 'مرحبا', 'नमस्ते', 'สวัสดี', 'Chào', '안녕하세요', 'Salut', 'Hallo', 'Hej', 'Hoi', 'Hei', 'Hei',];
  const greeting = document.getElementById('greeting');

  function randomGreeting() {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    return greetings[randomIndex];
  }

  function changeGreeting() {
    greeting.textContent = randomGreeting();
  }
  
  setInterval(changeGreeting, 3000);

});