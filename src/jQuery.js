const { fn } = require("jquery")

window.jQuery=function(selector){
    let  elements
    if(typeof selector === 'string'){
        elements =  document.querySelectorAll(selector)
    }
    else if(selector instanceof Array){
        elements = selector
    }

    

    let result ={
        oldApi:selector.oldApi,
        addClass:function (className){
            for (let i =0;i<elements.length;i++){
             elements[i].classList.add(className) 
            }
            return this 
        },
        find(selector){
            let array=[] //储存新查找的元素
            for(let i =0;i<elements.length;i++){
                const elements2=Array.from(elements[i].querySelectorAll(selector))
             array = array.concat(elements2)
              
            } 
            console.log(this)
            const newApi = jQuery(array)
            array.oldApi=this
            return newApi

        },
        each(fn){//遍历
            for (let i =0; i<elements.length;i++){
                fn.call(null, elements[i],i)
            }

        },
        parent(fn){ //获取当前元素的父元素


        },
        end(){
            return this.oldApi
        }
    }




    return result
}