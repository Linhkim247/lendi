const icons = ['❄️', '🌟', '🍂', '🍁', '🌸', '🌼'];
const snowContainer = document.querySelector('.snowfall');

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerText = icons[Math.floor(Math.random() * icons.length)];
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 5}s`; // Falling duration
    snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
    snowContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 200);
// chatbox 
document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    if (query.trim() !== '') {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    }
});
// header
const texts = [
    "Chào bạn! Đây là một trang web lưu trữ những câu nói hay mà admin sưu tầm",
    "Trang web này được admin(Cảnh) tạo ra trong quá trình học tập",
    "Với mục tiêu 100 ngày phát triển!!",
    "Trang web này chứa những tiện ích khác giúp thuận lợi trong việc tra tài liệu",
    "Ở đây cũng có những bản nhạc nhẹ nhàng,bạn có thể nghe nó trong lúc làm việc!",
    "Chúc bạn khám phá web của tôi vui vẻ🤗🤗."
];
let currentTextIndex = 0;
const textElement = document.querySelector('.write-text');

const typingSpeed = 100; // Thời gian gõ từng ký tự (ms)
const deletingSpeed = 50; // Thời gian xóa từng ký tự (ms)
const pauseTime = 1000; // Thời gian dừng giữa các tin nhắn (ms)

function typeText(text, callback) {
    let index = 0;
    textElement.textContent = "";
    const interval = setInterval(() => {
        textElement.textContent += text[index];
        index++;
        if (index >= text.length) {
            clearInterval(interval);
            setTimeout(() => deleteText(callback), pauseTime);
        }
    }, typingSpeed);
}

function deleteText(callback) {
    let index = textElement.textContent.length;
    const interval = setInterval(() => {
        textElement.textContent = textElement.textContent.substring(0, index - 1);
        index--;
        if (index <= 0) {
            clearInterval(interval);
            setTimeout(callback, pauseTime);
        }
    }, deletingSpeed);
}

function startTypingEffect() {
    typeText(texts[currentTextIndex], () => {
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        startTypingEffect(); // Lặp lại hiệu ứng cho dòng chữ tiếp theo
    });
}

startTypingEffect();



