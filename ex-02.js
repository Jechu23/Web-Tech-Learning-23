let dom = document;

const form = dom.getElementById('simpleFrom');
form.addEventListener('submit', generateTimesTable);

function generateTimesTable(event)
{
  event.preventDefault();
  const numberInput = dom.getElementById('numberInput');
  const outputZone = dom.getElementById('outputZone');
  const inputValue = numberInput.value;
  outputZone.innerHTML = '';

      if(inputValue === '')
        {
          outputZone.innerHTML = 'Please enter number from 1 to 20:';
          return;
        }

      const num = parseInt(inputValue, 10);
        if(num <1 || num >20)
          {
            outputZone.innerHTML = 'Please enter number form 1 to 20:';
            return;
          }

    for(let i = 1; i <=12; i++)
      {
          const result = i * num;
          const equation = `${i} x ${num} = ${result}`;
          const equationEl = dom.createElement('p');
          equationEl.textContent = equation;
          outputZone.appendChild(equationEl);
        }
}


