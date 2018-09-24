// let url = "js/data.json",
let data = null;
// lodData('js/data.json');

// let quest = new Promise((resolve, reject) => {
// function lodData(url) {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", url, false);
//     xhr.onreadystatechange = () => {
//         xhr.readyState == 4 && xhr.status == 200 ? data = JSON.parse(xhr.responseText) : null;
//         // xhr.status != 200 ? reject(xhr.statusText) : null;
//     }
//     xhr.send();
// }
console.log(data);
// });
// lodData('js/data.json');

// let cont = document.getElementById('girl'),
//     giripush = document.getElementById('big-pic'),
//     game = document.getElementById('game'),
//     gamepush = document.getElementById('big-pic-game'),

// hovers('show2',"竞技游戏");
hovers('tabBox1', "big-pic1", 'girl', '随拍', 'js/data.json');

hovers('tabBox2', "big-pic-game", 'game', '热门手游', 'js/game.json');
// hovers('tabBox3', "big-pic-zongyi", 'zongyi', '非常完美', 'js/game.json');

function hovers(tabBox, pushCont, list, tab1, url) {
    let listHtml = document.getElementById(list),
        pushHtml = document.getElementById(pushCont),
        tabBox1 = document.getElementById(tabBox),
        _slef = tabBox1.getElementsByTagName('a'),
        len = _slef.length,
        child = tabBox1.childNodes;

       
    // function lodData(url) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.onreadystatechange = () => {
        xhr.readyState == 4 && xhr.status == 200 ? data = JSON.parse(xhr.responseText) : null;
        // xhr.status != 200 ? reject(xhr.statusText) : null;
    }
    xhr.send();

    function firstlod(data) { // 第一个要显示的
        console.log(data);
        let str = ``,
            strplsh = ``;
        strplsh += `<a href="${data.items[0].channel.url}"><dl><dt><img src="${data.items[0].channel.avatar}"><p>${data.items[0].channel.name}</p></dt><dd><p>${data.items[0].channel.status}</p><span class="view">${(data.items[0].viewers/10000).toFixed(2)}万</span></dd></dl></a>`;
        for (let i = 1; i < 6; i++) {
            let cur = data.items[i];
            // console.log(cur);
            str += `<li><a href="${cur.channel.url}" target='_blank'><p class="picbox"><img src="${cur.channel.avatar}" alt=""><span class="img-up-t">${cur.channel.name}</span></p><div class="item-info"><dl><dt>${cur.channel.status}</dt><dd><span class="left">${(cur.viewers/10000).toFixed(2)}万</span><span class="right">${cur.game[0].name}</span></dd></dl></div></a></li>`;
        }
        pushHtml.innerHTML = strplsh;
        listHtml.innerHTML = str;
        console.log(url);
    };

    firstlod(data); // 默认显示第一个个
    _slef[0].classList.add('active');//第一个样式
  

    for (let i = 0; i < len; i++) {
        let T = _slef[i].title;
        _slef[i].onmouseenter = function () { // 鼠标放上去再次加载
            for (let j = 0; j < child.length; j++) {
                if (child[j].nodeType === 1) {
                    child[j].classList.remove('active')
                    this.classList.add('active');
                }
            }
            firstlod(data) // 放到第一个的时候再次加载

            if (T == tab1) {
                // quest.then((data) => {
                let str = ``,
                    strplsh = ``;
                strplsh += `<a href="${data.items[6].channel.url}"><dl><dt><img src="${data.items[6].channel.avatar}"><p>${data.items[6].channel.name}</p></dt><dd><p>${data.items[6].channel.status}</p><span class="view">${(data.items[6].viewers/10000).toFixed(2)}万</span></dd></dl></a>`;
                for (let i = 5; i < 10; i++) {
                    let cur = data.items[i];
                    // console.log(cur);
                    str += `<li><a href="${cur.channel.url}" target='_blank'><p class="picbox"><img src="${cur.channel.avatar}" alt=""><span class="img-up-t">${cur.channel.name}</span></p><div class="item-info"><dl><dt>${cur.channel.status}</dt><dd><span class="left">${(cur.viewers/10000).toFixed(2)}万</span><span class="right">${cur.game[0].name}</span></dd></dl></div></a></li>`;
                }
                pushHtml.innerHTML = strplsh;
                listHtml.innerHTML = str;
                // })
            }
        }
    }
}




// hovers('show2', "竞技游戏",'js/game.json');