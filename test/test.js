

var seperators = document.getElementsByClassName("splitter")
for(var i = 0; i < seperators.length; i++){
	seperators[i].style.cursor = "col-resize";

	dragElement( seperators[i], "H" )

	// A function is used for dragging and moving
	function dragElement(splitter, direction)
	{
		var styleId = i
		splitter.onmousedown = onMouseDown;

		function onMouseDown(e)
		{
			console.log("mouse down: " + e.clientX);
			document.onmousemove = onMouseMove;
			document.onmouseup = () => {
				console.log("mouse up");
				document.onmousemove = document.onmouseup = null;
			}
		}

		function onMouseMove(e)
		{
			console.log(document.body.clientHeight )
			var val = e.clientX / document.body.clientHeight * 100
			if(val>=100)
			{
				val = 100
			}
			document.documentElement.style.setProperty("--Splt"+styleId, val+"%");
			console.log("mouse move: " + e.clientX);
		}
	}
}