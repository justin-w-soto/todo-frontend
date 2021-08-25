const URL = 'http://localhost:7890';

export async function getToDos() {
    const apiUrl = `${URL}/api/todos`;
    let token = localStorage.getItem('TOKEN');
     const resp = await fetch(apiUrl, {
         method: 'GET',
         withCredentials: true,
         headers: {
             'Authorization': token,
             'Content-Type': 'application/json'
         }
     });
     const data = await resp.json();
     return data
}