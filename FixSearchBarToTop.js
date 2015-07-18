/**
 * FixSearchBarToTop
 * 
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * Copyright 2015, xiongyongxin
 * http://bearxiong.com/
 */
var FixSearchBarToTop = (function(){
    var offset = 80;
    searchBar = document.querySelector('.top-search-bar');
    didFix = false;

    function init(){
        window.addEventListener('scroll',function(event){
            fixedOnPage(offset,searchBar);
        },false);
    }
    function fixedOnPage(offset,searchBar){
        var sy = scrollY();
        var spaceHolder = spaceHolderElement(searchBar);
        var parent = searchBar.parentNode;
        if( sy >= offset ){
            //Add fixed class to search bar;
            if(!didFix){
                classie.add(searchBar,'top-fixed');
                parent.insertBefore(spaceHolder,searchBar);
                didFix = true;
            }
        }else{
            if(didFix){
                classie.remove(searchBar, 'top-fixed');
                parent.removeChild(document.getElementById('template-space-holder'));
                didFix = false;
            }
        }
    }

    function scrollY(){
        return window.pageYOffset || document.documentElement.scrollTop;
    }

    //make space holder Element, for when search bar fixed
    function spaceHolderElement(ElementWillBeFixed){
        var height = ElementWillBeFixed.clientHeight,
            spaceHolder = document.createElement('div');
            spaceHolder.setAttribute('id','template-space-holder');
            spaceHolder.style.height = height+'px';
        return spaceHolder;
    }

    init();
})();





