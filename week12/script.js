
	var d = new Date();
	var n = d.getHours();
	if (n > 22 || n < 7)
	  // If time is after 10PM or before 7AM, apply night theme to ‘sleep’
	  document.body.className = "sleep";
	else if (n > 8 && n < 16)
	  // If time is between 8PM – 4PM sunset theme to ‘body’
	  document.body.className = "school";
	else
	  // Else use ‘free time’ theme
	  document.body.className = "free";