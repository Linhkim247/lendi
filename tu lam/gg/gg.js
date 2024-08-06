let userIndex = 1;

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();
    if (messageText === '') return;

    // Hiển thị tin nhắn của người dùng
    const messageContainer = document.getElementById('message-container');
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'message user';
    userMessageDiv.innerHTML = `<div class="message-content">${messageText}</div>`;
    messageContainer.appendChild(userMessageDiv);

    // Giả lập phản hồi của người dùng khác
    setTimeout(() => {
        const otherMessageDiv = document.createElement('div');
        otherMessageDiv.className = 'message other';
        otherMessageDiv.innerHTML = `<div class="message-content">Tin nhắn từ người dùng ${userIndex}</div>`;
        messageContainer.appendChild(otherMessageDiv);
        userIndex++;
        messageContainer.scrollTop = messageContainer.scrollHeight; // Cuộn đến tin nhắn mới
    }, 1000);

    // Xóa nội dung nhập
    messageInput.value = '';
}
