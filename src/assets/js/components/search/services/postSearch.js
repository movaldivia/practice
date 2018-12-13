export async function createSearch(data){
    fetch('/searches/create', {
        method: 'post',
        body: JSON.stringify(data),
    });
}