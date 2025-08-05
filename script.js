function scrollTo(id) {
  window.scrollTo({ top: document.getElementById(id).offsetTop - 100, behavior: 'smooth' });
}

// Refresh Spotify Preview Button Functionality
document.getElementById('refresh-spotify-btn').addEventListener('click', function() {
  const spotifyPreview = document.getElementById('spotify-preview');
  if (spotifyPreview.innerHTML === '<div id="spotify-preview"></div>') {
    // Re-render the preview by replacing the div with a new one
    const iframe = document.createElement('iframe');
    iframe.src = 'https://open.spotify.com/embed/artist/2HMjLscJm49x6Yj7XIiEdO';
    iframe.frameborder = 0;
    iframe.width = "100%";
    iframe.height = 380;
    iframe.allowfullscreen = true;
    spotifyPreview.innerHTML = '';
    spotifyPreview.appendChild(iframe);
  }
});
