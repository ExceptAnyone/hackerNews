const container = document.getElementById('root');
const ajax = new XMLHttpRequest();
const content = document.createElement('div');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';
const store = {
    currentPage: 1,
};

function getData(url){
    ajax.open('GET',url, false);
    ajax.send();
    
    return JSON.parse(ajax.response);
}


function newsTitle(){
    const newsFeed = getData(NEWS_URL);
    const newsList =[]; 

    newsList.push('<ul>');
        for(let i=0; i<10; i++){
        newsList.push(`
            <li>
            <a href="#${newsFeed[i].id}">
                ${newsFeed[i].title} (${newsFeed[i].comments_count})
            </a>
            </li>
            `);
        }
    newsList.push('</ul>');
    newsList.push(`<div>
    <a href="#/${store.currentPage -1}">이전페이지</a> 
    <a href="#/${store.currentPage + 1}">다음페이지</a>
    </div>`)
    
container.innerHTML = newsList.join('');
}


function newsDetail(){
    const id = this.location.hash.substr(1);
    const newsContent = getData(CONTENT_URL.replace('@id',id));
    console.log(location.hash);

   container.innerHTML= 
    `<h1>${newsContent.title}</h1>

    <div>
    <a href="#">목록으로</a>    
    </div>
    `;
}

function router(){
    const routerPath = location.hash ;

    if(routerPath === ''){
        newsTitle();
    }
        else{
            newsDetail();
        }
}


window.addEventListener('hashchange',router);

router();





