var scr=document.createElement("script");
scr.src="https://cdn.jsdelivr.net/processing.js/1.4.8/processing.min.js";
document.body.appendChild(scr);



var thediv208=document.createElement("div");
var jns=[];
var jntarget=-1;

function deg(x) {
    return 180 / Math.PI * x;
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
function newEle(a){
var b=document.createElement(a);
return b;
};

//by query
function CopyClip(x){
 /* Get the text field */
  var copyText = document.querySelector(x);

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");
};


function ellipse(x,y,w,h,st){
thediv208.innerHTML=thediv208.innerHTML+'<svg height='+h*2+10+' width='+w*2+10+' style="position:absolute; left:'+x+'px; top:'+y+'px; ">  <ellipse cx="0" cy="0" rx='+w+' ry='+h+' style='+st+' /></svg> ';
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

function rect(x,y,w,h,st){
thediv208.innerHTML=thediv208.innerHTML+'<svg height='+(h*2+10)+' width='+(w*2+10)+' style="position:absolute; left:'+x+'px; top:'+y+'px; ">  <rect width='+w+' height='+h+' style='+st+' /></svg> ';
};

function poly(x,y,w,h,p,st){
var pointsarr=p;
 var b="";
 var c="";
for(var i=0;i<pointsarr.length;i=i+2){
c=c+pointsarr[i]+","+pointsarr[i+1]+" ";
b=b+c;
c="";
}
   
var po=pointsarr.join(" ");
 thediv208.innerHTML=thediv208.innerHTML+'<svg height='+(h*2+10)+' width='+(w*2+10)+' style="position:absolute; left:'+x+'px; top:'+y+'px; ">  <polygon points='+c+' style='+st+' /></svg> ';
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
      if(noiseProfile.generator === undefined) {
        // caching
        noiseProfile.generator = new PerlinNoise(noiseProfile.seed);
      }
      var generator = noiseProfile.generator;
      var effect = 1, k = 1, sum = 0;
      for(var i=0; i<noiseProfile.octaves; ++i) {
        effect *= noiseProfile.fallout;
        switch (arguments.length) {
        case 1:
          sum += effect * (1 + generator.noise1d(k*x))/2; break;
        case 2:
          sum += effect * (1 + generator.noise2d(k*x, k*y))/2; break;
        case 3:
          sum += effect * (1 + generator.noise3d(k*x, k*y, k*z))/2; break;
        }
        k *= 2;
      }
      return sum;
    
};
function sign(x){
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

function pow(a) {
    return Math.floor(a);

};

function ciel(a) {
    return Math.ceil(a);
};

function sqrt(x){
return Math.sqrt(x);    
};

function cbrt(x){
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

 var pjsNew=function(x,use){
   
  var programCode = function(processingInstance) {
    with (processingInstance) {
      
      use();
    }};

  // Get the canvas that ProcessingJS will use
  var canvas = document.getElementById(x); 
  // Pass the function to ProcessingJS constructor
  var processingInstance = new Processing(canvas, programCode);
  
      
  };


getQuery("body").appendChild(thediv208);
var Jn;
var jn;
var jnId;

function Jn(id,a, b, c, d, e, f, g) {
    this.id=id;
    this.sel = document.querySelectorAll(a);
    this.texts=[];
    this.htmls=[];
   this.actions=[];
   this.csss=[];
    this.atts=[];
    this.a=a;
};

Jn.prototype.g=function(){
this.actions.push(this.id+" g returned");
    if(this.a[0]==="#"){
   return this.sel[0];      
    }
    else{
    return this.sel;     
    }
};

Jn.prototype.text=function(x){
if(x===undefined){
this.texts=[];
for(var i=0;i<this.sel.length;i++){
this.texts.push(this.sel[i].textContent);
}
this.actions.push(this.id+" text returned as "+this.texts);
return this.texts;
}
else if(x!==undefined){
for(var i=0;i<this.sel.length;i++){
this.sel[i].textContent=x;
}
this.actions.push(this.id+" text changed to do with "+x);
}
};

Jn.prototype.eventL=function(x,y){
this.sel.addEventListener(x,y);
this.actions.push(this.id+" eventlistener added ");
};
Jn.prototype.con=function(){
console.log("Yey");

   
};
Jn.prototype.act=function(){
this.actions.push(this.id+" act returned ");

return this.actions;    
};
Jn.prototype.att=function(x,y){
  if(y!==undefined){
this.actions.push(this.id+" attr changed from "+x+" to "+y);
    
 for(var i=0;i<this.sel.length;i++){
(this.sel[i])[x]=y;
 }
  } 
  else{
   this.atts=[];
    for(var i=0;i<this.sel.length;i++){
    this.atts.push((this.sel[i])[x]);   
    }
   
    this.actions.push(this.id+" att returned as "+this.atts);
   return this.atts;
  }
};
Jn.prototype.css=function(x,y){
 if(y!==undefined){
this.actions.push(this.id+" css changed from "+x+" to "+y);    
 for(var i=0;i<this.sel.length;i++){
 (this.sel[i]).style[x]=y;    
 }
 }
 else{
     this.csss=[];
    for(var i=0;i<this.sel.length;i++){
    this.csss.push((this.sel[i]).style[x]);
    }
    
    this.actions.push(this.id+" css returned as "+this.csss);
    return this.csss;
 }
};


Jn.prototype.html=function(x){
if(x===undefined){
this.htmls=[];
for(var i=0;i<this.sel.length;i++){
this.htmls.push(this.sel[i].innerHTML);
}
this.actions.push(this.id+" html returned as "+this.htmls);
return this.htmls;
}
else if(x!==undefined){
for(var i=0;i<this.sel.length;i++){
this.sel[i].innerHTML=x;
}
this.actions.push(this.id+" html changed to do with "+x);
}

};

var jnId=function(x){
    
// console.log("D"+jns);
var a="not def";
for(var i=0;i<jns.length;i++){
if(x===jns[i].id){
a=i;    
}
}
//console.log("B"+a);
return a;
};


var jn=function(id,a,b,c){
 var useable=true;
for(var i=0;i<jns.length;i++){
if(id===jns[i].id){
useable=false;
}
}
    
if(useable===true){
jns.push(new Jn(id,a,b,c));
jntarget=jnId(id);
}
else if(useable===false){
jntarget=jnId(id);    
}
//console.log(jns[jntarget]);
//console.log(jntarget);
return jns[jntarget];
};







