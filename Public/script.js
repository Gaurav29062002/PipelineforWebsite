document.getElementById('nameForm').addEventListener('submit', async function(e) {
    e.preventDefault();
  
    const name = document.getElementById('nameInput').value;
  
    const res = await fetch('/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    });
  
    const data = await res.json();
    document.getElementById('greeting').textContent = data.message;
  });
  