function jn(a, b, c, d, e, f, g) {
    this.sel = document.querySelectorAll(a);
    jn.prototype = {
        ad: function(a, b) {

            this.sel[a] = b;
        },
    };
    return this.sel;
};



jn.prototype.createVar = function(a, b) {
    window[a] = b;
};
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

function ellipse(x,y,w,h){
var ell=document.createElement("svg");
var a=(w+1000);
var b=(h+1000);
ell.width=a.toString();
ell.height=b.toString();
    
var ell2=document.createElement("ellipse");
ell2.cx=x.toString();
ell2.cy=y.toString();
ell2.rx=w.toString();
ell2.ry=h.toString();
ell2.style="fill:yellow";
    

var body=document.querySelector("body")
body.appendChild(ell);
ell.appendChild(ell2);


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
