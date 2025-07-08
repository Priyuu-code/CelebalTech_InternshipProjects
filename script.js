 let currentInput = '';
    let history = [];

    function appendValue(value) {
      currentInput += value;
      document.getElementById('result').textContent = currentInput;
    }

    function clearDisplay() {
      currentInput = '';
      document.getElementById('expression').textContent = '';
      document.getElementById('result').textContent = '0';
    }

    function deleteLast() {
      currentInput = currentInput.slice(0, -1);
      document.getElementById('result').textContent = currentInput || '0';
    }

    function calculate() {
      try {
        const result = eval(currentInput);
        document.getElementById('expression').textContent = currentInput + ' =';
        document.getElementById('result').textContent = result;
        history.push(`${currentInput} = ${result}`);
        updateHistory();
        currentInput = '';
      } catch {
        document.getElementById('result').textContent = 'Error';
      }
    }

    function updateHistory() {
      const list = document.getElementById('history-list');
      list.innerHTML = '';
      history.slice(-5).reverse().forEach(entry => {
        const li = document.createElement('li');
        li.textContent = entry;
        list.appendChild(li);
      });
    }

    function toggleHistory() {
      const panel = document.getElementById('history');
      panel.classList.toggle('visible');
    }