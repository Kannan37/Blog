const date=new Date();
var form=document.getElementById("form")
var commentSection=document.getElementById("comment")
form.addEventListener('submit',function(event){
    event.preventDefault()
    var name1=document.getElementById("name").value
    console.log(name1);
    var comment=document.getElementById("comment1").value;
    if(name1 !=null & comment !=null ){
        let div=document.createElement("div")
        div.className="commentByUsers"
        let username=document.createElement("h3")
        username.className="user-heading"
        username.innerText=name1
        div.append(username)
        month=date.getMonth()+1
        today=date.getDate()
        year=date.getFullYear()
        hrs=date.getHours()
        min=date.getMinutes()
        sec=date.getSeconds()
        commenteDate=`${month}-${today}-${year}                     ${hrs}:${min}:${sec}`
        comDatePara=document.createElement("h6")
        comDatePara.append(commenteDate)
        div.append(comDatePara)
        let userComment=document.createElement("p")
        userComment.append(comment)
        div.append(userComment)
        commentSection.prepend(div)
        }
})





// function commentfunc(){
//     var name1=document.getElementById("name").value;
//     var comment=document.getElementById("comment").value;
// if(name1!=null && comment!=null ){
//     let div=document.createElement("div")
//     div.className="commentByUsers"
//     div.textContent=name1
//     console.log(div);
//     let username=document.createElement("h2")
//     username.className="user-heading"
//     username.innerText=comment
//     console.log(username);
//     div.a
//     }
// }
