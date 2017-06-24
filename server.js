var http = require("http");
var url = require("url");
function start(route,handle){
  function onRequest(request,response){
    //var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Request recived",pathname);
    route(handle,pathname,response,request);
   //  route(handle,pathname,response);
  }
  http.createServer(onRequest).listen(8888);
  console.log("Server has startted");
}
exports.start = start;
