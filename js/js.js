let url = "js/data.json",
    giri = document.getElementById('girl'),
    giripush = document.getElementById('big-pic'),
 
    game = document.getElementById('game'),
    gamepush = document.getElementById('big-pic-game'),
    data = null;

let quest = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = () => {
        xhr.readyState == 4 && xhr.status == 200 ? resolve(data = JSON.parse(xhr.responseText)) : null;
        xhr.status != 200 ? reject(xhr.statusText) : null;
    }
    xhr.send()
});
hovers('show1',"随拍");
// hovers('show2',"竞技游戏");
function hovers(obj,tab1) {
    let Odiv = document.getElementById(obj);
    var _slef = Odiv.getElementsByTagName('a');
    let len = _slef.length;
    let child = Odiv.childNodes;
    // this.classList.add('active'); 
    function firstlod(data) {
        let str = ``,
            strplsh = '';
        strplsh += `<a href="${data.items[0].channel.url}"><dl><dt><img src="${data.items[0].channel.avatar}"><p>${data.items[0].channel.name}</p></dt><dd><p>${data.items[0].channel.status}</p><span class="view">${(data.items[0].viewers/10000).toFixed(2)}万</span></dd></dl></a>`;
        for (let i = 1; i < 6; i++) {
            let cur = data.items[i];
            // console.log(cur);
            str += `<li><a href="${cur.channel.url}" target='_blank'><p class="picbox"><img src="${cur.channel.avatar}" alt=""><span class="img-up-t">${cur.channel.name}</span></p><div class="item-info"><dl><dt>${cur.channel.status}</dt><dd><span class="left">${(cur.viewers/10000).toFixed(2)}万</span><span class="right">${cur.game[0].name}</span></dd></dl></div></a></li>`;
        }
        giripush.innerHTML = strplsh;
        giri.innerHTML = str;
        // game.innerHTML = str;
        // gamepush.innerHTML = strplsh
    };

    quest.then((data) => {
        firstlod(data);
        _slef[0].classList.add('active')
    });

    for (let i = 0; i < len; i++) {
        let T = _slef[i].title;
        _slef[i].onmouseenter = function () {
            for (let j = 0; j < child.length; j++) {
                if (child[j].nodeType === 1) {
                    child[j].classList.remove('active')
                    this.classList.add('active');
                }
            }
            firstlod(data)
            {/*
            if (T == '女神') {
                this.classList.add('active'); 
                quest.then((data) => {

                    let str = ``,
                        strplsh = '';
                    strplsh += `<a href="${data.items[0].channel.url}"><dl><dt><img src="${data.items[0].channel.avatar}"><p>${data.items[0].channel.name}</p></dt><dd><p>${data.items[0].channel.status}</p><span class="view">${Math.floor(data.items[0].viewers)}万</span></dd></dl></a>`;
                    for (let i = 1; i < 6; i++) {
                        let cur = data.items[i];
                        // console.log(cur);
                        str += `<li><a href="${cur.channel.url}" target='_blank'><p class="picbox"><img src="${cur.channel.avatar}" alt=""><span class="img-up-t">${cur.channel.name}</span></p><div class="item-info"><dl><dt>${cur.channel.status}</dt><dd><span class="left">${cur.viewers}万</span><span class="right">${cur.game[0].name}</span></dd></dl></div></a></li>`;
                    }
                    giripush.innerHTML = strplsh;
                    giri.innerHTML = str;

                })
            };
        */};
            if (T == tab1) {
                quest.then((data) => {
                    let str = ``,
                        strplsh = '';
                    strplsh += `<a href="${data.items[6].channel.url}"><dl><dt><img src="${data.items[6].channel.avatar}"><p>${data.items[6].channel.name}</p></dt><dd><p>${data.items[6].channel.status}</p><span class="view">${(data.items[6].viewers/10000).toFixed(2)}万</span></dd></dl></a>`;
                    for (let i = 5; i < 10; i++) {
                        let cur = data.items[i];
                        // console.log(cur);
                        str += `<li><a href="${cur.channel.url}" target='_blank'><p class="picbox"><img src="${cur.channel.avatar}" alt=""><span class="img-up-t">${cur.channel.name}</span></p><div class="item-info"><dl><dt>${cur.channel.status}</dt><dd><span class="left">${(cur.viewers/10000).toFixed(2)}万</span><span class="right">${cur.game[0].name}</span></dd></dl></div></a></li>`;
                    }
                    giripush.innerHTML = strplsh;
                    giri.innerHTML = str;
                })
            }
        }
    }
}


