let vars = {},
  parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => vars[key] = value),
  fullLogin = vars['login'],
  login = '',
  endStr = 0;

endStr = fullLogin.indexOf('%');
login = fullLogin.substring(0, endStr);
document.body.insertAdjacentHTML('beforeend', `<p>Hello, ${login}!</p>`);

