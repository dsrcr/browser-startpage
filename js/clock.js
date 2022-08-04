let clock = () => {
  let now = new Date();
	let hours = now.getHours();
	let minutes = now.getMinutes();
  let time = 0;
	
  if (minutes < 10) time = `${hours}:0${minutes}`;
	else time = `${hours}:${minutes}`;
	
  if (hours < 10) time = `0${time}`;
  
  document.getElementById('time').innerHTML = time;
  setTimeout(clock, 1000);
}

clock();
