function changeAnimals(thing){
	var img = document.getElementById('animals');
	switch(thing){
		case "0":
			img.src = "http://placehold.it/300x250";
			break;
		case "1":
			img.src = "img/cow/cow2_565x640.png";
			break;
		case "2":
			img.src = "img/chicken/chicken513x640.png";
			break;
		case"3":
			img.src = "img/pig/pig640x582.png";
			break;
		case "4":
			img.src = "img/car/carRed640x320.png";
			break;
		case "5":
			img.src = "img/cat/cat563x640.png";
			break;
		case "6":
			img.src = "img/dog/dog477x640.png";
			break;
	}
}
