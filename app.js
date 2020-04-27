let SanPham = function (name, price, amount) {
    this.name = name;
    this.price = price;
    this.amount = amount;
};
let sanpham1 = new SanPham("iPhone 9", 700, 0);
let sanpham2 = new SanPham("SamSung", 400, 0);
let sanpham3 = new SanPham("Nokia", 700, 0);
let sanpham4 = new SanPham("Sony Xperia", 450, 0);
let sanpham5 = new SanPham("Motorola", 180, 0);
let sanpham6 = new SanPham("Oppo", 600, 0);
let sanpham7 = new SanPham("bPhone", 90, 0);
let ListSanPham = [];
ListSanPham[0] = sanpham1;
ListSanPham[1] = sanpham2;
ListSanPham[2] = sanpham3;
ListSanPham[3] = sanpham4;
ListSanPham[4] = sanpham5;
ListSanPham[5] = sanpham6;
ListSanPham[6] = sanpham7;

function showTable() {
    let content = "";
    content +=
        "<table><tr><th></th><th>Hàng Hóa</th><th>Đơn Giá</th><th>Số Lượng</th><th>Thành Tiền</th></tr>";
    for (let i = 0; i < 7; i++) {
        content +=
            "<tr><td><input onclick='showinput(" +
            i +
            ")' id ='checkbox" +
            i +
            "' type='checkbox' ></td><td>" +
            ListSanPham[i].name +
            "</td><td>" +
            ListSanPham[i].price +
            "</td><td id='amount" +
            i +
            "'>" +
            ListSanPham[i].amount +
            "</td><td>" +
            (ListSanPham[i].price * ListSanPham[i].amount) +
            "</td></tr>";
    }
    content += "</table>";
    document.getElementById("table-abc").innerHTML = content;
}

function showinput(i) {
    if (document.getElementById("checkbox" + i).checked == true) {
        document.getElementById("amount" + i).innerHTML =
            "<input id='input-amount" + i + "' type = 'text' value='" + ListSanPham[i].amount + "'>";
        document
            .getElementById("amount" + i)
            .addEventListener("keypress", function (event) {
                switch (event.keyCode) {
                    case 13 :
                        let amount1 = document.getElementById("input-amount" + i).value;
                        ListSanPham[i].amount = parseInt(amount1);
                        console.log(ListSanPham[i].amount);
                        showTable();
                        break;
                }
            });
    } else {
        document.getElementById("amount" + i).innerHTML = ListSanPham[i].amount;
    }
}
showTable();