// Navigate to page 2
function goToPage2() {
    document.getElementById('page1').classList.remove('active');
    document.getElementById('page2').classList.add('active');
}

// Handle "No" button click
function handleNo() {
    const noBtn = document.getElementById('noBtn');
    noBtn.textContent = 'No is not an option 😭';
    noBtn.style.fontSize = '0.9rem';
    noBtn.style.padding = '0.8rem 1.5rem';
}

// Handle "Yes" button click
function handleYes() {
    document.getElementById('page2').classList.remove('active');
    document.getElementById('page3').classList.add('active');
    
    // Add confetti effect
    createConfetti();
}

// Create confetti effect on success page
function createConfetti() {
    const confettiCount = 50;
    const confettiEmojis = ['❤️', '💕', '💖', '💗', '💝', '💘', '🎉', '🎊', '✨', '⭐'];
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.textContent = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-50px';
            confetti.style.fontSize = (Math.random() * 20 + 20) + 'px';
            confetti.style.opacity = '0.8';
            confetti.style.zIndex = '9999';
            confetti.style.pointerEvents = 'none';
            confetti.style.transition = 'all 3s ease-in-out';
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.style.top = '120vh';
                confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
                confetti.style.opacity = '0';
            }, 50);
            
            setTimeout(() => {
                confetti.remove();
            }, 3500);
        }, i * 50);
    }
}
