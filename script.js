const div = document.getElementById("form"),
v = document.getElementById("v");

function send() {
    if (user.value != "" && pass.value != "") {
        setCookie("value", v.value, 60)
        var url = "response.html?val=" + encodeURIComponent(v); 
        window.location.href = url;
    }
}

function send2(v) {
    if (u != "" && p != "") {
        var url = "response.html?val=" + encodeURIComponent(v);
        window.location.href = url;
    }
}

function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	let expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i < ca.length; i++) {
	  let c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
  }

  function checkCookie() {
      let vv = getCookie("value");
      if (u != "" && p != "") {
          div.style.display = "none";
          send2(vv);
      } else {
          div.style.display = "";
      }
  }