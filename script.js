//your JS code here. If required.
const counter=document.getElementById("counter");
const button= document.getElementById("incrementBtn");

button.addEventListener("click", ()=>{
	const currentValue= parseInt(counter.textContent);
	alert(`Current Value before increment: ${currentValue}`);
	counter.textContent=currentValue +1;
});