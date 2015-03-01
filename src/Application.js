import device;
import ui.TextView as TextView;
GLOBAL.gx = Math.ceil(device.width/20); // Must be defined after device, but before my stuff

exports = Class(GC.Application, function () {

  this.initUI = function () {
    this.textview = new TextView({
        superview:       this,
        x:               (gx),
        y:               (gx),
        width:           device.width-(gx*2),
        height:          (gx*4),
        fontFamily:      'HelveticaNeue-Light',
        size:            (gx),
        verticalAlign:   'middle',
        color:           '#361D0E',
        backgroundColor: '#FFFFFF',
        autoFontSize:    false,
        wrap:            true,
        autoSize:        false,
        text:            'hello'
    });
    setInterval(function(){
      var tmp = Math.random()+'\n'+Math.random()+'\n'+Math.random();
      GC.app.textview.setText(tmp);
    }, 200);
  };

  this.launchUI = function () {};
});
