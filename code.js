var loadingTime = 3217;
setTimeout(function(){
	document.getElementById("loading").classList.add("hide");
	setTimeout(function(){
		document.getElementsByClassName("top-an")[0].classList.add("show");
		setTimeout(function(){
			document.getElementsByClassName("right-an")[0].classList.add("show");
			setTimeout(function(){
				document.getElementsByClassName("left-an")[0].classList.add("show");
				setTimeout(function(){
					document.getElementsByClassName("bottom-an")[0].classList.add("show");
				},900);
			},900);
		},900);
	},900);
},loadingTime);
