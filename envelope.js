(function () {
    var screen = document.getElementById('envelopeScreen');
    var envelope = document.getElementById('envelopeBtn');
    var audio = document.getElementById('bgMusic');
    var musicBtn = document.getElementById('musicBtn');

    if (!screen || !envelope) return;

    // Keep the page still while the envelope is showing
    document.body.classList.add('env-lock');
    window.scrollTo(0, 0);

    envelope.addEventListener('click', function () {
        if (envelope.classList.contains('open')) return;

        envelope.classList.add('open');
        screen.classList.add('opening');

        // Start the music on this tap (browsers allow it after a tap)
        if (audio && musicBtn && audio.paused) {
            musicBtn.click();
        }

        // Fade the envelope away, then show the page
        setTimeout(function () {
            screen.classList.add('done');
            document.body.classList.remove('env-lock');
        }, 2200);

        setTimeout(function () {
            screen.style.display = 'none';
        }, 3200);
    });
})();