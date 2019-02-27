let all = document.body.querySelectorAll('*'),
  obj = new Map();

for (let i = 0; i < all.length; i++) {
  let count = 0;
  for (let j = 0; j < all.length; j++) {
    if (all[i].nodeName == all[j].nodeName) count++
  }
  obj.set(all[i].nodeName, count);
}

for (let [key, value] of obj) {
  console.log(`${key} : ${value}`)
}