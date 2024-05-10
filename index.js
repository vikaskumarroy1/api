
// const http=require("node:http");
// const requestEventListner=(req, res)=>{
//    res.writeHead(200,{
//       "Content-Type":"application/json",

//    })
//    if(req.url==="/get-users"){
//       const output={
//          success:true,
//          massage:"user listtt api",
//       }
//       res.end(JSON.stringify(output));
//    }else if(req.url==="/get-products"){
//       const output={
//          success:true,
//          massage:"product list api",
//       };
//       res.end(JSON.stringify(output));

//    }else{
//       const output={
//          success:false,
//          message:"Error 404 found Route not found"
//       }
//       res.end(JSON.stringify(output));
//    }
//    console.log(req.url);
//    // const dummy={
//    //    status:true,
//    //    message:"this is my first api"
//    // }
//    console.log("request rceihgved");
  
//    res.end(JSON.stringify(dummy))
//    res.end("Hello from nodejs") // send the response back to client
// }
// const server=http.createServer(requestEventListner);
// server.listen(8080,()=> console.log("server is running at port 80880"));

