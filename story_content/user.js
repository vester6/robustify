function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Or5VMQwPXv":
        Script1();
        break;
      case "6G362tKKkfd":
        Script2();
        break;
      case "61hDohlVwcr":
        Script3();
        break;
      case "6XUQw012VOp":
        Script4();
        break;
      case "5j0OmR39BUX":
        Script5();
        break;
      case "5xlNOhT5kBB":
        Script6();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var myCode = function() {
	var x = document.getElementsByClassName("scrollarea-area");
var y = document.getElementsByClassName("scrollarea-scrollbar");
x[0].onscroll = function(){
$(x[1]).scrollTop($(x[0]).scrollTop());
var height = x[0].scrollHeight - x[0].offsetHeight;
var player = GetPlayer();
player.SetVar("num",x[0].scrollTop/height*100);
};
x[1].onscroll = function(){
$(x[0]).scrollTop($(x[1]).scrollTop());
};
$(window).resize(function(){
var newHeight = x[0].scrollHeight - x[0].offsetHeight;
var player = GetPlayer();
var height = newHeight;
player.SetVar("height",newHeight);
});
$(y[1]).css("display", "none");
$(x[1]).css("-ms-overflow-style", "none");
}
if (window.$ != null) { // If jQuery has already loaded, run myCode.

	myCode();

} else { // Else, load jQuery and then run myCode.

	var jQueryLoader = document.createElement("script");

	jQueryLoader.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";

	jQueryLoader.onload = function() {

		jQueryLoader.onload = null;

		myCode();

	}

	document.head.appendChild(jQueryLoader);

}

}

window.Script2 = function()
{
  var myCode = function() {
	var x = document.getElementsByClassName("scrollarea-area");
var y = document.getElementsByClassName("scrollarea-scrollbar");
x[0].onscroll = function(){
$(x[1]).scrollTop($(x[0]).scrollTop());
var height = x[0].scrollHeight - x[0].offsetHeight;
var player = GetPlayer();
player.SetVar("num",x[0].scrollTop/height*100);
};
x[1].onscroll = function(){
$(x[0]).scrollTop($(x[1]).scrollTop());
};
$(window).resize(function(){
var newHeight = x[0].scrollHeight - x[0].offsetHeight;
var player = GetPlayer();
var height = newHeight;
player.SetVar("height",newHeight);
});
$(y[0]).css("display", "none");
$(x[0]).css("-ms-overflow-style", "none");
}
if (window.$ != null) { // If jQuery has already loaded, run myCode.

	myCode();

} else { // Else, load jQuery and then run myCode.

	var jQueryLoader = document.createElement("script");

	jQueryLoader.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";

	jQueryLoader.onload = function() {

		jQueryLoader.onload = null;

		myCode();

	}

	document.head.appendChild(jQueryLoader);

}

}

window.Script3 = function()
{
  var myCode = function() {
	var x = document.getElementsByClassName("scrollarea-area");
var y = document.getElementsByClassName("scrollarea-scrollbar");
x[0].onscroll = function(){
$(x[1]).scrollTop($(x[0]).scrollTop());
var height = x[0].scrollHeight - x[0].offsetHeight;
var player = GetPlayer();
player.SetVar("num",x[0].scrollTop/height*100);
};
x[1].onscroll = function(){
$(x[0]).scrollTop($(x[1]).scrollTop());
};
$(window).resize(function(){
var newHeight = x[0].scrollHeight - x[0].offsetHeight;
var player = GetPlayer();
var height = newHeight;
player.SetVar("height",newHeight);
});
$(y[1]).css("display", "none");
$(x[1]).css("-ms-overflow-style", "none");
}
if (window.$ != null) { // If jQuery has already loaded, run myCode.

	myCode();

} else { // Else, load jQuery and then run myCode.

	var jQueryLoader = document.createElement("script");

	jQueryLoader.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";

	jQueryLoader.onload = function() {

		jQueryLoader.onload = null;

		myCode();

	}

	document.head.appendChild(jQueryLoader);

}

}

window.Script4 = function()
{
  var myCode = function() {
	var x = document.getElementsByClassName("scrollarea-area");
var y = document.getElementsByClassName("scrollarea-scrollbar");
x[0].onscroll = function(){
$(x[1]).scrollTop($(x[0]).scrollTop());
var height = x[0].scrollHeight - x[0].offsetHeight;
var player = GetPlayer();
player.SetVar("num",x[0].scrollTop/height*100);
};
x[1].onscroll = function(){
$(x[0]).scrollTop($(x[1]).scrollTop());
};
$(window).resize(function(){
var newHeight = x[0].scrollHeight - x[0].offsetHeight;
var player = GetPlayer();
var height = newHeight;
player.SetVar("height",newHeight);
});
$(y[1]).css("display", "none");
$(x[1]).css("-ms-overflow-style", "none");
}
if (window.$ != null) { // If jQuery has already loaded, run myCode.

	myCode();

} else { // Else, load jQuery and then run myCode.

	var jQueryLoader = document.createElement("script");

	jQueryLoader.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";

	jQueryLoader.onload = function() {

		jQueryLoader.onload = null;

		myCode();

	}

	document.head.appendChild(jQueryLoader);

}

}

window.Script5 = function()
{
  var myCode = function() {
	var x = document.getElementsByClassName("scrollarea-area");
var y = document.getElementsByClassName("scrollarea-scrollbar");
x[0].onscroll = function(){
$(x[1]).scrollTop($(x[0]).scrollTop());
var height = x[0].scrollHeight - x[0].offsetHeight;
var player = GetPlayer();
player.SetVar("num",x[0].scrollTop/height*100);
};
x[1].onscroll = function(){
$(x[0]).scrollTop($(x[1]).scrollTop());
};
$(window).resize(function(){
var newHeight = x[0].scrollHeight - x[0].offsetHeight;
var player = GetPlayer();
var height = newHeight;
player.SetVar("height",newHeight);
});
$(y[1]).css("display", "none");
$(x[1]).css("-ms-overflow-style", "none");
}
if (window.$ != null) { // If jQuery has already loaded, run myCode.

	myCode();

} else { // Else, load jQuery and then run myCode.

	var jQueryLoader = document.createElement("script");

	jQueryLoader.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";

	jQueryLoader.onload = function() {

		jQueryLoader.onload = null;

		myCode();

	}

	document.head.appendChild(jQueryLoader);

}

}

window.Script6 = function()
{
  var myCode = function() {
	var x = document.getElementsByClassName("scrollarea-area");
var y = document.getElementsByClassName("scrollarea-scrollbar");
x[0].onscroll = function(){
$(x[1]).scrollTop($(x[0]).scrollTop());
var height = x[0].scrollHeight - x[0].offsetHeight;
var player = GetPlayer();
player.SetVar("num",x[0].scrollTop/height*100);
};
x[1].onscroll = function(){
$(x[0]).scrollTop($(x[1]).scrollTop());
};
$(window).resize(function(){
var newHeight = x[0].scrollHeight - x[0].offsetHeight;
var player = GetPlayer();
var height = newHeight;
player.SetVar("height",newHeight);
});
$(y[1]).css("display", "none");
$(x[1]).css("-ms-overflow-style", "none");
}
if (window.$ != null) { // If jQuery has already loaded, run myCode.

	myCode();

} else { // Else, load jQuery and then run myCode.

	var jQueryLoader = document.createElement("script");

	jQueryLoader.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";

	jQueryLoader.onload = function() {

		jQueryLoader.onload = null;

		myCode();

	}

	document.head.appendChild(jQueryLoader);

}

}

};
