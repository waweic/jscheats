function playit() {
	this.start(); 
	this.bulletSpeed = 0.001; 
	if(this.score >= 400) {
		this.bulletSpeed = 1000;
		this.shipSpeed = 20;
		clearInterval(interid);
	}
}


var interid = setInterval(playit, 1000);
