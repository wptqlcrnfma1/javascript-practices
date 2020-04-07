var Rect = function(x1, y1, x2, y2, bg){
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
	this.bg = bg;
}

Rect.prototype.show = function(){
	document.write(
		"<div style='position:absolute; " + 
		"left:" + this.x1 + "px; " + 
		"top:" + this.y1 + "px; " + 
		"width:" + (this.x2 - this.x1) + "px; " + 
		"height:" + (this.y2 - this.y1) + "px; " + 
		"background-color:" + this.bg + "'>" + 
		"</div>");
}

Rect.prototype.hasOwnProperty = function(property){
	return ">>>> " + (property in this);
	
}

//////////////////////////////////////////////////////////////

console.log(Rect.prototype);

window.addEventListener('load', function(){
	var rects = [
		new Rect(100, 100, 200, 300, "RGB(0, 0, 250)"),
		new Rect(250, 250, 400, 400, "#0f0"),
		new Rect(300, 350, 500, 600, "#f00")];

	var index = 0;
	var intervalId;
	
	intervalId = setInterval(function(){
		if(index >= rects.length){
			clearInterval(intervalId);
			return; //3개 찍고 끝내기
		}
		
		
		rects[index].show();
		
		console.log(rects[index].hasOwnProperty("x1"));
		
		index++;
	}, 1000);
});