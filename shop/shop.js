function openTab(evt, tabName) {
    // Ẩn tất cả các nội dung tab
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Bỏ kích hoạt tất cả các tab
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Hiển thị tab được chọn và kích hoạt tab đó
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
