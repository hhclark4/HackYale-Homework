window.onload = function() {
	var paragraphs = document.getElementsByTagName("p");
	var greys = ["#FFFFFF", "#C8C8C8", "#989898", "#707070", "#585858", "#484848", "#383838", "#282828", "#000000"];

	for (var i = 0; i < paragraphs.length; i++) {
		paragraphs[i].style.color = greys[i];
	}

	var vanish = document.getElementById("disappear");
	vanish.style.color = "#FFFFE0";


	/*for (var i = 0; i < paragraphs.length; i++) {
		paragraphs[i].style.color = "pink";
	}; */
};

