function generateAccount() {
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const account = Math.floor(Math.random() * 1000000) + 1;
     const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
     const evenOrOdd = age % 2 === 0 ? "even" : "odd";
    const output = document.getElementById("output");
     output.innerHTML = `<p>Name: ${name}</p><p>Age: ${age} (${evenOrOdd})</p><p>Account Number: ${account}</p>`;
  }