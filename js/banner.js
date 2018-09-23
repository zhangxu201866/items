let innerbanner = document.getElementById('innerbanner'),
    titleB = document.getElementById('Btitle'),
    dataB = null;
urlB = 'js/banner.json';

let questXhr = new XMLHttpRequest();
questXhr.open("GET", urlB, false);
questXhr.onreadystatechange = () => {
    questXhr.readyState == 4 && questXhr.status == 200 ? dataB = JSON.parse(questXhr.responseText) : null;
};

questXhr.send();
console.log(dataB);

function bannerHtm(dataB){
    let picStr =``,
        titStr = ``;
    for(let i =0; i < dataB.length; i++){
        let {img, stitle,title} = dataB[i];
        picStr += `<li><img src="${img}"></li>`;
        titStr += `<li><h4>${title}</h4><p>${stitle}</p></li>`
    }
    innerbanner.innerHTML = picStr;
    titleB.innerHTML = titStr;
}
bannerHtm(dataB)
