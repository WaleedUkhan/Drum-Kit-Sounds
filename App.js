document.addEventListener("DOMContentLoaded", function() {
    // Get references to the audio elements
    const kickSound = document.getElementById("kickSound");
    const rideSound = document.getElementById("rideSound");
    const clapsSound = document.getElementById("clapsSound");
    const hiHatSound = document.getElementById("hihatSound");
    const stompsSound = document.getElementById("stompsSound");

    // Array containing all the sound elements
    const allSounds = [kickSound, rideSound, clapsSound, hiHatSound, stompsSound];

    // Function to stop all sounds except the one being played
    function stopOtherSounds(currentSound) {
        allSounds.forEach(sound => {
            if (sound !== currentSound && !sound.paused) {
                sound.pause();
                sound.currentTime = 0;
            }
        });
    }

    // Function to play the corresponding sound for the pressed key
    function playSound(key) {
        switch (key) {
            case 'k':
                stopOtherSounds(kickSound);
                kickSound.play();
                break;
            case 'l':
                stopOtherSounds(rideSound);
                rideSound.play();
                break;
            case 'j':
                stopOtherSounds(clapsSound);
                clapsSound.play();
                break;
            case 'a':
                stopOtherSounds(hiHatSound);
                hiHatSound.play();
                break;
            case 's':
                stopOtherSounds(stompsSound);
                stompsSound.play();
                break;
            default:
                break;
        }
    }

    // Event listener for keydown events
    document.addEventListener("keydown", function(event) {
        const key = event.key.toLowerCase();
        playSound(key);
    });
});
