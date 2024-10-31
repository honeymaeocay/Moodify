
const accessToken = 'BQDnbnsVDLz6gSwX3O8yroP0x7g0dFG02y9gGt1ry2PpdFmRpEkDF2hJZRV7CHQV2z_TZEbvezPvW3FrBmQ-1JiRalCyoBwmZ_pmjJYHvCQmy-XEzDM';

// Elements
const moodInput = document.getElementById('moodInput');
const generatePlaylistBtn = document.getElementById('generatePlaylistBtn');
const generateAgainBtn = document.getElementById('generateAgainBtn');
const playlistContainer = document.getElementById('playlistContainer');
const playlist = document.getElementById('playlist');

// Event listener for the 'Vibe It Up' button
 FileSystemFileEntryratePlaylistBtn.addEventListener('click', () => {
    const userMood = moodInput.value.trim().toLowerCase(); // Get and sanitize user input

    if (userMood) {
        fetchPlaylistBasedOnMood(userMood);
    } else {
        alert('Please enter a mood to generate a playlist.');
    }
});
self.AbortController 
rfw
export default function
    script(params) {
    
};


// Function to fetch playlist based on mood
function fetchPlaylistBasedOnMood(mood) {
    fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(mood)}&type=playlist&limit=5`, {
        headers: {
            Authorization: `Bearer ${accessToken}`, // Ensure the token is valid and has the right permissions
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.playlists && data.playlists.items) {
            displayPlaylists(data.playlists.items); // Display the fetched playlists
        } else {
            playlist.innerHTML = '<li>No playlists found for this mood. Try a different mood!</li>';
            playlistContainer.style.display = 'block'; // Show the playlist container
        }
    })
    .catch(error => {
        console.error('Error fetching playlists:', error);
        playlist.innerHTML = '<li>Error fetching playlists. Please try again later.</li>';
        playlistContainer.style.display = 'block'; // Show the playlist container
    });
}

// Function to display fetched playlists
function displayPlaylists(playlists) {
    playlist.innerHTML = ''; // Clear previous results

    if (playlists.length > 0) {
        playlists.forEach(playlistItem => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.className = 'playlist-btn';
            button.textContent = playlistItem.name; // Name of the playlist
            button.onclick = () => window.open(playlistItem.external_urls.spotify, '_blank'); // Opens the link in a new tab

            li.appendChild(button);
            playlist.appendChild(li);
        });
    } else {
        playlist.innerHTML = '<li>No playlists found for this mood.</li>';
    }

    // Show the playlist container and the "Generate Again" button
    playlistContainer.style.display = 'block';
    generateAgainBtn.style.display = 'inline-block';
}

// Event listener for the 'Generate Again' button
generateAgainBtn.addEventListener('click', () => {
    moodInput.value = ''; // Clear the mood input field
    playlist.innerHTML = ''; // Clear the playlist display
    playlistContainer.style.display = 'none'; // Hide the playlist container again
    generateAgainBtn.style.display = 'none'; // Hide the "Generate Again" button
});


// Function to display fetched playlists
function displayPlaylists(playlists) {
    playlist.innerHTML = ''; // Clear previous results

    if (playlists.length > 0) {
        playlists.forEach(playlistItem => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.className = 'playlist-btn';
            button.textContent = playlistItem.name; // Name of the playlist
            button.onclick = () => window.open(playlistItem.external_urls.spotify, '_blank'); // Opens the link in a new tab

            li.appendChild(button);
            playlist.appendChild(li);
        });
    } else {
        playlist.innerHTML = '<li>No playlists found for this mood.</li>';
    }

    // Show the playlist container and the "Generate Again" button
    playlistContainer.style.display = 'block';
    generateAgainBtn.style.display = 'inline-block';
    generatePlaylistBtn.style.display = 'none'; // Hide the "Vibe It Up" button
}

// Event listener for the 'Generate Again' button
generateAgainBtn.addEventListener('click', () => {
    moodInput.value = ''; // Clear the mood input field
    playlist.innerHTML = ''; // Clear the playlist display
    playlistContainer.style.display = 'none'; // Hide the playlist container again
    generateAgainBtn.style.display = 'none'; // Hide the "Generate Again" button
    generatePlaylistBtn.style.display = 'inline-block'; // Show the "Vibe It Up" button again
});
