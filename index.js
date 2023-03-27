const fs=require('fs');
const http=require('http');

//Folder created......

// fs.mkdir('Folder1',(err)=>{
//    if(err){
//     console.log(err);
//    }else{
//     console.log("New folder created !");
//    }
// })

// file created in folder ....

// let data="new file created ";
// fs.writeFile('Folder1/file1.txt',data,(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('new file created');
//     }

// })

// file appended  ....

// fs.appendFile('Folder1/file1.txt',' data added',(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('data Appended');
//     }


// file removed...

// fs.unlink('Folder1/file.txt',(err)=>{
//     if(err){ 
//         console.log('file not removed');
//     }else{
//         console.log('file removed');
//     }
    
// // })

// fs.mkdir('Folder2',(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('folder created');
//     }
// })

// folder removed...

// fs.rmdir('Folder2',(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('folder removed');
//     }

// })

fs.readFile('Folder1/file1.txt','utf-8',(err,data)=>{
    if(err){    
        console.log(err);
    
    }else{
        http.createServer((req,res)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();

        }).listen(8000,"127.0.0.1",()=>{
            console.log('server started in port no 8000');
        })

    }

})