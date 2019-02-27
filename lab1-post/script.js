let form = document.querySelector('#form'),
  obj = {};

let data = new FormData(form);
console.log(data)
data.forEach(function (value, key) {obj[key] = value});
let json = JSON.stringify(obj);
document.body.insertAdjacentHTML('beforeend', `<p>Hello, ${json.login}!</p>`);
console.log(obj)
