function navegar(url) {
	console.log(url)
	const target = document.getElementById(String(url))
	console.log(target);
	yTarget = target.offsetTop - document.body.scrollTop - 120;

	console.log(yTarget);
	
	window.scrollTo({
  		top: yTarget,
  		behavior: 'smooth' 
	});
}