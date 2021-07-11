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
var deg = function(x) {
    return 180 / Math.PI * x;
};
var getId = function(a) {
    var b = document.getElementById(a);
    return b;
};
var getClass = function(a) {
    var b = document.getElementsByClassName(a);
    return b;
};

var getTag = function(a) {
    var b = document.getElementsByTagName(a);
    return b;
};

var getQuery = function(a) {
    var b = document.querySelector(a);
    return b;
};
var getQueryAll = function(a) {
    var b = document.querySelectorAll(a);
    return b;
};

function min(x) {
    return Math.min(x);
};

function max(x) {
    return Math.max(x);
};

function abs(a) {
    return Math.abs(a);
};

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
    return Math.sin(angle));
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
