/*
 * Copyright 2021 RecJavascript Libraries Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY OTHER KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */


/*
Javascipt library concerning Math, DOM modification, and JSON, and css vars.

Created by Josh T.

Also Known as Nemo on KhanAcademy @nemoking 

Auto loads popular scripts.

*/

//var scr=document.createElement("script");
//scr.src="https://cdn.jsdelivr.net/processing.js/1.4.8/processing.min.js";
//document.body.appendChild(scr);
try {

    function Setup(x) {

        thefonts = x.fonts;

    }

var LoadScript=function(src,where){
var thebody = document.querySelectorAll("body");
 var thehead = document.querySelectorAll("head");
 var theScript = document.createElement("script");   
    theScript.src=src;
    document[where].appendChild(theScript);
};


    /*Load jQuery*/

LoadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js","body");
    
    /*Load Moment JS*/

LoadScript("https://rawgit.com/moment/moment/2.2.1/min/moment.min.js","body");
   

    /*Load Three.JS*/

LoadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/99/three.min.js","body");
    
    /*Load Pixi JS*/

LoadScript( "https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.1.3/pixi.min.js","body");
    
    /*Load Vue JS*/

LoadScript("https://cdn.jsdelivr.net/npm/vue@2","body");
    
    /*Load D3 JS*/

LoadScript("https://cdn.jsdelivr.net/npm/d3@7","body");
    
    /*Load ChartJS*/

LoadScript("https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js","body");

    /*Load Math.js*/

LoadScript("https://cdnjs.cloudflare.com/ajax/libs/mathjs/9.4.4/math.min.js","body");
    
    /*Load Anime.js*/
LoadScript("https://cdn.jsdelivr.net/npm/animejs@3.0.1/lib/anime.min.js","body");
    
        /*Load p5.js*/

    
    /*Load Google Icons*/




    var thehead = document.querySelectorAll("head");


    var linkScript = document.createElement("link");

    linkScript.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
    linkScript.rel = "stylesheet";

    var h = thehead[0];
    h.appendChild(linkScript)
    /*Popper JS*/
    var thebody = document.querySelectorAll("body");


    var pjsScript = document.createElement("script");

    pjsScript.src = "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js";


    var h = thebody[0];
    h.appendChild(pjsScript)
    /*Bootstrap css*/
    var thehead = document.querySelectorAll("head");


    var linkScript = document.createElement("link");

    linkScript.href = "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";
    linkScript.rel = "stylesheet";

    var h = thehead[0];
    h.appendChild(linkScript)
    /*Bootstrap JS*/
    var thebody = document.querySelectorAll("body");


    var pjsScript = document.createElement("script");

    pjsScript.src = "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js";


    var h = thebody[0];
    h.appendChild(pjsScript)



    /*Processing JS */
    var thebody = document.querySelectorAll("body");


    var pjsScript = document.createElement("script");
pjsScript.src = "https://cdnjs.cloudflare.com/ajax/libs/processing.js/1.6.6/processing.min.js";
    
    //pjsScript.src = "https://cdn.jsdelivr.net/gh/processing-js/processing-js@1c1d58d7dfddfdbdc351e0160496078598a0b943/processing.js";


    var h = thebody[0];
    h.appendChild(pjsScript)
    /*Web Font */
    var thebody = document.querySelectorAll("body");


    var fontScript = document.createElement("script");

    fontScript.src = "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js";


    var h = thebody[0];
    h.appendChild(fontScript)


    window.setTimeout(function() {
        if (window.thefonts === undefined) {
            window.thefonts = ["STIX+Two+Text"];
        }
        var thebody = document.querySelectorAll("body");


        var fontScript1 = document.createElement("link");

        fontScript1.rel = "preconnect";
        fontScript1.href = "https://fonts.googleapis.com";

        var h = thebody[0];
        h.appendChild(fontScript1)

        var thebody = document.querySelectorAll("body");


        var fontScript2 = document.createElement("link");

        fontScript2.rel = "preconnect";
        fontScript2.href = "https://fonts.gstatic.com";

        var h = thebody[0];
        h.appendChild(fontScript2)


        var a = "https://fonts.googleapis.com/css2?";
        for (var i = 0; i < thefonts.length; i++) {
            a = a + "family=" + thefonts[i] + "&"

        }


        a = a + "display=swap";
        var thebody = document.querySelectorAll("body");


        var fontScript3 = document.createElement("link");

        fontScript3.rel = "stylesheet";
        fontScript3.href = a;

        var h = thebody[0];
        h.appendChild(fontScript3)
    }, 2);



    /*Set autovars*/
    function autoVars() {
        var elementTags = ["img", "div", "p", "br", "html", "body", "a", "script", "h1", "h2", "h3", "h4", "h5", "h6", "span", "button", "canvas", "dl", "dt", "svg", "iframe", "input", "meta", "link", "title", "output", "var"];
        for (var i = 0; i < elementTags.length; i++) {
            var ele = elementTags[i];
            window[ele] = document.querySelectorAll(ele);
        }


        var all = document.querySelectorAll("*");

        for (var i = 0; i < all.length; i++) {
            var ele = all[i];

            var eleC = ele.className;
            var eleCC = eleC.split(" ");
            if (eleC.length > 1) {
                eleC = eleC.split(" ");
            } else if (eleC.length === 1) {
                eleC = [eleC];
            } else if (eleC.length === 0) {
                continue;
            }

            var a = ele.id;
            window[a] = ele;
            for (var j = 0; j < eleC.length; j++) {
                var eleC1 = eleC[j];


                var wE = window[eleC1];
                if (wE === undefined || wE === null || wE === NaN || typeof wE !== "object") {
                    wE = [];
                    wE.push(ele);
                } else if (typeof wE === "object") {
                    console.log(wE);
                    wE.push(ele);
                }
            }

        }
    };
var all = document.querySelectorAll('*');
    
var Search=function(search,res){
var all = document.querySelectorAll('*');
var end=[];
    
for(var i=0;i<all.length;i++){
    var searchQuery=((all[i])[search]);
if( searchQuery.includes(res)){
    
end.push(all[i]);    
}
}
return end;
};
    var root = document.querySelector(':root');
    var body = document.querySelector("body");

    var xMouse = 0;
    var yMouse = 0;

    var doIt = function(e) {
        // alert("")
        xMouse = e.clientX;
        yMouse = e.clientY
    };
    body.addEventListener("mousemove", doIt);

    for (var i = 0; i < Object.keys(Math).length; i++) {
        window[(Object.keys(Math)[i])] = (Object.values(Math)[i]);
    }

    var thediv208 = document.createElement("div");
    var jns = [];
    var jntarget = -1;

    function deg(x) {
        return x * (Math.PI / 180);
    };

    function rad(x) {
        return x * (180 / Math.PI);
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

    function setVal(a, b, c) {
        if (a === "var") {
            window[b] = c;
        } else {
            a[b] = c;
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

    function nroot(x1, x2) {
        return log(x2, x1);
    };

    function oparr(x1, x2) {
        for (var i = 0; i < x1.length; i++) {
            var a = x1[i];
            x2(i);

        }
        return x1;
    };

    function avg(a) {
        var a1 = 0;
        for (var i = 0; i < a.length; i++) {
            a1 = a1 + a[i];
        }
        a1 = a1 / a.length;
        return a1;
    };

    function def(a, b) {
        if (a === undefined) {
            return b;
        } else {
            return a;
        }
    }

    function dec2bin(dec, x) {
        dec = parseInt(dec)
        return (dec >>> 0).toString(x);
    }

    function bin2dec(bin, x) {
        bin = bin.toString();
        return parseInt(bin, x);
    }

    function str2bin(str, x) {
        if (typeof str !== 'string') {
            str = str.toString();
        }
        var a = [];
        for (var i = 0; i < str.length; i++) {
            var b = str[i];
            a.push(b.charCodeAt(0).toString(x));
        }
        a = a.join(' ');
        return a;
    }

    function bin2str(bin, x) {
        var a = [];
        bin = bin.split(" ");
        for (var i = 0; i < bin.length; i++) {
            bin[i] = parseInt(bin[i], x)
            var c = String.fromCharCode(bin[i])
            a.push(c);
        }
        a = a.join("");
        return a;
    }

    function purebin(bin, a, x) {
        bin = bin.split("");
        while (bin.length < a) {
            bin.splice(0, 0, x);
        }
        bin = bin.join("");
        return bin;
    }




    Array.prototype.each = function(cal) {
        for (var i = 0; i < this.length; i++) {
            cal(i);
        }
    };

    String.prototype.each = function(cal) {
        for (var i = 0; i < this.length; i++) {
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
        b = window.btoa(b);
        return b;




    };
    var Decode = function(x) {
        var b = "";
        var input1 = x;
        var div1 = document.getElementById("mydiv");
        var input1val = input1;
        var input1valc = input1val;
        input1valc = window.atob(input1valc);

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

    function Defined(x) {
        if (x === undefined || x === NaN || x === null) {
            return false;
        } else {
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
    Element.prototype.addAni = function() {

    };

    function Has(a, b) {
        if (typeof b !== "object") {
            b = [b];
        }

        var c = false;
        for (var i = 0; i < b.length; i++) {
            if (a.includes(b[i]) === false) {

            } else if (a.includes(b[i]) === true) {
                c = true;
            }
        }

        return c;
    }
    Element.prototype.cleanClass = function() {
        var b = this.className.split(" ");
        for (var i = 0; i < b.length; i++) {
            if (b[i] === "") {
                b.splice(i, 1);
            }
        }
        b = b.join("");
        return b;
    };
    Element.prototype.addClass = function(x) {
        if (this.className === "") {
            this.className = this.className + x;
        } else {
            this.className = this.className + " " + x;
        }
    };
    Element.prototype.removeClass = function(x) {

        this.className = this.className.replace(x, "");
        var a = this.className.split(" ");
        for (var i = 0; i < a.length; i++) {
            if (a[i] === "") {
                a.splice(i, 1);
            } else {

            }
        }
        a = a.join("");
        this.className = a;
    };
    Element.prototype.getClass = function(x) {
        var a = this.className;
        a = a.split(" ");

        return a;
    };


    Array.prototype.mix = function() {
        var a = this;
        for (var i = 0; i < a.length; i++) {
            var b = round(random(0, a.length - 1));
            var c = round(random(0, a.length - 1));
            var d = a[c];
            a[c] = a[b];
            a[b] = d;
        }
        return a;
    };

    String.prototype.mix = function() {
        var a1 = this;
        a1 = a1.split("")
        for (var i = 0; i < a1.length; i++) {
            var b = round(random(0, a1.length - 1));
            var c = round(random(0, a1.length - 1));
            var d = a1[c];
            a1[c] = a1[b];
            a1[b] = d;
        }
        a1 = a1.join("")
        return a1;
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
                } else if (subStr2 === " ") {
                    finalStr = finalStr + subStr;
                } else if (subStr === subStr2) {
                    finalStr = finalStr + " ";
                } else {
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

                if (subStr !== " " && subStr2 === " ") {
                    finalStr = finalStr + subStr;
                } else if (subStr2 !== " " && subStr === " ") {
                    finalStr = finalStr + subStr2;
                } else if (subStr === " " && subStr2 === " ") {
                    finalStr = finalStr + " ";
                } else {
                    finalStr = finalStr + subStr;
                }

                subStr = "";
                subStr2 = "";
            }
            return finalStr;
        }

    };

    function RegExps(a, b, c) {
        var str = a;
        var reg = b;
        var final = "";
        final = str[c](reg);
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

    function Animate(name, styles) {
        var style = document.querySelector("style");
        if (style === undefined || style === null || style === NaN || style === "") {
            var styleSheet21 = document.createElement("style");
        } else {
            var styleSheet21 = style;
        }
        // Adding The Keyframes
        styleSheet21.innerHTML = styleSheet21.innerHTML + "@keyframes " + name + "{" + styles + "}";
        if (style === undefined || style === null || style === NaN || style === "") {
            body.appendChild(styleSheet21)
        }

    }



    getQuery("body").appendChild(thediv208);


    var Canvas = function(x, y,size,size2) {
 var canvas = document.querySelector(x);
        var processing = new Processing(canvas, function(processing) {
            processing.size(size,size2);
            processing.background(0xFFF);
    
            var mouseIsPressed = false;
            processing.mousePressed = function () { mouseIsPressed = true; };
            processing.mouseReleased = function () { mouseIsPressed = false; };
    
            var keyIsPressed = false;
            processing.keyPressed = function () { keyIsPressed = true; };
            processing.keyReleased = function () { keyIsPressed = false; };
    
            function getImage(s) {
                var url = "https://www.kasandbox.org/programming-images/" + s + ".png";
                processing.externals.sketch.imageCache.add(url);
                return processing.loadImage(url);
            }
    
            with (processing) {
                
                
             eval(y);
                
            }
            if (typeof draw !== 'undefined') processing.draw = draw;
        });
        



    };

    var Speak = function(text, pitch1, rate, vol, voice) {

        var s = new SpeechSynthesisUtterance();
        s.lang = "en-US";
        s.text = text;
        s.pitch = pitch1;
        s.rate = rate;
        s.volume = vol;
        s.voice = speechSynthesis.getVoices()[voice];

        return s;

    };

    var DownLoad = function(name, contents) {
        var thecode = Encode(random(0, 10).toString());

        var a1 = document.createElement("a");
        document.body.appendChild(a1);

        a1.outerHTML = "<a id='" + thecode + "' href='data:text;charset=utf-8," + encodeURIComponent(contents) + "' download=" + name + ">Your Download</a>";

        a1.style.display = "none";


        document.getElementById(thecode).click();
        document.getElementById(thecode).remove();

    };



    var DataBase = function(name) {
        this.name = name || "DataBase "+round(random(1,100));
        this.data = [];
        this.dataNum = undefined;
    };
    DataBase.prototype.setItem = function(x, y) {
        var dupl = false;
        this.dataNum=undefined;
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].name === x) {
                dupl = true;
                this.dataNum = i;
                
            }
        }
        if (dupl === false) {
            this.data.push({
                name: x,
                content: JSON.stringify(y)
            });
        } else if (dupl === true) {
            this.data[this.dataNum] = {
                name: x,
                content: JSON.stringify(y)
            };
        }
        dupl = false;
        this.dataNum = undefined;
    };
    DataBase.prototype.getItem = function(x) {
        for (var i = 0; i < this.data.length; i++) {
            if (x === this.data[i].name) {
                return JSON.parse(this.data[i].content);
            }
        }
        return this[x];
    };
    DataBase.prototype.removeItem = function(x) {
        for (var i = 0; i < this.data.length; i++) {
            if (x === this.data[i].name) {
                var a = this.data[i];
                this.data.splice(i, 1);
            }
        }
        return a;
    };
    DataBase.prototype.clear = function() {
        var a = this.data;
        this.data = [];
        return a;
    };
    DataBase.prototype.exportData=function(){
    var a=JSON.stringify(this.data);
    a=btoa(a);
    return a;
    };
    DataBase.prototype.inportData=function(x){
    var a=JSON.parse(atob(x));
    var dupl = false;
        for(var j=0;j<a.length;j++){
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].name === a[j].name) {
                dupl = true;
                this.dataNum = i;
                
            }
           
            
        }
        
       
         if (dupl === false) {
            this.data.push({
                name: a[j].name,
                content: JSON.parse(a[j].content)
            });
        } else if (dupl === true) {
            this.data[this.dataNum] = {
                name: a[j].name,
                content: JSON.parse(a[j].content)
            };
        }    
        
        }
    };
    var Prob=function(type,amm){
this.type=type;
this.amm1=amm[0];
this.amm2=amm[1];

this.deck=[];

for(var i=0;i<this.amm1.length;i++){
for(var j=0;j<this.amm2.length;j++){
this.deck.push({a:this.amm1[i],b:this.amm2[j],ind:i+(j*this.amm1.length)})
}
}


};
Prob.prototype.roll=function(ind){
var a=[this.deck[ind].a,this.deck[ind].b];
return a;
};
Prob.prototype.add=function(thing){
this.deck=this.deck.concat(thing);
}
Prob.prototype.remove=function(a,b){
var c=this.deck.splice(a,b);    
return c;
};
Prob.prototype.shuffle=function(well){
for(var j=0;j<well;j++){
for(var i=0;i<this.deck.length;i++){
var a=round(random(0,this.deck.length-1));
var b=this.deck[a];
this.deck[a]=this.deck[i];
this.deck[i]=b;
}
}

};
    var AI = function(targ, a, rand) {
        if (a === undefined) {
            a = 0.5;
        }
        this.targ = targ;
        this.learnr = a;
        this.weights = [];
        this.bias = 1;
        this.rand = rand;
        this.hist = [];
        this.acthist = [];
        if (this.rand === undefined) {
            this.rand = 1;

        }
        this.addW = function() {
            for (var i = 0; i < targ.length; i++) {
                var a = [];
                for (var j = 0; j < targ[i][2]; j++) {
                    a.push(random(targ[i][0], targ[i][1]));
                }
                this.weights.push(a)

                this.hist.push([]);
            }
        };
        this.addW();

    };
    AI.prototype.act = function(i1) {
        var a = this.weights;
        var b = a[i1];

        var total = 0;
        for (var i = 0; i < b.length; i++) {
            total = total + b[i];

        }
        total = total / b.length;

        return total;
    }

    AI.prototype.learn = function(des, i1) {
        var des1 = des;
        var a = this.weights;
        var b = a[i1];
        var hist1 = this.hist[i1];
        var targ1 = this.targ[i1];
        hist1.push(des);
        for (var i = 0; i < hist1.length; i++) {
            if (abs(hist1[i] - this.act(i1)) < abs(targ1[0] - targ1[2]) / 20 && i < hist1.length - 6) {
                this.acthist.push(hist1[i + 5]);
            }
        }
        if (this.hist.length > 300) {
            this.hist.splice(0, this.hist.length - 100)
        }
        /*
         for(var i=0;i<1;i++){
         b.splice(round(random(0,b.length-1)),1)
          this.addW();
         };*/
        var acth = ((this.acthist.length > 0) ? avg(this.acthist) : 0);

        for (var i = 0; i < b.length; i++) {
            var error = (des - b[i]);
            if (b[i] === des) {

            } else {

                /*  console.log(b[i]+" "+error+" "+this.learnr+" "+des+" "+(des-b[i])+" "+(b[i]-des)+" "+(1+error*this.learnr))*/
                var c = (error * this.learnr)
                var apple = round(random(1))
                c = (c) + ((i % apple === 0) ? random(-c * this.rand, c * this.rand) : 0)
                var d = avg([c, this.act(i1) - acth]);
                var subt = (this.act(i1) - acth)
                /*
                p1.innerHTML=round(acth)+" "+round(this.act(i1))+" "+round(subt);
                p2.innerHTML=d*/

                b[i] = b[i] + c;
            }

        }
        this.acthist = [];
    };

    var IBot=function(name,link,vis){
var iframe1=document.createElement("iframe");
iframe1.src=link;
iframe1.className="bots1";
var a="IBot"+name;
iframe1.id=a
this.botid=a;

iframe1.referrerpolicy="origin";
iframe1.width='400';
iframe1.height='400';
iframe1.title='Bot '+i;
if(vis===true){
iframe1.style.display="block";    
}
else{
iframe1.style.display="none";       
}
document.body.appendChild(iframe1);


};

IBot.prototype.run=function(code){
if(code===undefined){
code="";
}


var iframe1s=getId(this.botid);



iframe1s.contentWindow.document.write(iframe1s.contentWindow.document.documentElement.innerHTML+code);

return iframe1s.contentWindow;

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
    var b = 0;

    

    function Ready(x) {
        var a = window.setTimeout(function() {

            if (window.jQuery !== undefined && window.math !== undefined && window.anime !== undefined) {
                x();

            } else {
                Ready(x);
            }
        }, 20);
    }

    
} catch (e) {
    var err = new Error(e);
    console.log("RecFunction: " + err);
}
    
