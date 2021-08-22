function loadFile(name)
{
	var src = document.createElement("script");
	src.setAttribute("type", "text/javascript");
	src.setAttribute("src", name);
	document.getElementsByTagName("body")[0].appendChild(src);
}
function pressed()
{
loadFile("hello.js");
loadFile("nice.js");
}