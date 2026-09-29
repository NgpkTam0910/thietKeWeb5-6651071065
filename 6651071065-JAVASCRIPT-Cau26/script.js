function tinhCanChi() {
    var nam = Number(document.getElementById("nam").value);

    if (nam <= 0) {
        document.getElementById("ketQua").innerHTML =
            "Vui lòng nhập năm hợp lệ!";
        return;
    }

    var can = [
        "Canh", "Tân", "Nhâm", "Quý", "Giáp",
        "Ất", "Bính", "Đinh", "Mậu", "Kỷ"
    ];

    var chi = [
        "Thân", "Dậu", "Tuất", "Hợi", "Tý",
        "Sửu", "Dần", "Mão", "Thìn", "Tỵ",
        "Ngọ", "Mùi"
    ];

    var ketQuaCan = can[nam % 10];
    var ketQuaChi = chi[nam % 12];

    document.getElementById("ketQua").innerHTML =
        "Năm " + nam + " là năm " + ketQuaCan + " " + ketQuaChi;
}