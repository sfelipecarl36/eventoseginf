var sidebarBol = false;
var slideNum = 2;
var slideIndex = 1;

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

function sidebarCheck() {

	var sidebar = document.getElementById('sidebar');
	var blackdrop = document.getElementById('blackdrop');
	var menusidebar = document.getElementById('menu-sidebar');

	if(sidebarBol) {
		sidebarBol = false;
		sidebar.style.width = '0px';
		menusidebar.style.display = 'none'
		menusidebar.style.opacity = '0'
		blackdrop.style.display = 'none';
		document.body.style.overflowY = 'visible';
	}

	else{
		sidebarBol = true
		sidebar.style.width = '260px';
		menusidebar.style.display = 'block'
		menusidebar.style.opacity = '1'
		blackdrop.style.display = 'block';
		document.body.style.overflowY = 'hidden';
	}

}

function nextSlide() {

	var imgbanner = document.getElementById('imgbanner');

	if (slideIndex<slideNum) {
		slideIndex+=1;
		imgbanner.style.backgroundImage = 'url(img/banner-principal-'+slideIndex+'.jpg)';
		setTimeout(nextSlide, 5000);
	}
	else {
		slideIndex=1;
		imgbanner.style.backgroundImage = 'url(img/banner-principal-'+slideIndex+'.jpg)';
		setTimeout(nextSlide, 5000);
	}
}

setTimeout(nextSlide, 5000);