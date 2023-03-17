function receivesAFunction(callBack){
    callBack()
}

function returnsANamedFunction(){
    return function fn(){
        'This is a Named function'
    }
}

function returnsAnAnonymousFunction(){
    return (fn = ("This is an anonymous function.")) => {
    }
    
}