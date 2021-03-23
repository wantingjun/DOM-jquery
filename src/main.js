//addClass
jQuery('.test').addClass('red')
//find
let x = jQuery('.test1').find('.child').addClass('green').addClass('black')
x.each((div)=>{console.log(div)})