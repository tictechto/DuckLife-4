 var marker = "front";
 var main_title=document.title;
 function tr_slide_inout(val){
	var msg =main_title;
	var res = " ";
	var speed = 300;
	var pos = val;
	var le = msg.length;
	if(marker == "front")
	{
		if(pos < le)
		{
			pos=pos+1;
			scroll = msg.substr(0,pos);
			document.title = scroll;
			timer = window.setTimeout("tr_slide_inout("+pos+")",speed);
		}
		else
		{
			marker = "rear";
			timer = window.setTimeout("tr_slide_inout("+pos+")",speed);
		}
	}
	else
	{
		if(pos > 0)
		{
			pos = pos-1;
			var ale = le-pos;
			scrol = msg.substr(ale,le); 
			document.title = scrol;
			timer =window.setTimeout("tr_slide_inout("+pos+")",speed);
		}
		else
		{
			marker = "front";
			timer = window.setTimeout("tr_slide_inout("+pos+")",speed); 
		}
	}
}
tr_slide_inout(0); 

