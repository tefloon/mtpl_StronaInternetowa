let t = null;

document.addEventListener('click', function handleClick(event) {
	if (!event.target.classList.contains('linki')) {
		return
	}

	if (t !== null) 
		t.classList.toggle('active'); 

	
	event.target.classList.toggle('active');
	t = event.target;
});