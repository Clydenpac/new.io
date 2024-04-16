// Set the date of the birthday (year, month (0-based), day, hour, minute, second)
const birthday = new Date('2024-04-18T00:00:00');

function updateCountdown() {
  const now = new Date();
  const difference = birthday - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = padZero(days);
  document.getElementById('hours').textContent = padZero(hours);
  document.getElementById('minutes').textContent = padZero(minutes);
  document.getElementById('seconds').textContent = padZero(seconds);

  if (difference < 0) {
    clearInterval(timer); // Stop the countdown timer
    document.getElementById('countdown').innerHTML = ''; // Remove the countdown elements
    document.getElementById('birthdayMessage').innerHTML = `
       
      <p>Happy Birthday! 🎉</p>
      <p>Ms Marotola,</p>
      <p>Wishing you a day filled with love, laughter, and joy.</p>
      <p>May all your dreams and wishes come true!🎂</p>
      <p>Stay As Sexy and as beautiful as You are</p>
      <p>Hold on To your Faith !</p>
      <p>Self Love Is everything!</p>
      <p>God is the only way !</p>
      <p>With lots of love💖,</p>
      <p>Clydeee</p>
      <p> <a href=> </a></p>
      
    `; // Display the birthday message
    document.getElementById('pageLink').style.display = 'block';
    document.getElementById('blue').style.display = 'inline-block';
document.getElementById('blue').style.margin = '0 auto';
document.getElementById('adi').style.display = 'block';
document.getElementById('pitsi').style.display = 'block';
document.getElementById('try').style.display = 'auto';
    
  }
}

// Update the countdown every second
const timer = setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();

// Function to pad single digits with leading zeros
function padZero(num) {
  return (num < 10 ? '0' : '') + num;
}