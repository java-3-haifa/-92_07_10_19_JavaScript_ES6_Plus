let readTxt = () => {
    fetch('sample.txt')
        .then(res => res.json())
        .then(data => console.log(data));
};

readTxt();

let getTodo = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (response.status === 200) {

                return response.json();
            }else{
                // throw new Error("Statue ne 200!");
                return Promise.reject(new Error('Status ne 200'));
            }
        })
        .then(json => console.log(json))
        .catch(error => console.error(error));
};
getTodo();

let send = () => {
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers: {'Content-Type': 'application/json','Authorization':'Token'},
        body: '{"title":"Hello","body":"Test body"}'
    })
        .then(response => response.json())
        .then(data => console.log(data));
};

send();
