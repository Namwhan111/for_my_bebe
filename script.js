// Yes Button Interaction
document.getElementById('yesButton').addEventListener('click', () => {
    // Hide main text, hearts, and buttons
    document.getElementById('mainText').classList.add('hidden');
    document.getElementById('hearts').classList.add('hidden');
    document.getElementById('buttons').classList.add('hidden');

    // Show response message
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.classList.remove('hidden');
    responseMessage.classList.add('animate-pulse');
});

// No Button Interaction (for both mouse and touch events)
const noButton = document.getElementById('noButton');

const moveNoButton = (x, y) => {
    const buttonRect = noButton.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;

    const deltaX = x - buttonCenterX;
    const deltaY = y - buttonCenterY;

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance < 50) {
        const newX = Math.random() * (window.innerWidth - buttonRect.width);
        const newY = Math.random() * (window.innerHeight - buttonRect.height);
        noButton.style.position = 'absolute';
        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;
    }
};

// Mouse move event
noButton.addEventListener('mousemove', (e) => {
    moveNoButton(e.clientX, e.clientY);
});

// Touch move event
noButton.addEventListener('touchmove', (e) => {
    const touch = e.touches[0]; // Get the first touch point
    moveNoButton(touch.clientX, touch.clientY);
    e.preventDefault(); // Prevent scrolling on touch devices
});