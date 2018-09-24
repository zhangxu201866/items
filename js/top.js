//焦点图部分
let innerbanner = document.getElementById('innerbanner'),
    titleB = document.getElementById('Btitle'),
    timer = null,
    step =0;
    dataB = null;
urlB = 'js/banner.json';

let questXhr = new XMLHttpRequest();
questXhr.open("GET", urlB, false);
questXhr.onreadystatechange = () => {
    questXhr.readyState == 4 && questXhr.status == 200 ? dataB = JSON.parse(questXhr.responseText) : null;
};
questXhr.send();

function bannerHtm(dataB){
    let picStr =``,
        titStr = ``;
    for(let i =0; i < dataB.length; i++){
        let {img, stitle,title} = dataB[i];
        picStr += `<li><img src="${img}"></li>`;
        titStr += `<li><a href=''><span class='btit'>${title}</span><span>${stitle}</span></a></li>`
    }
    innerbanner.innerHTML = picStr;
    titleB.innerHTML = titStr;
}
bannerHtm(dataB);

timer = setInterval(autoMove, 3000);
$("#Btitle li").eq(0).addClass('active');

function autoMove(){
    step++;
    if(step >= dataB.length){
        step = 0;
    }
    $('#innerbanner li').eq(step).fadeIn(500).siblings().fadeOut();
    $('#Btitle li').eq(step).addClass('active').siblings().removeClass('active');

}
$('#Btitle li').hover(function(){
    step = $(this).index() -1;
    clearInterval(timer)
    autoMove()
},function(){
    timer = setInterval(autoMove, 2500);
});

// 头部搜索
let inputbox = document.getElementById('inputbox'),
    focusInput = inputbox.getElementsByTagName('input')[0];
let searchTip = document.getElementById('searchTip');
focusInput.addEventListener('focus',function(){
        searchTip.style.display='block';
    this.addEventListener('click', function(e){
        e.stopPropagation();
        searchTip.style.display='block';
    });
    searchTip.addEventListener('click',function(e){
        e.stopPropagation();
    })
},false);

document.addEventListener('click',function(ess){
    searchTip.style.display = 'none';
    // e.stopPropagation()
},false)


// 头部 右侧
function showdiv(obj,showDiv){
    let hDiv = document.getElementById(obj),
    showDivs = document.getElementById(showDiv);
    hDiv.addEventListener('mouseenter',function(){
        showDivs.style.display= 'block'
    })
    hDiv.addEventListener('mouseleave',function(){
        showDivs.style.display= 'none'
    })
}
showdiv('dv','showBox1');
showdiv('seeyou','showBox2');
showdiv('ect','showBox3');
showdiv('msg','showBox4');
