async function func() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45);
    }, 1000);
  });
}

(async function func2() {
  let x = await func();
  console.log(x);

  let [a, b, ...rest] = [7, 20, 11, 15, 18, 23];
  console.log(a, b, rest);

  const obj = {
    a: 1,
    b: 2,
  };

  const { y, z } = obj;

  console.log(obj.y);
})();

let a = prompt("What is your name?");
document.write("My Name is ", a);
