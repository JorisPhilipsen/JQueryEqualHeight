jQuery Equal Height Plugin
=================

jQuery plugin to create collums with equal height that works with multiple rows and responsive design.


Why does the plugin exist?
=================

If you can solve the problem described in here: http://css-tricks.com/fluid-width-equal-height-columns/ with css, please avoid my plugin. 

I 'had to' create this plugin because it works with IE7&8 and the elements can have a variable height. 


How it works
=================
The plugin is really minimalistic, the only option your allowed to set is the responsive setting. The responsive setting is by default true.

$(".theclassnameoftheelements").EqualHeight();

$(".theclassnameoftheelements").EqualHeight({
  responsive: false
});
