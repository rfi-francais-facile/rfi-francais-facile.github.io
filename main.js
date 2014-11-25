function update_audio(horaire) {
    var audioplayer = document.getElementById("audioplayer");
    var h = horaire || 20;
    var src = "http://telechargement.rfi.fr.edgesuite.net/rfi/francais/audio/journaux/r001/journal_francais_facile_" + h + "h00_-_"+ h + "h10_tu_";

    var today = new Date();
    if (today.getUTCHours() < h+2 || (today.getUTCHours() == h+2 && today.getUTCMinutes() < 20)) {
        today -= 3600 * 24 * 1000;
        today = new Date(today);
    }
    src += today.getFullYear();
    if (today.getMonth() < 9) {
        src += "0";
    }
    src += today.getMonth()+1;
    
    if (today.getDate() < 10) {
        src += "0";
    }
    src += today.getDate();
    
    src += ".mp3";
    console.log(src);
    if (audioplayer.src != src) {
        audioplayer.src = src;    
    }
}

function load() {
    console.log("LOAD");
    update_audio();
    var audioplayer = document.getElementById("audioplayer");
    audioplayer.addEventListener("error", function () {
        if (audioplayer.src.indexOf("20h00_-_20h10_tu_") != -1) {
            console.log("tentar horario de verao/inverno");
            update_audio(21);
        }
    });
    
}

window.addEventListener("focus", load);
document.addEventListener("DOMContentLoaded", load);