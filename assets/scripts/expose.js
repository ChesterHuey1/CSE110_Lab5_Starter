// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const volumeControl = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('#expose button');
  const audioElement = document.querySelector('#expose audio');
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', function() {
    const selectedHorn = this.value;
    if (selectedHorn !== 'select') {
      hornImage.src = `assets/images/${selectedHorn}.svg`;
      audioElement.src = `assets/audio/${selectedHorn}.mp3`;
    } else {
      hornImage.src = 'assets/images/no-image.png';
      audioElement.src = '';
    }
  });

  volumeControl.addEventListener('input', function() {
    const volumeLevel = parseInt(this.value);
    audioElement.volume = volumeLevel / 100;

    if (volumeLevel === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Mute icon';
    } else if (volumeLevel < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (volumeLevel < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  });

  playButton.addEventListener('click', function() {
    audioElement.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}