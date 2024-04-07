//your JS code here. If required.
function wait(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(time);
    }, time * 1000);
  });
}

const promises = [
  wait(Math.random() * 2 + 1), // Promise 1
  wait(Math.random() * 2 + 1), // Promise 2
  wait(Math.random() * 2 + 1)  // Promise 3
];

Promise.all(promises).then(results => {
  const output = document.getElementById('output');

  // Remove loading text
  output.innerHTML = '';

  // Add rows for each promise result
  results.forEach((time, index) => {
    const row = document.createElement('tr');
    const promiseName = document.createElement('td');
    promiseName.textContent = `Promise ${index + 1}`;
    const timeTaken = document.createElement('td');
    timeTaken.textContent = time.toFixed(3);
    row.appendChild(promiseName);
    row.appendChild(timeTaken);
    output.appendChild(row);
  });

  // Calculate and add the total time taken
  const totalTime = results.reduce((acc, curr) => acc + curr, 0);
  const totalRow = document.createElement('tr');
  const totalName = document.createElement('td');
  totalName.textContent = 'Total';
  const totalTimeTaken = document.createElement('td');
  totalTimeTaken.textContent = totalTime.toFixed(3);
  totalRow.appendChild(totalName);
  totalRow.appendChild(totalTimeTaken);
  output.appendChild(totalRow);
});
