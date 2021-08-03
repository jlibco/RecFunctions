/*
Copyright 2021 RecFunctions Josh T.
Javascipt library concerning Math, DOM modification, and JSON, and css vars.


Also Known as RedRabbit on KhanAcademy @redrabbit208 

Auto loads popular scripts.

*/

//var scr=document.createElement("script");
//scr.src="https://cdn.jsdelivr.net/processing.js/1.4.8/processing.min.js";
//document.body.appendChild(scr);
try{
/*Load jQuery*/
if(window.thefonts===undefined){
window.thefonts=["Roboto:wght@100"]; 
}
 var thebody=document.querySelectorAll("body");
    
  
    var jqueryScript=document.createElement("script");
    
    jqueryScript.src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
    
    
    var h=thebody[0];
   h.appendChild(jqueryScript)
   /*Load Google Icons*/

 
  var thehead=document.querySelectorAll("head");
    
  
    var linkScript=document.createElement("link");
    
    linkScript.href="https://fonts.googleapis.com/icon?family=Material+Icons";
    linkScript.rel="stylesheet";
    
    var h=thehead[0];
   h.appendChild(linkScript)
 
 /*Processing JS */
 var thebody=document.querySelectorAll("body");
    
  
    var pjsScript=document.createElement("script");
    
    pjsScript.src="https://cdn.jsdelivr.net/gh/processing-js/processing-js@1c1d58d7dfddfdbdc351e0160496078598a0b943/processing.js";
    
    
    var h=thebody[0];
   h.appendChild(pjsScript)
  /*Web Font */
 var thebody=document.querySelectorAll("body");
    
  
    var fontScript=document.createElement("script");
    
    fontScript.src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js";
    
    
    var h=thebody[0];
   h.appendChild(fontScript)
 
 
  var thebody=document.querySelectorAll("body");
    
  
    var fontScript1=document.createElement("link");
    
    fontScript1.rel="preconnect";
    fontScript1.href="https://fonts.googleapis.com";
    
    var h=thebody[0];
   h.appendChild(fontScript1)
 
 var thebody=document.querySelectorAll("body");
    
  
    var fontScript2=document.createElement("link");
    
    fontScript2.rel="preconnect";
    fontScript2.href="https://fonts.gstatic.com";
    
    var h=thebody[0];
   h.appendChild(fontScript2)
 
 
 var a="https://fonts.googleapis.com/css2?family=";
 for(var i=0;i<thefonts.length;i++){
  a=a+thefonts[i]+"&"
  
 }
 
 
  a=a+"display=swap";
 var thebody=document.querySelectorAll("body");
    
  
    var fontScript3=document.createElement("link");
    
    fontScript3.rel="stylesheet";
    fontScript3.href=a;
    
    var h=thebody[0];
   h.appendChild(fontScript3)
 
 
 
   
/*Set autovars*/
function autoVars(){
 var elementTags=["img","div","p","br","html","body","a","script","h1","h2","h3","h4","h5","h6","span","button","canvas","dl","dt","svg","iframe","input","meta","link","title","output","var"];
    for(var i=0;i<elementTags.length;i++){
     var ele=elementTags[i];
    window[ele]=document.querySelectorAll(ele);
    }   


 var all=document.querySelectorAll("*");
 
 for(var i=0;i<all.length;i++){
 var ele=all[i];

 var eleC=ele.className;
  var eleCC=eleC.split(" ");
  if(eleC.length>1){
 eleC=eleC.split(" ");
  }
  else if(eleC.length===1){
  eleC=[eleC];
  }
  else if(eleC.length===0){
  continue;
  }

     var a=ele.id;
 window[a]=ele;
 for(var j=0;j<eleC.length;j++){
    var eleC1=eleC[j];
   
     
     var wE=window[eleC1];
 if(wE===undefined || wE===null || wE===NaN ||typeof wE!=="object"){
    wE=[];
 wE.push(ele);
 }
 else if(typeof wE==="object"){
 console.log(wE);
 wE.push(ele);    
 }
 }
     
 }
};

  
        var root = document.querySelector(':root'); 
 var body=document.querySelector("body");
     
 var xMouse=0;
 var yMouse=0;
    
    var doIt=function(e){
       // alert("")
    xMouse=e.clientX;
    yMouse=e.clientY
    };
    body.addEventListener("mousemove",doIt);
    
    
var thediv208 = document.createElement("div");
var jns = [];
var jntarget = -1;

function deg(x) {
    return x*(Math.PI /180);
};

function rad(x) {
    return x*(180/Math.PI);
};

function getId(a) {
    var b = document.getElementById(a);
    return b;
};

function getClass(a) {
    var b = document.getElementsByClassName(a);
    return b;
};

function getTag(a) {
    var b = document.getElementsByTagName(a);
    return b;
};

function getQuery(a) {
    var b = document.querySelector(a);
    return b;
};

function getQueryAll(a) {
    var b = document.querySelectorAll(a);
    return b;
};

function newEle(a) {
    var b = document.createElement(a);
    return b;
};

function setVal(a, b,c) {
    if (a === "var") {
        window[b]=c;
    } else {
         a[b]=c;
    }
};
//by query
function CopyClip(x) {
    /* Get the text field */
    var copyText = document.querySelector(x);

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");
};


function sEllipse(x, y, w, h, st) {
    thediv208.innerHTML = thediv208.innerHTML + '<svg height=' + h * 2 + 10 + ' width=' + w * 2 + 10 + ' style="position:absolute; left:' + x + 'px; top:' + y + 'px; ">  <ellipse cx="0" cy="0" rx=' + w + ' ry=' + h + ' style=' + st + ' /></svg> ';
    /*
    var ell=document.createElement("svg");
    var a="1000";
    var b="1000";
    ell.width=a;
    ell.height=b;
        
    var ell2=document.createElement("ellipse");
       console.log(x);
    ell2.cx=x;
    ell2.cy=y;
    ell2.rx=w;
    ell2.ry=h;
        console.log(ell2.x);
    ell2.style="fill:yellow";
        
    var body=document.querySelector("body");
    ell.appendChild(ell2);
    body.appendChild(ell);
    */


};

function sRect(x, y, w, h, st) {
    thediv208.innerHTML = thediv208.innerHTML + '<svg height=' + (h * 2 + 10) + ' width=' + (w * 2 + 10) + ' style="position:absolute; left:' + x + 'px; top:' + y + 'px; ">  <rect width=' + w + ' height=' + h + ' style=' + st + ' /></svg> ';
};

function sPoly(x, y, w, h, p, st) {
    var pointsarr = p;
    var b = "";
    var c = "";
    for (var i = 0; i < pointsarr.length; i = i + 2) {
        c = c + pointsarr[i] + "," + pointsarr[i + 1] + " ";
        b = b + c;
        c = "";
    }

    var po = pointsarr.join(" ");
    thediv208.innerHTML = thediv208.innerHTML + '<svg height=' + (h * 2 + 10) + ' width=' + (w * 2 + 10) + ' style="position:absolute; left:' + x + 'px; top:' + y + 'px; ">  <polygon points=' + c + ' style=' + st + ' /></svg> ';
};

function norm(aNumber, low, high) {
    return (aNumber - low) / (high - low);
};

function sq(aNumber) {
    return aNumber * aNumber;
};

function mag(a, b, c) {
    if (c) {
        return Math.sqrt(a * a + b * b + c * c);
    }

    return Math.sqrt(a * a + b * b);
};


function min(x) {
    return Math.min(x);
};

function max(x) {
    return Math.max(x);
};

function noise(x, y, z) {
    if (noiseProfile.generator === undefined) {
        // caching
        noiseProfile.generator = new PerlinNoise(noiseProfile.seed);
    }
    var generator = noiseProfile.generator;
    var effect = 1,
        k = 1,
        sum = 0;
    for (var i = 0; i < noiseProfile.octaves; ++i) {
        effect *= noiseProfile.fallout;
        switch (arguments.length) {
            case 1:
                sum += effect * (1 + generator.noise1d(k * x)) / 2;
                break;
            case 2:
                sum += effect * (1 + generator.noise2d(k * x, k * y)) / 2;
                break;
            case 3:
                sum += effect * (1 + generator.noise3d(k * x, k * y, k * z)) / 2;
                break;
        }
        k *= 2;
    }
    return sum;

};

function sign(x) {
    return Math.sign(x);
};

function abs(a) {
    return Math.abs(a);
};

function map(value, istart, istop, ostart, ostop) {
    return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
}

function pow(a, b) {
    return Math.pow(a, b);
};

function floor(a) {
    return Math.floor(a);

};

function ciel(a) {
    return Math.ceil(a);
};

function sqrt(x) {
    return Math.sqrt(x);
};

function cbrt(x) {
    return Math.cbrt(x);
};

function round(a) {
    return Math.round(a);
};

function random(a, b) {
    var c = b - a;
    var mr = Math.random() * c + ((b + a) / 2) - c / 2;
    return mr;
};


function sin(angle) {
    return Math.sin(angle);
};

// A cosine function that converts from radians to degrees.
function cos(angle) {
    return Math.cos(angle);
};

function tan(angle) {
    return Math.tan(angle);
}
// An atan2 function.
function atan(x) {
    return Math.atan(x);
};

function asin(x) {
    return Math.asin(x);
};

function acos(x) {
    return Math.acos(x);
};

function atan2(x, y) {
    return Math.atan2(x, y);
};
// Returns a number from a certain range.
function lerp(num1, num2, amount) {
    return num1 + (num2 - num1) * amount;
};

// constrains a number to a certain range.
function constrain(num, min, max) {
    return Math.max(Math.min(num, max), min);
};

// Finds the distance between two points.
function dist(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
};

function log(x1, x2) {
    var a = Math.log(x1);
    var b = Math.log(x2);
    return b / a;
};
   
 function nroot(x1,x2){
  return log(x2,x1);   
 };

  function oparr(x1,x2){
  for(var i=0;i<x1.length;i++){
   var a=x1[i];
  x2(i);
    
  }
  return x1;
  };
  
Array.prototype.each=function(cal){
for(var i=0;i<this.length;i++){
cal(i);
}
};
    
String.prototype.each=function(cal){
for(var i=0;i<this.length;i++){
cal(i);
}
};


    
var JSONp = function(arg) {
    var a = [];
    for (var i = 0; i < arg.length; i++) {
        a.push(JSON.parse(arg[i]));
    }
    return a;
};
var JSONs = function(arg) {
    var a = [];
    for (var i = 0; i < arg.length; i++) {
        a.push(JSON.stringify(arg[i]));
    }
    return a;
};

var Encode = function(x) {
    var rand = [];
    for (var i = 0; i < 1000; i++) {
        rand.push(round(random(0, 20)));
    }

    var randomS = ["/", "]", "!", "=", "-", ".", ">", "<"];
    var button1 = getId("buttons");

    var apples = Math.round(random(0, 100));

    //  console.log(getQuery("body"));
    var input1 = x;
    var div1 = document.querySelector("#mydiv");

    var input1val = input1;
    var input1valc = input1val;
    var cc = "";
    var b = "";
    for (var i = 0; i < input1valc.length; i++) {
        var a = input1valc.charCodeAt(i);

        a = a + apples;

        var c = String.fromCharCode(a);

        var d = c.charCodeAt(0) + rand[i];


        //console.log(rand[i]);
        if (rand[i] < 70) {
            cc = "@";

        } else if (rand[i] <= 200) {
            cc = "!";
        }


        b = b + String.fromCharCode(d) + cc + rand[i] + "/";

        if (rand[i] < 100) {
            var bana = round(random(0, 10));
            if (bana < 50) {
                // b=b+"~";
            } else if (bana < 50) {
                // b=b+"`";    
            }
        }

    }

    if (input1val.length > 0) {
        b = b + apples;
    }
    return b;




};
var Decode = function(x) {
    var b = "";
    var input1 = x;
    var div1 = document.getElementById("mydiv");
    var input1val = input1;
    var input1valc = input1val;

    var a = input1valc.split("/");
    for (var i = 0; i < a.length; i++) {
        if (i === a.length - 1) {
            continue;
        }

        var b = a[i][0];

        b = b.charCodeAt(0);

        var c = a[i];
        c = c.toString();

        c = c.replace(new RegExp("(.@|.!)", "g"), "");
        //c=c.replace(/~/g,"");

        //console.log(parseInt(c));

        b = parseInt(b) - parseInt(a[a.length - 1]) - parseInt(c);
        //console.log(b);
        b = String.fromCharCode(b);

        a[i] = b;
    }
    a.splice(a.length - 1, 1);
    a = a.join('');

    return a;

};
function Defined(x){
if(x===undefined || x===NaN || x===null){
return false;  
}
else{
return true;  
}
};






// Create a function for getting a variable value
function getRoot(a) {
    // Get the styles (properties and values) for the root
    var rs = getComputedStyle(root);
    // Alert the value of the --blue variable
    return rs.getPropertyValue(a);
};

// Create a function for setting a variable value
function setRoot(a, b) {
    // Set the value of variable --blue to another value (in this case "lightblue")
    root.style.setProperty(a, b);
    return b;
};


setRoot("--darkblue", "rgb(0, 10, 122)");
Element.prototype.addAni=function(){
  
};
  
function Has(a,b){
 if(typeof b!=="object"){
  b=[b];
 }
 
 var c=false;
 for(var i=0;i<b.length;i++){
 if(a.includes(b[i])===false){
   
 }
 else if(a.includes(b[i])===true){
 c=true;  
 }
 }

return c;  
}
Element.prototype.cleanClass=function(){
var b=this.className.split(" ");
for(var i=0;i<b.length;i++){
if(b[i]===""){
b.splice(i,1);  
}
}
b=b.join("");
return b;
};
Element.prototype.addClass=function(x){
if(this.className===""){
this.className=this.className+x;
}
else{
this.className=this.className+" "+x;  
}
};
Element.prototype.removeClass=function(x){

this.className=this.className.replace(x,"");  
var a=this.className.split(" ");
  for(var i=0;i<a.length;i++){
  if(a[i]===""){
  a.splice(i,1);  
  }
  else{
    
  }
  }
  a=a.join("");
  this.className=a;
};
  Element.prototype.getClass=function(x){
var a=this.className;
    a=a.split(" ");
    
    return a;
};
function MatchStrings(a, b, m) {
    var a1 = a;
    var b1 = b;
    var finalStr = "";
    var subStr2 = "";
    var subStr = "";

    while (b1.length > a1.length) {
        a1 = a1 + " ";
    }
    while (a1.length > b1.length) {
        b1 = b1 + " ";
    }

    
    if (m === "sub") {
        for (var i = 0; i < a1.length; i++) {
            subStr = a1[i];
            subStr2 = b1[i];

            if (subStr === " ") {
                finalStr = finalStr + " ";
            }
            else if (subStr2 === " ") {
                finalStr = finalStr + subStr;
            }
            else if (subStr === subStr2) {
                finalStr = finalStr + " ";
            } 
           
            else {
                finalStr = finalStr + subStr;
            }

            subStr = "";
            subStr2 = "";
        }
        return finalStr;
    }
    if (m === "add") {
        for (var i = 0; i < a1.length; i++) {
            subStr = a1[i];
            subStr2 = b1[i];

            if (subStr !== " " && subStr2===" ") {
                finalStr = finalStr + subStr;
            }
            else if (subStr2 !== " " && subStr===" ") {
                finalStr = finalStr + subStr2;
            }
            else if (subStr===" " && subStr2===" ") {
                finalStr = finalStr + " ";
            } 
           
            else {
                finalStr = finalStr + subStr;
            }

            subStr = "";
            subStr2 = "";
        }
        return finalStr;
    }

};
    
function RegExps(a,b,c){
var str=a;
var reg=b;
var final="";
final=str[c](reg);
  /*
if(c==="match"){
final=str.match(reg);   
}
else if(c==="search"){
final=str.search(reg);   
}
else if(c==="replace"){
final=str.replace(reg);    
}*/
   
return final;
};

function Animate(name,styles){
var style=document.querySelector("style");
if(style===undefined || style===null || style===NaN || style===""){
var styleSheet21 = document.createElement("style");
}
else{
var styleSheet21 =style;
}
// Adding The Keyframes
styleSheet21.innerHTML=styleSheet21.innerHTML+"@keyframes "+name+"{"+styles+"}";
if(style===undefined || style===null || style===NaN || style===""){
body.appendChild(styleSheet21)
}

}



getQuery("body").appendChild(thediv208);
 
 
  var Canvas=function(x,y){
    
     var programCode = function(processingInstance) {
    with (processingInstance) {
      eval(y)
    }};

  // Get the canvas that ProcessingJS will use
  var canvas = document.querySelector(x); 
  // Pass the function to ProcessingJS constructor
  var processingInstance = new Processing(canvas, programCode); 
    };
 
//var Jn;
var jn;
var jnId;

function Jn(id, a, b, c, d, e, f, g) {
    this.id = id;
    this.sel = document.querySelectorAll(a);
    this.texts = [];
    this.htmls = [];
    this.actions = [];
    this.csss = [];
    this.atts = [];
    this.a = a;
};

Jn.prototype.g = function() {
    this.actions.push(this.id + " g returned");
    if (this.a[0] === "#") {
        return this.sel[0];
    } else {
        return this.sel;
    }
};

Jn.prototype.text = function(x) {
    if (x === undefined) {
        this.texts = [];
        for (var i = 0; i < this.sel.length; i++) {
            this.texts.push(this.sel[i].textContent);
        }
        this.actions.push(this.id + " text returned as " + this.texts);
        return this.texts;
    } else if (x !== undefined) {
        for (var i = 0; i < this.sel.length; i++) {
            this.sel[i].textContent = x;
        }
        this.actions.push(this.id + " text changed to do with " + x);
    }
};

Jn.prototype.eventL = function(x, y) {
    this.sel.addEventListener(x, y);
    this.actions.push(this.id + " eventlistener added ");
};
Jn.prototype.con = function() {
    console.log("Yey");


};
Jn.prototype.act = function() {
    this.actions.push(this.id + " act returned ");

    return this.actions;
};
Jn.prototype.att = function(x, y) {
    if (y !== undefined) {
        this.actions.push(this.id + " attr changed from " + x + " to " + y);

        for (var i = 0; i < this.sel.length; i++) {
            (this.sel[i])[x] = y;
        }
    } else {
        this.atts = [];
        for (var i = 0; i < this.sel.length; i++) {
            this.atts.push((this.sel[i])[x]);
        }

        this.actions.push(this.id + " att returned as " + this.atts);
        return this.atts;
    }
};
Jn.prototype.css = function(x, y) {
    if (y !== undefined) {
        this.actions.push(this.id + " css changed from " + x + " to " + y);
        for (var i = 0; i < this.sel.length; i++) {
            (this.sel[i]).style[x] = y;
        }
    } else {
        this.csss = [];
        for (var i = 0; i < this.sel.length; i++) {
            this.csss.push((this.sel[i]).style[x]);
        }

        this.actions.push(this.id + " css returned as " + this.csss);
        return this.csss;
    }
};


Jn.prototype.html = function(x) {
    if (x === undefined) {
        this.htmls = [];
        for (var i = 0; i < this.sel.length; i++) {
            this.htmls.push(this.sel[i].innerHTML);
        }
        this.actions.push(this.id + " html returned as " + this.htmls);
        return this.htmls;
    } else if (x !== undefined) {
        for (var i = 0; i < this.sel.length; i++) {
            this.sel[i].innerHTML = x;
        }
        this.actions.push(this.id + " html changed to do with " + x);
    }

};

var jnId = function(x) {

    // console.log("D"+jns);
    var a = "not def";
    for (var i = 0; i < jns.length; i++) {
        if (x === jns[i].id) {
            a = i;
        }
    }
    //console.log("B"+a);
    return a;
};


var jn = function(id, a, b, c) {
    var useable = true;
    for (var i = 0; i < jns.length; i++) {
        if (id === jns[i].id) {
            useable = false;
        }
    }

    if (useable === true) {
        jns.push(new Jn(id, a, b, c));
        jntarget = jnId(id);
    } else if (useable === false) {
        jntarget = jnId(id);
    }
    //console.log(jns[jntarget]);
    //console.log(jntarget);
    return jns[jntarget];
};
 
 
function Ready(x){
window.setTimeout(function(){
x();
},2);
}
}
catch(e){
 var err=new Error(e);
console.log("RecFunction: "+err);    
}
