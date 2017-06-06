// self-invoking function

(function() {
  document.write("I'm f()");
})();

(function(x) {
  document.write("I'm f(" + x + ")");
})(14);

//f();