// syntax 1
let promise = new Promise(function (resolve, reject) {
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
        resolve(response);
    }).catch(err => {
        reject(err);
    })
});

promise.then(function (response) {
    console.log(response);
}).catch(err => {
    console.log(err);
})


// syntax 2
function getData(Url) {
    return new Promise((resolve, reject) => {
        axios.get(Url).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error)
        });
    })
}
getData('https://jsonplaceholder.typicode.com/todos').then(result => {
    console.log(result);
})


// Promise.all
function getData(Url) {
    return new Promise((resolve, reject) => {
        axios.get(Url).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error)
        });
    })
}
let promise1 = getData('https://jsonplaceholder.typicode.com/todos');
let promise2 = getData('https://jsonplaceholder.typicode.com/users');
let promise3 = getData('https://jsonplaceholder.typicode.com/posts');

Promise.all([promise1, promise2, promise3]).then(result => {
    console.log(result)
})

//promise.allSettled
function getData(Url) {
    return new Promise((resolve, reject) => {
        axios.get(Url).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error)
        });
    })
}
let promise1 = getData('https://jsonplaceholder.typicode.com/todos');
let promise2 = getData('https://jsonplaceholder.typicode.com/users');
let promise3 = getData('https://jsonplaceholder.typicode.com/posts');

Promise.allSettled([promise1, promise2, promise3]).then(result => {
    console.log(result);
})


//promise.race
function getData(Url) {
    return new Promise((resolve, reject) => {
        axios.get(Url).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error)
        });
    })
}
let promise1 = getData('https://jsonplaceholder.typicode.com/todos');
let promise2 = getData('https://jsonplaceholder.typicode.com/users');
let promise3 = getData('https://jsonplaceholder.typicode.com/posts');
Promise.race([promise1, promise2, promise3]).then(response => {
    console.log(response);
})