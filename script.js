//your JS code here. If required.
const res = document.getElementById("output");

const promises = [
  new Promise((resolve) => {
    const time = Math.floor(Math.random() * 3 + 1) * 1000;
    setTimeout(() => resolve({ name: "Promise 1", time: time / 1000 }), time);
  }),
  new Promise((resolve) => {
    const time = Math.floor(Math.random() * 3 + 1) * 1000;
    setTimeout(() => resolve({ name: "Promise 2", time: time / 1000 }), time);
  }),
  new Promise((resolve) => {
    const time = Math.floor(Math.random() * 3 + 1) * 1000;
    setTimeout(() => resolve({ name: "Promise 3", time: time / 1000 }), time);
  }),
];

async function callFns() {
  const start = new Date();
  // Use Promise.all to wait for all Promises to resolve
  res.innerHTML += `
            <tr id="loading">
                <td colspan=2>Loading...</td>
            </tr>
          `;
  await Promise.all(promises)
    .then((results) => {
      res.innerHTML = ``;
      // Log the array of results
      results.forEach((e) => {
        res.innerHTML += `
            <tr>
                <td>${e.name}</td>
                <td>${e.time}</td>
            </tr>
          `;
      });
    })
    .catch((error) => {
      console.error(error);
    });

  const end = new Date();
  const timeInMillis = end - start;
  res.innerHTML += `
            <tr>
                <td>Total</td>
                <td>${timeInMillis / 1000}</td>
            </tr>
          `;
}
callFns();