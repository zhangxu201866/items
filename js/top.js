//预加载
function preload(imgs) {
    let len = imgs.length;
    for (let i = 0; i < len; i++) {
        let _slefImg = imgs[i];
        let imgUrl = _slefImg.getAttribute('data-src'),
            newImg = new Image();
        newImg.src = imgUrl;
        // console.log(imgUrl);

        newImg.onload = function () {
            _slefImg.src = this.src;

        }

    }
}


//焦点图部分
let innerbanner = document.getElementById('innerbanner'),
    imgsB = innerbanner.getElementsByTagName('img'),
    titleB = document.getElementById('Btitle'),
    timer = null,
    step = 0,
    dataB = null,
    urlB = 'js/banner.json';

let questXhr = new XMLHttpRequest();
questXhr.open("GET", urlB, false);
questXhr.onreadystatechange = () => {
    questXhr.readyState == 4 && questXhr.status == 200 ? dataB = JSON.parse(questXhr.responseText) : null;
};
questXhr.send();

function bannerHtm(dataB) {
    let picStr = ``,
        titStr = ``;
    for (let i = 0; i < dataB.length; i++) {
        let {
            img,
            stitle,
            title
        } = dataB[i];
        picStr += `<li><img data-src="${img}"></li>`;
        titStr += `<li><a href=''><span class='btit'>${title}</span><span>${stitle}</span></a></li>`
    }
    innerbanner.innerHTML = picStr;
    titleB.innerHTML = titStr;
}
bannerHtm(dataB);

window.onload = preload(imgsB); //预加载banner

// console.log(imgsB);


timer = setInterval(autoMove, 3000); // 3m播放
$("#Btitle li").eq(0).addClass('active'); // 默认第一个标题样式

function autoMove() { //banner 图片播放
    step++;
    if (step >= dataB.length) {
        step = 0;
    }
    $('#innerbanner li').eq(step).fadeIn(500).siblings().fadeOut();
    $('#Btitle li').eq(step).addClass('active').siblings().removeClass('active');
}
$('#Btitle li').hover(function () { // banner标题
    step = $(this).index() - 1;
    clearInterval(timer)
    autoMove()
}, function () {
    timer = setInterval(autoMove, 2500);
});

// 头部搜索
// let inputbox = document.getElementById('inputbox'),
//     focusInput = inputbox.getElementsByTagName('input')[0];
// let searchTip = document.getElementById('searchTip');
// focusInput.addEventListener('focus', function () {
//     searchTip.style.display = 'block';
//     this.addEventListener('click', function (e) {
//         e.stopPropagation();
//         searchTip.style.display = 'block';
//     });
//     searchTip.addEventListener('click', function (e) {
//         e.stopPropagation();
//     })
// }, false);

document.addEventListener('click', function (ess) {
    searchTip.style.display = 'none';
    // e.stopPropagation()
}, false);

window.onscroll = function () {
    let wT = document.documentElement.scrollTop;
    console.log(wT);
    if (wT >= 200) {
        searchTip.style.display = 'none'
    }
}
// 搜索框内容
let searchData = null;
function searchAjax() {
        url = 'js/searchTop.json',
        searchXHR = new XMLHttpRequest();
    searchXHR.open("GET", url, false);
    searchXHR.onreadystatechange = () => {
        searchXHR.readyState == 4 && searchXHR.status == 200 ? searchData = JSON.parse(searchXHR.responseText) : console.log('没有找到')
    }
    searchXHR.send()
    // console.log(searchData);
    bindHtml(searchData)
}
searchAjax();

function bindHtml(Data) {
    let str = ``,
        len = Data.length;
    for (let i = 0; i < len; i++) {
        let {
            title
        } = Data[i];
        str += `<li><span class='num'>${i+1}</span><div class='tipTit right'><h5>${title}</h5></div></li>`;
    }
    tipList.innerHTML = str;
}



    function hHtml(Data) {
        console.log(1);
        
        let len = Data.length;
        let str1 = ``;
        for (let i = 0; i < len; i++) {
            let {
                title,
                coverPic
            } = Data[i];
            str1 += `<span class='num'>${i+1}</span><div class='tipimg'><img src='${coverPic}'></div><div class='tipTit right'><h5>${title}</h5></div>`;
        }
        this.innerHTML = str1;
    }

    let listli = document.getElementById('tipList').getElementsByTagName('li');
// let lilen = listli.length;
for (let i = 0; i < listli.length; i++) {
    listli[i].addEventListener('mouseenter', function () {
        console.log(this);
        this.classList.add('_thisli');
        hHtml.call(this,searchData);
    });
    listli[i].addEventListener('mouseleave', function () {
        this.classList.add('_thisli');
        bindHtml.call(this,searchData)
    });
}
   
    // _thisLi.addEventListener('mouseleave',function(){
    //     this.classList.remove('_thisli')
    // })







// searchAjax();


// 头部 右侧
function showdiv(obj, showDiv) {
    let hDiv = document.getElementById(obj),
        showDivs = document.getElementById(showDiv);
    hDiv.addEventListener('mouseenter', function () {
        showDivs.style.display = 'block'
    })
    hDiv.addEventListener('mouseleave', function () {
        showDivs.style.display = 'none'
    })
}
showdiv('dv', 'showBox1');
showdiv('seeyou', 'showBox2');
showdiv('ect', 'showBox3');
showdiv('msg', 'showBox4');