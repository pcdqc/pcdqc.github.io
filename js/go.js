var times=0;
function calc(result){
	
	var rand = (parseInt(Math.random()*10))%3;
	var num = document.getElementById('results');
	var total = document.getElementById('number');
	var re1 = 'Dogfall.',re2='You Win!!',re3='You Lose!';
	// var times = 0;
	if(rand == 1){rand = 'jd'};
	if(rand == 0){rand = 'stone'};
	if(rand == 2) {rand = 'no'};
	// document.write(rand)

	if(rand == result.id)
		num.innerHTML = re1;
	else if(rand > result.id)
	{
		num.innerHTML = re2;
		times +=1;
	}
	else
		num.innerHTML = re3;

	total.innerHTML = times;
	// document.write(result.id)
	var res = result.id;
	// if(res<'t' and res !== jd)
}