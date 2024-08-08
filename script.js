document.getElementById('notifyButton').addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        new Notification('Hello!', {
            body: 'This is a notification message.',
            icon: 'https://via.placeholder.com/150' // Optional icon URL
        });
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                new Notification('Hello!', {
                    body: 'This is a notification message.',
                    icon: 'https://via.placeholder.com/150' // Optional icon URL
                });
            }
        });
    }
});
