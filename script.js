function jn(a, b, c, d, e, f, g) {
        this.sel = document.querySelectorAll(a);
     return this.sel;
};

jn.prototype={
ad:function(a,b){
    
this.sel[a]=b;
}
};

            jn.prototype.createVar = function(a, b) {
                window[a] = b;
            };
var random=function(a,b){
var c=b-a;
var mr=Math.random()*c+((b+a)/2)-c/2;
return mr;
};
 function sin(angle) {
                	return Math.sin(angle / 180 * Math.PI);
                };
                
                // A cosine function that converts from radians to degrees.
                function cos(angle) {
                	return Math.cos(angle / 180 * Math.PI);
                };
                
                // An atan2 function.
                function atan2(x, y) {
                	return Math.atan2(x, y) / Math.PI * 180;
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
                
