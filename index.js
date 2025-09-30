const radios = document.querySelectorAll('input[name="investor"]');
const message = document.getElementById('radio-message');

radios.forEach(radio => {
  radio.addEventListener('change', () => {
    if (radio.value === "individual") {
      message.textContent = "I am a natural person investing on my own behalf as a sole owner, Joint tenant, or tenant in common.";
    } else {
      message.textContent = "";
    }
  });
});