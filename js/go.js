var times=0;
// function compare(num1,num2){
// 	return  (num1-num2+4)%3-1;
	 
// };
function bak(){
	var conbefore = document.getElementById('content'); //获取
	var conafter = document.getElementById('content1');
	conbefore.style.display = "block";
	conafter.style.display = "none";
}
function calc(result){
	
	var rand = (parseInt(Math.random()*10))%3;  //随机生成一个1|2|3
	// console.log(rand);
	var num = document.getElementById('results');//获取结果框DIV
	var total = document.getElementById('number');//获取获胜次数DIV
	var re1 = 'Dogfall.',re2='You Win!!!',re3='You Lose!!';
	var res =  parseInt(result.id);				//将ID值!转换为number型

	var conbefore = document.getElementById('content'); //获取
	// console.dir(conbefore)
	// conbefore.style.display = "none";
	var conafter = document.getElementById('content1')
	
	 

	var after1 = document.getElementById('left');
	var after2 = document.getElementById('text');
	var after3 = document.getElementById('right');
	// console.log(res)
	// document.write(res)

	// var times = 0;
	// if(rand == 0){rand = 'jd'};
	// if(rand == 1){rand = 'no'};
	// if(rand == 2) {rand = 'stone'};
	// document.write(rand)

	// if(rand == result.id)
	// 	num.innerHTML = re1 +'dian:'+rand ;
	// else if(rand > result.id   ){
	// 	num.innerHTML = re2+'dian:'+rand  ;
	// 	times +=1;
	// }
	// else
	// 	num.innerHTML = re3+'dian:'+rand ;
	var jieguo = (res - rand+4)%3-1;
	// console.log(jieguo)
	 // console.log(jieguo);
	function changeTo(){
	 	conbefore.style.display = "none";
		conafter.style.display = "block";
		left.style.background = "url(image/"+res+".jpg)"
		text.style.innerHTML = "Congratulation!"
		right.style.background = "url(image/"+rand+".jpg)"
	 };
	if( jieguo== -1){
		num.innerHTML = re2  ;
		changeTo();
		times+=1;
		// conafter.style.display = block;
		// after1.style.background = 'url(image/'+ res +'.jpg)';


	}

	else if(jieguo ==1){
		num.innerHTML = re3  ;
		
		 
	}
	else
		num.innerHTML = re1;

	total.innerHTML = times;
	// document.write(result.id)
	
	// if(res<'t' and res !== jd)
	// document.after1.removeAttribute("style")


}
function addAttrNo( ){
	this.style.backgroundColor = "red";
}
function change(res){
	var test = document.getElementById("test");
	test.setAttribute("title","a good man");

}

 
 
 