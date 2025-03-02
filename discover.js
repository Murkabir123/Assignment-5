document.addEventListener('DOMContentLoaded', function() {
    // Gradient button click event - change background color
    const gradientButton = document.getElementById('gradient-btn');
    gradientButton.addEventListener('click', function() {
        const randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
    });

    // Function to generate random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});