function colorlis () {
	var lis = $("li");

	for(let i = 0, length1 = lis.length; i < length1; i++){
		if (i % 2 == 0) {
			lis[i].style.background = "gray";
		}
		else {
			
		}
	}
}

//--------------------------------------------------------------
colorlis();