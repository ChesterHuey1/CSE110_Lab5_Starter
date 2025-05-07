// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const speechButton = document.querySelector('button');
  const textToSpeak = document.getElementById('text-to-speak');
  const smilingFace = document.querySelector('#explore img');

  let speechUtterance = new SpeechSynthesisUtterance();
  let voices = [];

  function populateVoiceList() {
    voices = window.speechSynthesis.getVoices();

    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = voice.name;
      voiceSelect.appendChild(option);
    });
  }

  window.speechSynthesis.addEventListener('voiceschanged', populateVoiceList);
  populateVoiceList();

  speechButton.addEventListener('click', () => {
    speechUtterance.text = textToSpeak.value;
    const selectedVoiceName = voiceSelect.value;
    const selectedVoice = voices.find(voice => voice.name === selectedVoiceName);

    if (selectedVoice) {
      speechUtterance.voice = selectedVoice;
    }

    smilingFace.src = 'assets/images/smiling-open.png';
    window.speechSynthesis.speak(speechUtterance);
  });

  speechUtterance.onend = () => {
    smilingFace.src = 'assets/images/smiling.png';
  };
}