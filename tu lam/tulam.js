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

