var speed = 500;

var style = `body{color:white;\nfont-family:'Poppins',sans-serif;\nfont-size:1rem;\nbackground-color:#ff7a7a;\nbackground-image:url('https://dl.dropbox.com/s/yrdk3o6dh9q57yt/bg-intro-mobile.png?raw=1');\ntext-align:center}\n.container{padding:100px 20px}\n.title{font-weight:700}\n.btn-try{margin:80px auto 30px;\nbackground-color:#5f54a4;\ncolor:#fff;\nbox-shadow:0 8px 0 0 #b54c4d87;\nfont-weight:500;\nfont-size:1rem;\npadding:7% 15%}\n.btn-try:hover{background-color:#8c7fdc;color:white}.form{background:#fff;\npadding:20px;\nborder-radius:10px;\nmargin-bottom:50px;\nbox-shadow:0 7px #00000036}\n.form div{text-align:right}\n.form-control{margin:15px auto;\npadding:25px 15px;\nfont-weight:500}\ninput::placeholder{color:#3d3b48}\n.btn-claim{background-color:#38cb8b;\nfont-size:1rem;\nfont-weight:500;\ncolor:#fff;\nbox-shadow:0 4px #1cb774}\n.btn-claim:hover{color:white;background-color:#68e2ad}.terms-condition{color:#b8b5d3}\n.terms-services{color:#ff7a7a;\nfont-weight:600}\n.form-control.is-invalid,.was-validated .form-control:invalid{background-image:url('https://dl.dropbox.com/s/wfpgvq3ocprw4sc/icon-error.svg?raw=1')}\n.attribution{font-size:11px}\n.attribution a{text-decoration:underline;\ncolor:#fff;\nline-height:1.5}\n@media(min-width:800px){body{background-image:url('https://dl.dropbox.com/s/8q3zsg9f97puvg1/bg-intro-desktop.png?raw=1')}.title{font-size:3rem}#intro{text-align:left;margin:auto}#cta{margin:auto}.container{padding:5%}}`;
var rules = style.split('\n');
var stylebox;
$(document).ready(function () {
  stylebox = $("body style");
  alert("Styling Started\nYou can edit Speed(milliseconds per character) on js 1st line");
  setTimeout(() => alert("Styling Finished"), rules.length * speed);
  for (var i = 0; i < rules.length; i++) {
    setTimeout(addStyle, i * speed, i);
  }
})

function addStyle(i) {
  stylebox.append(rules[i]);
}
