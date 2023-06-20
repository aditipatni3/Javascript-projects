// document.getElementById("text").focus();
// document.getElementsByClassName("box")[0].addEventListener("keypress", function(e){
//     if(e.key== "enter"){
//         send();
//     }
// });
// document.getElementById("send").addEventListener("click", send);
// function send(){
//     var text= document.getElementById("text").value;
//     if(text==""){

//     }
//     else{
//         var request=document.createElement("div");
//         request.className="request";
//         request.innerHTML=text;

//         document.getElementsByClassName("box")[0].appendChild(request);
//         document.getElementById("text").value="";

//         fetch(`https://api.monkedev.com/fun/chat?msg=${text}`).then(response=>response.json()).then(function(data){
//             var response=document.createElement("div");
//             console.log(response)
//             response.className="response";
//             response.innerHTML=data.response;

//             setTimeout(function(){
//                 document.getElementsByClassName("box")[0].appendChild(response);
//                 var a=document.getElementsByClassName("box")[0].scrollHeight;
//                 document.getElementsByClassName("box")[0].scrollTop=a+100;

//             }, 1000);
//         });
//     }
// }


const q = encodeURIComponent('how many days between tuesday and friday');
const uri = 'https://api.wit.ai/message?v=20230215&q=' + q;
const auth = 'Bearer ZJJSH72Y6EGGM6QPJJV4XLAUE6SEJOTP';
// fetch(uri, {headers: {Authorization: auth}})
//   .then(res => res.json())
//   .then(res => console.log(res))
const h=async()=>{
    const response=await fetch('https://api.wit.ai/message?v=20230215&q=hiii',{
        headers: {Authorization: 'Bearer ZJJSH72Y6EGGM6QPJJV4XLAUE6SEJOTP'}
    })
    const responseData=await response.json()
    console.log(responseData)
}
h()
