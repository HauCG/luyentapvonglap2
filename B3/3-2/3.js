
    for (let i = 5; i > 0; i--) {
    for (let k = 5; k > i; k--) {
    document.write("&nbsp;&nbsp;");
}
    for (let j = 0; j < i; j++) {
    document.write("*");
}
    document.write("<br>");
}

    for (let i = 1; i <= 5; i++) {
        for (let k = 5; k > i; k--) {
            document.write("&nbsp;&nbsp;");
        }
        for (let j = 1; j <= i; j++) {
            document.write("*");
        }
        document.write("<br>");
    }