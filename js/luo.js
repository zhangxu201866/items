function hovers(url, pushHtml, listHtml) {//秀场直播和 电竞直播
    let data = null;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.onreadystatechange = () => {
        xhr.readyState == 4 && xhr.status == 200 ? data = JSON.parse(xhr.responseText) : null;
    }
    xhr.send();
    // console.log(data);
    firstlod(data, pushHtml, listHtml);
    tlod(data, pushHtml, listHtml);
    // zongyiHtml(data, pushHtml, listHtml); //
}

function hovers2(url, pushHtml1, listHtml1) {// 综艺
    let data = null;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.onreadystatechange = () => {
        xhr.readyState == 4 && xhr.status == 200 ? data = JSON.parse(xhr.responseText) : null;
    }
    xhr.send();
    zongyiHtml(data, pushHtml1, listHtml1); //
}

function hovers3(url, pushHtml1, listHtml1) {//娱乐
    let data = null;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.onreadystatechange = () => {
        xhr.readyState == 4 && xhr.status == 200 ? data = JSON.parse(xhr.responseText) : null;
    }
    xhr.send();
    yuleHtml(data, pushHtml1, listHtml1); //
}

function g() { //秀场直播
    var tabBox1 = document.getElementById('tabBox1'),
        _slef = tabBox1.getElementsByTagName('a'),
        listHtml = document.getElementById('girl'),
        pushHtml = document.getElementById('big-pic1'),
        pushImg = pushHtml.getElementsByTagName('img'),
        imgs = listHtml.getElementsByTagName('img'),
        child = tabBox1.childNodes;
    for (let i = 0; i < _slef.length; i++) {
        hovers('js/luodata.json', pushHtml, listHtml);// 默认显示第一个
        _slef[0].classList.add('active');
        // preload(imgs);//预加载
        preload(pushImg);
        preload(imgs);
        _slef[i].onmouseenter = function (e) { // 鼠标放上去再次加载
            //设置当前鼠标状态
            for (let j = 0; j < child.length; j++) {
                if (child[j].nodeType === 1) {
                    child[j].classList.remove('active')
                    this.classList.add('active');
                }
            }
                if (_slef[i].title == '女神') {
                    hovers('js/luodata.json', pushHtml, listHtml);
                    preload(pushImg);
                    preload(imgs);
                } else if (_slef[i].title == '随拍') {
                    hovers('js/game.json', pushHtml, listHtml);
                    preload(pushImg);
                    preload(imgs);
                }
        }
    }

}
g();
function g1() { //电竞直播
    var tabBox1 = document.getElementById('tabBox2'),
        _slef = tabBox1.getElementsByTagName('a'),
        listHtml = document.getElementById('game'),
        pushHtml = document.getElementById('big-pic-game'),
        pushImg = pushHtml.getElementsByTagName('img'),
        imgs = listHtml.getElementsByTagName('img'),
        child = tabBox1.childNodes;
    for (let i = 0; i < _slef.length; i++) {
        hovers('js/game.json', pushHtml, listHtml);// 默认显示第一个
        preload(pushImg);
        preload(imgs);
        _slef[0].classList.add('active');//默认鼠标鼠标效果
        _slef[i].onmouseenter = function (e) { // 鼠标放上去再次加载
            //设置当前状态
            for (let j = 0; j < child.length; j++) {
                if (child[j].nodeType === 1) {
                    child[j].classList.remove('active')
                    this.classList.add('active');
                }
            }
                if (_slef[i].title == '竞技游戏') {
                    console.log(this);
                    hovers('js/game.json', pushHtml, listHtml);
                    preload(pushImg);
                    preload(imgs);
                } else if (_slef[i].title == '热门手游') {
                    console.log(this);
                    hovers('js/luodata.json', pushHtml, listHtml);
                    preload(pushImg);
                    preload(imgs);
                };
        }
    }
}
g1()

function firstlod(data, pushHtml, listHtml) {
    let str = ``,
        strplsh = ``;
    strplsh += `<a href="${data.items[0].channel.url}"><dl><dt><img data-src="${data.items[0].channel.avatar}"><p>${data.items[0].channel.name}</p></dt><dd><p>${data.items[0].channel.status}</p><span class="view">${(data.items[0].viewers/10000).toFixed(2)}万</span></dd></dl></a>`;
    for (let i = 1; i < 6; i++) {
        let cur = data.items[i];
        str += `<li><a href="${cur.channel.url}" target='_blank'><p class="picbox"><img data-src="${cur.channel.avatar}" alt=""><span class="img-up-t">${cur.channel.name}</span></p><div class="item-info"><dl><dt>${cur.channel.status}</dt><dd><span class="left">${(cur.viewers/10000).toFixed(2)}万</span><span class="right">${cur.game[0].name}</span></dd></dl></div></a></li>`;
    }
    pushHtml.innerHTML = strplsh;
    listHtml.innerHTML = str;
}

function tlod(data, pushHtml, listHtml) {
    let str = ``,
        strplsh = ``;
    strplsh += `<a href="${data.items[6].channel.url}"><dl><dt><img data-src="${data.items[6].channel.avatar}"><p>${data.items[6].channel.name}</p></dt><dd><p>${data.items[6].channel.status}</p><span class="view">${(data.items[6].viewers/10000).toFixed(2)}万</span></dd></dl></a>`;
    for (let i = 5; i < 10; i++) {
        let cur = data.items[i];
        str += `<li><a href="${cur.channel.url}" target='_blank'><p class="picbox"><img data-src="${cur.channel.avatar}" alt=""><span class="img-up-t">${cur.channel.name}</span></p><div class="item-info"><dl><dt>${cur.channel.status}</dt><dd><span class="left">${(cur.viewers/10000).toFixed(2)}万</span><span class="right">${cur.game[0].name}</span></dd></dl></div></a></li>`;
    }
    pushHtml.innerHTML = strplsh;
    listHtml.innerHTML = str;
}



function zongyilod() { //综艺
    var tabBox3 = document.getElementById('tabBox3'),
        _slef3 = tabBox3.getElementsByTagName('a'),
        listHtml1 = document.getElementById('zongyi'),
        pushHtml1 = document.getElementById('plus-zongyi'),
        pushImg = pushHtml1.getElementsByTagName('img'),
        imgs = listHtml1.getElementsByTagName('img'),
        child3 = tabBox3.childNodes;
    for (let i = 0; i < _slef3.length; i++) {
        hovers2('js/game.json', pushHtml1, listHtml1);// 默认显示第一个
        preload(pushImg);
        preload(imgs);
        _slef3[0].classList.add('active');//默认鼠标鼠标效果
        _slef3[i].onmouseenter = function (e) { // 鼠标放上去再次加载
            //设置当前状态
            for (let j = 0; j < child3.length; j++) {
                if (child3[j].nodeType === 1) {
                    child3[j].classList.remove('active')
                    this.classList.add('active');
                }
            }
                if (_slef3[i].title == '强档热播') {
                    console.log(this);
                    hovers2('js/game.json', pushHtml1, listHtml1);
                    preload(pushImg);
                    preload(imgs);
                } else if (_slef3[i].title == '大陆综艺') {
                    hovers2('js/luodata.json', pushHtml1, listHtml1);
                    preload(pushImg);
                    preload(imgs);
                }else if (_slef3[i].title == '台湾综艺') {
                    hovers2('js/game.json', pushHtml1, listHtml1);
                    preload(pushImg);
                    preload(imgs);
                };
        }
    }
}
zongyilod();

// 综艺 data
function zongyiHtml(data, pushHtml1, listHtml1) {
    let str = ``,
        strplsh = ``;
    strplsh += `<a href="${data.items[0].channel.url}"><img data-src="${data.items[0].channel.avatar}"><dl><dt>${data.items[0].channel.name}</dt><dd>${data.items[0].channel.status}</dd></dl></a>`;
    str +=`<ul class="group-pic">`;
    for (let i = 1; i < 5; i++) {
        let cur = data.items[i];
        str += `<li><a href="${cur.channel.url}" target='_blank'><p class="picbox"><img data-src="${cur.channel.avatar}" alt=""><span class="img-up-t">${cur.channel.name}</span></p><div class="item-info"><dl><dt>${cur.channel.status}</dt><dd><span class="left">${(cur.viewers/10000).toFixed(2)}万</span><span class="right">${cur.game[0].name}</span></dd></dl></div></a></li>`;
    }
    str +=`</ul>`;
    str +=`<ul class="group-pic">`;
    for (let i = 5; i < 9; i++) {
        let cur = data.items[i];
        str += `<li><a href="${cur.channel.url}" target='_blank'><p class="picbox"><img data-src="${cur.channel.avatar}" alt=""><span class="img-up-t">${cur.channel.name}</span></p><div class="item-info"><dl><dt>${cur.channel.status}</dt><dd><span class="left">${(cur.viewers/10000).toFixed(2)}万</span><span class="right">${cur.game[0].name}</span></dd></dl></div></a></li>`;
    }
    str +=`</ul>`;

    pushHtml1.innerHTML = strplsh;
    listHtml1.innerHTML = str;
}


function yulelod() { //<!-- 娱乐 -->
    var tabBox3 = document.getElementById('tabBox4'),
        _slef3 = tabBox3.getElementsByTagName('a'),
        listHtml1 = document.getElementById('yule'),
        pushHtml1 = document.getElementById('plus-yule'),
        pushImg = pushHtml1.getElementsByTagName('img'),
        imgs = listHtml1.getElementsByTagName('img'),
        // imgs3 = $("#plus-yule img,#yule img").get(0);
        child3 = tabBox3.childNodes;
    for (let i = 0; i < _slef3.length; i++) {
        hovers3('js/game.json', pushHtml1, listHtml1);// 默认显示第一个
        _slef3[0].classList.add('active');//默认鼠标鼠标效果
        preload(pushImg);
        preload(imgs);
        // console.log(imgs);
        
        _slef3[i].onmouseenter = function (e) { // 鼠标放上去再次加载
            
            //设置当前状态
            for (let j = 0; j < child3.length; j++) {
                if (child3[j].nodeType === 1) {
                    child3[j].classList.remove('active')
                    this.classList.add('active');
                }
            }
                if (_slef3[i].title == '娱乐资讯') {
                    console.log(this);
                    hovers3('js/game.json', pushHtml1, listHtml1);
                    preload(pushImg);
                    preload(imgs);
                } else if (_slef3[i].title == '最强八卦') {
                    hovers3('js/luodata.json', pushHtml1, listHtml1);
                    preload(pushImg);
                    preload(imgs);
                }
        }
    }
}
yulelod();

// <!-- 娱乐 --> data
function yuleHtml(data, pushHtml1, listHtml1) {
    let str = ``,
        strplsh = ``;
    strplsh += `<a href="${data.items[0].channel.url}"><img data-src="${data.items[0].channel.avatar}"><dl><dt>${data.items[0].channel.name}</dt><dd>${data.items[0].channel.status}</dd></dl></a>`;
    str +=`<ul class="group-pic">`;
    for (let i = 1; i < 6; i++) {
        let cur = data.items[i];
        str += `<li><a href="${cur.channel.url}" target='_blank'><p class="picbox"><img data-src="${cur.channel.avatar}" alt=""><span class="img-up-t">${cur.channel.name}</span></p><div class="item-info"><dl><dt>${cur.channel.status}</dt><dd><span class="left">${(cur.viewers/10000).toFixed(2)}万</span><span class="right">${cur.game[0].name}</span></dd></dl></div></a></li>`;
    }
    str +=`</ul>`;
    str +=`<ul class="group-pic">`;
    for (let i = 5; i < 10; i++) {
        let cur = data.items[i];
        str += `<li><a href="${cur.channel.url}" target='_blank'><p class="picbox"><img data-src="${cur.channel.avatar}" alt=""><span class="img-up-t">${cur.channel.name}</span></p><div class="item-info"><dl><dt>${cur.channel.status}</dt><dd><span class="left">${(cur.viewers/10000).toFixed(2)}万</span><span class="right">${cur.game[0].name}</span></dd></dl></div></a></li>`;
    }
    str +=`</ul>`;

    pushHtml1.innerHTML = strplsh;
    listHtml1.innerHTML = str;
}


// 预加载
// window.onload = preload;

