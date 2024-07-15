function calculateFactorial() {
    let n = document.getElementById("numberInput").value;
    if (n <= 0 || !Number.isInteger(+n)) {
        alert("Vui lòng nhập số nguyên dương lớn hơn 0.");
        return;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    document.getElementById("result").innerText = `Giai thừa của ${n} là: ${result}`;
}