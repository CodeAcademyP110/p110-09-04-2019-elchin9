"use strict";

//Homework 1.

[...document.querySelectorAll('.num')].map(n => {
    n.onclick = function(){ 
        document.querySelector('.active').classList.remove('active');
        this.classList.add('active');
    }	
});

//Homework 2.

[...document.querySelectorAll('.menuContent')].map(menu => {
    menu.onclick = function(){
    	document.querySelector('.menuContent.active1').classList.remove('active1');
    	this.classList.add('active1');

    	document.querySelector('.innerContent.active1').classList.remove('active1');
    	const id = this.getAttribute("data-id");
    	const activeDiv = document.querySelector(`.innerContent[data-id="${id}"]`);
    	activeDiv.classList.add('active1');
    }
});

//Homework 3.

const red = document.querySelector('.red');
const orange = document.querySelector('.orange');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');
const colors = document.querySelector('.colorsContent');

red.onclick = function(){	
	colors.classList.remove('green','blue','orange');
	colors.classList.add('red');
}
orange.onclick = function(){
	colors.classList.remove('green','blue','red');
	colors.classList.add('orange');
}
green.onclick = function(){
	colors.classList.remove('orange','red','blue');
	colors.classList.add('green');
}
blue.onclick = function(){
	colors.classList.remove('green','red','orange');
	colors.classList.add('blue');
}


