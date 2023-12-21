/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    let response = new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('inside promise');
            resolve();
        },n*1000);
    });
    response.then(()=>{console.log(`executed after ${n} secs`)}).catch((err)=>{console.error(err.message)});

    return response;
}

module.exports = wait;
