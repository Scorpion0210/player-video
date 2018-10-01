var lms = false;
var loc = 0;
var scorm = null;

function inicia() {
	lms = pipwerks.SCORM.init() ? true : false;

	if (this.lms) {
    console.log("API SCORM ON");
		//Atribui o objeto pipwerks.SCORM na variavel scorm
		scorm = pipwerks.SCORM;
		//Definicao da versao do SCORM utilizada
		scorm.version = "1.2";
    scorm.data.set("cmi.core.score.min", "0");
    scorm.data.set("cmi.core.score.max", "100");

    // faz o video retornar de onde parou
    if (getLocation() > 1) {
      vid.currentTime = loc;
    }

		//Verifica se conexao com LMS ainda esta ativa
		window.onunload = window.onbeforeunload = function()
		{
			if (scorm.connection.isActive) {
				console.log("Finalizando conexao no Unload");
				scorm.save();
        fecharJanela();
			}
		}
	} else {
    console.log("API SCORM OFF");
  }
}

function setScore(score) {
  scorm.data.set("cmi.core.score.raw", score.toString());
}

function setLocation(location) {
  scorm.data.set("cmi.core.lesson_location", location.toString());
}

function getLocation() {
  loc = scorm.data.get('cmi.core.lesson_location');
  return parseInt(loc);
}

function setLessonStatus(status) {
  scorm.data.set("cmi.core.lesson_status", status.toString());
}

function saveScorm() {
  scorm.save();
}

function fecharJanela() {
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE");

	if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) { // If Internet Explorer, return version number
		//alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
		window.open('','_self','');
		window.close();
	} else { // If another browser, return 0
		//alert('otherbrowser');
		var tab = window.open(window.location, "_self");
		var tab2 = window.open(window.location, "_top");
		var tab3 = window.open("", "_self");
		tab.close();
		tab2.close();
		tab3.close();
	}
}
