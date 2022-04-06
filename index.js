import fs from 'fs';



// let testFn = function (err,content){
//     if(err){
//         console.log("error in this file",err);
//     }
//     console.log(content.toString());
// }




// function testFn (err,content){
//     if(err){
//         console.log("error in this file",err);
//     }
//     console.log(content.toString());
// }



// const testFn = (err,content) => {
//     if(err){
//         console.log("error",err);
//     }
//     console.log(content.toString());

// }





fs.readFile("demo.txt",function(err,content){
    if(err){
        console.log("error");
    }
    console.log(content.toString());
});
