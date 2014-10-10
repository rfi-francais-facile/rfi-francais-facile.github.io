function update_audio() {
    var audioplayer = document.getElementById("audioplayer");
    var src = "http://telechargement.rfi.fr.edgesuite.net/rfi/francais/audio/journaux/r001/journal_francais_facile_20h00_-_20h10_tu_";
    var today = new Date();
    console.log(today.getUTCHours());
    if (today.getUTCHours() < 20 || (today.getUTCHours() == 20 && today.getUTCMinutes() < 20)) {
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

window.addEventListener("focus", update_audio);
document.addEventListener("DOMContentLoaded", update_audio);