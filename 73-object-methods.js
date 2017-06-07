var rect = {
  width: 10,
  height: 20,
  area: function() {
    return this.width * this.height;
  }
};

rect.width = 15;
document.write(rect.area());
