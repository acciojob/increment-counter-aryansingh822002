//your JS code here. If required.
const counter=document.getElementById("counter");
const button= document.getElementById("incrementBtn");

button.addEventListener("click", ()=>{
	const currentValue= parseInt(counter.textContent);
	alert(currentValue);
	counter.textContent=currentValue +1;
});