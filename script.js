//your JS code here. If required.

document.getElementById('btn').addEventListener('click', () => {
  const inputVal = document.getElementById('ip').value;
  const outputDiv = document.getElementById('output');
  
  // Clear any previous results and convert input to a number
  outputDiv.textContent = '';
  const initialNumber = Number(inputVal);

  // Reusable helper function to create a delayed promise
  const delayAction = (ms, value, operation) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = operation ? operation(value) : value;
        resolve(result);
      }, ms);
    });
  };

  // --- Promise Chain ---
  
  // Step 1: Initial Promise (2 seconds delay)
  delayAction(2000, initialNumber)
    .then((num) => {
      outputDiv.textContent = `Result: ${num}`;
      // Step 2: Multiply by 2 (2 seconds delay)
      return delayAction(2000, num, (n) => n * 2);
    })
    .then((num) => {
      outputDiv.textContent = `Result: ${num}`;
      // Step 3: Subtract 3 (1 second delay)
      return delayAction(1000, num, (n) => n - 3);
    })
    .then((num) => {
      outputDiv.textContent = `Result: ${num}`;
      // Step 4: Divide by 2 (1 second delay)
      return delayAction(1000, num, (n) => n / 2);
    })
    .then((num) => {
      outputDiv.textContent = `Result: ${num}`;
      // Step 5: Add 10 (1 second delay)
      return delayAction(1000, num, (n) => n + 10);
    })
    .then((finalNum) => {
      // Display the final result
      outputDiv.textContent = `Final Result: ${finalNum}`;
    })
    .catch((error) => {
      console.error("An error occurred during transformation:", error);
    });
});