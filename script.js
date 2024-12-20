async function checkPassword() {
    const password = document.getElementById('password').value;
    const correctHash = '7c15eb56e572a602eaea8ef04b953c7f5a3f119ef7cc24f87c42f9e5bbecb0f2';
    
    // Convert the password string to SHA-256 hash
    const msgBuffer = new TextEncoder().encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const inputHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    
    // Get message elements
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    
    // Compare hashes and show appropriate message
    if (inputHash === correctHash) {
        successMessage.classList.remove('hidden');
        errorMessage.classList.add('hidden');
    } else {
        successMessage.classList.add('hidden');
        errorMessage.classList.remove('hidden');
    }
} 