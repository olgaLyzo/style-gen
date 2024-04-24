
const labelArray = document.querySelectorAll('input[type=radio][name=temp]');
const topImg = document.getElementById("top");
const middleImg = document.getElementById("middle");
const bottomImg = document.getElementById("bottom");


let summer = {
	urlTop:["./assets/top-hot1.jpg","./assets/top-hot2.jpg","./assets/top-hot3.jpg"],
	urlMiddle:["./assets/middle-hot1.jpg","./assets/middle-hot2.jpg","./assets/middle-hot3.png"],
	urlBottom:["./assets/bottom-hot1.jpg","./assets/bottom-hot2.jpg","./assets/bottom-hot3.jpg"]
};
										
let winter = {
	urlTop:["./assets/top-cold1.jpg","./assets/top-cold2.jpg","./assets/top-cold3.jpg"],
	urlMiddle:["./assets/middle-cold1.jpg","./assets/middle-cold2.jpg","./assets/middle-cold3.jpg"],
	urlBottom:["./assets/bottom-cold1.jpg","./assets/bottom-cold2.jpg","./assets/bottom-cold3.jpg"]
};
let autumn = {
	urlTop:["./assets/top-semi1.jpg","./assets/top-semi2.jpg","./assets/top-semi3.jpg","./assets/top-semi4.jpg"],
	urlMiddle:["./assets/middle-semi1.jpg","./assets/middle-semi2.jpg","./assets/middle-semi3.jpg","./assets/middle-semi4.jpg"],
	urlBottom:["./assets/bottom-semi1.jpg","./assets/bottom-semi2.jpg","./assets/bottom-semi3.jpg","./assets/bottom-semi4.jpg"]
};
let spring = {
	urlTop:["./assets/top-warm1.jpg","./assets/top-warm2.jpg","./assets/top-warm3.jpg"],
	urlMiddle:["./assets/middle-warm1.jpg","./assets/middle-warm2.jpg","./assets/middle-warm3.jpg"],
	urlBottom:["./assets/bottom-warm1.jpg","./assets/bottom-warm2.jpg","./assets/bottom-warm3.jpg"]
};

function getLookOfTheDay(){
	check();
	function check(){
		labelArray.forEach(element => element.addEventListener("change",function makeChoice(event){
			topImg.innerHTML = "";
			middleImg.innerHTML = "";
			bottomImg.innerHTML = "";
			getImages(event.target.id);
		}))
	}
	function getImages(season){
		if (season === "summer"){
				let summerTopImgs = summer.urlTop.length;
				let summerMiddleImgs = summer.urlMiddle.length;
				let summerBottomImgs = summer.urlBottom.length;
				topImg.innerHTML += `<img src="${summer.urlTop[randomImg(0,summerTopImgs-1)]}" alt = "top clodth"></img>`;
				middleImg.innerHTML += `<img src="${summer.urlMiddle[randomImg(0,summerMiddleImgs-1)]}" alt = "middle clodth"></img>`;
				bottomImg.innerHTML += `<img src="${summer.urlBottom[randomImg(0,summerBottomImgs-1)]}" alt = "bottom clodth"></img>`;
		}
		if (season === "winter"){
			let winterTopImgs = winter.urlTop.length;
			let winterMiddleImgs = winter.urlMiddle.length;
			let winterBottomImgs = winter.urlBottom.length;
			
			topImg.innerHTML += `<img src="${winter.urlTop[randomImg(0,winterTopImgs-1)]}" alt = "top clodth"></img>`;
			middleImg.innerHTML += `<img src="${winter.urlMiddle[randomImg(0,winterMiddleImgs-1)]}" alt = "middle clodth"></img>`;
			bottomImg.innerHTML += `<img src="${winter.urlBottom[randomImg(0,winterBottomImgs-1)]}" alt = "bottom clodth"></img>`;
		}
		if (season === "autumn"){
			let autumnTopImgs = autumn.urlTop.length;
			let autumnMiddleImgs = autumn.urlMiddle.length;
			let autumnBottomImgs = autumn.urlBottom.length;
			
			topImg.innerHTML += `<img src="${autumn.urlTop[randomImg(0,autumnTopImgs-1)]}" alt = "top clodth"></img>`;
			middleImg.innerHTML += `<img src="${autumn.urlMiddle[randomImg(0,autumnMiddleImgs-1)]}" alt = "middle clodth"></img>`;
			bottomImg.innerHTML += `<img src="${autumn.urlBottom[randomImg(0,autumnBottomImgs-1)]}" alt = "bottom clodth"></img>`;
		}
		if (season === "spring"){
			let springTopImgs = spring.urlTop.length;
			let springMiddleImgs = spring.urlMiddle.length;
			let springBottomImgs = spring.urlBottom.length;
			
			topImg.innerHTML += `<img src="${spring.urlTop[randomImg(0,springTopImgs-1)]}" alt = "top clodth"></img>`;
			middleImg.innerHTML += `<img src="${spring.urlMiddle[randomImg(0,springMiddleImgs-1)]}" alt = "middle clodth"></img>`;
			bottomImg.innerHTML += `<img src="${spring.urlBottom[randomImg(0,springBottomImgs-1)]}" alt = "bottom clodth"></img>`;
		}


	}
	function randomImg(min, max){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
	}
	
}

	
	
	
	
	
	
	
	
	


document.addEventListener("DOMContentLoaded", getLookOfTheDay);