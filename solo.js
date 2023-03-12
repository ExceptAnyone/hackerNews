const container = document.getElementById('root');
const ajax = new XMLHttpRequest();
const content = document.createElement('div');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';
const store = {
    currentPage: 1,
};



function NewsFeed (){
    const newsList = [];
    const li = document.createElement('li');
    
    
    newsList.push('<ul>');

    for(i=0; i<10; i++){
        
    }
    `
    <li><a>뉴스 타이틀</a></li>
    <li><a>뉴스 타이틀</a></li>
    <li><a>뉴스 타이틀</a></li>
    `
    newsList.push('</ul>');
}