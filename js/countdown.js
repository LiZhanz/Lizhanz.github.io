getCountdwon();

function $(name){return document.getElementById(name);}
function tag(tagName){return document.getElementsByTagName(tagName);}

function getCountdwon(){
	var message=$("message");
	var CET4Date = new Date(2021,5,12); //2021年6月考试时间为2021年6月12日
	var summerHolidayDate = new Date(2021,6,11); // 第二学期(2021-03-01)至(2021-07-11)
	var winterHolidayDate = new Date(2022,0,24); //第一学期(2021-09-07)至(2022-01-24)
	var GREDate = new Date(2021,11,18); //考研约2021-12-18
	var cet4 = compteCountdown(CET4Date);
	var winterHoliday = compteCountdown(winterHolidayDate);
	var summerHoliday = compteCountdown(summerHolidayDate);
	var GRE = compteCountdown(GREDate)
	$("cet4").innerHTML = cet4;
	$("winter").innerHTML = winterHoliday;
	$("summer").innerHTML = summerHoliday;
	$("GRE").innerHTML = GRE;
	$("now").innerHTML = now();
}
function compteCountdown(endDate){
	return Math.floor((endDate.getTime()-new Date().getTime())/(1000*60*60*24));
}
function now() {
	var now = new Date();
	var nowStr = "";
	
	nowStr += now.getFullYear()+"年";
	nowStr += now.getMonth()+1+"月";
	nowStr += now.getDay()+"日";
	return nowStr;
}
