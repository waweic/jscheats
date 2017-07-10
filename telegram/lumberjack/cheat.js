function sendscore(score) {
	url = window.location.href;
	data = encodeURIComponent(url.split("#")[1].split("&")[0])
        var e = new XMLHttpRequest,
            d = ["data=" + data, "score=" + score.toString()];
        e.open("POST", "/api/setScore", !0);
        e.send(d.join("&"))
    }
    
sendscore(500);
