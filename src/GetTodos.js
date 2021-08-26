const URL = 'http://localhost:7890';

export async function getToDos(token) {
    const apiUrl = `${URL}/api/todos`;
     const resp = await fetch(apiUrl, {
         method: 'GET',
         headers: {
             'Authorization': token,
             'Content-Type': 'application/json'
         },
        //  body: JSON.stringify(todo),
     });
     const data = await resp.json();
     return data
}

export async function createTodo(token, todo) {
    const apiURL = `${URL}/api/todos`;
    const resp = await fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
        body: JSON.stringify(todo),
    });
    const data = await resp.json();
    return data;
}

export async function updateTodo(token, todo) {
    const apiURL = `${URL}/api/todos/${todo.id}`;
    const resp = await fetch(apiURL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
        body: JSON.stringify(todo),
    });
    const data = await resp.json();
    return data;
}