let clock = () => {
  let now = new Date();
	let hours = now.getHours();
	let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let time = 0;
	
  if (minutes < 10) time = `${hours}:0${minutes}:${seconds}`;
	else time = `${hours}:${minutes}:${seconds}`;
	
  if (hours < 10) time = `0${time}`;
  
  document.getElementById('time').innerHTML = time;
  setTimeout(clock, 1000);
}

clock();
