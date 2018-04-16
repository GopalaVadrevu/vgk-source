var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lists = document.querySelectorAll("li");
lists.forEach(function(element) 
{
	
	element.addEventListener("click",function()
	{
		if (element.className=="done")
		{
			element.className="";
		}
		else
		{
			element.className="done";
		}
	});
	var btn = document.createElement("BUTTON");
	btn.innerText="Delete";
 	btn.addEventListener("click",function(){
		ul.removeChild(element);
		ul.removeChild(btn);
	});
	ul.appendChild(element);
	ul.appendChild(btn);
	
});

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	
	li.addEventListener("click",function()
	{
		if (li.className=="done")
		{
			li.className="";
		}
		else
		{
			li.className="done";
		}
	});
	ul.appendChild(li);
	var btn = document.createElement("BUTTON");
	btn.innerText="Delete";
 	btn.addEventListener("click",function(){
		ul.removeChild(li);
		ul.removeChild(btn);
	});
	ul.appendChild(btn);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);




	




