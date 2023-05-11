let dom = document;

// get the input element
const textInput = dom.getElementById('textInput');

// get the output element
const letterCounts = dom.getElementById('letterCounts');

// create an object to hold the counts
const counts = {};
function initialiseCounts() {
  for (let i = 0; i < 26; i++) {
    let letter = String.fromCharCode(97 + i);
    counts[letter] = null;
  }
  for (let i = 0; i < 10; i++) {
    let num = i.toString();
    counts[num] = null;
  }
  return counts;
}

initialiseCounts();


// listen for input events on the input element
textInput.addEventListener('input', () => {
  // clear the counts object
  Object.keys(counts).forEach(key => {
    delete counts[key];
  });

  // get the input value and convert to lowercase
  const inputValue = textInput.value.toLowerCase();

  // loop through the input value and count the letters and numbers
  for (let i = 0; i < inputValue.length; i++) {
    const char = inputValue.charAt(i);
    if (/[a-z0-9]/i.test(char)) {
      counts[char] = (counts[char] || 0) + 1;
    }
  }

  // display the counts in the output element
  letterCounts.innerHTML = '<p>Letter counts:</p>';
  Object.keys(counts).forEach(key => {
    letterCounts.innerHTML += `${key}: ${counts[key]}<br>`;
  });
});
