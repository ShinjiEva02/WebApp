let vars = {},
  parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => vars[key] = value),
  fullLogin = vars['login'],
  login = fullLogin.substring(0, fullLogin.indexOf('%'));

document.body.insertAdjacentHTML('beforeend', `<p>Hello, ${login}!</p>`);

