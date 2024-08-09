document.getElementById('swipeArea').addEventListener('click', function() {
    document.getElementById('content').style.transform = 'translateY(100%)';
    setTimeout(() => {
        document.getElementById('content').style.transform = 'translateY(0)';
    }, 300); // Thay đổi thời gian tùy theo hiệu ứng bạn muốn
});
