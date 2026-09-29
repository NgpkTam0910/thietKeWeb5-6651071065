function tinhLuong() {
    var luong = Number(document.getElementById("luong").value);
    var heSo = Number(document.getElementById("heSo").value);

    var luongThang = luong * heSo;

    document.getElementById("ketQua").innerHTML =
        "Lương tháng = " + luongThang;
}