
function createDBEntry(recipe) {
    return new Promise((resolve, reject) => {
        var request = new Request('/games', {
            headers: new Headers({ 'Content-Type': 'application/json' })
        });

        fetch(request, {
            method: 'POST',
            body: JSON.stringify(recipe)
        }).then(response => {
            if (response.ok) {
                resolve('Successfully added to DB!');
            } else {
                reject('Unable to add to DB');
            }
        });
    });
}


const Client = { requestScrape, createDBEntry };
export default Client;
