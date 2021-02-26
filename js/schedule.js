getWeeks();
getCountdwon();

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
function getCountdwon(){
	var message=$("message");
	var CET4Date = new Date(2021,5,19); //2021年6月考试时间为2021年6月19日
	var summerHolidayDate = new Date(2021,6,11); // 第二学期(2021-03-01)至(2021-07-11)
	var winterHolidayDate = new Date(2022,0,24); //第一学期(2020-09-07)至(2021-01-24)
	var cet4 = compteCountdown(CET4Date);
	var winterHoliday = compteCountdown(winterHolidayDate);
	var summerHoliday = compteCountdown(summerHolidayDate);
	$("cet4").innerHTML = cet4;
	$("winter").innerHTML = winterHoliday;
	$("summer").innerHTML = summerHoliday;
}
function compteCountdown(endDate){
	return Math.floor((endDate.getTime()-new Date().getTime())/(1000*60*60*24));
}
