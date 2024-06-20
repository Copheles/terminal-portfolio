export default function getCurrentTimeFormatted() {
  const now = new Date(); // Get the current date and time in local timezone

  let hours = now.getHours();
  let minutes = now.getMinutes();
  const period = hours >= 12 ? 'PM' : 'AM'; // Determine if it's AM or PM

  // Convert hours to 12-hour format and handle midnight (0 AM) as 12 AM
  hours = hours % 12;
  hours = hours ? hours : 12;

  // Add leading zeros to minutes and seconds if they are less than 10
  minutes = formatTimeComponent(minutes);

  // Construct the formatted time string
  const formattedTime = `${hours}:${minutes} ${period}`;

  return formattedTime;
}

function formatTimeComponent(timeComponent) {
  // Function to add leading zero if the time component is less than 10
  return timeComponent < 10 ? '0' + timeComponent : timeComponent;
}

