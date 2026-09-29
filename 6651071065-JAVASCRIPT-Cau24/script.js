function timThu() {
    var ngay = Number(document.getElementById("ngay").value);
    var thang = Number(document.getElementById("thang").value);
    var nam = Number(document.getElementById("nam").value);

    var ngayTrongTuan = new Date(nam, thang - 1, ngay);

    var thu = ngayTrongTuan.getDay();

    var ketQua = "";

    if (thu == 0) {
        ketQua = "Chủ nhật";
    } else if (thu == 1) {
        ketQua = "Thứ hai";
    } else if (thu == 2) {
        ketQua = "Thứ ba";
    } else if (thu == 3) {
        ketQua = "Thứ tư";
    } else if (thu == 4) {
        ketQua = "Thứ năm";
    } else if (thu == 5) {
        ketQua = "Thứ sáu";
    } else {
        ketQua = "Thứ bảy";
    }

    document.getElementById("ketQua").innerHTML =
        "Ngày " + ngay + "/" + thang + "/" + nam + " là " + ketQua;
}