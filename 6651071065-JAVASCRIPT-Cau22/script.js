function phepNhan() {
    var so1 = Number(document.getElementById("so1").value);
    var so2 = Number(document.getElementById("so2").value);

    var ketQua = so1 * so2;

    document.getElementById("ketQua").innerHTML =
        "Kết quả phép nhân = " + ketQua;
}

function phepChia() {
    var so1 = Number(document.getElementById("so1").value);
    var so2 = Number(document.getElementById("so2").value);

    if (so2 == 0) {
        document.getElementById("ketQua").innerHTML =
            "Không thể chia cho 0";
    } else {
        var ketQua = so1 / so2;

        document.getElementById("ketQua").innerHTML =
            "Kết quả phép chia = " + ketQua;
    }
}