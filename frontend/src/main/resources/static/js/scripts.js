function FetchUser() {
    // Lấy tên người dùng đã nhập
    const username = document.getElementById("username").value;

    // Lấy dữ liệu người dùng dựa trên tên người dùng
    fetch(`http://54.172.124.101:8080/api/user/getByName?name=${username}`)
        .then(response => response.json())
        .catch(error => alert("Không tìm thấy người dùng với tên này!"))
        .then(json => {
            console.log(json);
            // Bạn có thể thực hiện các hành động với dữ liệu json tại đây
        })
        .catch(error => alert('Lỗi khi lấy dữ liệu:', error));
}
