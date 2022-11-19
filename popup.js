// const btn = document.querySelector(".searchbtn")
// // chrome.runtime.onMessage.addListener((msg, sender, sendResponse)=>{
// //   if((msg.from === 'content') && (msg.subject === 'booklist')){
// //     var booklist = msg.response;
// //     console.log("Here from popup js")
// //     console.log(booklist);
// //   }
// // })

// btn.onclick = function(e){
//   e.preventDefault();
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.sendMessage(tabs[0].id, {action: "SEARCH_BOOK"});
// });
// }
// setTimeout(() => {  console.log("Good Morning!"); }, 2000);
document.addEventListener('click', evt => {
  const a = evt.target.closest('a[href]');
  if (a) {
    evt.preventDefault();
    chrome.tabs.create({url: a.href, active: false});
  }
});


for(i =0; i<100000; i++){
  console.log("gfrerfe");
}

function getDownloadURL(page_url){
  let url;
  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //   chrome.tabs.sendMessage(tabs[0].id, {action: "getDURL", targetURL: page_url});
  // });
    chrome.runtime.sendMessage({action: "getDURL", targetURL: page_url});  
}

chrome.runtime.onMessage.addListener(function(message){
  if(message.action==='finalURL'){
    url = message.url;
    let list = document.querySelector(".list");
    let li= document.createElement("li");
    li.innerHTML =  `<a target="_blank" href=${url}>[${element.downloads[0].format}] ${element.title} </a>`;
    list.appendChild(li);
  }
})


chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {action: "SEARCH_BOOK"});
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // alert("I am popup!");
  // alert(message.from);
  // alert(message.content);


  console.log(message);
  data = message.content;

  // for (const book of data){
  //   alert(book[title]);
  // }
  let list = document.querySelector(".list");
  

  data.forEach(element => {
    let li= document.createElement("li");
    li.innerHTML =  `<a target="_blank" href=${element.downloads[0].link}>[${element.downloads[0].format}] ${element.title} </a> <br> <br>`;
    list.appendChild(li);

    // getDownloadURL(element.downloads[0].link)
    console.log(element.downloads.link);
  });
});


let avail = document.querySelector('.avail');

let len = document.querySelectorAll(".list li").length

// let loader = document.querySelector(".loader");
// loader.style.visibility = 'hidden';


if(len ==0){
  avail.style.visibility = 'hidden';
}
else{
  avail.style.visibility = 'visible';
  avail.innerText = "Available titles: ";
}

// btn.onclick = async function (e) {
//   let queryOptions = { active: true, currentWindow: true };
//   // let tab = await chrome.tabs.query(queryOptions);
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   chrome.tabs.sendMessage(
//     tabs[0].id,
//     { color: "#00FF00" },
//     function (response) {
//       console.log("from popup to console to popup");
//       console.log(response.data);
//     }
//   )})
// };


// btn.onclick = chrome.runtime.sendMessage({
//   from: 'popup',
//   action: 'search_book'
// }, 
// function(response){
//   console.log("from popup");
//   console.log(response);
// })

