function tinhTien() {
    var cacMon = document.getElementsByName("mon");
    var tongTien = 0;
    var ketQua = "";

    for (var i = 0; i < cacMon.length; i++) {
        if (cacMon[i].checked) {
            tongTien = tongTien + Number(cacMon[i].value);

            ketQua = ketQua + cacMon[i].getAttribute("data-ten")
                + " - " + Number(cacMon[i].value).toLocaleString() + "đ<br>";
        }
    }

    if (document.getElementById("banDem").checked) {
        tongTien = tongTien + tongTien * 10 / 100;
    }

    ketQua = ketQua + "<br>Tổng tiền: "
        + tongTien.toLocaleString() + "đ";

    document.getElementById("ketQua").innerHTML = ketQua;
}