function add(a, b,callback) {
    const result =  a + b;
    callback(result);
}

function sub(a, b,callback) {
    const result = a - b;
    callback(result);
}

function multi(a, b,callback) {
    const result = a * b;
    callback(result);
}

function div(a, b,callback) {
    const result =  a / b;
    callback(result);
}

// musimy pamiętać o wyeksportowaniu naszych metod aby były widoczne oraz dostępne poza tym modułem
module.exports = {
    add : add,
    sub : sub,
    multi : multi,
    div : div,
};
