function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function goBack() {
    history.back();
}

function selectMood(type, mood) {
    console.log(`Selected ${type}: ${mood}`);
    const allImages = document.querySelectorAll('.mood-options img');
    allImages.forEach(img => img.style.border = 'none'); // Remove border from all images
    event.target.style.border = '2px solid orange'; // Add border to the clicked image

    if (type === 'emotionalState') {
        const card = document.getElementById('contentment-card');
        card.style.display = 'flex';
        card.style.height = '0';
        card.style.overflow = 'hidden';
        setTimeout(() => {
            card.style.transition = 'height 0.5s ease';
            card.style.height = 'auto';
        }, 10);
    } else if (type === 'contentment') {
        const card = document.getElementById('calmness-card');
        card.style.display = 'flex';
        card.style.height = '0';
        card.style.overflow = 'hidden';
        setTimeout(() => {
            card.style.transition = 'height 0.5s ease';
            card.style.height = 'auto';
        }, 10);
    } else if (type === 'calmness') {
        document.getElementById('get-mantra-button').style.display = 'block';
    }
}

showScreen('login-screen');
