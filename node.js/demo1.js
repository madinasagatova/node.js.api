/*build-in module called http wich allows Node.js to transfer data over the Hyper
Text Transfer Protocol (HTTP)
**/

var http = require('http'); //to include the http module, use the require () method 

/* use createServer method to create an HTTP server 
- listens to server ports and gives a respons back to the client 
The fuction passed into http.createServer() method 
will be executed when someone tries to accesss the computer on port 8080
**/
http.createServer(function(req,res){ 
    res.write("Hello World!"); // write a response to the client 
    res.end(); // end the response 
}).listen(8080); //the server object listens on port 8080