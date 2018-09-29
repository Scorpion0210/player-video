var lms = true;

if (lms)
{
	//Atribui o objeto pipwerks.SCORM na variavel scorm
	var scorm = pipwerks.SCORM;
	var trace = pipwerks.UTILS.trace;
	//DefiniÃ§Ã£o da versÃ£o do SCORM utilizada
	scorm.version = "1.2";
	//Inicia a conexÃ£o com o SCORM
	scorm.init();

	//Verifica se conexÃ£o com LMS ainda estÃ¡ ativa
	window.onunload = window.onbeforeunload = function()
	{
		if(scorm.connection.isActive)
		{
			trace("Finalizando conexÃ£o no Unload");
			fecharJanela();
		}
	}
}

function fecharJanela()
{
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE");
	gravaSCORM();

	if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
	{
		//alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
		window.open('','_self','');
		window.close();
	}
	else  // If another browser, return 0
	{
		//alert('otherbrowser');
		var tab = window.open(window.location, "_self");
		var tab2 = window.open(window.location, "_top");
		var tab3 = window.open("", "_self");
		tab.close();
		tab2.close();
		tab3.close();
	}
}

function gravaSCORM() {
	scorm.data.set("cmi.core.lesson_status", "completed");
	scorm.data.set("cmi.core.score.raw", 100);
	scorm.data.set("cmi.core.score.min", 0);
	scorm.data.set("cmi.core.score.max", 100);
	scorm.save();
	scorm.quit();
}
