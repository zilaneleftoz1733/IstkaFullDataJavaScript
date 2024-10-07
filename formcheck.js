

function formuKontrolEt()
{
   // alert("Calisti");
   let userName=document.getElementById("username");
   if(userName.value=='')
   {
      hataYaz("Kullanici Adi Boş Olamaz ");
   }
   else if(userName.value.length<3)
   {
    hataYaz("Kullanici kodu en az 3 karakter olmalidir")
   }
   else{
    hataYaz('');
   }
}

function hataYaz(message)
{
    let errorText = document.getElementById("errorText");
    console.log(errorText);
    console.log(message);
    errorText.innerText=message;
}
document.addEventListener('keyup', function (e) {
    console.log(e)
    checkTabPress(e);
}, false);
function checkTabPress(e) {
    'use strict';
    var ele = document.activeElement;//Bulundugum active elementi aliyoruz
    var oncekiElement= ele.parentElement.previousElementSibling.children.item(1);//username elementini yakaliyoruz
    //console.log('******** child Elemenlari **********');
    
    // for (let index = 0; index < ele.parentElement.previousElementSibling.childNodes.length; index++) {
    //     console.log("Child Nodlar:"+ ele.parentElement.previousElementSibling.childNodes[index]);
        
    // }
    console.log('******** Children Elemenlari **********');
    for (let index = 0; index < ele.parentElement.previousElementSibling.children.length; index++) {
        console.log("Children Nodlar:"+ ele.parentElement.previousElementSibling.children[index]);
        
    }
    console.log('*************');
    console.log(oncekiElement);
    console.log(oncekiElement.nextSibling);
    if(oncekiElement.value=='' && oncekiElement.id=='username')
    {
        oncekiElement.nextElementSibling.innerText="User name boş olamaz";
      console.log("Span yazildiktan sonra:"+oncekiElement.nextElementSibling);
    }
    console.log("Active Element:"+ ele.id);
    if (e.key == 'Tab' && ele.nodeName.toLowerCase() === 'password') {
        console.log(ele.href);
    }
}
function tabEvent(e)
{
    if( e.which == 9 ) {
        hataYaz( e.target.href );
    }
}

function elemanlariBastir()
{
    var liste = document.getElementById("myForm").children;
    //console.log(liste);
    var myDiv = document.getElementById("container");
    console.log(myDiv);
    for (let index = 0; index < liste.length; index++) {
        const para = document.createElement("p");
        para.innerHTML=" Deneme :" + index;
        myDiv.appendChild(para);
    }
}