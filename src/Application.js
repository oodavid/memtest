import device;
import ui.TextView as TextView;
GLOBAL.gx = Math.ceil(device.width/20); // Must be defined after device, but before my stuff

var values = [
  'Lorem ipsum dolor sit\namet, ut tortor at urna\nFacilisis proin ornare',
  'proin mauris, sit nam\nfeugiat fringilla fermentum\nneque amet ultrices',
  'vehicula. Minima in\nornare consequat ad nec\nIn lacus sed proin, ut',
  'vitae et class vivamus\nmorbi, nec lacinia ante\nsem montes nunc nullam',
  'natoque congue urna nulla\nfaucibus nam. Tempor\nante pellentesque ut',
  'venenatis, ipsum quam\nlacus, condimentum nam\net non. Nibh morbi porttitor',
  'sed, massa bibendum\nullamcorper, magna nam\net, ac nec etiam ac nec, vel',
  'vitae. Sollicitudin sed\nurna, aliquam morbi diam\ntempor hac, labore turpis',
  'consequat integer leo\nnullam nec, in suscipit\neget sed quis hymenaeos',
  'felis, porttitor wisi\nin pharetra massa pulvinar\nPede amet tempor ac',
  'nec enim pellentesque\nneque metus pellentesque\nquam ante sagittis',
  'mauris dolor, suspendisse\nultrices adipiscing urna\nTincidunt vitae',
  'vulputate nonummy ut\nin eget accumsan senectus\nfaucibus maecenas justo.',
];
var numValues = values.length;
var index     = 0;

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
      // A random value - eats memory
      GC.app.textview.setText(Math.random()+'\n'+Math.random()+'\n'+Math.random());

      // Cycle through presets - seems fine
      // GC.app.textview.setText(values[index]);
      // index = (index + 1) % numValues;
    }, 200);
  };

  this.launchUI = function () {};
});
