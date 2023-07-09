const fs = require('fs');

// fs.writeFile('demo1.txt', "This is sample text. Hello shahed Mamun.", (err) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log("sucessful!");
//     }
// });

// fs.appendFile('demo1.txt', "This is sample text append. New text added.", (err) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log("sucessful!");
//     }
// });


// fs.readFile('demo1.txt', 'utf-8', (err, data) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });


// fs.rename('demo1.txt', 'demo2.txt', (err) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log("sucessful!");
//     }
// });


// fs.unlink('demo2.txt', (err) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log("sucessful!");
//     }
// });


fs.exists('demo2.txt', (result) => {
    if(result){
        console.log("Found!");
    } else {
        console.log("Not Found!");
    }
});