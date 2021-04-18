var tabs = document.querySelectorAll(".lboard_tabs ul li");
var lb = document.querySelector(".lb");
var hs = document.querySelector(".hs");
var items = document.querySelectorAll(".lboard_item");

tabs.forEach(function(tab){
	tab.addEventListener("click", function(){
		var currenttab = tab.getAttribute("data-li");
		
		tabs.forEach(function(tab){
			tab.classList.remove("active");
		})

		tab.classList.add("active");

		items.forEach(function(item){
			item.style.display = "none";
		})

		if(currenttab == "lb"){
			lb.style.display = "block";
		}
		else if(currenttab == "hs"){
			hs.style.display = "block";
		}

	})
})
