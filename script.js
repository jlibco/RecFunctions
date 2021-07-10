var Jn = function(a, b, c, d, e, f, g) {
        this.sel = document.querySelectorAll(a);
     return this.sel;

            };

            Jn.prototype.createVar = function(a, b) {
                window[a] = b;
            };
var random=function(a,b){
var c=b-a;
var mr=Math.random()*c+((b+a)/2)-c/2;
return mr;
};
