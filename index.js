window.addEventListener('message', function(event) {
    if (event.data.height) {
        document.getElementById('waitlist-UnNQ').style.height = event.data.height + 'px';
    }
});

(function() {
    const urlParams = new URLSearchParams(window.parent.location.search);
    const r = urlParams.get('r');
    if (r) {
        const iframe = document.getElementById('waitlist-UnNQ');
        const src = new URL(iframe.src);
        src.searchParams.set('r', r);
        iframe.src = src.toString();
    }
})();