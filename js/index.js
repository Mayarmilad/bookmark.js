var siteName=document.getElementById("siteName");
var siteUrl=document.getElementById("siteUrl");
var siteList=[];
if(localStorage.getItem("sites") !=null){
   siteList=JSON.parse(localStorage.getItem("sites"));
   displayData();
}

function addSite(){
    if (validation()== true){

        var site={
            name:siteName.value,
            url:siteUrl.value,
        }
        siteList.push(site);
        displayData()
        localStorage.setItem("sites",JSON.stringify(siteList));
        
    }
}


function displayData(){

var cartona="";
for(var i =0; i< siteList.length; i++){
cartona +=`
<tr>
<td> ${siteList[i].name}</td>
<td> <a>  ${siteList[i].url}</a></td>
<td> <button class="btn btn-info" onclick="visit(${i})" > Visit</button></td>
<td><button class="btn btn-danger" onclick="deleteSite(${i})"> Delete</button</td>
</tr>
`
}
document.getElementById("userData").innerHTML=cartona;
}

function deleteSite(elementNumber){
siteList.splice(elementNumber,1);
localStorage.setItem("sites",JSON.stringify(siteList));
displayData();
}


function validation(){
    var regexName=/^[A-z]{4,10}$/;
    var regexurl=/^(http|https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,3}|www\.[^\s]+\.[^\s]{2,3})$/
    var text=siteName.value;
    var validUrl=siteUrl.value;
    if(regexName.test(text)==true && regexurl.test(validUrl) ==true ){
        siteName.classList.add('is-valid');
        siteName.classList.remove('is-invalid');
        siteUrl.classList.add('is-valid');
        siteUrl.classList.remove('is-invalid');
        return true;

    }else{
        siteName.classList.add('is-invalid');
        siteName.classList.remove('is-valid');
        siteUrl.classList.add('is-invalid');
        siteUrl.classList.remove('is-valid');
        return false;
    }


}

function visit(visiting){
    window.open(siteList[visiting].url, `_blank`);
}