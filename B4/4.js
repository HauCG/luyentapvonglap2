let output = '';

for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 6; j++) {
        output += (i === 1 || i === 4 || j === 1 || j === 6) ? '*' : '&nbsp;&nbsp;';
    }
    output += '<br>';
}

document.getElementById('hinhcn').innerHTML = output;