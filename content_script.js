// alert("Hi from extension!");
console.log("HIIIIIIIIIIIII")
const e = document.querySelector("#title")
var title_string = e.innerText;


// process string

var title_string1 = title_string.split(' ').slice(0, 3).join(' ');
var title_string2 = title_string.split(' ').slice(0, 4).join(' ');
var title_string3 = title_string.split(' ').slice(0, 5).join(' ');
var title_string4 = title_string.split(' ').slice(0, 6).join(' ');
// var title_string5 = title_string.split(' ').slice(1, 4).join(' ');

console.log(`Checking for ${title_string}...`)
var data_saved;
// alert("fetching data...");
// fetch(`https://api.bunken.tk/libgen?title=${title_string}&isbn=null`)
// .then(res => {
//   data = res.json()
//   return data;
// })
// .then(
//   data=> {
//     alert("data fetched!");
//     data_saved = data;
//   }
// )



chrome.runtime.onMessage.addListener(function(message){
  if(message.action === "SEARCH_BOOK"){
    console.log("button clicked!!")
    // var data;

    fetch(`https://api.bunken.tk/libgen?title=${title_string4}&isbn=null`)
    .then(res => {
      data = res.json()
      return data;
    })
    .then((data)=>{
      console.log(data);
      console.log("from content!")
      chrome.runtime.sendMessage({
        from: 'content',
        subject: 'booklist',
        content: data,
      })
    })

    fetch(`https://api.bunken.tk/libgen?title=${title_string3}&isbn=null`)
    .then(res => {
      data = res.json()
      return data;
    })
    .then((data)=>{
      console.log(data);
      console.log("from content!")
      chrome.runtime.sendMessage({
        from: 'content',
        subject: 'booklist',
        content: data,
      })
    })
    
    fetch(`https://api.bunken.tk/libgen?title=${title_string2}&isbn=null`)
    .then(res => {
      data = res.json()
      return data;
    })
    .then((data)=>{
      console.log(data);
      console.log("from content!")
      chrome.runtime.sendMessage({
        from: 'content',
        subject: 'booklist',
        content: data,
      })
    })
    fetch(`https://api.bunken.tk/libgen?title=${title_string1}&isbn=null`)
    .then(res => {
      data = res.json()
      return data;
    })
    .then((data)=>{
      console.log(data);
      console.log("from content!")
      chrome.runtime.sendMessage({
        from: 'content',
        subject: 'booklist',
        content: data,
      })
    })
  }


})

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
  if(message.action === 'DURL2'){
    console.log("kya baat hai from bck");
    console.log(sender.tab.id);
    var xpath = "//a[contains(text(),'GET')]";
    var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    chrome.runtime.sendMessage({
      action: 'takeURL',
      url: matchingElement.href
    })
  }
})

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
//   if(request.action =="SEARCH_BOOK"){
//     console.log("inside content, sending title to popup...");
//     chrome.runtime.sendMessage({
//       data: data_saved
//     }, function (response) {
//         console.dir(response);
//     })
      
//   }
// })


// var timer = 0;
// var si = setInterval(() => {
//           try {
//              chrome.runtime.sendMessage({
//                   data: "Hello popup, how are you"
//               }, function (response) {
//                   console.dir(response);
//               });
//               timer++;
//               if (timer === 5) {
//                   clearInterval(si);
//               }
//           } catch (error) {
//               // debugger;
//               console.log(error);
//           }
//       }, 2000);

