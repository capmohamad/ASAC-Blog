'use strict';

const form = document.getElementById('formid');
myForm.addEventlistener('submit', handleSubmitBtn);
const myTable = document.getElementById('tableId');

let allArr = [];
let headerRow = ['#','img','Authorname','articleTitle','content','day','month','year'];

function content(Authorname,articleTitle,content,day,month,year){
    this.Authorname = Authorname;
    this.img = `./img/${this.css/img/asac_ltuc.jpg}.`;
    this.articleTitle = articleTitle;
    this.content = content;
    this.day = day;
    this.month = month;
    this.year = year ;
    allArr.push(this);
}

function handleSubmitBtn (event){
    event.preventDefault();
    let newAuthorname = event.target.AuthornameId.value;
    let newImg = event.target.imgId.value;
    let newArticleTitle = event.target.articleTitleId.value;
    let newcontent = event.target.contentId.value;
    let newday = event.target.dayId.value;
    let newmonth = event.target.monthId.value;
    let newyear = event.target.yearId.value;



    let newAuthorname = new Authorname ( newAuthorname , newImg,newArticleTitle,newcontent,
        newday,newmonth,newyear);
        saveDate();
        tableHeader();
        newcontentRender();

}




content.prototype.renderNewcontent = function(){
    for ( let i =0 ; i<allArr.length; i++){

    }
}

function setItem(){
    localStorage.setItem('newAuthorname',JSON.stringify(content.allArr))
}

function getItem(){
    let getting = localStorage.getItem('newAuthorname')
    let backToNormal = JSON.parse(getting)
    
    if (backToNormal !== null){
        content.newAuthorname = [];

        for (let i=0; i<backToNormal.length;i ++){
            new Authorname(backToNormal[i].articleTitle,backToNormal[i].img,backToNormal[i].content,
                backToNormal[i].day,backToNormal[i].month,backToNormal[i].year)
        }
    }
}