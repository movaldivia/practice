export async function createEmployer(data){
    fetch('/employers/create', {
        method: 'post',
        body: JSON.stringify(data),
    });
}