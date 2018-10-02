/*animation for the middle logo*/
function logojump() {
	document.getElementById("logojs").style.animation = "logojump 1s infinite";
}
function logonojump() {
	document.getElementById("logojs").style.animation = "none";
}


/*animation for the navbar*/
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 50 && document.body.scrollTop < 400 || document.documentElement.scrollTop > 50 && document.documentElement.scrollTop < 400) {
        document.getElementById("tophomeid").className = "newtophome";
        document.getElementById("home").className = "newnavitem";
        document.getElementById("serv").className = "newnavitem";
        document.getElementById("about").className = "newnavitem";
        document.getElementById("cont").className = "newnavitem";
        document.getElementById("home").style.marginLeft = "60px";
        document.getElementById("serv").style.marginLeft = "60px";
        document.getElementById("serv").style.paddingLeft = "0px";
        document.getElementById("tophomeid").style.transition = "all 2s";
        document.getElementById("home").style.transition = "all 2s";
        document.getElementById("serv").style.transition = "all 2s";
        document.getElementById("about").style.transition = "all 2s";
        document.getElementById("cont").style.transition = "all 2s";
    } 
    else if(document.body.scrollTop >= 400 && document.body.scrollTop < 900 || document.documentElement.scrollTop >= 400 && document.documentElement.scrollTop < 900){
    	document.getElementById("tophomeid").className = "newtophome";
        document.getElementById("home").className = "newnavitem";
        document.getElementById("serv").className = "newnavitem";
        document.getElementById("about").className = "newnavitem";
        document.getElementById("cont").className = "newnavitem";
        document.getElementById("home").style.marginLeft = "60px";
        document.getElementById("serv").style.marginLeft = "60px";
        document.getElementById("serv").style.paddingLeft = "0px";
        document.getElementById("tophomeid").style.transition = "all 2s";
        document.getElementById("home").style.transition = "all 2s";
        document.getElementById("serv").style.transition = "all 2s";
        document.getElementById("about").style.transition = "all 2s";
        document.getElementById("cont").style.transition = "all 2s";
        document.getElementById("home").style.color = "black";
        document.getElementById("serv").style.color = "white";
        document.getElementById("about").style.color = "black";
        document.getElementById("cont").style.color = "black";
    }
    else if(document.body.scrollTop >= 900 && document.body.scrollTop < 1400 || document.documentElement.scrollTop >= 900 && document.documentElement.scrollTop < 1400){
    	document.getElementById("tophomeid").className = "newtophome";
        document.getElementById("home").className = "newnavitem";
        document.getElementById("serv").className = "newnavitem";
        document.getElementById("about").className = "newnavitem";
        document.getElementById("cont").className = "newnavitem";
        document.getElementById("home").style.marginLeft = "60px";
        document.getElementById("serv").style.marginLeft = "60px";
        document.getElementById("serv").style.paddingLeft = "0px";
        document.getElementById("tophomeid").style.transition = "all 2s";
        document.getElementById("home").style.transition = "all 2s";
        document.getElementById("serv").style.transition = "all 2s";
        document.getElementById("about").style.transition = "all 2s";
        document.getElementById("cont").style.transition = "all 2s";
        document.getElementById("home").style.color = "black";
        document.getElementById("serv").style.color = "black";
        document.getElementById("about").style.color = "white";
        document.getElementById("cont").style.color = "black";
    }
    else if(document.body.scrollTop >= 1400 && document.body.scrollTop < 2100 || document.documentElement.scrollTop >= 1400 && document.documentElement.scrollTop < 2100){
    	document.getElementById("tophomeid").className = "newtophome";
        document.getElementById("home").className = "newnavitem";
        document.getElementById("serv").className = "newnavitem";
        document.getElementById("about").className = "newnavitem";
        document.getElementById("cont").className = "newnavitem";
        document.getElementById("home").style.marginLeft = "60px";
        document.getElementById("serv").style.marginLeft = "60px";
        document.getElementById("serv").style.paddingLeft = "0px";
        document.getElementById("tophomeid").style.transition = "all 2s";
        document.getElementById("home").style.transition = "all 2s";
        document.getElementById("serv").style.transition = "all 2s";
        document.getElementById("about").style.transition = "all 2s";
        document.getElementById("cont").style.transition = "all 2s";
        document.getElementById("home").style.color = "black";
        document.getElementById("serv").style.color = "black";
        document.getElementById("about").style.color = "black";
        document.getElementById("cont").style.color = "white";
    }
    else {
        document.getElementById("tophomeid").className = "tophome";
        document.getElementById("home").className = "navitem";
        document.getElementById("serv").className = "navitem";
        document.getElementById("about").className = "navitem";
        document.getElementById("cont").className = "navitem";
        document.getElementById("home").style.marginLeft = "0px";
        document.getElementById("serv").style.marginLeft = "0px";
        document.getElementById("serv").style.paddingLeft = "100px";
        document.getElementById("tophomeid").style.transition = "all 2s";
        document.getElementById("home").style.transition = "all 2s";
        document.getElementById("serv").style.transition = "all 2s";
        document.getElementById("about").style.transition = "all 2s";
        document.getElementById("cont").style.transition = "all 2s";
        document.getElementById("home").style.color = "white";
        document.getElementById("serv").style.color = "black";
        document.getElementById("about").style.color = "black";
        document.getElementById("cont").style.color = "black";
    }
}

/*navbar scrolling*/
function home() {
	window.scroll({
    top: 0,
    behavior: 'smooth' 
	});
}
function serv() {
	window.scroll({
    top: 400,
    behavior: 'smooth' 
	});
}
function about() {
	window.scroll({
    top: 900,
    behavior: 'smooth' 
	});
}
function cont() {
	window.scroll({
    top: 1400,
    behavior: 'smooth' 
	});
}

/*changing the services img*/

function changeimg() {
	x=1.5; 
	if(document.getElementById('activeimg').style.display == 'inline' && document.getElementById('activeserv').className == 'activeservitem') 
	{
		//changing the img
		document.getElementById('activeimg').style.display = 'none';
		document.getElementById('notactiveimg1').style.display = 'inline';
		document.getElementById('notactiveimg2').style.display = 'none';
		document.getElementById('notactiveimg3').style.display = 'none';
		//changing the title
		document.getElementById('activeserv').className = 'servitem';
		document.getElementById('notactiveserv1').className = 'activeservitem';
		document.getElementById('notactiveserv2').className = 'servitem';
		document.getElementById('notactiveserv3').className = 'servitem';
	}
	else if(document.getElementById('notactiveimg1').style.display == 'inline' && document.getElementById('notactiveserv1').className == 'activeservitem')
	{
		//changing the img
		document.getElementById('activeimg').style.display = 'none';
		document.getElementById('notactiveimg1').style.display = 'none';
		document.getElementById('notactiveimg2').style.display = 'inline';
		document.getElementById('notactiveimg3').style.display = 'none';
		//changing the title
		document.getElementById('activeserv').className = 'servitem';
		document.getElementById('notactiveserv1').className = 'servitem';
		document.getElementById('notactiveserv2').className = 'activeservitem';
		document.getElementById('notactiveserv3').className = 'servitem';
	}
	else if(document.getElementById('notactiveimg2').style.display == 'inline' && document.getElementById('notactiveserv2').className == 'activeservitem')
	{
		//changing the img
		document.getElementById('activeimg').style.display = 'none';
		document.getElementById('notactiveimg1').style.display = 'none';
		document.getElementById('notactiveimg2').style.display = 'none';
		document.getElementById('notactiveimg3').style.display = 'inline';
		//changing the title
		document.getElementById('activeserv').className = 'servitem';
		document.getElementById('notactiveserv1').className = 'servitem';
		document.getElementById('notactiveserv2').className = 'servitem';
		document.getElementById('notactiveserv3').className = 'activeservitem';
	}
	else
	{
		//changing the img
		document.getElementById('activeimg').style.display = 'inline';
		document.getElementById('notactiveimg1').style.display = 'none';
		document.getElementById('notactiveimg2').style.display = 'none';
		document.getElementById('notactiveimg3').style.display = 'none';
		//changing the title
		document.getElementById('activeserv').className = 'activeservitem';
		document.getElementById('notactiveserv1').className = 'servitem';
		document.getElementById('notactiveserv2').className = 'servitem';
		document.getElementById('notactiveserv3').className = 'servitem';
	}
  setTimeout(changeimg, x*1000);
}


/*animated form*/

function fnlabel() {
	document.getElementById("fnlabel").style.marginBottom = '0px';
	document.getElementById("fnlabel").style.transition = "all 0.5s";
}

function lnlabel() {
	document.getElementById("lnlabel").style.marginBottom = '0px';
	document.getElementById("lnlabel").style.transition = "all 0.5s";
}

function elabel() {
	document.getElementById("elabel").style.marginBottom = '0px';
	document.getElementById("elabel").style.transition = "all 0.5s";
}

function plabel() {
	document.getElementById("plabel").style.marginBottom = '0px';
	document.getElementById("plabel").style.transition = "all 0.5s";
}

function talabel() {
	document.getElementById("talabel").style.marginBottom = '0px';
	document.getElementById("talabel").style.transition = "all 0.5s";
}
