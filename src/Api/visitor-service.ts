

const APIdataURL = 'http://localhost:3001/list' //I have never fetched this way before

const getAngelList = async() => {

    let jsonData = await fetch(APIdataURL,{
        method: 'GET',
        credentials: 'omit',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    let data = await jsonData.json();
    console.log("response data, in api service", data);
    return data;
}

export {
    getAngelList
};
