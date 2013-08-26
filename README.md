
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
	          
	<div class="panel" title="ABC Color" data-nav="nav_0" id="page_0" selected="selected" data-appbuilder-object="page" style="">
		<div class="text_item" data-appbuilder-object="text" data-position="static">
			<div id="rssincl-box-container-752224">
				<div id="rssincl-box-752224">
					        
					<div class="rssincl-head">
						        
						<p class="rssincl-title">
							                ABC Digital - Último Momento                
						</p>
						    
					</div>
					    
					<div class="rssincl-content">
						            
						<div class="rssincl-entry">
							            
							<p class="rssincl-itemtitle">
								<a href="http://www.abc.com.py/nacionales/un-domingo-con-mucho-frio-610577.html" target="_blank">Un domingo con mucho frío</a>
							</p>
							            
							<div class="rssincl-itemdesc">
								La Dirección de Meteorología anuncia para este domingo uno delos días más fríos de la semana, con una mínima de 5 grados ymáxima de 9 grados.
							</div>
							            
							<div class="rssincl-clear"></div>
							        
						</div>
						            
						<div class="rssincl-entry">
							            
							<p class="rssincl-itemtitle">
								<a href="http://www.abc.com.py/edicion-impresa/suplementos/abc-revista/50-anos-de-sentimiento-609954.html" target="_blank">50 años de sentimiento</a>
							</p>
							            
							<div class="rssincl-itemdesc">
								La guarania, sin duda alguna, es uno de los géneros másrománticos de nuestro folclore. Lo dice el maestro FlorentínGiménez al recordar los 50 años de la guarania y a su creador, JoséAsunción Flores.
							</div>
							            
							<div class="rssincl-clear"></div>
							        
						</div>
						            
						<div class="rssincl-entry">
							            
							<p class="rssincl-itemtitle">
								<a href="http://www.abc.com.py/edicion-impresa/sociales/abc-en-sociedad-610466.html" target="_blank">ABC EN SOCIEDAD</a>
							</p>
							            
							<div class="rssincl-itemdesc"></div>
							            
							<div class="rssincl-clear"></div>
							        
						</div>
						            
						<div class="rssincl-entry">
							            
							<p class="rssincl-itemtitle">
								<a href="http://www.abc.com.py/edicion-impresa/sociales/acosta-talavera--gonzalez-morales-610464.html" target="_blank">Acosta Talavera- González Morales</a>
							</p>
							            
							<div class="rssincl-itemdesc">
								Durante una emotiva ceremonia en las Terrazas del Bosque deCarmelitas Center, se juraron amor eterno Almendra Acosta Talaveray David González Morales.
							</div>
							            
							<div class="rssincl-clear"></div>
							        
						</div>
						            
						<div class="rssincl-entry">
							            
							<p class="rssincl-itemtitle">
								<a href="http://www.abc.com.py/edicion-impresa/politica/activistas-denuncian-retroceso-en-ddhh-610503.html" target="_blank">Activistas denuncian retroceso en DD.HH.</a>
							</p>
							            
							<div class="rssincl-itemdesc">
								Ayer de siesta, una comitiva de la Coordinadora de DerechosHumanos del Paraguay (Codehupy) visitó el destacamento de TacuatíPoty, a raíz de que consideran que la modificación de la Ley 1337de Defensa Nacional y de Seguridad Interna del país “significó unretroceso en el proceso democrático”.
							</div>
							            
							<div class="rssincl-clear"></div>
							        
						</div>
						            
					</div>
					    
					<!-- RSSbox id#752224, generated 2013-08-25 12:24:11 powered by RSSinclude.com -->
				</div>
			</div>
			<script type="text/javascript">
				(function() {  var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;  s.src = 'http://output65.rssinclude.com/output?type=asyncjs&id=752224&hash=d3040e1d499efddc51bcd0c410e06949';  document.getElementsByTagName('head')[0].appendChild(s);})();
			</script>
		</div>
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
		Side Menu
	</h1>
	     
</nav>
        </div>
    </body>
</html>
