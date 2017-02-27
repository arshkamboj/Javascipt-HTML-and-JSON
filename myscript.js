var request;

//checks to see if the browser uses an XMLHttpRequest, also known as an XHR Request 
//or a Microsoft Active object Request, and it places that into a request variable.

if(window.XMLHttpRequest){
request=new XMLHttpRequest();
}
else{
request= new ActiveXObject("Microsoft.XMLHTTTP");
}

//open the request, asking for a specific file

request.open('GET','data.json');

// event handler that checks to see if the request is successful by checking 
// request.status as well as the request.readyState.
request.onreadystatechange==function(){
 if((request.status===200) && (request.readyState===4)){
  var info=JSON.parse(request.responseText);
  var output='';
  for(var i=0;i<=info.links.length-1;i++){
   for(key in info.links[i]){
   if(info.links[i].hasOwnProperty(key)){
    output+='<li>'+'<a href =" ' + info.links[i][key]+'">'+key+'</a>';
              '</li>';
                 }
              }
        }
var update=document.getElement.ById('links');
update.innerHTML=output;

}
}
request.send()