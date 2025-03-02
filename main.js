document.addEventListener('DOMContentLoaded', function() {
    // Set current date section
    const dateElement = document.getElementById('current-date');
    const now = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    dateElement.textContent = now.toLocaleDateString('en-US', options);

    // Initialize number variables
    let completedCount = 23;
    let taskCount = 6;
    let completedTasks = 0;
    const totalTasks = 6;

    // elements
    const completedCountElement = document.getElementById('completed-count');
    const taskCountElement = document.getElementById('task-count');
    const activityLogElement = document.getElementById('activity-log');
    const clearHistoryButton = document.getElementById('clear-history');
    const gradientButton = document.getElementById('gradient-btn');
    const discoverCard = document.getElementById('discover-card');
    const completeButtons = document.querySelectorAll('.complete-btn');

    // Complete button clicked event
    completeButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.disabled) return;
            
            
            const taskTitle = this.getAttribute('data-task');
            
            // 1. Show alert with message section
            alert(`Task "${taskTitle}" completed successfully!`);
            
            // 2. Increase completed count in navbar section
            completedCount++;
            completedCountElement.textContent = completedCount;
            
            // 3. Decrease task count section
            taskCount--;
            taskCountElement.textContent = taskCount;
            
            // 4. Add to activity log section
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
            const logItem = document.createElement('div');
            logItem.className = 'text-sm border-l-2 border-green-500 pl-3 py-1';
            logItem.innerHTML = `
                <p class="font-medium">${taskTitle}</p>
                <p class="text-gray-500 text-xs">Completed at ${timeString}</p>
            `;
            activityLogElement.appendChild(logItem);
            
            // 6. Disable the completed button area
            this.disabled = true;
            this.classList.add('opacity-50', 'cursor-not-allowed');
            
            // Track completed tasks section
            completedTasks++;
            
            // Check if all tasks are completed properly
            if (completedTasks === totalTasks) {
                setTimeout(() => {
                    alert("Congratulations! All tasks have been completed!");
                }, 500);
            }
        });
    });

    // Clear history button click event area
    clearHistoryButton.addEventListener('click', function() {
        activityLogElement.innerHTML = '';
    });

    // Gradient button click event - change background color section
    gradientButton.addEventListener('click', function() {
        const randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
    });

    // Discover card click event - redirect to new page section
    discoverCard.addEventListener('click', function() {
        window.location.href = 'discover.html';
    });

    // Function to generate random color section
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});