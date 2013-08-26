
<!DOCTYPE html>
<!--HTML5 doctype-->
<html>
    <head>
        <meta http-equiv="Content-type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <META HTTP-EQUIV="Pragma" CONTENT="no-cache">
        <script type="text/javascript" charset="utf-8" src="http://localhost:58888/_appMobi/appmobi.js"></script>

        <script type="text/javascript" language="javascript">
            // This event handler is fired once the AppMobi libraries are ready
            function onDeviceReady() {
                //use AppMobi viewport to handle device resolution differences if you want
               
                //hide splash screen now that our app is ready to run
                AppMobi.device.hideSplashScreen();
                setTimeout(function(){
                    $.ui.launch();
                },50);
            }

            //initial event handler to detect when appMobi is ready to roll
            document.addEventListener("appMobi.device.ready",onDeviceReady,false);
        </script> 

        <script src="js/appframework.ui.min.js"></script>
        <script>
            $.ui.autoLaunch=false;
            $.ui.useOSThemes=false;
            $.ui.blockPageScroll();
            $(document).ready(function(){
                if($.ui.useOSThemes&&!$.os.ios&&$("#afui").get(0).className!=="ios")
                $("#afui").removeClass("ios");
            });
        </script>
        <link href="css/icons.css" rel="stylesheet" type="text/css"></link>
        <link href="css/af.ui.css" rel="stylesheet" type="text/css"></link>
    </head>
    <body>
        <div id="afui" class='win8'>
          
<div id="header"></div>
          
<div id="content" style="">
	          
	<div class="panel" title="Titulares Paraguay" data-nav="nav_0" id="page_0" selected="selected" data-appbuilder-object="page" style="">
		<ul class="list" data-appbuilder-object="list" data-position="static" style="z-index: 0;">
			<li>
				<a href="page1">ABC Color</a>
			</li>
			<li>
				<a href="#">CID</a>
			</li>
			<li>
				<a href="#">Cronica</a>
			</li>
			<li>
				<a href="#">Ultima Hora</a>
			</li>
			<li>
				<a href="#">Paraguay.com</a>
			</li>
			<li>
				<a href="#">Judiciales.net</a>
			</li>
			<li>
				<a href="#">La Nacion</a>
			</li>
			<li>
				<a href="#">MECDigital</a>
			</li>
			<li>
				<a href="#">Ñanduti</a>
			</li>
			<li>
            <a href="#">Hoy</a>
            </li>
            <li>
				<a href="#">ADN Digital</a>
			</li>
		</ul>
	</div>
</div>
          
<div id="navbar">
	     <a href="#page_0" class="icon home">Home</a>     
</div>
        
<header id="header_0" data-appbuilder-object="header">
	<a id="backButton" href="#" class="button back" style="visibility: visible; ">Back</a>
	<h1 id="pageTitle" class="">
		test
	</h1>
</header>
<nav id="nav_0" data-appbuilder-object="nav">
	<h1>
		Atrás
	</h1>
</nav>
        </div>
    </body>
</html>
