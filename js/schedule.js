getWeeks();

function $(name){return document.getElementById(name);}
function tag(tagName){return document.getElementsByTagName(tagName);}

function getWeeks(){
    var now = new Date();
	
	var day = now.getDay(); // 0：周日、1：周一
	// console.log(now.getDay());
	if(day==0) {
		day=7;
	}
	var tds = tag("td");
	for(var i=day; i<=tds.length; i+=8){
		tds[i].className+=' bg-info';
	}
	
	
	var begin = new Date(2021,2,1);
	var weeksTemp = now.getTime()-begin.getTime();
	weeksTemp = weeksTemp/(1000*60*60*24*7);
	var weeks = Math.ceil(weeksTemp);
    $("week").innerHTML =weeks;
}
