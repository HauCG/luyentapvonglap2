function displayFibonacci() {
    const n = parseInt(document.getElementById('num').value);
    let fibonacci = "";
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
        fibonacci += a + " ";
        [a, b] = [b, a + b];
    }

    document.getElementById('result').innerHTML = `<p><strong>Dãy Fibonacci:</strong> ${fibonacci}</p>`;
}