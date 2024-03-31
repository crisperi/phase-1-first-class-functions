function receivesAFunction(callback) {
    callback();
}

function edi() {
    console.log('hello there ');
}
receivesAFunction(edi);

function returnsANamedFunction() {
    function cb() {
        console.log('returned f2');
    }
    return cb;
}

const call2nd = returnsANamedFunction();
call2nd();

function returnsAnAnonymousFunction() {
 return function (){ 
    console.log("confidence");
 }
}
const last = returnsAnAnonymousFunction();
last();